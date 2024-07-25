import { EsoStatus } from '@eso-status/types';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import * as moment from 'moment';
import { Server } from 'socket.io';
import { Socket, io } from 'socket.io-client';

import { dataSourceOptions } from '../../config/typeorm.config';
import { ArchiveService } from '../../resource/archive/archive.service';
import { Archive } from '../../resource/archive/entities/archive.entity';
import { Service } from '../../resource/service/entities/service.entity';
import { ServiceService } from '../../resource/service/service.service';
import { Status } from '../../resource/status/entities/status.entity';
import { StatusService } from '../../resource/status/status.service';
import { ScrapingService } from '../scraping/scraping.service';
import { WebsocketService } from '../websocket/websocket.service';

import { WinstonService } from '../winston/winston.service';

import { QueueService } from './queue.service';

config();

describe('QueueService (e2e)', (): void => {
  let app: INestApplication;
  let queueService: QueueService;
  let scrapingService: ScrapingService;
  let websocketService: WebsocketService;
  let serverSocket: Server;
  let clientSocket: Socket;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        TypeOrmModule.forFeature([Service, Status, Archive]),
      ],
      providers: [
        QueueService,
        WebsocketService,
        WinstonService,
        ScrapingService,
        ServiceService,
        ArchiveService,
        StatusService,
      ],
    }).compile();

    app = module.createNestApplication();
    queueService = module.get<QueueService>(QueueService);
    scrapingService = module.get<ScrapingService>(ScrapingService);
    websocketService = module.get<WebsocketService>(WebsocketService);
    serverSocket = new Server(Number(process.env.APP_PORT));
    websocketService.server = serverSocket;

    jest
      .spyOn(websocketService, 'getServer')
      .mockImplementation((): Server => serverSocket);

    clientSocket = io(`ws://${process.env.APP_HOST}:${process.env.APP_PORT}`, {
      secure: true,
      rejectUnauthorized: false,
      transports: ['websocket'],
    });

    await app.init();

    await new Promise<void>((resolve): void => {
      clientSocket.on('connect', (): void => {
        resolve();
      });
    });
  }, 15000);

  afterEach(async (): Promise<void> => {
    await app.close();
    clientSocket.disconnect();
    await new Promise<void>((resolve): void => {
      serverSocket.close((): void => {
        resolve();
      });
    });
  });

  it('should update event received from client', async (): Promise<void> => {
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
          dates: [
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            moment()
              .utc()
              .set('years', 2024)
              .set('months', 9)
              .set('date', 1)
              .set('hours', 12)
              .set('minutes', 0)
              .set('seconds', 0)
              .set('milliseconds', 0)
              .utcOffset(0)
              .toISOString(),
          ],
          type: 'service',
          support: 'store',
          zone: 'eso',
          status: 'up',
        },
      };
      jest.spyOn(queueService, 'setQueue').mockImplementation((): [] => []);
      queueService.updateQueue(queueItem);

      clientSocket.on('statusUpdate', (data: EsoStatus[]): void => {
        expect(data).toEqual([queueItem]);
        resolve();
      });

      scrapingService.doQueue();
    });
  });
});
