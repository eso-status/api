import { ForumMessage } from '@eso-status/forum-message';
import { LiveServices } from '@eso-status/live-services';
import { ServiceAlerts } from '@eso-status/service-alerts';
import {
  EsoStatus,
  RawEsoStatus,
  Status as EsoStatusStatus,
} from '@eso-status/types';
import { Injectable } from '@nestjs/common';

import { Interval } from '@nestjs/schedule';
import { config } from 'dotenv';

import { Service } from '../../resource/service/entities/service.entity';
import { ServiceService } from '../../resource/service/service.service';
import { Status } from '../../resource/status/entities/status.entity';
import { StatusService } from '../../resource/status/status.service';
import { QueueService } from '../queue/queue.service';
import { WinstonService } from '../winston/winston.service';

config();

@Injectable()
export class ScrapingService {
  constructor(
    private readonly queueService: QueueService,
    private readonly serviceService: ServiceService,
    private readonly statusService: StatusService,
    private readonly winstonService: WinstonService,
  ) {}

  /**
   * Method used to check if status change of an EsoStatus
   *
   * @param esoStatusFromScraping
   * @param esoStatusFromDatabase
   * @private
   * @return true => if EsoStatus status is different in this.old list
   */
  private changed(
    esoStatusFromScraping: EsoStatus,
    esoStatusFromDatabase: Service,
  ): boolean {
    return esoStatusFromScraping.status !== esoStatusFromDatabase.status.status;
  }

  /**
   * Method used to check is EsoStatus data has planned status
   *
   * @param status
   * @private
   * @return true => if EsoStatus status is planned
   */
  private isPlannedStatus(status: EsoStatusStatus): boolean {
    return status === 'planned';
  }

  /**
   * Method used to execute update process of a service
   * @param esoStatus
   */
  public async update(esoStatus: EsoStatus): Promise<void> {
    // Return function if new status is planned
    if (this.isPlannedStatus(esoStatus.status)) {
      return;
    }

    // Get service in database by slug
    const service: Service = await this.serviceService.findBySlug(
      esoStatus.slug,
    );

    // Return function if status not change between new data and database
    if (!this.changed(esoStatus, service)) {
      return;
    }

    // Write log with details (raw data)
    this.winstonService.log(
      `New esoStatus change detected: ${JSON.stringify(esoStatus.raw)}`,
      'ScrapingService.update',
    );

    // Get status in database by status
    const newStatus: Status = await this.statusService.findByStatus(
      esoStatus.status,
    );

    // Update service status in database
    await this.serviceService.updateStatus(service.id, newStatus.id);

    // Write log with detail (slug, old status and new status)
    this.winstonService.log(
      `Service (slug: ${service.slug.slug}) status from ${service.status.status} to ${esoStatus.status}`,
      'ScrapingService.update',
    );

    // Update queue
    this.queueService.updateQueue(esoStatus);
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

  private async doHandle(
    scraperClass: ForumMessage | LiveServices | ServiceAlerts,
  ): Promise<void> {
    await Promise.all(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-call
      this.formatData(await scraperClass.getData()).map(
        (esoStatus: EsoStatus): Promise<void> => {
          return this.update(esoStatus);
        },
      ),
    );
  }

  @Interval(Number(process.env.FORUM_MESSAGE_UPDATE_INTERVAL))
  public async handleForumMessage() {
    await this.doHandle(ForumMessage);
  }

  @Interval(Number(process.env.LIVE_SERVICES_UPDATE_INTERVAL))
  public async handleLiveServices() {
    await this.doHandle(LiveServices);
  }

  @Interval(Number(process.env.SERVICE_ALERTS_UPDATE_INTERVAL))
  public async handleServiceAlerts() {
    await this.doHandle(ServiceAlerts);
  }

  @Interval(Number(process.env.UPDATE_INTERVAL))
  public doQueue(): void {
    this.queueService.pushQueue();
  }
}
