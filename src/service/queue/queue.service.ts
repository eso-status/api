import { EsoStatus } from '@eso-status/types';
import { Injectable } from '@nestjs/common';

import { config } from 'dotenv';

import { WebsocketService } from '../websocket/websocket.service';
import { WinstonService } from '../winston/winston.service';

config();

@Injectable()
export class QueueService {
  constructor(
    private readonly websocketService: WebsocketService,
    private readonly winstonService: WinstonService,
  ) {}

  private queue: EsoStatus[] = [];

  public getQueue(): EsoStatus[] {
    return Object.values(this.queue);
  }

  public setQueue(esoStatusList: EsoStatus[]): void {
    this.queue = esoStatusList;
  }

  /**
   * Method used to update queue
   *
   * @param esoStatus
   * @private
   */
  public updateQueue(esoStatus: EsoStatus): void {
    const queue: EsoStatus[] = this.getQueue();
    const index: number = queue.findIndex(
      (item: EsoStatus): boolean => item.slug === esoStatus.slug,
    );
    queue[index] = esoStatus;
    this.setQueue(queue);
  }

  public isQueueEmpty(): boolean {
    return this.getQueue().length === 0;
  }

  public emptyQueue(): void {
    this.setQueue([]);
  }

  /**
   * Method used to push queue data with interval
   */
  public pushQueue(): void {
    // Return function if queue is empty
    if (this.isQueueEmpty()) {
      return;
    }

    // Emit update event with queue data
    // Return function if event emit failed
    this.websocketService.getServer().emit('statusUpdate', this.getQueue());

    // Write log with details (slug with new status)
    this.winstonService.log(
      `Service(s) (${this.getQueue()
        .map(
          (esoStatus: EsoStatus): string =>
            `${esoStatus.slug}(${esoStatus.status})`,
        )
        .join(', ')}) status update event emitted`,
      'QueueService.pushQueue',
    );

    // Empty queue
    this.emptyQueue();
  }
}
