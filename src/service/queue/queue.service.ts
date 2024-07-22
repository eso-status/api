import { EsoStatus, Slug } from '@eso-status/types';
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
    return this.queue;
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
    queue[esoStatus.slug] = esoStatus;
    this.setQueue(queue);
  }

  /**
   * Method used to push queue data with interval
   */
  public pushQueue(): void {
    // Return function if queue is empty
    if (Object.entries(this.getQueue()).length === 0) {
      return;
    }

    // Emit update event with queue data
    // Return function if event emit failed
    this.websocketService
      .getServer()
      .emit('update', Object.values(this.getQueue()));

    // Write log with details (slug with new status)
    this.winstonService.log(
      `Service${Object.entries(this.getQueue()).length > 1 ? 's' : ''} (${Object.entries(
        this.getQueue(),
      )
        .map(
          (esoStatus: [Slug, EsoStatus]) =>
            `${esoStatus[0]}(${esoStatus[1].status})`,
        )
        .join(', ')}) status update event emitted`,
      'QueueService.handleInterval',
    );

    // Empty queue
    this.setQueue([]);
  }
}
