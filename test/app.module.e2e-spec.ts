import { ForumMessage } from '@eso-status/forum-message';
import { LiveServices } from '@eso-status/live-services';
import { ServiceAlerts } from '@eso-status/service-alerts';
import { EsoStatus, RawEsoStatus } from '@eso-status/types';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import * as moment from 'moment/moment';
import { Server } from 'socket.io';
import { Socket, io } from 'socket.io-client';

import { Repository } from 'typeorm';

import { runSeeders } from 'typeorm-extension';

import { dataSource, dataSourceOptions } from '../src/config/typeorm.config';
import { ArchiveService } from '../src/resource/archive/archive.service';
import { Archive } from '../src/resource/archive/entities/archive.entity';
import { Service } from '../src/resource/service/entities/service.entity';
import { ServiceController } from '../src/resource/service/service.controller';
import { ServiceService } from '../src/resource/service/service.service';
import { Status } from '../src/resource/status/entities/status.entity';
import { StatusService } from '../src/resource/status/status.service';
import { QueueService } from '../src/service/queue/queue.service';
import { ScrapingService } from '../src/service/scraping/scraping.service';
import { WebsocketService } from '../src/service/websocket/websocket.service';
import { WinstonService } from '../src/service/winston/winston.service';

config();

let app: INestApplication;
let websocketService: WebsocketService;
let scrapingService: ScrapingService;
let serverSocket: Server;
let clientSocket: Socket;
let serviceRepository: Repository<Service>;
let archiveRepository: Repository<Archive>;
let serviceController: ServiceController;

let doHandle: jest.SpyInstance<Promise<void>>;
let formatData: jest.SpyInstance<EsoStatus[]>;
let update: jest.SpyInstance<Promise<void>>;
let getService: jest.SpyInstance<Promise<Service>>;
let getArchive: jest.SpyInstance<Promise<Archive>>;
let updateArchive: jest.SpyInstance<Promise<void>>;
let isPlannedStatus: jest.SpyInstance<boolean>;
let slugChanged: jest.SpyInstance<boolean>;
let rawChanged: jest.SpyInstance<boolean>;
let getStatus: jest.SpyInstance<Promise<Status>>;
let updateService: jest.SpyInstance<Promise<void>>;

let updateQueue: jest.SpyInstance<void>;
let getQueue: jest.SpyInstance<EsoStatus[]>;
let setQueue: jest.SpyInstance<void>;
let isQueueEmpty: jest.SpyInstance<boolean>;
let pushQueue: jest.SpyInstance<void>;
let emptyQueue: jest.SpyInstance<void>;

const before = async (): Promise<void> => {
  const module: TestingModule = await Test.createTestingModule({
    imports: [
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
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
      ServiceController,
    ],
  }).compile();

  app = module.createNestApplication();
  websocketService = module.get<WebsocketService>(WebsocketService);
  scrapingService = module.get<ScrapingService>(ScrapingService);
  serviceController = module.get<ServiceController>(ServiceController);
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

  serviceRepository = dataSource.getRepository(Service);
  archiveRepository = dataSource.getRepository(Archive);

  await new Promise<void>((resolve): void => {
    clientSocket.on('connect', (): void => {
      resolve();
    });
  });

  await dataSource.initialize();
  await dataSource.dropDatabase();
  await dataSource.runMigrations();
  await runSeeders(dataSource);

  doHandle = jest.spyOn(scrapingService, 'doHandle');
  formatData = jest.spyOn(scrapingService, 'formatData');
  update = jest.spyOn(scrapingService, 'update');
  getService = jest.spyOn(scrapingService, 'getService');
  getArchive = jest.spyOn(scrapingService, 'getArchive');
  updateArchive = jest.spyOn(scrapingService, 'updateArchive');
  isPlannedStatus = jest.spyOn(scrapingService, 'isPlannedStatus');
  slugChanged = jest.spyOn(scrapingService, 'slugChanged');
  rawChanged = jest.spyOn(scrapingService, 'rawChanged');
  getStatus = jest.spyOn(scrapingService, 'getStatus');
  updateService = jest.spyOn(scrapingService, 'updateService');

  updateQueue = jest.spyOn(scrapingService.queueService, 'updateQueue');
  getQueue = jest.spyOn(scrapingService.queueService, 'getQueue');
  setQueue = jest.spyOn(scrapingService.queueService, 'setQueue');
  isQueueEmpty = jest.spyOn(scrapingService.queueService, 'isQueueEmpty');
  pushQueue = jest.spyOn(scrapingService.queueService, 'pushQueue');
  emptyQueue = jest.spyOn(scrapingService.queueService, 'emptyQueue');
};

const after = async (): Promise<void> => {
  await app.close();
  await dataSource.destroy();
  clientSocket.disconnect();
  await new Promise<void>((resolve): void => {
    serverSocket.close((): void => {
      resolve();
    });
  });
};

