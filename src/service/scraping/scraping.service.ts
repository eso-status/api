import { ForumMessage } from '@eso-status/forum-message';
import { LiveServices } from '@eso-status/live-services';
import { ServiceAlerts } from '@eso-status/service-alerts';
import {
  EsoStatus,
  MaintenanceEsoStatus,
  RawEsoStatus,
  Status as EsoStatusStatus,
} from '@eso-status/types';
import { Injectable } from '@nestjs/common';

import { Interval } from '@nestjs/schedule';
import { config } from 'dotenv';

import { ArchiveService } from '../../resource/archive/archive.service';
import { Archive } from '../../resource/archive/entities/archive.entity';
import { Log } from '../../resource/log/entities/log.entity';
import { LogService } from '../../resource/log/log.service';
import { Maintenance } from '../../resource/maintenance/entities/maintenance.entity';
import { MaintenanceService } from '../../resource/maintenance/maintenance.service';
import { Service } from '../../resource/service/entities/service.entity';
import { ServiceService } from '../../resource/service/service.service';
import { Status } from '../../resource/status/entities/status.entity';
import { StatusService } from '../../resource/status/status.service';
import { Connector } from '../../type/connector.type';
import { WebsocketService } from '../websocket/websocket.service';
import { WinstonService } from '../winston/winston.service';

config();

@Injectable()
export class ScrapingService {
  constructor(
    private readonly serviceService: ServiceService,
    private readonly archiveService: ArchiveService,
    private readonly maintenanceService: MaintenanceService,
    private readonly logService: LogService,
    private readonly statusService: StatusService,
    private readonly winstonService: WinstonService,
    private readonly websocketService: WebsocketService,
  ) {}

  /**
   * Method used to check if status change of an EsoStatus
   *
   * @param esoStatusFromScraping
   * @param esoStatusFromDatabase
   * @private
   * @return true => if EsoStatus status is different in this.old list
   */
  public slugChanged(
    esoStatusFromScraping: EsoStatus,
    esoStatusFromDatabase: Service,
  ): boolean {
    return esoStatusFromScraping.status !== esoStatusFromDatabase.status.status;
  }

  public archiveChanged(
    esoStatusFromScraping: EsoStatus,
    archive?: Archive,
  ): boolean {
    return (
      archive.rawData !== JSON.stringify(esoStatusFromScraping.raw) &&
      archive.status.status !== esoStatusFromScraping.status
    );
  }

  /**
   * Method used to check is EsoStatus data has planned status
   *
   * @param status
   * @private
   * @return true => if EsoStatus status is planned
   */
  public isPlannedStatus(status: EsoStatusStatus): boolean {
    return status === 'planned';
  }

  public async getService(esoStatus: EsoStatus): Promise<Service> {
    return this.serviceService.findBySlug(esoStatus.slug);
  }

  public async getArchive(
    service: Service,
    connector: Connector,
  ): Promise<Archive> {
    return this.archiveService.findByServiceAndConnector(service, connector);
  }

  public async updateArchive(
    service: Service,
    rawData: RawEsoStatus,
    connector: Connector,
    statusId: number,
  ): Promise<void> {
    await this.archiveService.update(service.id, rawData, connector, statusId);
  }

  public async getStatus(status: EsoStatusStatus): Promise<Status> {
    return this.statusService.findByStatus(status);
  }

  public async updateService(
    serviceId: number,
    statusId: number,
    rawData: RawEsoStatus,
  ): Promise<void> {
    return this.serviceService.update(serviceId, statusId, rawData);
  }

  public async addMaintenance(
    serviceId: number,
    rawData: RawEsoStatus,
  ): Promise<Maintenance> {
    return this.maintenanceService.add(serviceId, rawData);
  }

  public async addLog(
    connector: Connector,
    serviceId: number,
    statusId: number,
    rawEsoStatus: RawEsoStatus,
  ): Promise<Log> {
    return this.logService.add(connector, serviceId, statusId, rawEsoStatus);
  }

  public serviceHaveMaintenance(service: Service): boolean {
    return service.maintenance !== null;
  }

  public async detachMaintenanceToService(service: Service): Promise<void> {
    await this.maintenanceService.delete(service.id);
  }

  public async updateNoMaintenance(
    esoStatus: EsoStatus,
    service: Service,
    newStatus: Status,
  ): Promise<void> {
    // Return function if status not change between new data and database
    if (!this.slugChanged(esoStatus, service)) {
      return;
    }

    // Write log with details (raw data)
    this.winstonService.log(
      `New esoStatus change detected: ${JSON.stringify(esoStatus.raw)}`,
      'ScrapingService.updateNoMaintenance',
    );

    // Update service status in database
    await this.updateService(service.id, newStatus.id, esoStatus.raw);

    // Write log with detail (slug, old status and new status)
    this.winstonService.log(
      `Service (slug: ${service.slug.slug}) status from ${service.status.status} to ${esoStatus.status}`,
      'ScrapingService.updateNoMaintenance',
    );

    // Emit statusUpdate event
    this.websocketService.server.emit('statusUpdate', esoStatus);

    if (this.serviceHaveMaintenance(service)) {
      await this.detachMaintenanceToService(service);

      this.winstonService.log(
        `Maintenance detached to service (slug: ${service.slug.slug})`,
        'ScrapingService.updateNoMaintenance',
      );

      // Emit maintenanceRemoved event
      this.websocketService.server.emit('maintenanceRemoved', esoStatus.slug);
    }

    // Write log with details (slug with new status)
    this.winstonService.log(
      `Service (${esoStatus.slug}) status update event emitted`,
      'ScrapingService.updateNoMaintenance',
    );
  }

