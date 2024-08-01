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
let archiveChanged: jest.SpyInstance<boolean>;
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
  archiveChanged = jest.spyOn(scrapingService, 'archiveChanged');
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
    const forumMessageUpLate: RawEsoStatus[] = [
      {
        sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
        raw: [
          '• PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
        ],
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
        slugs: ['server_pc_eu'],
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
        slugs: ['server_pc_na'],
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'planned',
      },
    ];
    const serviceAlertsUpLate: RawEsoStatus[] = [
      {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          ' />\n  \n<p>2024.07.19 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
        ],
        rawData: 'The European PC/Mac megaserver is currently available.',
        rawDate: ' />  2024.07.19 - 12:15 UTC (08:15 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7)
            .set('date', 19)
            .set('hours', 12)
            .set('minutes', 15)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        slugs: ['server_pc_eu'],
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
          ' />\n  \n<p>2024.07.19 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
        ],
        rawData: 'The North American PC/Mac megaserver is currently available.',
        rawDate: ' />  2024.07.19 - 12:15 UTC (08:15 EDT)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7)
            .set('date', 19)
            .set('hours', 12)
            .set('minutes', 15)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        slugs: ['server_pc_na'],
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'up',
      },
    ];
    const liveServicesDown: RawEsoStatus[] = [
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
    const forumMessageDown: RawEsoStatus[] = [
      {
        sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
        raw: [
          '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
        ],
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
        slugs: ['server_pc_eu'],
        type: 'server',
        support: 'pc',
        zone: 'eu',
        status: 'down',
      },
      {
        sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
        raw: [
          '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
        ],
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
        slugs: ['server_pc_na'],
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'down',
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

    let updateDate: Date;

    let expectQueue: EsoStatus[];

    describe('prepare test', (): void => {
      it('should queue empty', async (): Promise<void> => {
        await before();

        expect(scrapingService.queueService.getQueue()).toStrictEqual([]);
      }, 15000);

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
      }, 15000);

      it('update LiveServices archive', async (): Promise<void> => {
        pcEuLiveServiceArchive = await archiveRepository.findOne({
          where: {
            connector: 'LiveServices',
            serviceId: 6,
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
        await archiveRepository.save(pcEuLiveServiceArchive);
        pcEuLiveServiceArchive = await archiveRepository.findOne({
          where: {
            connector: 'LiveServices',
            serviceId: 6,
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

        pcNaLiveServiceArchive = await archiveRepository.findOne({
          where: {
            connector: 'LiveServices',
            serviceId: 5,
          },
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
        await archiveRepository.save(pcNaLiveServiceArchive);
        pcNaLiveServiceArchive = await archiveRepository.findOne({
          where: {
            connector: 'LiveServices',
            serviceId: 5,
          },
        });
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
      }, 15000);

      it('update ForumMessage archive', async (): Promise<void> => {
        pcEuForumMessageArchive = await archiveRepository.findOne({
          where: {
            connector: 'ForumMessage',
            serviceId: 6,
          },
        });
        pcEuForumMessageArchive.statusId = 4;
        pcEuForumMessageArchive.rawData = JSON.stringify(<RawEsoStatus>{
          sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
          raw: [
            '• PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
          ],
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
          slugs: ['server_pc_eu'],
          type: 'server',
          support: 'pc',
          zone: 'eu',
          status: 'planned',
        });
        await archiveRepository.save(pcEuForumMessageArchive);
        pcEuForumMessageArchive = await archiveRepository.findOne({
          where: {
            connector: 'ForumMessage',
            serviceId: 6,
          },
        });
        expect(pcEuForumMessageArchive.statusId).toEqual(4);
        expect(pcEuForumMessageArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://forums.elderscrollsonline.com/en/categories/pts',
            ],
            raw: [
              '• PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
            ],
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
            slugs: ['server_pc_eu'],
            type: 'server',
            support: 'pc',
            zone: 'eu',
            status: 'planned',
          }),
        );

        pcNaForumMessageArchive = await archiveRepository.findOne({
          where: {
            connector: 'ForumMessage',
            serviceId: 5,
          },
        });
        pcNaForumMessageArchive.statusId = 4;
        pcNaForumMessageArchive.rawData = JSON.stringify(<RawEsoStatus>{
          sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
          raw: [
            '• PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
          ],
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
          slugs: ['server_pc_na'],
          type: 'server',
          support: 'pc',
          zone: 'na',
          status: 'planned',
        });
        await archiveRepository.save(pcNaForumMessageArchive);
        pcNaForumMessageArchive = await archiveRepository.findOne({
          where: {
            connector: 'ForumMessage',
            serviceId: 5,
          },
        });
        expect(pcNaForumMessageArchive.statusId).toEqual(4);
        expect(pcNaForumMessageArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://forums.elderscrollsonline.com/en/categories/pts',
            ],
            raw: [
              '• PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
            ],
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
            slugs: ['server_pc_na'],
            type: 'server',
            support: 'pc',
            zone: 'na',
            status: 'planned',
          }),
        );
      }, 15000);

      it('update ServiceAlerts archive', async (): Promise<void> => {
        pcEuServiceAlertsArchive = await archiveRepository.findOne({
          where: {
            connector: 'ServiceAlerts',
            serviceId: 6,
          },
        });
        pcEuServiceAlertsArchive.statusId = 1;
        pcEuServiceAlertsArchive.rawData = JSON.stringify(<RawEsoStatus>{
          sources: [
            'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
          ],
          raw: [
            ' />\n  \n<p>2024.07.19 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
          ],
          rawData: 'The European PC/Mac megaserver is currently available.',
          rawDate: ' />  2024.07.19 - 12:15 UTC (08:15 EDT)',
          dates: [
            moment()
              .utc()
              .set('years', 2024)
              .set('months', 7)
              .set('date', 19)
              .set('hours', 12)
              .set('minutes', 15)
              .set('seconds', 0)
              .set('milliseconds', 0)
              .utcOffset(0),
          ],
          slugs: ['server_pc_eu'],
          type: 'server',
          support: 'pc',
          zone: 'eu',
          status: 'up',
        });
        await archiveRepository.save(pcEuServiceAlertsArchive);
        pcEuServiceAlertsArchive = await archiveRepository.findOne({
          where: {
            connector: 'ServiceAlerts',
            serviceId: 6,
          },
        });
        expect(pcEuServiceAlertsArchive.statusId).toEqual(1);
        expect(pcEuServiceAlertsArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            ],
            raw: [
              ' />\n  \n<p>2024.07.19 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
            ],
            rawData: 'The European PC/Mac megaserver is currently available.',
            rawDate: ' />  2024.07.19 - 12:15 UTC (08:15 EDT)',
            dates: [
              moment()
                .utc()
                .set('years', 2024)
                .set('months', 7)
                .set('date', 19)
                .set('hours', 12)
                .set('minutes', 15)
                .set('seconds', 0)
                .set('milliseconds', 0)
                .utcOffset(0),
            ],
            slugs: ['server_pc_eu'],
            type: 'server',
            support: 'pc',
            zone: 'eu',
            status: 'up',
          }),
        );

        pcNaServiceAlertsArchive = await archiveRepository.findOne({
          where: {
            connector: 'ServiceAlerts',
            serviceId: 5,
          },
        });
        pcNaServiceAlertsArchive.statusId = 1;
        pcNaServiceAlertsArchive.rawData = JSON.stringify(<RawEsoStatus>{
          sources: [
            'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
          ],
          raw: [
            ' />\n  \n<p>2024.07.19 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
          ],
          rawData:
            'The North American PC/Mac megaserver is currently available.',
          rawDate: ' />  2024.07.19 - 12:15 UTC (08:15 EDT)',
          dates: [
            moment()
              .utc()
              .set('years', 2024)
              .set('months', 7)
              .set('date', 19)
              .set('hours', 12)
              .set('minutes', 15)
              .set('seconds', 0)
              .set('milliseconds', 0)
              .utcOffset(0),
          ],
          slugs: ['server_pc_na'],
          type: 'server',
          support: 'pc',
          zone: 'na',
          status: 'up',
        });
        await archiveRepository.save(pcNaServiceAlertsArchive);
        pcNaServiceAlertsArchive = await archiveRepository.findOne({
          where: {
            connector: 'ServiceAlerts',
            serviceId: 5,
          },
        });
        expect(pcNaServiceAlertsArchive.statusId).toEqual(1);
        expect(pcNaServiceAlertsArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            ],
            raw: [
              ' />\n  \n<p>2024.07.19 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
            ],
            rawData:
              'The North American PC/Mac megaserver is currently available.',
            rawDate: ' />  2024.07.19 - 12:15 UTC (08:15 EDT)',
            dates: [
              moment()
                .utc()
                .set('years', 2024)
                .set('months', 7)
                .set('date', 19)
                .set('hours', 12)
                .set('minutes', 15)
                .set('seconds', 0)
                .set('milliseconds', 0)
                .utcOffset(0),
            ],
            slugs: ['server_pc_na'],
            type: 'server',
            support: 'pc',
            zone: 'na',
            status: 'up',
          }),
        );
      }, 15000);

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
      }, 15000);
    });

    describe('handle handleLiveServices(down) 1', (): void => {
      it('handle', async (): Promise<void> => {
        jest
          .spyOn(LiveServices, 'getData')
          .mockImplementation(async (): Promise<RawEsoStatus[]> => {
            return Promise.resolve(liveServicesDown);
          });

        await scrapingService.handleLiveServices();

        updateDate = new Date();
        updateDate.setMilliseconds(0);

        expect(true).toEqual(true);
      }, 15000);

      it('should doHandle method called', (): void => {
        expect(doHandle).toHaveBeenCalledTimes(1);
      });

      it('should formatData method called and works correctly', (): void => {
        expect(formatData).toHaveBeenCalledTimes(1);
        expect(formatData).toHaveNthReturnedWith(1, <EsoStatus[]>[
          {
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
            slug: 'server_pc_eu',
            type: 'server',
            support: 'pc',
            zone: 'eu',
            status: 'down',
          },
          {
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
            slug: 'server_pc_na',
            type: 'server',
            support: 'pc',
            zone: 'na',
            status: 'down',
          },
        ]);
      });

      it('should update method called', (): void => {
        expect(update).toHaveBeenCalledTimes(2);
      });

      it('should isPlannedStatus method called and works', (): void => {
        expect(isPlannedStatus).toHaveBeenCalledTimes(2);
        expect(isPlannedStatus).toHaveNthReturnedWith(1, false);
        expect(isPlannedStatus).toHaveNthReturnedWith(2, false);
      });

      it('should getService method called', (): void => {
        expect(getService).toHaveBeenCalledTimes(2);
        // TODO check le retour de la valeur
      });

      it('should getArchive method called', (): void => {
        expect(getArchive).toHaveBeenCalledTimes(2);
        // TODO check le retour de la valeur
      });

      it('should archiveChanged method called and works', (): void => {
        expect(archiveChanged).toHaveBeenCalledTimes(2);
        expect(archiveChanged).toHaveNthReturnedWith(1, true);
        expect(archiveChanged).toHaveNthReturnedWith(2, true);
      });

      it('should getStatus method called and works', (): void => {
        expect(getStatus).toHaveBeenCalledTimes(2);
        // TODO check le retour de la valeur
      });

      it('should updateArchive method called and works', async (): Promise<void> => {
        expect(updateArchive).toHaveBeenCalledTimes(2);
        pcEuLiveServiceArchive = await archiveRepository.findOne({
          where: {
            serviceId: 6,
            connector: 'LiveServices',
          },
        });
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
        expect(pcEuLiveServiceArchive.updatedAt).toStrictEqual(updateDate);
        expect(pcEuLiveServiceArchive.statusId).toEqual(2);

        pcNaLiveServiceArchive = await archiveRepository.findOne({
          where: {
            serviceId: 5,
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
        expect(pcNaLiveServiceArchive.updatedAt).toStrictEqual(updateDate);
        expect(pcNaLiveServiceArchive.statusId).toEqual(2);
      }, 15000);

      it('should slugChanged method called and works', (): void => {
        expect(slugChanged).toHaveBeenCalledTimes(2);
        expect(slugChanged).toHaveNthReturnedWith(1, true);
        expect(slugChanged).toHaveNthReturnedWith(2, true);
      });

      it('should updateService method called and works', async (): Promise<void> => {
        expect(updateService).toHaveBeenCalledTimes(2);

        pcEu = await serviceRepository.findOne({
          where: {
            id: 6,
          },
        });
        expect(pcEu.statusId).toEqual(2);

        pcNa = await serviceRepository.findOne({
          where: {
            id: 5,
          },
        });
        expect(pcNa.statusId).toEqual(2);
      }, 15000);

      it('should service controller return correct data', async (): Promise<void> => {
        findOnePcEu = await serviceController.findOne('server_pc_eu');
        expect(findOnePcEu).toStrictEqual(<EsoStatus>{
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
          slug: 'server_pc_eu',
          type: 'server',
          support: 'pc',
          zone: 'eu',
          status: 'down',
        });

        findOnePcNa = await serviceController.findOne('server_pc_na');
        expect(findOnePcNa).toStrictEqual(<EsoStatus>{
          raw: {
            raw: ['The Elder Scrolls Online (NA)', 'DOWN'],
            rawSlug: 'The Elder Scrolls Online (NA)',
            rawStatus: 'DOWN',
            slugs: ['server_pc_na'],
            sources: [
              'https://live-services.elderscrollsonline.com/status/realms',
            ],
            support: 'pc',
            zone: 'na',
            status: 'down',
          },
          slug: 'server_pc_na',
          type: 'server',
          support: 'pc',
          zone: 'na',
          status: 'down',
        });
      }, 15000);

      it('should queue methods called', (): void => {
        expect(updateQueue).toHaveBeenCalledTimes(2);
        expect(getQueue).toHaveBeenCalledTimes(3); // +1 cause of test call
        expect(setQueue).toHaveBeenCalledTimes(2);
      });
    });
    describe('handle doQueue 1', (): void => {
      it('should queue has expected', (): void => {
        expectQueue = [
          {
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
            slug: 'server_pc_eu',
            type: 'server',
            support: 'pc',
            zone: 'eu',
            status: 'down',
          },
          {
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
            slug: 'server_pc_na',
            type: 'server',
            support: 'pc',
            zone: 'na',
            status: 'down',
          },
        ];

        expect(scrapingService.queueService.getQueue()).toStrictEqual(
          expectQueue,
        );
      });

      it('should queueService event send and received by client with correct data', async (): Promise<void> => {
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

      it('should isQueueEmpty method called and works', (): void => {
        expect(isQueueEmpty).toHaveBeenCalledTimes(1);
        expect(isQueueEmpty).toHaveNthReturnedWith(1, false);
        expect(getQueue).toHaveBeenCalledTimes(7); // +1 cause of test call
      });

      it('should emptyQueue method called and works', (): void => {
        expect(emptyQueue).toHaveBeenCalledTimes(1);
        expect(setQueue).toHaveBeenCalledTimes(3);
        expect(scrapingService.queueService.getQueue()).toStrictEqual([]);
        expect(getQueue).toHaveBeenCalledTimes(8); // +2 cause of test call
      });
    });
    describe('handle forum message (up late)', (): void => {
      it('handle', async (): Promise<void> => {
        jest
          .spyOn(ForumMessage, 'getData')
          .mockImplementation(async (): Promise<RawEsoStatus[]> => {
            return Promise.resolve(forumMessageUpLate);
          });

        await scrapingService.handleForumMessage();

        updateDate = new Date();
        updateDate.setMilliseconds(0);

        expect(true).toEqual(true);
      }, 15000);

      it('should doHandle method called', (): void => {
        expect(doHandle).toHaveBeenCalledTimes(2);
      });

      it('should formatData method called and works correctly', (): void => {
        expect(formatData).toHaveBeenCalledTimes(2);
        expect(formatData).toHaveNthReturnedWith(2, <EsoStatus[]>[
          {
            raw: {
              sources: [
                'https://forums.elderscrollsonline.com/en/categories/pts',
              ],
              raw: [
                '• PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
              ],
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
              slugs: ['server_pc_eu'],
              type: 'server',
              support: 'pc',
              zone: 'eu',
              status: 'planned',
            },
            slug: 'server_pc_eu',
            type: 'server',
            support: 'pc',
            zone: 'eu',
            status: 'planned',
          },
          {
            raw: {
              sources: [
                'https://forums.elderscrollsonline.com/en/categories/pts',
              ],
              raw: [
                '• PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
              ],
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
              slugs: ['server_pc_na'],
              type: 'server',
              support: 'pc',
              zone: 'na',
              status: 'planned',
            },
            slug: 'server_pc_na',
            type: 'server',
            support: 'pc',
            zone: 'na',
            status: 'planned',
          },
        ]);
      });

      it('should update method called', (): void => {
        expect(update).toHaveBeenCalledTimes(4);
      });

      it('should isPlannedStatus method called and works', (): void => {
        expect(isPlannedStatus).toHaveBeenCalledTimes(4);
        expect(isPlannedStatus).toHaveNthReturnedWith(3, true);
        expect(isPlannedStatus).toHaveNthReturnedWith(4, true);
      });

      it('should getService method not called', (): void => {
        expect(getService).toHaveBeenCalledTimes(2);
      });
    });
    describe('handle doQueue 2', (): void => {
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

      it('should isQueueEmpty method called and works', (): void => {
        expect(isQueueEmpty).toHaveBeenCalledTimes(2);
        expect(isQueueEmpty).toHaveNthReturnedWith(2, true);
        expect(getQueue).toHaveBeenCalledTimes(10); // +3 cause of test call
      });
    });
    describe('handle service alerts (up late) 1', (): void => {
      it('handle', async (): Promise<void> => {
        jest
          .spyOn(ServiceAlerts, 'getData')
          .mockImplementation(async (): Promise<RawEsoStatus[]> => {
            return Promise.resolve(serviceAlertsUpLate);
          });

        await scrapingService.handleServiceAlerts();

        updateDate = new Date();
        updateDate.setMilliseconds(0);

        expect(true).toEqual(true);
      }, 15000);

      it('should doHandle method called', (): void => {
        expect(doHandle).toHaveBeenCalledTimes(3);
      });

      it('should formatData method called and works correctly', (): void => {
        expect(formatData).toHaveBeenCalledTimes(3);
        expect(formatData).toHaveNthReturnedWith(3, <EsoStatus[]>[
          {
            raw: {
              sources: [
                'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
              ],
              raw: [
                ' />\n  \n<p>2024.07.19 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
              ],
              rawData: 'The European PC/Mac megaserver is currently available.',
              rawDate: ' />  2024.07.19 - 12:15 UTC (08:15 EDT)',
              dates: [
                moment()
                  .utc()
                  .set('years', 2024)
                  .set('months', 7)
                  .set('date', 19)
                  .set('hours', 12)
                  .set('minutes', 15)
                  .set('seconds', 0)
                  .set('milliseconds', 0)
                  .utcOffset(0),
              ],
              slugs: ['server_pc_eu'],
              type: 'server',
              support: 'pc',
              zone: 'eu',
              status: 'up',
            },
            slug: 'server_pc_eu',
            type: 'server',
            support: 'pc',
            zone: 'eu',
            status: 'up',
          },
          {
            raw: {
              sources: [
                'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
              ],
              raw: [
                ' />\n  \n<p>2024.07.19 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
              ],
              rawData:
                'The North American PC/Mac megaserver is currently available.',
              rawDate: ' />  2024.07.19 - 12:15 UTC (08:15 EDT)',
              dates: [
                moment()
                  .utc()
                  .set('years', 2024)
                  .set('months', 7)
                  .set('date', 19)
                  .set('hours', 12)
                  .set('minutes', 15)
                  .set('seconds', 0)
                  .set('milliseconds', 0)
                  .utcOffset(0),
              ],
              slugs: ['server_pc_na'],
              type: 'server',
              support: 'pc',
              zone: 'na',
              status: 'up',
            },
            slug: 'server_pc_na',
            type: 'server',
            support: 'pc',
            zone: 'na',
            status: 'up',
          },
        ]);
      });

      it('should update method called', (): void => {
        expect(update).toHaveBeenCalledTimes(6);
      });

      it('should isPlannedStatus method called and works', (): void => {
        expect(isPlannedStatus).toHaveBeenCalledTimes(6);
        expect(isPlannedStatus).toHaveNthReturnedWith(5, false);
        expect(isPlannedStatus).toHaveNthReturnedWith(6, false);
      });

      it('should getService method called', (): void => {
        expect(getService).toHaveBeenCalledTimes(4);
        // TODO check le retour de la valeur
      });

      it('should getArchive method called', (): void => {
        expect(getArchive).toHaveBeenCalledTimes(4);
        // TODO check le retour de la valeur
      });

      it('should archiveChanged method called and works', (): void => {
        expect(archiveChanged).toHaveBeenCalledTimes(4);
        expect(archiveChanged).toHaveNthReturnedWith(3, false);
        expect(archiveChanged).toHaveNthReturnedWith(4, false);
      });

      it('should getStatus method not called', (): void => {
        expect(getStatus).toHaveBeenCalledTimes(2);
      });
    });
    describe('handle doQueue 3', (): void => {
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

      it('should isQueueEmpty method called and works', (): void => {
        expect(isQueueEmpty).toHaveBeenCalledTimes(3);
        expect(isQueueEmpty).toHaveNthReturnedWith(3, true);
        expect(getQueue).toHaveBeenCalledTimes(12); // +4 cause of test call
      });
    });

    describe('handle live service (down) 2', (): void => {
      it('handle', async (): Promise<void> => {
        await scrapingService.handleLiveServices();

        updateDate = new Date();
        updateDate.setMilliseconds(0);

        expect(true).toEqual(true);
      }, 15000);

      it('should doHandle method called', (): void => {
        expect(doHandle).toHaveBeenCalledTimes(4);
      });

      it('should formatData method called and works correctly', (): void => {
        expect(formatData).toHaveBeenCalledTimes(4);
        expect(formatData).toHaveNthReturnedWith(4, <EsoStatus[]>[
          {
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
            slug: 'server_pc_eu',
            type: 'server',
            support: 'pc',
            zone: 'eu',
            status: 'down',
          },
          {
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
            slug: 'server_pc_na',
            type: 'server',
            support: 'pc',
            zone: 'na',
            status: 'down',
          },
        ]);
      });

      it('should update method called', (): void => {
        expect(update).toHaveBeenCalledTimes(8);
      });

      it('should isPlannedStatus method called and works', (): void => {
        expect(isPlannedStatus).toHaveBeenCalledTimes(8);
        expect(isPlannedStatus).toHaveNthReturnedWith(7, false);
        expect(isPlannedStatus).toHaveNthReturnedWith(8, false);
      });

      it('should getService method called', (): void => {
        expect(getService).toHaveBeenCalledTimes(6);
        // TODO check le retour de la valeur
      });

      it('should getArchive method called', (): void => {
        expect(getArchive).toHaveBeenCalledTimes(6);
        // TODO check le retour de la valeur
      });

      it('should archiveChanged method called and works', (): void => {
        expect(archiveChanged).toHaveBeenCalledTimes(6);
        expect(archiveChanged).toHaveNthReturnedWith(5, false);
        expect(archiveChanged).toHaveNthReturnedWith(6, false);
      });

      it('should getStatus method not called', (): void => {
        expect(getStatus).toHaveBeenCalledTimes(2);
        // TODO check le retour de la valeur
      });
    });
    describe('handle doQueue 4', (): void => {
      it('should queue has expected', (): void => {
        expectQueue = [];

        expect(scrapingService.queueService.getQueue()).toStrictEqual(
          expectQueue,
        );
      });

      it('should pushQueue method called', (): void => {
        scrapingService.doQueue();
        expect(pushQueue).toHaveBeenCalledTimes(4);
      });

      it('should isQueueEmpty method called and works', (): void => {
        expect(isQueueEmpty).toHaveBeenCalledTimes(4);
        expect(isQueueEmpty).toHaveNthReturnedWith(4, true);
        expect(getQueue).toHaveBeenCalledTimes(14); // +5 cause of test call
      });
    });
    describe('handle forum message (down) 1', (): void => {
      it('handle', async (): Promise<void> => {
        jest
          .spyOn(ForumMessage, 'getData')
          .mockImplementation(async (): Promise<RawEsoStatus[]> => {
            return Promise.resolve(forumMessageDown);
          });

        await scrapingService.handleForumMessage();

        updateDate = new Date();
        updateDate.setMilliseconds(0);

        expect(true).toEqual(true);
      }, 15000);

      it('should doHandle method called', (): void => {
        expect(doHandle).toHaveBeenCalledTimes(5);
      });

      it('should formatData method called and works correctly', (): void => {
        expect(formatData).toHaveBeenCalledTimes(5);
        expect(formatData).toHaveNthReturnedWith(5, <EsoStatus[]>[
          {
            raw: {
              sources: [
                'https://forums.elderscrollsonline.com/en/categories/pts',
              ],
              raw: [
                '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
              ],
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
              slugs: ['server_pc_eu'],
              type: 'server',
              support: 'pc',
              zone: 'eu',
              status: 'down',
            },
            slug: 'server_pc_eu',
            type: 'server',
            support: 'pc',
            zone: 'eu',
            status: 'down',
          },
          {
            raw: {
              sources: [
                'https://forums.elderscrollsonline.com/en/categories/pts',
              ],
              raw: [
                '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
              ],
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
              slugs: ['server_pc_na'],
              type: 'server',
              support: 'pc',
              zone: 'na',
              status: 'down',
            },
            slug: 'server_pc_na',
            type: 'server',
            support: 'pc',
            zone: 'na',
            status: 'down',
          },
        ]);
      });

      it('should update method called', (): void => {
        expect(update).toHaveBeenCalledTimes(10);
      });

      it('should isPlannedStatus method called and works', (): void => {
        expect(isPlannedStatus).toHaveBeenCalledTimes(10);
        expect(isPlannedStatus).toHaveNthReturnedWith(9, false);
        expect(isPlannedStatus).toHaveNthReturnedWith(10, false);
      });

      it('should getService method called', (): void => {
        expect(getService).toHaveBeenCalledTimes(8);
        // TODO check le retour de la valeur
      });

      it('should getArchive method called', (): void => {
        expect(getArchive).toHaveBeenCalledTimes(8);
        // TODO check le retour de la valeur
      });

      it('should archiveChanged method called and works', (): void => {
        expect(archiveChanged).toHaveBeenCalledTimes(8);
        expect(archiveChanged).toHaveNthReturnedWith(7, true);
        expect(archiveChanged).toHaveNthReturnedWith(8, true);
      });

      it('should getStatus method called and works', (): void => {
        expect(getStatus).toHaveBeenCalledTimes(4);
        // TODO check le retour de la valeur
      });

      it('should updateArchive method called and works', async (): Promise<void> => {
        expect(updateArchive).toHaveBeenCalledTimes(4);
        pcEuForumMessageArchive = await archiveRepository.findOne({
          where: {
            serviceId: 6,
            connector: 'ForumMessage',
          },
        });
        expect(pcEuForumMessageArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://forums.elderscrollsonline.com/en/categories/pts',
            ],
            raw: [
              '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
            ],
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
            slugs: ['server_pc_eu'],
            type: 'server',
            support: 'pc',
            zone: 'eu',
            status: 'down',
          }),
        );
        expect(pcEuForumMessageArchive.updatedAt).toStrictEqual(updateDate);
        expect(pcEuForumMessageArchive.statusId).toEqual(2);

        pcNaForumMessageArchive = await archiveRepository.findOne({
          where: {
            serviceId: 5,
            connector: 'ForumMessage',
          },
        });
        expect(pcNaForumMessageArchive.rawData).toEqual(
          JSON.stringify(<RawEsoStatus>{
            sources: [
              'https://forums.elderscrollsonline.com/en/categories/pts',
            ],
            raw: [
              '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
            ],
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
            slugs: ['server_pc_na'],
            type: 'server',
            support: 'pc',
            zone: 'na',
            status: 'down',
          }),
        );
        expect(pcNaForumMessageArchive.updatedAt).toStrictEqual(updateDate);
        expect(pcNaForumMessageArchive.statusId).toEqual(2);
      }, 15000);

      it('should slugChanged method called and works', (): void => {
        expect(slugChanged).toHaveBeenCalledTimes(4);
        expect(slugChanged).toHaveNthReturnedWith(3, false);
        expect(slugChanged).toHaveNthReturnedWith(4, false);
      });

      it('should updateService method not called', (): void => {
        expect(updateService).toHaveBeenCalledTimes(2);
      }, 15000);
    });
    describe('handle doQueue 5', (): void => {
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

      it('should isQueueEmpty method called and works', (): void => {
        expect(isQueueEmpty).toHaveBeenCalledTimes(5);
        expect(isQueueEmpty).toHaveNthReturnedWith(5, true);
        expect(getQueue).toHaveBeenCalledTimes(16); // +6 cause of test call
      });
    });
    describe('handle service alerts (up late) 2', (): void => {
      it('handle', async (): Promise<void> => {
        await scrapingService.handleServiceAlerts();

        updateDate = new Date();
        updateDate.setMilliseconds(0);

        expect(true).toEqual(true);
      }, 15000);

      it('should doHandle method called', (): void => {
        expect(doHandle).toHaveBeenCalledTimes(6);
      });

      it('should formatData method called and works correctly', (): void => {
        expect(formatData).toHaveBeenCalledTimes(6);
        expect(formatData).toHaveNthReturnedWith(6, <EsoStatus[]>[
          {
            raw: {
              sources: [
                'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
              ],
              raw: [
                ' />\n  \n<p>2024.07.19 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
              ],
              rawData: 'The European PC/Mac megaserver is currently available.',
              rawDate: ' />  2024.07.19 - 12:15 UTC (08:15 EDT)',
              dates: [
                moment()
                  .utc()
                  .set('years', 2024)
                  .set('months', 7)
                  .set('date', 19)
                  .set('hours', 12)
                  .set('minutes', 15)
                  .set('seconds', 0)
                  .set('milliseconds', 0)
                  .utcOffset(0),
              ],
              slugs: ['server_pc_eu'],
              type: 'server',
              support: 'pc',
              zone: 'eu',
              status: 'up',
            },
            slug: 'server_pc_eu',
            type: 'server',
            support: 'pc',
            zone: 'eu',
            status: 'up',
          },
          {
            raw: {
              sources: [
                'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
              ],
              raw: [
                ' />\n  \n<p>2024.07.19 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
              ],
              rawData:
                'The North American PC/Mac megaserver is currently available.',
              rawDate: ' />  2024.07.19 - 12:15 UTC (08:15 EDT)',
              dates: [
                moment()
                  .utc()
                  .set('years', 2024)
                  .set('months', 7)
                  .set('date', 19)
                  .set('hours', 12)
                  .set('minutes', 15)
                  .set('seconds', 0)
                  .set('milliseconds', 0)
                  .utcOffset(0),
              ],
              slugs: ['server_pc_na'],
              type: 'server',
              support: 'pc',
              zone: 'na',
              status: 'up',
            },
            slug: 'server_pc_na',
            type: 'server',
            support: 'pc',
            zone: 'na',
            status: 'up',
          },
        ]);
      });

      it('should update method called', (): void => {
        expect(update).toHaveBeenCalledTimes(12);
      });

      it('should isPlannedStatus method called and works', (): void => {
        expect(isPlannedStatus).toHaveBeenCalledTimes(12);
        expect(isPlannedStatus).toHaveNthReturnedWith(11, false);
        expect(isPlannedStatus).toHaveNthReturnedWith(12, false);
      });

      it('should getService method called', (): void => {
        expect(getService).toHaveBeenCalledTimes(10);
        // TODO check le retour de la valeur
      });

      it('should getArchive method called', (): void => {
        expect(getArchive).toHaveBeenCalledTimes(10);
        // TODO check le retour de la valeur
      });

      it('should archiveChanged method called and works', (): void => {
        expect(archiveChanged).toHaveBeenCalledTimes(10);
        expect(archiveChanged).toHaveNthReturnedWith(9, false);
        expect(archiveChanged).toHaveNthReturnedWith(10, false);
      });

      it('should getStatus method not called', (): void => {
        expect(getStatus).toHaveBeenCalledTimes(4);
      });
    });
    describe('handle doQueue 6', (): void => {
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

      it('should isQueueEmpty method called and works', async (): Promise<void> => {
        expect(isQueueEmpty).toHaveBeenCalledTimes(6);
        expect(isQueueEmpty).toHaveNthReturnedWith(6, true);
        expect(getQueue).toHaveBeenCalledTimes(18); // +7 cause of test call

        await after();
      });
    });
  });
});