describe('QueueService (e2e)', (): void => {
  describe('classic maintenance', (): void => {
    const liveServices1: RawEsoStatus[] = [
      {
        sources: ['https://live-services.elderscrollsonline.com/status/realms'],
        raw: ['The Elder Scrolls Online (EU)', 'DOWN'],
        rawSlug: 'The Elder Scrolls Online (EU)',
        rawStatus: 'DOWN',
        slugs: ['server_pc_eu'],
        support: 'pc',
        zone: 'eu',
        status: 'down',
      },
      {
        sources: ['https://live-services.elderscrollsonline.com/status/realms'],
        raw: ['The Elder Scrolls Online (NA)', 'DOWN'],
        rawSlug: 'The Elder Scrolls Online (NA)',
        rawStatus: 'DOWN',
        slugs: ['server_pc_na'],
        support: 'pc',
        zone: 'na',
        status: 'down',
      },
    ];
    const forumMessage1: RawEsoStatus[] = [
      {
        sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
        raw: [
          '• [IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance – August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
        ],
        slugs: ['server_pc_eu'],
        rawDate: 'August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2023)
            .set('months', 8)
            .set('date', 9)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2023)
            .set('months', 8)
            .set('date', 9)
            .set('hours', 11)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        type: 'server',
        support: 'pc',
        zone: 'eu',
        status: 'down',
      },
      {
        sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
        raw: [
          '• [IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance – August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
        ],
        slugs: ['server_pc_na'],
        rawDate: 'August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2023)
            .set('months', 8)
            .set('date', 9)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2023)
            .set('months', 8)
            .set('date', 9)
            .set('hours', 11)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'down',
      },
    ];
    const serviceAlert1: RawEsoStatus[] = [
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          ' />\n  \n<p>2024.07.09 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
        ],
        rawDate: ' />  2024.07.09 - 12:15 UTC (08:15 EDT)',
        rawData:
          'The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
        slugs: ['server_pc_eu'],
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8)
            .set('date', 9)
            .set('hours', 12)
            .set('minutes', 15)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        type: 'server',
        support: 'pc',
        zone: 'eu',
        status: 'down',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          ' />\n  \n<p>2024.07.09 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
        ],
        rawDate: ' />  2024.07.09 - 12:15 UTC (08:15 EDT)',
        rawData:
          'The North American PC/Mac megaserver is currently unavailable while we perform maintenance.',
        slugs: ['server_pc_na'],
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8)
            .set('date', 9)
            .set('hours', 12)
            .set('minutes', 15)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'down',
      },
    ];

    const liveServices2: RawEsoStatus[] = [
      {
        sources: ['https://live-services.elderscrollsonline.com/status/realms'],
        raw: ['The Elder Scrolls Online (EU)', 'UP'],
        rawSlug: 'The Elder Scrolls Online (EU)',
        rawStatus: 'UP',
        slugs: ['server_pc_eu'],
        support: 'pc',
        zone: 'eu',
        status: 'up',
      },
      {
        sources: ['https://live-services.elderscrollsonline.com/status/realms'],
        raw: ['The Elder Scrolls Online (NA)', 'UP'],
        rawSlug: 'The Elder Scrolls Online (NA)',
        rawStatus: 'UP',
        slugs: ['server_pc_na'],
        support: 'pc',
        zone: 'na',
        status: 'up',
      },
    ];
    const forumMessage2: RawEsoStatus[] = [
      {
        sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
        raw: [
          '• [COMPLETE] PC/Mac: NA and EU megaservers for maintenance – August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
        ],
        slugs: ['server_pc_eu'],
        rawDate: 'August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2023)
            .set('months', 8)
            .set('date', 9)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2023)
            .set('months', 8)
            .set('date', 9)
            .set('hours', 11)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        type: 'server',
        support: 'pc',
        zone: 'eu',
        status: 'up',
      },
      {
        sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
        raw: [
          '• [COMPLETE] PC/Mac: NA and EU megaservers for maintenance – August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
        ],
        slugs: ['server_pc_na'],
        rawDate: 'August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2023)
            .set('months', 8)
            .set('date', 9)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2023)
            .set('months', 8)
            .set('date', 9)
            .set('hours', 11)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'up',
      },
    ];
    const serviceAlert2: RawEsoStatus[] = [
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          ' />\n  \n<p>2024.07.09 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
        ],
        rawDate: ' />  2024.07.09 - 12:15 UTC (08:15 EDT)',
        rawData: 'The European PC/Mac megaserver is currently available.',
        slugs: ['server_pc_eu'],
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8)
            .set('date', 9)
            .set('hours', 12)
            .set('minutes', 15)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        type: 'server',
        support: 'pc',
        zone: 'eu',
        status: 'up',
      },
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          ' />\n  \n<p>2024.07.09 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
        ],
        rawDate: ' />  2024.07.09 - 12:15 UTC (08:15 EDT)',
        rawData: 'The North American PC/Mac megaserver is currently available.',
        slugs: ['server_pc_na'],
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8)
            .set('date', 9)
            .set('hours', 12)
            .set('minutes', 15)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'up',
      },
    ];

    let pcNa: Service;
    let pcEu: Service;

    let findOnePcEu: EsoStatus;
    let findOnePcNa: EsoStatus;

    let pcNaLiveServiceArchive: Archive;
    let pcEuLiveServiceArchive: Archive;

    let pcNaForumMessageArchive: Archive;
    let pcEuForumMessageArchive: Archive;

    let pcNaServiceAlertsArchive: Archive;
    let pcEuServiceAlertsArchive: Archive;

    let firstUpdateDate: Date;

    let expectQueue: EsoStatus[];

    describe('prepare test', (): void => {
      it('start test', async (): Promise<void> => {
        await before();

        expect(true).toStrictEqual(true);
      }, 15000);

      it('should queue empty', (): void => {
        expect(scrapingService.queueService.getQueue()).toStrictEqual([]);
      });

      it('update service status to up', async (): Promise<void> => {
        pcNa = await serviceRepository.findOne({
          where: {
            id: 5,
          },
        });
        pcEu = await serviceRepository.findOne({
          where: {
            id: 6,
          },
        });

        pcEu.statusId = 1;
        pcEu.rawData = JSON.stringify(<RawEsoStatus>{
          raw: ['The Elder Scrolls Online (EU)', 'UP'],
          rawSlug: 'The Elder Scrolls Online (EU)',
          rawStatus: 'UP',
          slugs: ['server_pc_eu'],
          sources: [
            'https://live-services.elderscrollsonline.com/status/realms',
          ],
          status: 'up',
          support: 'pc',
          zone: 'eu',
        });
        pcNa.statusId = 1;
        pcNa.rawData = JSON.stringify(<RawEsoStatus>{
          raw: ['The Elder Scrolls Online (NA)', 'UP'],
          rawSlug: 'The Elder Scrolls Online (NA)',
          rawStatus: 'UP',
          slugs: ['server_pc_na'],
          sources: [
            'https://live-services.elderscrollsonline.com/status/realms',
          ],
          status: 'up',
          support: 'pc',
          zone: 'na',
        });

        await serviceRepository.save(pcEu);
        await serviceRepository.save(pcNa);

        pcNa = await serviceRepository.findOne({
          where: {
            id: 5,
          },
        });
        pcEu = await serviceRepository.findOne({
          where: {
            id: 6,
          },
        });

        expect(pcNa.statusId).toEqual(1);
        expect(pcNa.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            raw: ['The Elder Scrolls Online (NA)', 'UP'],
            rawSlug: 'The Elder Scrolls Online (NA)',
            rawStatus: 'UP',
            slugs: ['server_pc_na'],
            sources: [
              'https://live-services.elderscrollsonline.com/status/realms',
            ],
            status: 'up',
            support: 'pc',
            zone: 'na',
          }),
        );
        expect(pcEu.statusId).toEqual(1);
        expect(pcEu.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            raw: ['The Elder Scrolls Online (EU)', 'UP'],
            rawSlug: 'The Elder Scrolls Online (EU)',
            rawStatus: 'UP',
            slugs: ['server_pc_eu'],
            sources: [
              'https://live-services.elderscrollsonline.com/status/realms',
            ],
            status: 'up',
            support: 'pc',
            zone: 'eu',
          }),
        );
      });

      it('update LiveServices archive', async (): Promise<void> => {
        pcEuLiveServiceArchive = await archiveRepository.findOne({
          where: {
            connector: 'LiveServices',
            serviceId: 6,
          },
        });
        pcNaLiveServiceArchive = await archiveRepository.findOne({
          where: {
            connector: 'LiveServices',
            serviceId: 5,
          },
        });

        pcEuLiveServiceArchive.statusId = 1;
        pcEuLiveServiceArchive.rawData = JSON.stringify(<RawEsoStatus>{
          raw: ['The Elder Scrolls Online (EU)', 'UP'],
          rawSlug: 'The Elder Scrolls Online (EU)',
          rawStatus: 'UP',
          slugs: ['server_pc_eu'],
          sources: [
            'https://live-services.elderscrollsonline.com/status/realms',
          ],
          status: 'up',
          support: 'pc',
          zone: 'eu',
        });
        pcNaLiveServiceArchive.statusId = 1;
        pcNaLiveServiceArchive.rawData = JSON.stringify(<RawEsoStatus>{
          raw: ['The Elder Scrolls Online (NA)', 'UP'],
          rawSlug: 'The Elder Scrolls Online (NA)',
          rawStatus: 'UP',
          slugs: ['server_pc_na'],
          sources: [
            'https://live-services.elderscrollsonline.com/status/realms',
          ],
          status: 'up',
          support: 'pc',
          zone: 'na',
        });

        await archiveRepository.save(pcEuLiveServiceArchive);
        await archiveRepository.save(pcNaLiveServiceArchive);

        pcEuLiveServiceArchive = await archiveRepository.findOne({
          where: {
            connector: 'LiveServices',
            serviceId: 6,
          },
        });
        pcNaLiveServiceArchive = await archiveRepository.findOne({
          where: {
            connector: 'LiveServices',
            serviceId: 5,
          },
        });

        expect(pcEuLiveServiceArchive.statusId).toEqual(1);
        expect(pcEuLiveServiceArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            raw: ['The Elder Scrolls Online (EU)', 'UP'],
            rawSlug: 'The Elder Scrolls Online (EU)',
            rawStatus: 'UP',
            slugs: ['server_pc_eu'],
            sources: [
              'https://live-services.elderscrollsonline.com/status/realms',
            ],
            status: 'up',
            support: 'pc',
            zone: 'eu',
          }),
        );
        expect(pcNaLiveServiceArchive.statusId).toEqual(1);
        expect(pcNaLiveServiceArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            raw: ['The Elder Scrolls Online (NA)', 'UP'],
            rawSlug: 'The Elder Scrolls Online (NA)',
            rawStatus: 'UP',
            slugs: ['server_pc_na'],
            sources: [
              'https://live-services.elderscrollsonline.com/status/realms',
            ],
            status: 'up',
            support: 'pc',
            zone: 'na',
          }),
        );
      });

      it('update ForumMessage archive', async (): Promise<void> => {
        pcEuForumMessageArchive = await archiveRepository.findOne({
          where: {
            connector: 'ForumMessage',
            serviceId: 6,
          },
        });
        pcNaForumMessageArchive = await archiveRepository.findOne({
          where: {
            connector: 'ForumMessage',
            serviceId: 5,
          },
        });

        pcEuForumMessageArchive.statusId = 1;
        pcEuForumMessageArchive.rawData = JSON.stringify(<RawEsoStatus>{
          sources: [
            'https://forums.elderscrollsonline.com/,https://forums.elderscrollsonline.com/en/categories/pts',
          ],
          raw: [
            '• [COMPLETE] PC/Mac: EU megaserver for patch maintenance – September 7, 4:00AM EDT (8:00 UTC) – 12:00PM EDT (16:00 UTC)',
          ],
          slugs: ['server_pc_eu'],
          rawDate:
            'September 7, 4:00AM EDT (8:00 UTC) – 12:00PM EDT (16:00 UTC)',
          dates: [
            moment()
              .utc()
              .set('years', 2023)
              .set('months', 9)
              .set('date', 7)
              .set('hours', 8)
              .set('minutes', 0)
              .set('seconds', 0)
              .set('milliseconds', 0),
            moment()
              .utc()
              .set('years', 2023)
              .set('months', 9)
              .set('date', 7)
              .set('hours', 16)
              .set('minutes', 0)
              .set('seconds', 0)
              .set('milliseconds', 0),
          ],
          type: 'server',
          support: 'pc',
          zone: 'eu',
          status: 'up',
        });
        pcNaForumMessageArchive.statusId = 1;
        pcNaForumMessageArchive.rawData = JSON.stringify(<RawEsoStatus>{
          sources: [
            'https://forums.elderscrollsonline.com/,https://forums.elderscrollsonline.com/en/categories/pts',
          ],
          raw: [
            '• [COMPLETE] PC/Mac: NA megaserver for patch maintenance – September 7, 4:00AM EDT (8:00 UTC) – 10:00AM EDT (14:00 UTC)',
          ],
          slugs: ['server_pc_na'],
          rawDate:
            'September 7, 4:00AM EDT (8:00 UTC) – 10:00AM EDT (14:00 UTC)',
          dates: [
            moment()
              .utc()
              .set('years', 2023)
              .set('months', 9)
              .set('date', 7)
              .set('hours', 8)
              .set('minutes', 0)
              .set('seconds', 0)
              .set('milliseconds', 0),
            moment()
              .utc()
              .set('years', 2023)
              .set('months', 9)
              .set('date', 7)
              .set('hours', 16)
              .set('minutes', 0)
              .set('seconds', 0)
              .set('milliseconds', 0),
          ],
          type: 'server',
          support: 'pc',
          zone: 'na',
          status: 'up',
        });

        await archiveRepository.save(pcEuForumMessageArchive);
        await archiveRepository.save(pcNaForumMessageArchive);

        pcEuForumMessageArchive = await archiveRepository.findOne({
          where: {
            connector: 'ForumMessage',
            serviceId: 6,
          },
        });
        pcNaForumMessageArchive = await archiveRepository.findOne({
          where: {
            connector: 'ForumMessage',
            serviceId: 5,
          },
        });

        expect(pcEuForumMessageArchive.statusId).toEqual(1);
        expect(pcEuForumMessageArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://forums.elderscrollsonline.com/,https://forums.elderscrollsonline.com/en/categories/pts',
            ],
            raw: [
              '• [COMPLETE] PC/Mac: EU megaserver for patch maintenance – September 7, 4:00AM EDT (8:00 UTC) – 12:00PM EDT (16:00 UTC)',
            ],
            slugs: ['server_pc_eu'],
            rawDate:
              'September 7, 4:00AM EDT (8:00 UTC) – 12:00PM EDT (16:00 UTC)',
            dates: [
              moment()
                .utc()
                .set('years', 2023)
                .set('months', 9)
                .set('date', 7)
                .set('hours', 8)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0),
              moment()
                .utc()
                .set('years', 2023)
                .set('months', 9)
                .set('date', 7)
                .set('hours', 16)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0),
            ],
            type: 'server',
            support: 'pc',
            zone: 'eu',
            status: 'up',
          }),
        );
        expect(pcNaForumMessageArchive.statusId).toEqual(1);
        expect(pcNaForumMessageArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://forums.elderscrollsonline.com/,https://forums.elderscrollsonline.com/en/categories/pts',
            ],
            raw: [
              '• [COMPLETE] PC/Mac: NA megaserver for patch maintenance – September 7, 4:00AM EDT (8:00 UTC) – 10:00AM EDT (14:00 UTC)',
            ],
            slugs: ['server_pc_na'],
            rawDate:
              'September 7, 4:00AM EDT (8:00 UTC) – 10:00AM EDT (14:00 UTC)',
            dates: [
              moment()
                .utc()
                .set('years', 2023)
                .set('months', 9)
                .set('date', 7)
                .set('hours', 8)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0),
              moment()
                .utc()
                .set('years', 2023)
                .set('months', 9)
                .set('date', 7)
                .set('hours', 16)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0),
            ],
            type: 'server',
            support: 'pc',
            zone: 'na',
            status: 'up',
          }),
        );
      });

      it('update ServiceAlerts archive', async (): Promise<void> => {
        pcEuServiceAlertsArchive = await archiveRepository.findOne({
          where: {
            connector: 'ServiceAlerts',
            serviceId: 6,
          },
        });
        pcNaServiceAlertsArchive = await archiveRepository.findOne({
          where: {
            connector: 'ServiceAlerts',
            serviceId: 5,
          },
        });

        pcEuServiceAlertsArchive.statusId = 1;
        pcEuServiceAlertsArchive.rawData = JSON.stringify(<RawEsoStatus>{
          sources: [
            'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
          ],
          raw: [
            'The issues related to logging in to the European PC/Mac megaserver have been resolved at this time.',
          ],
          slugs: ['server_pc_eu'],
          rawDate: '2021.06.11 - 15:55 UTC (11:55 EDT)',
          dates: [
            moment()
              .utc()
              .set('years', 2021)
              .set('months', 7)
              .set('date', 12)
              .set('hours', 8)
              .set('minutes', 0)
              .set('seconds', 0)
              .set('milliseconds', 0)
              .utcOffset(0),
          ],
          type: 'server',
          support: 'pc',
          zone: 'eu',
          status: 'up',
        });
        pcNaServiceAlertsArchive.statusId = 1;
        pcNaServiceAlertsArchive.rawData = JSON.stringify(<RawEsoStatus>{
          sources: [
            'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
          ],
          raw: ['The North American PC/Mac megaserver is currently available.'],
          slugs: ['server_pc_na'],
          rawDate: '2021.07.12 - 12:15 UTC (8:15 EDT)',
          dates: [
            moment()
              .utc()
              .set('years', 2021)
              .set('months', 7)
              .set('date', 12)
              .set('hours', 8)
              .set('minutes', 15)
              .set('seconds', 0)
              .set('milliseconds', 0)
              .utcOffset(0),
          ],
          type: 'server',
          support: 'pc',
          zone: 'na',
          status: 'up',
        });

        await archiveRepository.save(pcEuServiceAlertsArchive);
        await archiveRepository.save(pcNaServiceAlertsArchive);

        pcEuServiceAlertsArchive = await archiveRepository.findOne({
          where: {
            connector: 'ServiceAlerts',
            serviceId: 6,
          },
        });
        pcNaServiceAlertsArchive = await archiveRepository.findOne({
          where: {
            connector: 'ServiceAlerts',
            serviceId: 5,
          },
        });

        expect(pcEuServiceAlertsArchive.statusId).toEqual(1);
        expect(pcEuServiceAlertsArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            ],
            raw: [
              'The issues related to logging in to the European PC/Mac megaserver have been resolved at this time.',
            ],
            slugs: ['server_pc_eu'],
            rawDate: '2021.06.11 - 15:55 UTC (11:55 EDT)',
            dates: [
              moment()
                .utc()
                .set('years', 2021)
                .set('months', 7)
                .set('date', 12)
                .set('hours', 8)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0)
                .utcOffset(0),
            ],
            type: 'server',
            support: 'pc',
            zone: 'eu',
            status: 'up',
          }),
        );
        expect(pcNaServiceAlertsArchive.statusId).toEqual(1);
        expect(pcNaServiceAlertsArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            ],
            raw: [
              'The North American PC/Mac megaserver is currently available.',
            ],
            slugs: ['server_pc_na'],
            rawDate: '2021.07.12 - 12:15 UTC (8:15 EDT)',
            dates: [
              moment()
                .utc()
                .set('years', 2021)
                .set('months', 7)
                .set('date', 12)
                .set('hours', 8)
                .set('minutes', 15)
                .set('seconds', 0)
                .set('milliseconds', 0)
                .utcOffset(0),
            ],
            type: 'server',
            support: 'pc',
            zone: 'na',
            status: 'up',
          }),
        );
      });

      it('should services is up', async (): Promise<void> => {
        pcNa = await serviceRepository.findOne({
          where: {
            id: 5,
          },
        });
        pcEu = await serviceRepository.findOne({
          where: {
            id: 6,
          },
        });

        expect(pcNa.statusId).toEqual(1);
        expect(pcEu.statusId).toEqual(1);
      });

      it('should service controller return correct data', async (): Promise<void> => {
        findOnePcEu = await serviceController.findOne('server_pc_eu');

        findOnePcNa = await serviceController.findOne('server_pc_na');

        expect(findOnePcEu).toStrictEqual(<EsoStatus>{
          raw: {
            raw: ['The Elder Scrolls Online (EU)', 'UP'],
            rawSlug: 'The Elder Scrolls Online (EU)',
            rawStatus: 'UP',
            slugs: ['server_pc_eu'],
            sources: [
              'https://live-services.elderscrollsonline.com/status/realms',
            ],
            status: 'up',
            support: 'pc',
            zone: 'eu',
          },
          slug: 'server_pc_eu',
          status: 'up',
          support: 'pc',
          type: 'server',
          zone: 'eu',
        });

        expect(findOnePcNa).toStrictEqual(<EsoStatus>{
          raw: {
            raw: ['The Elder Scrolls Online (NA)', 'UP'],
            rawSlug: 'The Elder Scrolls Online (NA)',
            rawStatus: 'UP',
            slugs: ['server_pc_na'],
            sources: [
              'https://live-services.elderscrollsonline.com/status/realms',
            ],
            status: 'up',
            support: 'pc',
            zone: 'na',
          },
          slug: 'server_pc_na',
          status: 'up',
          support: 'pc',
          type: 'server',
          zone: 'na',
        });
      });
    });

    describe('handle live service (down)', (): void => {
      it('handle', async (): Promise<void> => {
        jest
          .spyOn(LiveServices, 'getData')
          .mockImplementation(async (): Promise<RawEsoStatus[]> => {
            return Promise.resolve(liveServices1);
          });

        jest
          .spyOn(ForumMessage, 'getData')
          .mockImplementation(async (): Promise<RawEsoStatus[]> => {
            return Promise.resolve(forumMessage1);
          });

        jest
          .spyOn(ServiceAlerts, 'getData')
          .mockImplementation(async (): Promise<RawEsoStatus[]> => {
            return Promise.resolve(serviceAlert1);
          });

        await scrapingService.handleLiveServices();

        expect(true).toEqual(true);
      });

      it('should doHandle called', (): void => {
        expect(doHandle).toHaveBeenCalledTimes(1);
      });

      it('should formatData call and format correctly', (): void => {
        expect(formatData).toHaveBeenCalledTimes(1);
        expect(formatData).toHaveNthReturnedWith(1, <EsoStatus[]>[
          {
            slug: 'server_pc_eu',
            status: 'down',
            type: 'server',
            support: 'pc',
            zone: 'eu',
            raw: {
              sources: [
                'https://live-services.elderscrollsonline.com/status/realms',
              ],
              raw: ['The Elder Scrolls Online (EU)', 'DOWN'],
              rawSlug: 'The Elder Scrolls Online (EU)',
              rawStatus: 'DOWN',
              slugs: ['server_pc_eu'],
              support: 'pc',
              zone: 'eu',
              status: 'down',
            },
          },
          {
            slug: 'server_pc_na',
            status: 'down',
            type: 'server',
            support: 'pc',
            zone: 'na',
            raw: {
              sources: [
                'https://live-services.elderscrollsonline.com/status/realms',
              ],
              raw: ['The Elder Scrolls Online (NA)', 'DOWN'],
              rawSlug: 'The Elder Scrolls Online (NA)',
              rawStatus: 'DOWN',
              slugs: ['server_pc_na'],
              support: 'pc',
              zone: 'na',
              status: 'down',
            },
          },
        ]);
      });

      it('should update called', (): void => {
        expect(update).toHaveBeenCalledTimes(2);
      });

      it('should get new status works', (): void => {
        expect(getStatus).toHaveBeenCalledTimes(2); // TODO check le retour de la valeur
      });

      it('should get datas works', (): void => {
        expect(getService).toHaveBeenCalledTimes(2); // TODO check le retour de la valeur
        expect(getArchive).toHaveBeenCalledTimes(2); // TODO check le retour de la valeur
      });

      it('should archive updated', async (): Promise<void> => {
        firstUpdateDate = new Date();
        firstUpdateDate.setMilliseconds(0);

        expect(updateArchive).toHaveBeenCalledTimes(2);
        pcNaLiveServiceArchive = await archiveRepository.findOne({
          where: {
            serviceId: 5,
            connector: 'LiveServices',
          },
        });
        pcEuLiveServiceArchive = await archiveRepository.findOne({
          where: {
            serviceId: 6,
            connector: 'LiveServices',
          },
        });
        expect(pcNaLiveServiceArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://live-services.elderscrollsonline.com/status/realms',
            ],
            raw: ['The Elder Scrolls Online (NA)', 'DOWN'],
            rawSlug: 'The Elder Scrolls Online (NA)',
            rawStatus: 'DOWN',
            slugs: ['server_pc_na'],
            support: 'pc',
            zone: 'na',
            status: 'down',
          }),
        );
        expect(pcNaLiveServiceArchive.updatedAt).toStrictEqual(firstUpdateDate);
        expect(pcNaLiveServiceArchive.statusId).toEqual(2);
        expect(pcEuLiveServiceArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://live-services.elderscrollsonline.com/status/realms',
            ],
            raw: ['The Elder Scrolls Online (EU)', 'DOWN'],
            rawSlug: 'The Elder Scrolls Online (EU)',
            rawStatus: 'DOWN',
            slugs: ['server_pc_eu'],
            support: 'pc',
            zone: 'eu',
            status: 'down',
          }),
        );
        expect(pcEuLiveServiceArchive.updatedAt).toStrictEqual(firstUpdateDate);
        expect(pcEuLiveServiceArchive.statusId).toEqual(2);
      });

      it('should check methods works', (): void => {
        expect(isPlannedStatus).toHaveBeenCalledTimes(2);
        expect(isPlannedStatus).toHaveNthReturnedWith(1, false);
        expect(isPlannedStatus).toHaveNthReturnedWith(2, false);

        expect(slugChanged).toHaveBeenCalledTimes(2);
        expect(slugChanged).toHaveNthReturnedWith(1, true);
        expect(slugChanged).toHaveNthReturnedWith(2, true);

        expect(rawChanged).toHaveBeenCalledTimes(2);
        expect(rawChanged).toHaveNthReturnedWith(1, true);
        expect(rawChanged).toHaveNthReturnedWith(2, true);
      });

      it('should update service works', async (): Promise<void> => {
        expect(updateService).toHaveBeenCalledTimes(2);

        pcNa = await serviceRepository.findOne({
          where: {
            id: 5,
          },
        });
        pcEu = await serviceRepository.findOne({
          where: {
            id: 6,
          },
        });

        expect(pcNa.statusId).toEqual(2);
        expect(pcEu.statusId).toEqual(2);
      });

      it('should service controller return correct data', async (): Promise<void> => {
        findOnePcEu = await serviceController.findOne('server_pc_eu');

        findOnePcNa = await serviceController.findOne('server_pc_na');

        expect(findOnePcEu).toStrictEqual(<EsoStatus>{
          raw: {
            raw: ['The Elder Scrolls Online (EU)', 'DOWN'],
            rawSlug: 'The Elder Scrolls Online (EU)',
            rawStatus: 'DOWN',
            slugs: ['server_pc_eu'],
            sources: [
              'https://live-services.elderscrollsonline.com/status/realms',
            ],
            status: 'down',
            support: 'pc',
            zone: 'eu',
          },
          slug: 'server_pc_eu',
          status: 'down',
          support: 'pc',
          type: 'server',
          zone: 'eu',
        });

        expect(findOnePcNa).toStrictEqual(<EsoStatus>{
          raw: {
            raw: ['The Elder Scrolls Online (NA)', 'DOWN'],
            rawSlug: 'The Elder Scrolls Online (NA)',
            rawStatus: 'DOWN',
            slugs: ['server_pc_na'],
            sources: [
              'https://live-services.elderscrollsonline.com/status/realms',
            ],
            status: 'down',
            support: 'pc',
            zone: 'na',
          },
          slug: 'server_pc_na',
          status: 'down',
          support: 'pc',
          type: 'server',
          zone: 'na',
        });
      });

      it('should updateQueue method called', (): void => {
        expect(updateQueue).toHaveBeenCalledTimes(2);
        expect(getQueue).toHaveBeenCalledTimes(3);
        expect(setQueue).toHaveBeenCalledTimes(2);
      });

      it('should queue has expected', (): void => {
        expectQueue = [
          {
            slug: 'server_pc_eu',
            status: 'down',
            type: 'server',
            support: 'pc',
            zone: 'eu',
            raw: {
              sources: [
                'https://live-services.elderscrollsonline.com/status/realms',
              ],
              raw: ['The Elder Scrolls Online (EU)', 'DOWN'],
              rawSlug: 'The Elder Scrolls Online (EU)',
              rawStatus: 'DOWN',
              slugs: ['server_pc_eu'],
              support: 'pc',
              zone: 'eu',
              status: 'down',
            },
          },
          {
            slug: 'server_pc_na',
            status: 'down',
            type: 'server',
            support: 'pc',
            zone: 'na',
            raw: {
              sources: [
                'https://live-services.elderscrollsonline.com/status/realms',
              ],
              raw: ['The Elder Scrolls Online (NA)', 'DOWN'],
              rawSlug: 'The Elder Scrolls Online (NA)',
              rawStatus: 'DOWN',
              slugs: ['server_pc_na'],
              support: 'pc',
              zone: 'na',
              status: 'down',
            },
          },
        ];

        expect(scrapingService.queueService.getQueue()).toStrictEqual(
          expectQueue,
        );
      });

      it('should queueService event send and received by client', async (): Promise<void> => {
        await new Promise<void>((resolve): void => {
          clientSocket.on('statusUpdate', (data: EsoStatus[]): void => {
            expect(data).toEqual(expectQueue);
            resolve();
          });

          scrapingService.doQueue();
        });
      }, 15000);

      it('should pushQueue method called', (): void => {
        expect(pushQueue).toHaveBeenCalledTimes(1);
      });

      it('should queue check works', (): void => {
        expect(isQueueEmpty).toHaveBeenCalledTimes(1);
        expect(isQueueEmpty).toHaveNthReturnedWith(1, false);
        expect(getQueue).toHaveBeenCalledTimes(7);
      });

      it('should empty queue works', (): void => {
        expect(emptyQueue).toHaveBeenCalledTimes(1);
        expect(scrapingService.queueService.getQueue()).toStrictEqual([]);
        expect(setQueue).toHaveBeenCalledTimes(3);
      });
    });

    describe('handle forum message (down)', (): void => {
      it('handle', async (): Promise<void> => {
        await scrapingService.handleForumMessage();

        expect(true).toEqual(true);
      });

      it('should doHandle called', (): void => {
        expect(doHandle).toHaveBeenCalledTimes(2);
      });

      it('should formatData call and format correctly', (): void => {
        expect(formatData).toHaveBeenCalledTimes(2);
        expect(formatData).toHaveNthReturnedWith(2, <EsoStatus[]>[
          {
            slug: 'server_pc_eu',
            status: 'down',
            type: 'server',
            support: 'pc',
            zone: 'eu',
            raw: {
              sources: [
                'https://forums.elderscrollsonline.com/en/categories/pts',
              ],
              raw: [
                '• [IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance – August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
              ],
              slugs: ['server_pc_eu'],
              rawDate:
                'August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
              dates: [
                moment()
                  .utc()
                  .set('years', 2023)
                  .set('months', 8)
                  .set('date', 9)
                  .set('hours', 8)
                  .set('minutes', 0)
                  .set('seconds', 0)
                  .set('milliseconds', 0)
                  .utcOffset(0),
                moment()
                  .utc()
                  .set('years', 2023)
                  .set('months', 8)
                  .set('date', 9)
                  .set('hours', 11)
                  .set('minutes', 0)
                  .set('seconds', 0)
                  .set('milliseconds', 0)
                  .utcOffset(0),
              ],
              type: 'server',
              support: 'pc',
              zone: 'eu',
              status: 'down',
            },
          },
          {
            slug: 'server_pc_na',
            status: 'down',
            type: 'server',
            support: 'pc',
            zone: 'na',
            raw: {
              sources: [
                'https://forums.elderscrollsonline.com/en/categories/pts',
              ],
              raw: [
                '• [IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance – August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
              ],
              slugs: ['server_pc_na'],
              rawDate:
                'August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
              dates: [
                moment()
                  .utc()
                  .set('years', 2023)
                  .set('months', 8)
                  .set('date', 9)
                  .set('hours', 8)
                  .set('minutes', 0)
                  .set('seconds', 0)
                  .set('milliseconds', 0)
                  .utcOffset(0),
                moment()
                  .utc()
                  .set('years', 2023)
                  .set('months', 8)
                  .set('date', 9)
                  .set('hours', 11)
                  .set('minutes', 0)
                  .set('seconds', 0)
                  .set('milliseconds', 0)
                  .utcOffset(0),
              ],
              type: 'server',
              support: 'pc',
              zone: 'na',
              status: 'down',
            },
          },
        ]);
      });

      it('should update called', (): void => {
        expect(update).toHaveBeenCalledTimes(4);
      });

      it('should get new status works', (): void => {
        expect(getStatus).toHaveBeenCalledTimes(4); // TODO check le retour de la valeur
      });

      it('should get datas works', (): void => {
        expect(getService).toHaveBeenCalledTimes(4); // TODO check le retour de la valeur
        expect(getArchive).toHaveBeenCalledTimes(4); // TODO check le retour de la valeur
      });

      it('should archive updated', async (): Promise<void> => {
        firstUpdateDate = new Date();
        firstUpdateDate.setMilliseconds(0);

        expect(updateArchive).toHaveBeenCalledTimes(4);
        pcNaForumMessageArchive = await archiveRepository.findOne({
          where: {
            serviceId: 5,
            connector: 'ForumMessage',
          },
        });
        pcEuForumMessageArchive = await archiveRepository.findOne({
          where: {
            serviceId: 6,
            connector: 'ForumMessage',
          },
        });
        expect(pcNaForumMessageArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://forums.elderscrollsonline.com/en/categories/pts',
            ],
            raw: [
              '• [IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance – August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
            ],
            slugs: ['server_pc_na'],
            rawDate: 'August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
            dates: [
              moment()
                .utc()
                .set('years', 2023)
                .set('months', 8)
                .set('date', 9)
                .set('hours', 8)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0)
                .utcOffset(0),
              moment()
                .utc()
                .set('years', 2023)
                .set('months', 8)
                .set('date', 9)
                .set('hours', 11)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0)
                .utcOffset(0),
            ],
            type: 'server',
            support: 'pc',
            zone: 'na',
            status: 'down',
          }),
        );
        expect(pcNaForumMessageArchive.updatedAt).toStrictEqual(
          firstUpdateDate,
        );
        expect(pcNaForumMessageArchive.statusId).toEqual(2);
        expect(pcEuForumMessageArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://forums.elderscrollsonline.com/en/categories/pts',
            ],
            raw: [
              '• [IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance – August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
            ],
            slugs: ['server_pc_eu'],
            rawDate: 'August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
            dates: [
              moment()
                .utc()
                .set('years', 2023)
                .set('months', 8)
                .set('date', 9)
                .set('hours', 8)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0)
                .utcOffset(0),
              moment()
                .utc()
                .set('years', 2023)
                .set('months', 8)
                .set('date', 9)
                .set('hours', 11)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0)
                .utcOffset(0),
            ],
            type: 'server',
            support: 'pc',
            zone: 'eu',
            status: 'down',
          }),
        );
        expect(pcEuForumMessageArchive.updatedAt).toStrictEqual(
          firstUpdateDate,
        );
        expect(pcEuForumMessageArchive.statusId).toEqual(2);
      });

      it('should check methods works', (): void => {
        expect(isPlannedStatus).toHaveBeenCalledTimes(4);
        expect(isPlannedStatus).toHaveNthReturnedWith(3, false);
        expect(isPlannedStatus).toHaveNthReturnedWith(4, false);

        expect(slugChanged).toHaveBeenCalledTimes(4);
        expect(slugChanged).toHaveNthReturnedWith(3, false);
        expect(slugChanged).toHaveNthReturnedWith(4, false);

        expect(rawChanged).toHaveBeenCalledTimes(2);
      });

      it('should updateService not called', (): void => {
        expect(updateService).toHaveBeenCalledTimes(2);
      });

      it('should updateQueue method not called called', (): void => {
        expect(updateQueue).toHaveBeenCalledTimes(2);
      });

      it('should queue has expected', (): void => {
        expectQueue = [];

        expect(scrapingService.queueService.getQueue()).toStrictEqual(
          expectQueue,
        );
      });

      it('should pushQueue method called', (): void => {
        scrapingService.doQueue();
        expect(pushQueue).toHaveBeenCalledTimes(2);
      });

      it('should queue check works', (): void => {
        expect(isQueueEmpty).toHaveBeenCalledTimes(2);
        expect(isQueueEmpty).toHaveNthReturnedWith(2, true);
        expect(getQueue).toHaveBeenCalledTimes(10);
      });
    });

    describe('handle service alerts (down)', (): void => {
      it('handle', async (): Promise<void> => {
        await scrapingService.handleServiceAlerts();

        expect(true).toEqual(true);
      });

      it('should doHandle called', (): void => {
        expect(doHandle).toHaveBeenCalledTimes(3);
      });

      it('should formatData call and format correctly', (): void => {
        expect(formatData).toHaveBeenCalledTimes(3);
        expect(formatData).toHaveNthReturnedWith(3, <EsoStatus[]>[
          {
            slug: 'server_pc_eu',
            status: 'down',
            type: 'server',
            support: 'pc',
            zone: 'eu',
            raw: {
              sources: [
                'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
              ],
              raw: [
                ' />\n  \n<p>2024.07.09 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
              ],
              rawDate: ' />  2024.07.09 - 12:15 UTC (08:15 EDT)',
              rawData:
                'The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
              slugs: ['server_pc_eu'],
              dates: [
                moment()
                  .utc()
                  .set('years', 2024)
                  .set('months', 8)
                  .set('date', 9)
                  .set('hours', 12)
                  .set('minutes', 15)
                  .set('seconds', 0)
                  .set('milliseconds', 0)
                  .utcOffset(0),
              ],
              type: 'server',
              support: 'pc',
              zone: 'eu',
              status: 'down',
            },
          },
          {
            slug: 'server_pc_na',
            status: 'down',
            type: 'server',
            support: 'pc',
            zone: 'na',
            raw: {
              sources: [
                'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
              ],
              raw: [
                ' />\n  \n<p>2024.07.09 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
              ],
              rawDate: ' />  2024.07.09 - 12:15 UTC (08:15 EDT)',
              rawData:
                'The North American PC/Mac megaserver is currently unavailable while we perform maintenance.',
              slugs: ['server_pc_na'],
              dates: [
                moment()
                  .utc()
                  .set('years', 2024)
                  .set('months', 8)
                  .set('date', 9)
                  .set('hours', 12)
                  .set('minutes', 15)
                  .set('seconds', 0)
                  .set('milliseconds', 0)
                  .utcOffset(0),
              ],
              type: 'server',
              support: 'pc',
              zone: 'na',
              status: 'down',
            },
          },
        ]);
      });

      it('should update called', (): void => {
        expect(update).toHaveBeenCalledTimes(6);
      });

      it('should get new status works', (): void => {
        expect(getStatus).toHaveBeenCalledTimes(6); // TODO check le retour de la valeur
      });

      it('should get datas works', (): void => {
        expect(getService).toHaveBeenCalledTimes(6); // TODO check le retour de la valeur
        expect(getArchive).toHaveBeenCalledTimes(6); // TODO check le retour de la valeur
      });

      it('should archive updated', async (): Promise<void> => {
        firstUpdateDate = new Date();
        firstUpdateDate.setMilliseconds(0);

        expect(updateArchive).toHaveBeenCalledTimes(6);
        pcNaServiceAlertsArchive = await archiveRepository.findOne({
          where: {
            serviceId: 5,
            connector: 'ServiceAlerts',
          },
        });
        pcEuServiceAlertsArchive = await archiveRepository.findOne({
          where: {
            serviceId: 6,
            connector: 'ServiceAlerts',
          },
        });
        expect(pcNaServiceAlertsArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            ],
            raw: [
              ' />\n  \n<p>2024.07.09 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
            ],
            rawDate: ' />  2024.07.09 - 12:15 UTC (08:15 EDT)',
            rawData:
              'The North American PC/Mac megaserver is currently unavailable while we perform maintenance.',
            slugs: ['server_pc_na'],
            dates: [
              moment()
                .utc()
                .set('years', 2024)
                .set('months', 8)
                .set('date', 9)
                .set('hours', 12)
                .set('minutes', 15)
                .set('seconds', 0)
                .set('milliseconds', 0)
                .utcOffset(0),
            ],
            type: 'server',
            support: 'pc',
            zone: 'na',
            status: 'down',
          }),
        );
        expect(pcNaServiceAlertsArchive.updatedAt).toStrictEqual(
          firstUpdateDate,
        );
        expect(pcNaServiceAlertsArchive.statusId).toEqual(2);
        expect(pcEuServiceAlertsArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            ],
            raw: [
              ' />\n  \n<p>2024.07.09 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
            ],
            rawDate: ' />  2024.07.09 - 12:15 UTC (08:15 EDT)',
            rawData:
              'The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
            slugs: ['server_pc_eu'],
            dates: [
              moment()
                .utc()
                .set('years', 2024)
                .set('months', 8)
                .set('date', 9)
                .set('hours', 12)
                .set('minutes', 15)
                .set('seconds', 0)
                .set('milliseconds', 0)
                .utcOffset(0),
            ],
            type: 'server',
            support: 'pc',
            zone: 'eu',
            status: 'down',
          }),
        );
        expect(pcEuServiceAlertsArchive.updatedAt).toStrictEqual(
          firstUpdateDate,
        );
        expect(pcEuServiceAlertsArchive.statusId).toEqual(2);
      });

      it('should check methods works', (): void => {
        expect(isPlannedStatus).toHaveBeenCalledTimes(6);
        expect(isPlannedStatus).toHaveNthReturnedWith(5, false);
        expect(isPlannedStatus).toHaveNthReturnedWith(6, false);

        expect(slugChanged).toHaveBeenCalledTimes(6);
        expect(slugChanged).toHaveNthReturnedWith(5, false);
        expect(slugChanged).toHaveNthReturnedWith(6, false);

        expect(rawChanged).toHaveBeenCalledTimes(2);
      });

      it('should updateService not called', (): void => {
        expect(updateService).toHaveBeenCalledTimes(2);
      });

      it('should updateQueue method not called called', (): void => {
        expect(updateQueue).toHaveBeenCalledTimes(2);
      });

      it('should queue has expected', (): void => {
        expectQueue = [];

        expect(scrapingService.queueService.getQueue()).toStrictEqual(
          expectQueue,
        );
      });

      it('should pushQueue method called', (): void => {
        scrapingService.doQueue();
        expect(pushQueue).toHaveBeenCalledTimes(3);
      });

      it('should queue check works', (): void => {
        expect(isQueueEmpty).toHaveBeenCalledTimes(3);
        expect(isQueueEmpty).toHaveNthReturnedWith(3, true);
        expect(getQueue).toHaveBeenCalledTimes(12);
      });
    });

    describe('handle live service (up)', (): void => {
      it('handle', async (): Promise<void> => {
        jest
          .spyOn(LiveServices, 'getData')
          .mockImplementation(async (): Promise<RawEsoStatus[]> => {
            return Promise.resolve(liveServices2);
          });

        jest
          .spyOn(ForumMessage, 'getData')
          .mockImplementation(async (): Promise<RawEsoStatus[]> => {
            return Promise.resolve(forumMessage2);
          });

        jest
          .spyOn(ServiceAlerts, 'getData')
          .mockImplementation(async (): Promise<RawEsoStatus[]> => {
            return Promise.resolve(serviceAlert2);
          });

        await scrapingService.handleLiveServices();

        expect(true).toEqual(true);
      });

      it('should doHandle called', (): void => {
        expect(doHandle).toHaveBeenCalledTimes(4);
      });

      it('should formatData call and format correctly', (): void => {
        expect(formatData).toHaveBeenCalledTimes(4);
        expect(formatData).toHaveNthReturnedWith(4, <EsoStatus[]>[
          {
            slug: 'server_pc_eu',
            status: 'up',
            type: 'server',
            support: 'pc',
            zone: 'eu',
            raw: {
              sources: [
                'https://live-services.elderscrollsonline.com/status/realms',
              ],
              raw: ['The Elder Scrolls Online (EU)', 'UP'],
              rawSlug: 'The Elder Scrolls Online (EU)',
              rawStatus: 'UP',
              slugs: ['server_pc_eu'],
              support: 'pc',
              zone: 'eu',
              status: 'up',
            },
          },
          {
            slug: 'server_pc_na',
            status: 'up',
            type: 'server',
            support: 'pc',
            zone: 'na',
            raw: {
              sources: [
                'https://live-services.elderscrollsonline.com/status/realms',
              ],
              raw: ['The Elder Scrolls Online (NA)', 'UP'],
              rawSlug: 'The Elder Scrolls Online (NA)',
              rawStatus: 'UP',
              slugs: ['server_pc_na'],
              support: 'pc',
              zone: 'na',
              status: 'up',
            },
          },
        ]);
      });

      it('should update called', (): void => {
        expect(update).toHaveBeenCalledTimes(8);
      });

      it('should get new status works', (): void => {
        expect(getStatus).toHaveBeenCalledTimes(8); // TODO check le retour de la valeur
      });

      it('should get datas works', (): void => {
        expect(getService).toHaveBeenCalledTimes(8); // TODO check le retour de la valeur
        expect(getArchive).toHaveBeenCalledTimes(8); // TODO check le retour de la valeur
      });

      it('should archive updated', async (): Promise<void> => {
        firstUpdateDate = new Date();
        firstUpdateDate.setMilliseconds(0);

        expect(updateArchive).toHaveBeenCalledTimes(8);
        pcNaLiveServiceArchive = await archiveRepository.findOne({
          where: {
            serviceId: 5,
            connector: 'LiveServices',
          },
        });
        pcEuLiveServiceArchive = await archiveRepository.findOne({
          where: {
            serviceId: 6,
            connector: 'LiveServices',
          },
        });
        expect(pcNaLiveServiceArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://live-services.elderscrollsonline.com/status/realms',
            ],
            raw: ['The Elder Scrolls Online (NA)', 'UP'],
            rawSlug: 'The Elder Scrolls Online (NA)',
            rawStatus: 'UP',
            slugs: ['server_pc_na'],
            support: 'pc',
            zone: 'na',
            status: 'up',
          }),
        );
        expect(pcNaLiveServiceArchive.updatedAt).toStrictEqual(firstUpdateDate);
        expect(pcNaLiveServiceArchive.statusId).toEqual(1);
        expect(pcEuLiveServiceArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://live-services.elderscrollsonline.com/status/realms',
            ],
            raw: ['The Elder Scrolls Online (EU)', 'UP'],
            rawSlug: 'The Elder Scrolls Online (EU)',
            rawStatus: 'UP',
            slugs: ['server_pc_eu'],
            support: 'pc',
            zone: 'eu',
            status: 'up',
          }),
        );
        expect(pcEuLiveServiceArchive.updatedAt).toStrictEqual(firstUpdateDate);
        expect(pcEuLiveServiceArchive.statusId).toEqual(1);
      });

      it('should check methods works', (): void => {
        expect(isPlannedStatus).toHaveBeenCalledTimes(8);
        expect(isPlannedStatus).toHaveNthReturnedWith(7, false);
        expect(isPlannedStatus).toHaveNthReturnedWith(8, false);

        expect(slugChanged).toHaveBeenCalledTimes(8);
        expect(slugChanged).toHaveNthReturnedWith(7, true);
        expect(slugChanged).toHaveNthReturnedWith(8, true);

        expect(rawChanged).toHaveBeenCalledTimes(4);
        expect(rawChanged).toHaveNthReturnedWith(3, true);
        expect(rawChanged).toHaveNthReturnedWith(4, true);
      });

      it('should update service works', async (): Promise<void> => {
        expect(updateService).toHaveBeenCalledTimes(4);

        pcNa = await serviceRepository.findOne({
          where: {
            id: 5,
          },
        });
        pcEu = await serviceRepository.findOne({
          where: {
            id: 6,
          },
        });

        expect(pcNa.statusId).toEqual(1);
        expect(pcEu.statusId).toEqual(1);
      });

      it('should service controller return correct data', async (): Promise<void> => {
        findOnePcEu = await serviceController.findOne('server_pc_eu');

        findOnePcNa = await serviceController.findOne('server_pc_na');

        expect(findOnePcEu).toStrictEqual({
          raw: <RawEsoStatus>{
            raw: ['The Elder Scrolls Online (EU)', 'UP'],
            rawSlug: 'The Elder Scrolls Online (EU)',
            rawStatus: 'UP',
            slugs: ['server_pc_eu'],
            sources: [
              'https://live-services.elderscrollsonline.com/status/realms',
            ],
            status: 'up',
            support: 'pc',
            zone: 'eu',
          },
          slug: 'server_pc_eu',
          status: 'up',
          support: 'pc',
          type: 'server',
          zone: 'eu',
        });

        expect(findOnePcNa).toStrictEqual({
          raw: <RawEsoStatus>{
            raw: ['The Elder Scrolls Online (NA)', 'UP'],
            rawSlug: 'The Elder Scrolls Online (NA)',
            rawStatus: 'UP',
            slugs: ['server_pc_na'],
            sources: [
              'https://live-services.elderscrollsonline.com/status/realms',
            ],
            status: 'up',
            support: 'pc',
            zone: 'na',
          },
          slug: 'server_pc_na',
          status: 'up',
          support: 'pc',
          type: 'server',
          zone: 'na',
        });
      });

      it('should updateQueue method called', (): void => {
        expect(updateQueue).toHaveBeenCalledTimes(4);
        expect(getQueue).toHaveBeenCalledTimes(14);
        expect(setQueue).toHaveBeenCalledTimes(5);
      });

      it('should queue has expected', (): void => {
        expectQueue = [
          {
            slug: 'server_pc_eu',
            status: 'up',
            type: 'server',
            support: 'pc',
            zone: 'eu',
            raw: {
              sources: [
                'https://live-services.elderscrollsonline.com/status/realms',
              ],
              raw: ['The Elder Scrolls Online (EU)', 'UP'],
              rawSlug: 'The Elder Scrolls Online (EU)',
              rawStatus: 'UP',
              slugs: ['server_pc_eu'],
              support: 'pc',
              zone: 'eu',
              status: 'up',
            },
          },
          {
            slug: 'server_pc_na',
            status: 'up',
            type: 'server',
            support: 'pc',
            zone: 'na',
            raw: {
              sources: [
                'https://live-services.elderscrollsonline.com/status/realms',
              ],
              raw: ['The Elder Scrolls Online (NA)', 'UP'],
              rawSlug: 'The Elder Scrolls Online (NA)',
              rawStatus: 'UP',
              slugs: ['server_pc_na'],
              support: 'pc',
              zone: 'na',
              status: 'up',
            },
          },
        ];

        expect(scrapingService.queueService.getQueue()).toStrictEqual(
          expectQueue,
        );
      });

      it('should queueService event send and received by client', async (): Promise<void> => {
        await new Promise<void>((resolve): void => {
          clientSocket.on('statusUpdate', (data: EsoStatus[]): void => {
            expect(data).toEqual(expectQueue);
            resolve();
          });

          scrapingService.doQueue();
        });
      }, 15000);

      it('should pushQueue method called', (): void => {
        expect(pushQueue).toHaveBeenCalledTimes(4);
      });

      it('should queue check works', (): void => {
        expect(isQueueEmpty).toHaveBeenCalledTimes(4);
        expect(isQueueEmpty).toHaveNthReturnedWith(4, false);
        expect(getQueue).toHaveBeenCalledTimes(18);
      });

      it('should empty queue works', (): void => {
        expect(emptyQueue).toHaveBeenCalledTimes(2);
        expect(scrapingService.queueService.getQueue()).toStrictEqual([]);
        expect(setQueue).toHaveBeenCalledTimes(6);
      });
    });

    describe('handle forum message (up)', (): void => {
      it('handle', async (): Promise<void> => {
        await scrapingService.handleForumMessage();

        expect(true).toEqual(true);
      });

      it('should doHandle called', (): void => {
        expect(doHandle).toHaveBeenCalledTimes(5);
      });

      it('should formatData call and format correctly', (): void => {
        expect(formatData).toHaveBeenCalledTimes(5);
        expect(formatData).toHaveNthReturnedWith(5, <EsoStatus[]>[
          {
            slug: 'server_pc_eu',
            status: 'up',
            type: 'server',
            support: 'pc',
            zone: 'eu',
            raw: {
              sources: [
                'https://forums.elderscrollsonline.com/en/categories/pts',
              ],
              raw: [
                '• [COMPLETE] PC/Mac: NA and EU megaservers for maintenance – August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
              ],
              slugs: ['server_pc_eu'],
              rawDate:
                'August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
              dates: [
                moment()
                  .utc()
                  .set('years', 2023)
                  .set('months', 8)
                  .set('date', 9)
                  .set('hours', 8)
                  .set('minutes', 0)
                  .set('seconds', 0)
                  .set('milliseconds', 0)
                  .utcOffset(0),
                moment()
                  .utc()
                  .set('years', 2023)
                  .set('months', 8)
                  .set('date', 9)
                  .set('hours', 11)
                  .set('minutes', 0)
                  .set('seconds', 0)
                  .set('milliseconds', 0)
                  .utcOffset(0),
              ],
              type: 'server',
              support: 'pc',
              zone: 'eu',
              status: 'up',
            },
          },
          {
            slug: 'server_pc_na',
            status: 'up',
            type: 'server',
            support: 'pc',
            zone: 'na',
            raw: {
              sources: [
                'https://forums.elderscrollsonline.com/en/categories/pts',
              ],
              raw: [
                '• [COMPLETE] PC/Mac: NA and EU megaservers for maintenance – August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
              ],
              slugs: ['server_pc_na'],
              rawDate:
                'August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
              dates: [
                moment()
                  .utc()
                  .set('years', 2023)
                  .set('months', 8)
                  .set('date', 9)
                  .set('hours', 8)
                  .set('minutes', 0)
                  .set('seconds', 0)
                  .set('milliseconds', 0)
                  .utcOffset(0),
                moment()
                  .utc()
                  .set('years', 2023)
                  .set('months', 8)
                  .set('date', 9)
                  .set('hours', 11)
                  .set('minutes', 0)
                  .set('seconds', 0)
                  .set('milliseconds', 0)
                  .utcOffset(0),
              ],
              type: 'server',
              support: 'pc',
              zone: 'na',
              status: 'up',
            },
          },
        ]);
      });

      it('should update called', (): void => {
        expect(update).toHaveBeenCalledTimes(10);
      });

      it('should get new status works', (): void => {
        expect(getStatus).toHaveBeenCalledTimes(10); // TODO check le retour de la valeur
      });

      it('should get datas works', (): void => {
        expect(getService).toHaveBeenCalledTimes(10); // TODO check le retour de la valeur
        expect(getArchive).toHaveBeenCalledTimes(10); // TODO check le retour de la valeur
      });

      it('should archive updated', async (): Promise<void> => {
        firstUpdateDate = new Date();
        firstUpdateDate.setMilliseconds(0);

        expect(updateArchive).toHaveBeenCalledTimes(10);
        pcNaForumMessageArchive = await archiveRepository.findOne({
          where: {
            serviceId: 5,
            connector: 'ForumMessage',
          },
        });
        pcEuForumMessageArchive = await archiveRepository.findOne({
          where: {
            serviceId: 6,
            connector: 'ForumMessage',
          },
        });
        expect(pcNaForumMessageArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://forums.elderscrollsonline.com/en/categories/pts',
            ],
            raw: [
              '• [COMPLETE] PC/Mac: NA and EU megaservers for maintenance – August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
            ],
            slugs: ['server_pc_na'],
            rawDate: 'August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
            dates: [
              moment()
                .utc()
                .set('years', 2023)
                .set('months', 8)
                .set('date', 9)
                .set('hours', 8)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0)
                .utcOffset(0),
              moment()
                .utc()
                .set('years', 2023)
                .set('months', 8)
                .set('date', 9)
                .set('hours', 11)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0)
                .utcOffset(0),
            ],
            type: 'server',
            support: 'pc',
            zone: 'na',
            status: 'up',
          }),
        );
        expect(pcNaForumMessageArchive.updatedAt).toStrictEqual(
          firstUpdateDate,
        );
        expect(pcNaForumMessageArchive.statusId).toEqual(1);
        expect(pcEuForumMessageArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://forums.elderscrollsonline.com/en/categories/pts',
            ],
            raw: [
              '• [COMPLETE] PC/Mac: NA and EU megaservers for maintenance – August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
            ],
            slugs: ['server_pc_eu'],
            rawDate: 'August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
            dates: [
              moment()
                .utc()
                .set('years', 2023)
                .set('months', 8)
                .set('date', 9)
                .set('hours', 8)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0)
                .utcOffset(0),
              moment()
                .utc()
                .set('years', 2023)
                .set('months', 8)
                .set('date', 9)
                .set('hours', 11)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0)
                .utcOffset(0),
            ],
            type: 'server',
            support: 'pc',
            zone: 'eu',
            status: 'up',
          }),
        );
        expect(pcEuForumMessageArchive.updatedAt).toStrictEqual(
          firstUpdateDate,
        );
        expect(pcEuForumMessageArchive.statusId).toEqual(1);
      });

      it('should check methods works', (): void => {
        expect(isPlannedStatus).toHaveBeenCalledTimes(10);
        expect(isPlannedStatus).toHaveNthReturnedWith(9, false);
        expect(isPlannedStatus).toHaveNthReturnedWith(10, false);

        expect(slugChanged).toHaveBeenCalledTimes(10);
        expect(slugChanged).toHaveNthReturnedWith(9, false);
        expect(slugChanged).toHaveNthReturnedWith(10, false);

        expect(rawChanged).toHaveBeenCalledTimes(4);
      });

      it('should updateService not called', (): void => {
        expect(updateService).toHaveBeenCalledTimes(4);
      });

      it('should updateQueue method not called called', (): void => {
        expect(updateQueue).toHaveBeenCalledTimes(4);
      });

      it('should queue has expected', (): void => {
        expectQueue = [];

        expect(scrapingService.queueService.getQueue()).toStrictEqual(
          expectQueue,
        );
      });

      it('should pushQueue method called', (): void => {
        scrapingService.doQueue();
        expect(pushQueue).toHaveBeenCalledTimes(5);
      });

      it('should queue check works', (): void => {
        expect(isQueueEmpty).toHaveBeenCalledTimes(5);
        expect(isQueueEmpty).toHaveNthReturnedWith(5, true);
        expect(getQueue).toHaveBeenCalledTimes(21);
      });
    });

    describe('handle service alerts (up)', (): void => {
      it('handle', async (): Promise<void> => {
        await scrapingService.handleServiceAlerts();

        expect(true).toEqual(true);
      });

      it('should doHandle called', (): void => {
        expect(doHandle).toHaveBeenCalledTimes(6);
      });

      it('should formatData call and format correctly', (): void => {
        expect(formatData).toHaveBeenCalledTimes(6);
        expect(formatData).toHaveNthReturnedWith(6, <EsoStatus[]>[
          {
            slug: 'server_pc_eu',
            status: 'up',
            type: 'server',
            support: 'pc',
            zone: 'eu',
            raw: {
              sources: [
                'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
              ],
              raw: [
                ' />\n  \n<p>2024.07.09 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
              ],
              rawDate: ' />  2024.07.09 - 12:15 UTC (08:15 EDT)',
              rawData: 'The European PC/Mac megaserver is currently available.',
              slugs: ['server_pc_eu'],
              dates: [
                moment()
                  .utc()
                  .set('years', 2024)
                  .set('months', 8)
                  .set('date', 9)
                  .set('hours', 12)
                  .set('minutes', 15)
                  .set('seconds', 0)
                  .set('milliseconds', 0)
                  .utcOffset(0),
              ],
              type: 'server',
              support: 'pc',
              zone: 'eu',
              status: 'up',
            },
          },
          {
            slug: 'server_pc_na',
            status: 'up',
            type: 'server',
            support: 'pc',
            zone: 'na',
            raw: {
              sources: [
                'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
              ],
              raw: [
                ' />\n  \n<p>2024.07.09 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
              ],
              rawDate: ' />  2024.07.09 - 12:15 UTC (08:15 EDT)',
              rawData:
                'The North American PC/Mac megaserver is currently available.',
              slugs: ['server_pc_na'],
              dates: [
                moment()
                  .utc()
                  .set('years', 2024)
                  .set('months', 8)
                  .set('date', 9)
                  .set('hours', 12)
                  .set('minutes', 15)
                  .set('seconds', 0)
                  .set('milliseconds', 0)
                  .utcOffset(0),
              ],
              type: 'server',
              support: 'pc',
              zone: 'na',
              status: 'up',
            },
          },
        ]);
      });

      it('should update called', (): void => {
        expect(update).toHaveBeenCalledTimes(12);
      });

      it('should get new status works', (): void => {
        expect(getStatus).toHaveBeenCalledTimes(12); // TODO check le retour de la valeur
      });

      it('should get datas works', (): void => {
        expect(getService).toHaveBeenCalledTimes(12); // TODO check le retour de la valeur
        expect(getArchive).toHaveBeenCalledTimes(12); // TODO check le retour de la valeur
      });

      it('should archive updated', async (): Promise<void> => {
        firstUpdateDate = new Date();
        firstUpdateDate.setMilliseconds(0);

        expect(updateArchive).toHaveBeenCalledTimes(12);
        pcNaServiceAlertsArchive = await archiveRepository.findOne({
          where: {
            serviceId: 5,
            connector: 'ServiceAlerts',
          },
        });
        pcEuServiceAlertsArchive = await archiveRepository.findOne({
          where: {
            serviceId: 6,
            connector: 'ServiceAlerts',
          },
        });
        expect(pcNaServiceAlertsArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            ],
            raw: [
              ' />\n  \n<p>2024.07.09 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
            ],
            rawDate: ' />  2024.07.09 - 12:15 UTC (08:15 EDT)',
            rawData:
              'The North American PC/Mac megaserver is currently available.',
            slugs: ['server_pc_na'],
            dates: [
              moment()
                .utc()
                .set('years', 2024)
                .set('months', 8)
                .set('date', 9)
                .set('hours', 12)
                .set('minutes', 15)
                .set('seconds', 0)
                .set('milliseconds', 0)
                .utcOffset(0),
            ],
            type: 'server',
            support: 'pc',
            zone: 'na',
            status: 'up',
          }),
        );
        expect(pcNaServiceAlertsArchive.updatedAt).toStrictEqual(
          firstUpdateDate,
        );
        expect(pcNaServiceAlertsArchive.statusId).toEqual(1);
        expect(pcEuServiceAlertsArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            ],
            raw: [
              ' />\n  \n<p>2024.07.09 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
            ],
            rawDate: ' />  2024.07.09 - 12:15 UTC (08:15 EDT)',
            rawData: 'The European PC/Mac megaserver is currently available.',
            slugs: ['server_pc_eu'],
            dates: [
              moment()
                .utc()
                .set('years', 2024)
                .set('months', 8)
                .set('date', 9)
                .set('hours', 12)
                .set('minutes', 15)
                .set('seconds', 0)
                .set('milliseconds', 0)
                .utcOffset(0),
            ],
            type: 'server',
            support: 'pc',
            zone: 'eu',
            status: 'up',
          }),
        );
        expect(pcEuServiceAlertsArchive.updatedAt).toStrictEqual(
          firstUpdateDate,
        );
        expect(pcEuServiceAlertsArchive.statusId).toEqual(1);
      });

      it('should check methods works', (): void => {
        expect(isPlannedStatus).toHaveBeenCalledTimes(12);
        expect(isPlannedStatus).toHaveNthReturnedWith(11, false);
        expect(isPlannedStatus).toHaveNthReturnedWith(12, false);

        expect(slugChanged).toHaveBeenCalledTimes(12);
        expect(slugChanged).toHaveNthReturnedWith(11, false);
        expect(slugChanged).toHaveNthReturnedWith(12, false);

        expect(rawChanged).toHaveBeenCalledTimes(4);
      });

      it('should updateService not called', (): void => {
        expect(updateService).toHaveBeenCalledTimes(4);
      });

      it('should updateQueue method not called called', (): void => {
        expect(updateQueue).toHaveBeenCalledTimes(4);
      });

      it('should queue has expected', (): void => {
        expectQueue = [];

        expect(scrapingService.queueService.getQueue()).toStrictEqual(
          expectQueue,
        );
      });

      it('should pushQueue method called', (): void => {
        scrapingService.doQueue();
        expect(pushQueue).toHaveBeenCalledTimes(6);
      });

      it('should queue check works', async (): Promise<void> => {
        expect(isQueueEmpty).toHaveBeenCalledTimes(6);
        expect(isQueueEmpty).toHaveNthReturnedWith(6, true);
        expect(getQueue).toHaveBeenCalledTimes(23);

        await after();
      });
    });
  });

  describe('revived planned status', (): void => {
    const forumMessage: RawEsoStatus[] = [
      {
        sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
        raw: [
          '• PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
        ],
        slugs: ['server_pc_eu'],
        rawDate: 'July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2023)
            .set('months', 7)
            .set('date', 26)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2023)
            .set('months', 7)
            .set('date', 26)
            .set('hours', 12)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        type: 'server',
        support: 'pc',
        zone: 'eu',
        status: 'planned',
      },
      {
        sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
        raw: [
          '• PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
        ],
        slugs: ['server_pc_na'],
        rawDate: 'July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2023)
            .set('months', 7)
            .set('date', 26)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2023)
            .set('months', 7)
            .set('date', 26)
            .set('hours', 12)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'planned',
      },
    ];

    let pcNa: Service;
    let pcEu: Service;

    let findOnePcEu: EsoStatus;
    let findOnePcNa: EsoStatus;

    let pcNaForumMessageArchive: Archive;
    let pcEuForumMessageArchive: Archive;

    let firstUpdateDate: Date;

    let expectQueue: EsoStatus[];

    describe('prepare test', (): void => {
      it('start test', async (): Promise<void> => {
        await before();

        expect(true).toStrictEqual(true);
      }, 15000);

      it('should queue empty', (): void => {
        expect(scrapingService.queueService.getQueue()).toStrictEqual([]);
      });

      it('update service status to up', async (): Promise<void> => {
        pcNa = await serviceRepository.findOne({
          where: {
            id: 5,
          },
        });
        pcEu = await serviceRepository.findOne({
          where: {
            id: 6,
          },
        });

        pcEu.statusId = 1;
        pcEu.rawData = JSON.stringify(<RawEsoStatus>{
          raw: ['The Elder Scrolls Online (EU)', 'UP'],
          rawSlug: 'The Elder Scrolls Online (EU)',
          rawStatus: 'UP',
          slugs: ['server_pc_eu'],
          sources: [
            'https://live-services.elderscrollsonline.com/status/realms',
          ],
          status: 'up',
          support: 'pc',
          zone: 'eu',
        });
        pcNa.statusId = 1;
        pcNa.rawData = JSON.stringify(<RawEsoStatus>{
          raw: ['The Elder Scrolls Online (NA)', 'UP'],
          rawSlug: 'The Elder Scrolls Online (NA)',
          rawStatus: 'UP',
          slugs: ['server_pc_na'],
          sources: [
            'https://live-services.elderscrollsonline.com/status/realms',
          ],
          status: 'up',
          support: 'pc',
          zone: 'na',
        });

        await serviceRepository.save(pcEu);
        await serviceRepository.save(pcNa);

        pcNa = await serviceRepository.findOne({
          where: {
            id: 5,
          },
        });
        pcEu = await serviceRepository.findOne({
          where: {
            id: 6,
          },
        });

        expect(pcNa.statusId).toEqual(1);
        expect(pcNa.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            raw: ['The Elder Scrolls Online (NA)', 'UP'],
            rawSlug: 'The Elder Scrolls Online (NA)',
            rawStatus: 'UP',
            slugs: ['server_pc_na'],
            sources: [
              'https://live-services.elderscrollsonline.com/status/realms',
            ],
            status: 'up',
            support: 'pc',
            zone: 'na',
          }),
        );
        expect(pcEu.statusId).toEqual(1);
        expect(pcEu.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            raw: ['The Elder Scrolls Online (EU)', 'UP'],
            rawSlug: 'The Elder Scrolls Online (EU)',
            rawStatus: 'UP',
            slugs: ['server_pc_eu'],
            sources: [
              'https://live-services.elderscrollsonline.com/status/realms',
            ],
            status: 'up',
            support: 'pc',
            zone: 'eu',
          }),
        );
      });

      it('update ForumMessage archive', async (): Promise<void> => {
        pcEuForumMessageArchive = await archiveRepository.findOne({
          where: {
            connector: 'ForumMessage',
            serviceId: 6,
          },
        });
        pcNaForumMessageArchive = await archiveRepository.findOne({
          where: {
            connector: 'ForumMessage',
            serviceId: 5,
          },
        });

        pcEuForumMessageArchive.statusId = 1;
        pcEuForumMessageArchive.rawData = JSON.stringify(<RawEsoStatus>{
          sources: [
            'https://forums.elderscrollsonline.com/,https://forums.elderscrollsonline.com/en/categories/pts',
          ],
          raw: [
            '• [COMPLETE] PC/Mac: EU megaserver for patch maintenance – September 7, 4:00AM EDT (8:00 UTC) – 12:00PM EDT (16:00 UTC)',
          ],
          slugs: ['server_pc_eu'],
          rawDate:
            'September 7, 4:00AM EDT (8:00 UTC) – 12:00PM EDT (16:00 UTC)',
          dates: [
            moment()
              .utc()
              .set('years', 2023)
              .set('months', 9)
              .set('date', 7)
              .set('hours', 8)
              .set('minutes', 0)
              .set('seconds', 0)
              .set('milliseconds', 0),
            moment()
              .utc()
              .set('years', 2023)
              .set('months', 9)
              .set('date', 7)
              .set('hours', 16)
              .set('minutes', 0)
              .set('seconds', 0)
              .set('milliseconds', 0),
          ],
          type: 'server',
          support: 'pc',
          zone: 'eu',
          status: 'up',
        });
        pcNaForumMessageArchive.statusId = 1;
        pcNaForumMessageArchive.rawData = JSON.stringify(<RawEsoStatus>{
          sources: [
            'https://forums.elderscrollsonline.com/,https://forums.elderscrollsonline.com/en/categories/pts',
          ],
          raw: [
            '• [COMPLETE] PC/Mac: NA megaserver for patch maintenance – September 7, 4:00AM EDT (8:00 UTC) – 10:00AM EDT (14:00 UTC)',
          ],
          slugs: ['server_pc_na'],
          rawDate:
            'September 7, 4:00AM EDT (8:00 UTC) – 10:00AM EDT (14:00 UTC)',
          dates: [
            moment()
              .utc()
              .set('years', 2023)
              .set('months', 9)
              .set('date', 7)
              .set('hours', 8)
              .set('minutes', 0)
              .set('seconds', 0)
              .set('milliseconds', 0),
            moment()
              .utc()
              .set('years', 2023)
              .set('months', 9)
              .set('date', 7)
              .set('hours', 16)
              .set('minutes', 0)
              .set('seconds', 0)
              .set('milliseconds', 0),
          ],
          type: 'server',
          support: 'pc',
          zone: 'na',
          status: 'up',
        });

        await archiveRepository.save(pcEuForumMessageArchive);
        await archiveRepository.save(pcNaForumMessageArchive);

        pcEuForumMessageArchive = await archiveRepository.findOne({
          where: {
            connector: 'ForumMessage',
            serviceId: 6,
          },
        });
        pcNaForumMessageArchive = await archiveRepository.findOne({
          where: {
            connector: 'ForumMessage',
            serviceId: 5,
          },
        });

        expect(pcEuForumMessageArchive.statusId).toEqual(1);
        expect(pcEuForumMessageArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://forums.elderscrollsonline.com/,https://forums.elderscrollsonline.com/en/categories/pts',
            ],
            raw: [
              '• [COMPLETE] PC/Mac: EU megaserver for patch maintenance – September 7, 4:00AM EDT (8:00 UTC) – 12:00PM EDT (16:00 UTC)',
            ],
            slugs: ['server_pc_eu'],
            rawDate:
              'September 7, 4:00AM EDT (8:00 UTC) – 12:00PM EDT (16:00 UTC)',
            dates: [
              moment()
                .utc()
                .set('years', 2023)
                .set('months', 9)
                .set('date', 7)
                .set('hours', 8)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0),
              moment()
                .utc()
                .set('years', 2023)
                .set('months', 9)
                .set('date', 7)
                .set('hours', 16)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0),
            ],
            type: 'server',
            support: 'pc',
            zone: 'eu',
            status: 'up',
          }),
        );
        expect(pcNaForumMessageArchive.statusId).toEqual(1);
        expect(pcNaForumMessageArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://forums.elderscrollsonline.com/,https://forums.elderscrollsonline.com/en/categories/pts',
            ],
            raw: [
              '• [COMPLETE] PC/Mac: NA megaserver for patch maintenance – September 7, 4:00AM EDT (8:00 UTC) – 10:00AM EDT (14:00 UTC)',
            ],
            slugs: ['server_pc_na'],
            rawDate:
              'September 7, 4:00AM EDT (8:00 UTC) – 10:00AM EDT (14:00 UTC)',
            dates: [
              moment()
                .utc()
                .set('years', 2023)
                .set('months', 9)
                .set('date', 7)
                .set('hours', 8)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0),
              moment()
                .utc()
                .set('years', 2023)
                .set('months', 9)
                .set('date', 7)
                .set('hours', 16)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0),
            ],
            type: 'server',
            support: 'pc',
            zone: 'na',
            status: 'up',
          }),
        );
      });

      it('should services is up', async (): Promise<void> => {
        pcNa = await serviceRepository.findOne({
          where: {
            id: 5,
          },
        });
        pcEu = await serviceRepository.findOne({
          where: {
            id: 6,
          },
        });

        expect(pcNa.statusId).toEqual(1);
        expect(pcEu.statusId).toEqual(1);
      });

      it('should service controller return correct data', async (): Promise<void> => {
        findOnePcEu = await serviceController.findOne('server_pc_eu');

        findOnePcNa = await serviceController.findOne('server_pc_na');

        expect(findOnePcEu).toStrictEqual(<EsoStatus>{
          raw: {
            raw: ['The Elder Scrolls Online (EU)', 'UP'],
            rawSlug: 'The Elder Scrolls Online (EU)',
            rawStatus: 'UP',
            slugs: ['server_pc_eu'],
            sources: [
              'https://live-services.elderscrollsonline.com/status/realms',
            ],
            status: 'up',
            support: 'pc',
            zone: 'eu',
          },
          slug: 'server_pc_eu',
          status: 'up',
          support: 'pc',
          type: 'server',
          zone: 'eu',
        });

        expect(findOnePcNa).toStrictEqual(<EsoStatus>{
          raw: {
            raw: ['The Elder Scrolls Online (NA)', 'UP'],
            rawSlug: 'The Elder Scrolls Online (NA)',
            rawStatus: 'UP',
            slugs: ['server_pc_na'],
            sources: [
              'https://live-services.elderscrollsonline.com/status/realms',
            ],
            status: 'up',
            support: 'pc',
            zone: 'na',
          },
          slug: 'server_pc_na',
          status: 'up',
          support: 'pc',
          type: 'server',
          zone: 'na',
        });
      });
    });

    describe('handle forum message (planned)', (): void => {
      it('handle', async (): Promise<void> => {
        jest
          .spyOn(ForumMessage, 'getData')
          .mockImplementation(async (): Promise<RawEsoStatus[]> => {
            return Promise.resolve(forumMessage);
          });

        await scrapingService.handleForumMessage();

        expect(true).toEqual(true);
      });

      it('should doHandle called', (): void => {
        expect(doHandle).toHaveBeenCalledTimes(1);
      });

      it('should formatData call and format correctly', (): void => {
        expect(formatData).toHaveBeenCalledTimes(1);
        expect(formatData).toHaveNthReturnedWith(1, <EsoStatus[]>[
          {
            slug: 'server_pc_eu',
            status: 'planned',
            type: 'server',
            support: 'pc',
            zone: 'eu',
            raw: {
              sources: [
                'https://forums.elderscrollsonline.com/en/categories/pts',
              ],
              raw: [
                '• PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
              ],
              slugs: ['server_pc_eu'],
              rawDate:
                'July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
              dates: [
                moment()
                  .utc()
                  .set('years', 2023)
                  .set('months', 7)
                  .set('date', 26)
                  .set('hours', 8)
                  .set('minutes', 0)
                  .set('seconds', 0)
                  .set('milliseconds', 0)
                  .utcOffset(0),
                moment()
                  .utc()
                  .set('years', 2023)
                  .set('months', 7)
                  .set('date', 26)
                  .set('hours', 12)
                  .set('minutes', 0)
                  .set('seconds', 0)
                  .set('milliseconds', 0)
                  .utcOffset(0),
              ],
              type: 'server',
              support: 'pc',
              zone: 'eu',
              status: 'planned',
            },
          },
          {
            slug: 'server_pc_na',
            status: 'planned',
            type: 'server',
            support: 'pc',
            zone: 'na',
            raw: {
              sources: [
                'https://forums.elderscrollsonline.com/en/categories/pts',
              ],
              raw: [
                '• PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
              ],
              slugs: ['server_pc_na'],
              rawDate:
                'July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
              dates: [
                moment()
                  .utc()
                  .set('years', 2023)
                  .set('months', 7)
                  .set('date', 26)
                  .set('hours', 8)
                  .set('minutes', 0)
                  .set('seconds', 0)
                  .set('milliseconds', 0)
                  .utcOffset(0),
                moment()
                  .utc()
                  .set('years', 2023)
                  .set('months', 7)
                  .set('date', 26)
                  .set('hours', 12)
                  .set('minutes', 0)
                  .set('seconds', 0)
                  .set('milliseconds', 0)
                  .utcOffset(0),
              ],
              type: 'server',
              support: 'pc',
              zone: 'na',
              status: 'planned',
            },
          },
        ]);
      });

      it('should update called', (): void => {
        expect(update).toHaveBeenCalledTimes(2);
      });

      it('should get new status works', (): void => {
        expect(getStatus).toHaveBeenCalledTimes(2); // TODO check le retour de la valeur
      });

      it('should get datas works', (): void => {
        expect(getService).toHaveBeenCalledTimes(2); // TODO check le retour de la valeur
        expect(getArchive).toHaveBeenCalledTimes(2); // TODO check le retour de la valeur
      });

      it('should archive updated', async (): Promise<void> => {
        firstUpdateDate = new Date();
        firstUpdateDate.setMilliseconds(0);

        expect(updateArchive).toHaveBeenCalledTimes(2);
        pcNaForumMessageArchive = await archiveRepository.findOne({
          where: {
            serviceId: 5,
            connector: 'ForumMessage',
          },
        });
        pcEuForumMessageArchive = await archiveRepository.findOne({
          where: {
            serviceId: 6,
            connector: 'ForumMessage',
          },
        });
        expect(pcNaForumMessageArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://forums.elderscrollsonline.com/en/categories/pts',
            ],
            raw: [
              '• PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
            ],
            slugs: ['server_pc_na'],
            rawDate: 'July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
            dates: [
              moment()
                .utc()
                .set('years', 2023)
                .set('months', 7)
                .set('date', 26)
                .set('hours', 8)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0)
                .utcOffset(0),
              moment()
                .utc()
                .set('years', 2023)
                .set('months', 7)
                .set('date', 26)
                .set('hours', 12)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0)
                .utcOffset(0),
            ],
            type: 'server',
            support: 'pc',
            zone: 'na',
            status: 'planned',
          }),
        );
        expect(pcNaForumMessageArchive.updatedAt).toStrictEqual(
          firstUpdateDate,
        );
        expect(pcNaForumMessageArchive.statusId).toEqual(4);
        expect(pcEuForumMessageArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://forums.elderscrollsonline.com/en/categories/pts',
            ],
            raw: [
              '• PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
            ],
            slugs: ['server_pc_eu'],
            rawDate: 'July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
            dates: [
              moment()
                .utc()
                .set('years', 2023)
                .set('months', 7)
                .set('date', 26)
                .set('hours', 8)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0)
                .utcOffset(0),
              moment()
                .utc()
                .set('years', 2023)
                .set('months', 7)
                .set('date', 26)
                .set('hours', 12)
                .set('minutes', 0)
                .set('seconds', 0)
                .set('milliseconds', 0)
                .utcOffset(0),
            ],
            type: 'server',
            support: 'pc',
            zone: 'eu',
            status: 'planned',
          }),
        );
        expect(pcEuForumMessageArchive.updatedAt).toStrictEqual(
          firstUpdateDate,
        );
        expect(pcEuForumMessageArchive.statusId).toEqual(4);
      });

      it('should check methods works', (): void => {
        expect(isPlannedStatus).toHaveBeenCalledTimes(2);
        expect(isPlannedStatus).toHaveNthReturnedWith(1, true);
        expect(isPlannedStatus).toHaveNthReturnedWith(2, true);

        expect(slugChanged).toHaveBeenCalledTimes(0);
        expect(rawChanged).toHaveBeenCalledTimes(0);
      });

      it('should updateService not called', (): void => {
        expect(updateService).toHaveBeenCalledTimes(0);
      });

      it('should updateQueue method not called called', (): void => {
        expect(updateQueue).toHaveBeenCalledTimes(0);
      });

      it('should queue has expected', (): void => {
        expectQueue = [];

        expect(scrapingService.queueService.getQueue()).toStrictEqual(
          expectQueue,
        );
      });

      it('should pushQueue method called', (): void => {
        scrapingService.doQueue();
        expect(pushQueue).toHaveBeenCalledTimes(1);
      });

      it('should queue check works', async (): Promise<void> => {
        expect(isQueueEmpty).toHaveBeenCalledTimes(1);
        expect(isQueueEmpty).toHaveNthReturnedWith(1, true);
        expect(getQueue).toHaveBeenCalledTimes(3);

        await after();
      });
    });
  });

  // TODO add update loop between liveService and service alert
});
