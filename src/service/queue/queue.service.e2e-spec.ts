import { EsoStatus } from '@eso-status/types';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { Server } from 'socket.io';
import { Socket } from 'socket.io-client';
import * as io from 'socket.io-client';

import { dataSourceOptions } from '../../config/typeorm.config';
import { Service } from '../../resource/service/entities/service.entity';
import { Status } from '../../resource/status/entities/status.entity';
import { WebsocketService } from '../websocket/websocket.service';

import { WinstonService } from '../winston/winston.service';

import { QueueService } from './queue.service';

config();

describe('QueueService (e2e)', () => {
  let app: INestApplication;
  let queueService: QueueService;
  let websocketService: WebsocketService;
  let serverSocket: Server;
  let clientSocket: Socket;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        TypeOrmModule.forFeature([Service, Status]),
      ],
      providers: [QueueService, WebsocketService, WinstonService],
    }).compile();

    app = module.createNestApplication();
    queueService = module.get<QueueService>(QueueService);
    websocketService = module.get<WebsocketService>(WebsocketService);
    serverSocket = new Server(Number(process.env.APP_PORT));
    websocketService.server = serverSocket;

    jest
      .spyOn(websocketService, 'getServer')
      .mockImplementation(() => serverSocket);

    clientSocket = io.connect(
      `${process.env.APP_PROTOCOL}://${process.env.APP_HOST}:${process.env.APP_PORT}`,
    );

    await app.init();

    await new Promise<void>((resolve): void => {
      clientSocket.on('connect', () => {
        resolve();
      });
    });
  });

  afterEach(async () => {
    await app.close();
    clientSocket.disconnect();
    await new Promise<void>((resolve): void => {
      serverSocket.close((): void => {
        resolve();
      });
    });
  });

  it('should update event received from client', async () => {
    await new Promise<void>((resolve): void => {
      const queueItem: EsoStatus = {
        slug: 'service_store_eso',
        status: 'up',
        type: 'service',
        support: 'store',
        zone: 'eso',
        raw: {
          sources: [
            'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
          ],
          raw: [
            ' />\n<p>2024.07.01 - 12:00 UTC (08:00 EDT)</p>\n\n<p>The North American megaservers are currently available.</p>\n\n<p>The ESO store and account system are currently available.</p>\n\n',
          ],
          rawDate: ' />2024.07.01 - 12:00 UTC (08:00 EDT)',
          rawData: 'The ESO store and account system are currently available.',
          slugs: ['service_store_eso'],
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          dates: ['2024-09-01T12:00:00.000Z'],
          type: 'service',
          support: 'store',
          zone: 'eso',
          status: 'up',
        },
      };
      jest.spyOn(queueService, 'setQueue').mockImplementation(() => []);
      queueService.updateQueue(queueItem);

      clientSocket.on('update', (data: EsoStatus[]) => {
        expect(data).toEqual([queueItem]);
        resolve();
      });

      queueService.pushQueue();
    });
  });
});
