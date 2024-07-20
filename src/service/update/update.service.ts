import { Injectable } from '@nestjs/common';
import { EsoStatus, Slug, Status as EsoStatusStatus } from '@eso-status/types';
import { ServiceService } from '../../resource/service/service.service';
import { StatusService } from '../../resource/status/status.service';
import { Status } from '../../resource/status/entities/status.entity';
import { WebsocketService } from '../websocket/websocket.service';
import { Service } from '../../resource/service/entities/service.entity';
import { WinstonService } from '../winston/winston.service';
import { Interval } from '@nestjs/schedule';

@Injectable()
export class UpdateService {
  constructor(
    private readonly serviceService: ServiceService,
    private readonly statusService: StatusService,
    private readonly websocketService: WebsocketService,
    private readonly winstonService: WinstonService,
  ) {}

  private queue: EsoStatus[] = [];

  public getQueue(): EsoStatus[] {
    return this.queue;
  }

  private setQueue(esoStatusList: EsoStatus[]): void {
    this.queue = esoStatusList;
  }

  /**
   * Method used to update queue
   *
   * @param esoStatus
   * @private
   */
  private updateQueue(esoStatus: EsoStatus): void {
    const queue: EsoStatus[] = this.getQueue();
    queue[esoStatus.slug] = esoStatus;
    this.setQueue(queue);
  }

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
      'UpdateService.update',
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
      'UpdateService.doUpdate',
    );

    // Update queue
    this.updateQueue(esoStatus);
  }

  /**
   * Method used to push queue data with interval
   */
  @Interval(Number(process.env.UPDATE_INTERVAL))
  public handleInterval(): void {
    // Return function if queue is empty
    if (Object.entries(this.getQueue()).length === 0) {
      return;
    }

    // Emit update event with queue data
    // Return function if event emit failed
    if (
      !this.websocketService
        .getServer()
        .emit('update', Object.values(this.getQueue()))
    ) {
      return;
    }

    // Write log with details (slug with new status)
    this.winstonService.log(
      `Service${Object.entries(this.getQueue()).length > 1 ? 's' : ''} (${Object.entries(
        this.getQueue(),
      )
        .map((esoStatus: [Slug, EsoStatus]) => {
          return `${esoStatus[0]}(${esoStatus[1].status})`;
        })
        .join(', ')}) status update event emitted`,
      'UpdateService.sendUpdateEvent',
    );

    // Empty queue
    this.setQueue([]);
  }
}