  public async updateMaintenance(
    esoStatus: EsoStatus,
    service: Service,
  ): Promise<void> {
    // Write log with details (raw data)
    this.winstonService.log(
      `New esoStatus maintenance detected: ${JSON.stringify(esoStatus.raw)}`,
      'ScrapingService.updateMaintenance',
    );

    // Update service status in database
    const maintenance: Maintenance = await this.addMaintenance(
      service.id,
      esoStatus.raw,
    );

    // Write log with detail (slug, old status and new status)
    this.winstonService.log(
      `Maintenance attached to service (slug: ${service.slug.slug})`,
      'ScrapingService.updateMaintenance',
    );

    const maintenanceFormated: MaintenanceEsoStatus = {
      raw: esoStatus.raw,
      slug: esoStatus.slug,
      beginnerAt: maintenance.beginnerAt.toISOString(),
    };

    if (maintenance.endingAt) {
      maintenanceFormated.endingAt = maintenance.endingAt.toISOString();
    }

    // Emit maintenancePlanned event
    this.websocketService.server.emit(
      'maintenancePlanned',
      maintenanceFormated,
    );

    // Write log with details (slug with new status)
    this.winstonService.log(
      `Service (${esoStatus.slug}) new maintenance event emitted`,
      'ScrapingService.updateMaintenance',
    );
  }

  /**
   * Method used to execute update process of a service
   * @param esoStatus
   * @param connector
   */
  public async prepareUpdate(
    esoStatus: EsoStatus,
    connector: Connector,
  ): Promise<void> {
    // Get service in database by slug
    const service: Service = await this.getService(esoStatus);

    // Get archive in database by service and connector
    const archive: Archive = await this.getArchive(service, connector);

    // Return function if raw don't change
    if (!this.archiveChanged(esoStatus, archive)) {
      return;
    }

    // Get status in database by status
    const newStatus: Status = await this.getStatus(esoStatus.status);

    // Create log
    await this.addLog(connector, service.id, newStatus.id, esoStatus.raw);

    // Write log with details (raw data)
    // Write log with details (raw data)
    this.winstonService.log(
      `New connector (${connector}) log created for serviceId: ${service.id}, newStatusId: ${newStatus.id}, raw: ${JSON.stringify(esoStatus.raw)}`,
      'ScrapingService.prepareUpdate',
    );

    // Update archive
    await this.updateArchive(service, esoStatus.raw, connector, newStatus.id);

    // Write log with details (raw data)
    this.winstonService.log(
      `Archive (${connector}) for serviceId: ${service.id}, newStatusId: ${newStatus.id} update: ${JSON.stringify(esoStatus.raw)}`,
      'ScrapingService.prepareUpdate',
    );

    if (this.isPlannedStatus(esoStatus.status)) {
      await this.updateMaintenance(esoStatus, service);
    } else {
      await this.updateNoMaintenance(esoStatus, service, newStatus);
    }
  }

  public formatData(rawEsoStatusList: RawEsoStatus[]): EsoStatus[] {
    return rawEsoStatusList.map(
      (rawEsoStatus: RawEsoStatus): EsoStatus => ({
        slug: rawEsoStatus.slugs[0],
        status: rawEsoStatus.status,
        type: rawEsoStatus.type ?? 'server',
        support: rawEsoStatus.support,
        zone: rawEsoStatus.zone,
        raw: rawEsoStatus,
      }),
    );
  }

  public async doHandle(
    rawEsoStatus: RawEsoStatus[],
    connector: Connector,
  ): Promise<void> {
    await Promise.all(
      this.formatData(rawEsoStatus).map(
        (esoStatus: EsoStatus): Promise<void> => {
          return this.prepareUpdate(esoStatus, connector);
        },
      ),
    );
  }

  @Interval(Number(process.env.FORUM_MESSAGE_UPDATE_INTERVAL))
  public async handleForumMessage(): Promise<void> {
    await this.doHandle(await ForumMessage.getData(), 'ForumMessage');
  }

  @Interval(Number(process.env.LIVE_SERVICES_UPDATE_INTERVAL))
  public async handleLiveServices(): Promise<void> {
    await this.doHandle(await LiveServices.getData(), 'LiveServices');
  }

  @Interval(Number(process.env.SERVICE_ALERTS_UPDATE_INTERVAL))
  public async handleServiceAlerts(): Promise<void> {
    await this.doHandle(await ServiceAlerts.getData(), 'ServiceAlerts');
  }
}
