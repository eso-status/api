import { LiveServices } from '@eso-status/live-services';
import {
  EsoStatus,
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
      archive.rawData !== JSON.stringify(esoStatusFromScraping.raw) ||
      archive.status.status !== esoStatusFromScraping.status
    );
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

  public async addLog(
    connector: Connector,
    serviceId: number,
    statusId: number,
    rawEsoStatus: RawEsoStatus,
  ): Promise<Log> {
    return this.logService.add(connector, serviceId, statusId, rawEsoStatus);
  }

  public async update(
    connector: Connector,
    esoStatus: EsoStatus,
    service: Service,
    newStatus: Status,
  ): Promise<void> {
    // Return function if status not change between new data and database
    if (!this.slugChanged(esoStatus, service)) {
      return;
    }

    // Update service status in database
    await this.updateService(service.id, newStatus.id, esoStatus.raw);

    // Write log with detail (old and new status)
    this.winstonService.log(
      `[${connector}] [${service.slug.slug}] [Entity] updateService: [from ${service.status.status} to ${newStatus.status}]`,
      'ScrapingService.update',
    );

    // Emit statusUpdate event
    this.websocketService.server.emit('statusUpdate', esoStatus);

    // Write log
    this.winstonService.log(
      `[${connector}] [${service.slug.slug}] [Event] statusUpdate event emitted`,
      'ScrapingService.update',
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

    // Write log with detail (raw)
    this.winstonService.log(
      `[${connector}] [${service.slug.slug}] [Change] archiveChanged. New raw: ${JSON.stringify(esoStatus.raw)}`,
      'ScrapingService.prepareUpdate',
    );

    // Create log
    await this.addLog(connector, service.id, newStatus.id, esoStatus.raw);

    // Write log
    this.winstonService.log(
      `[${connector}] [${service.slug.slug}] [Entity] log created`,
      'ScrapingService.prepareUpdate',
    );

    // Update archive
    await this.updateArchive(service, esoStatus.raw, connector, newStatus.id);

    // Write log
    this.winstonService.log(
      `[${connector}] [${service.slug.slug}] [Entity] archive updated`,
      'ScrapingService.prepareUpdate',
    );

    await this.update(connector, esoStatus, service, newStatus);
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

  @Interval(Number(process.env.LIVE_SERVICES_UPDATE_INTERVAL))
  public async handleLiveServices(): Promise<void> {
    await this.doHandle(await LiveServices.getData(), 'LiveServices');
  }
}
