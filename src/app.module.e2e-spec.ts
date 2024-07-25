import { ForumMessage } from '@eso-status/forum-message';
import { LiveServices } from '@eso-status/live-services';
import { ServiceAlerts } from '@eso-status/service-alerts';
import { EsoStatus, RawEsoStatus } from '@eso-status/types';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import * as moment from 'moment';
import { Server } from 'socket.io';
import { Socket, io } from 'socket.io-client';

import { Repository } from 'typeorm';

import { runSeeders } from 'typeorm-extension';

import { dataSource, dataSourceOptions } from './config/typeorm.config';
import { ArchiveService } from './resource/archive/archive.service';
import { Archive } from './resource/archive/entities/archive.entity';
import { Service } from './resource/service/entities/service.entity';
import { ServiceService } from './resource/service/service.service';
import { Status } from './resource/status/entities/status.entity';
import { StatusService } from './resource/status/status.service';
import { QueueService } from './service/queue/queue.service';
import { ScrapingService } from './service/scraping/scraping.service';
import { WebsocketService } from './service/websocket/websocket.service';
import { WinstonService } from './service/winston/winston.service';

config();

describe('AppModule (e2e)', (): void => {
  let app: INestApplication;
  let scrapingService: ScrapingService;
  let websocketService: WebsocketService;
  let serverSocket: Server;
  let clientSocket: Socket;
  let serviceRepository: Repository<Service>;
  let archiveRepository: Repository<Archive>;

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
  }, 15000);

  afterEach(async (): Promise<void> => {
    await app.close();
    await dataSource.destroy();
    clientSocket.disconnect();
    await new Promise<void>((resolve): void => {
      serverSocket.close((): void => {
        resolve();
      });
    });
  });

  it('should update event received from client 1', async (): Promise<void> => {
    const doHandle = jest.spyOn(scrapingService, 'doHandle');
    const formatData = jest.spyOn(scrapingService, 'formatData');
    const update = jest.spyOn(scrapingService, 'update');
    const isPlannedStatus = jest.spyOn(scrapingService, 'isPlannedStatus');
    const changed = jest.spyOn(scrapingService, 'changed');
    const slugChanged = jest.spyOn(scrapingService, 'slugChanged');
    const rawChanged = jest.spyOn(scrapingService, 'rawChanged');

    const updateQueue = jest.spyOn(scrapingService.queueService, 'updateQueue');
    const getQueue = jest.spyOn(scrapingService.queueService, 'getQueue');
    const setQueue = jest.spyOn(scrapingService.queueService, 'setQueue');
    const isQueueEmpty = jest.spyOn(
      scrapingService.queueService,
      'isQueueEmpty',
    );
    const pushQueue = jest.spyOn(scrapingService.queueService, 'pushQueue');

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

    expect(scrapingService.queueService.getRawQueue()).toStrictEqual([]);

    let pcNa: Service = await serviceRepository.findOne({
      where: {
        id: 5,
      },
    });
    let pcEu: Service = await serviceRepository.findOne({
      where: {
        id: 6,
      },
    });

    expect(pcNa.statusId).toEqual(2);
    expect(pcEu.statusId).toEqual(2);

    pcEu.statusId = 1;
    pcNa.statusId = 1;

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
    expect(pcEu.statusId).toEqual(1);

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

    expect(doHandle).toHaveBeenCalledTimes(1);

    expect(formatData).toHaveBeenCalledTimes(1);
    expect(formatData).toHaveNthReturnedWith(1, [
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

    expect(update).toHaveBeenCalledTimes(2);

    expect(isPlannedStatus).toHaveBeenCalledTimes(2);
    expect(isPlannedStatus).toHaveNthReturnedWith(1, false);
    expect(isPlannedStatus).toHaveNthReturnedWith(2, false);

    expect(changed).toHaveBeenCalledTimes(2);
    expect(changed).toHaveNthReturnedWith(1, true);
    expect(changed).toHaveNthReturnedWith(2, true);

    expect(slugChanged).toHaveBeenCalledTimes(2);
    expect(slugChanged).toHaveNthReturnedWith(1, true);
    expect(slugChanged).toHaveNthReturnedWith(2, true);

    expect(rawChanged).toHaveBeenCalledTimes(2);
    expect(rawChanged).toHaveNthReturnedWith(1, true);
    expect(rawChanged).toHaveNthReturnedWith(2, true);

    const firstUpdateDate: Date = new Date();
    firstUpdateDate.setMilliseconds(0);

    expect(
      (
        await archiveRepository.find({
          where: {
            serviceId: pcEu.id,
          },
          order: {
            createdAt: 'DESC',
          },
        })
      )[0].createdAt,
    ).toStrictEqual(firstUpdateDate);

    expect(
      (
        await archiveRepository.find({
          where: {
            serviceId: pcNa.id,
          },
          order: {
            createdAt: 'DESC',
          },
        })
      )[0].createdAt,
    ).toStrictEqual(firstUpdateDate);

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

    expect(updateQueue).toHaveBeenCalledTimes(2);
    expect(getQueue).toHaveBeenCalledTimes(3);
    expect(setQueue).toHaveBeenCalledTimes(2);

    let expectQueue: any = [
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
    ];

    expect(scrapingService.queueService.getRawQueue()).toStrictEqual(
      expectQueue,
    );

    await new Promise<void>((resolve): void => {
      clientSocket.on('statusUpdate', (data: EsoStatus[]): void => {
        expect(data).toEqual(expectQueue);
        resolve();
      });

      scrapingService.doQueue();
    });

    expect(pushQueue).toHaveBeenCalledTimes(1);

    expect(isQueueEmpty).toHaveBeenCalledTimes(1);
    expect(isQueueEmpty).toHaveNthReturnedWith(1, false);

    expect(scrapingService.queueService.getRawQueue()).toStrictEqual([]);

    await scrapingService.handleForumMessage();

    expect(doHandle).toHaveBeenCalledTimes(2);

    expect(formatData).toHaveBeenCalledTimes(2);
    expect(formatData).toHaveNthReturnedWith(2, [
      {
        slug: 'server_pc_eu',
        status: 'down',
        type: 'server',
        support: 'pc',
        zone: 'eu',
        raw: {
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
      },
      {
        slug: 'server_pc_na',
        status: 'down',
        type: 'server',
        support: 'pc',
        zone: 'na',
        raw: {
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
      },
    ]);

    expect(update).toHaveBeenCalledTimes(4);

    expect(isPlannedStatus).toHaveBeenCalledTimes(4);
    expect(isPlannedStatus).toHaveNthReturnedWith(3, false);
    expect(isPlannedStatus).toHaveNthReturnedWith(4, false);

    expect(changed).toHaveBeenCalledTimes(4);
    expect(changed).toHaveNthReturnedWith(3, false);
    expect(changed).toHaveNthReturnedWith(4, false);

    expect(slugChanged).toHaveBeenCalledTimes(4);
    expect(slugChanged).toHaveNthReturnedWith(3, false);
    expect(slugChanged).toHaveNthReturnedWith(4, false);

    expect(rawChanged).toHaveBeenCalledTimes(2); // vu que slugChanged est à false, la deuxième condition n'est pas exécuté

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

    expect(
      (
        await archiveRepository.find({
          where: {
            serviceId: pcEu.id,
          },
          order: {
            createdAt: 'DESC',
          },
        })
      )[0].createdAt,
    ).toStrictEqual(firstUpdateDate);

    expect(
      (
        await archiveRepository.find({
          where: {
            serviceId: pcNa.id,
          },
          order: {
            createdAt: 'DESC',
          },
        })
      )[0].createdAt,
    ).toStrictEqual(firstUpdateDate);

    expect(pcNa.updatedAt).toStrictEqual(firstUpdateDate);
    expect(pcEu.updatedAt).toStrictEqual(firstUpdateDate);

    expect(getQueue).toHaveBeenCalledTimes(8);

    expect(scrapingService.queueService.getRawQueue()).toStrictEqual([]);

    scrapingService.doQueue();

    expect(pushQueue).toHaveBeenCalledTimes(2);

    expect(isQueueEmpty).toHaveBeenCalledTimes(2);
    expect(isQueueEmpty).toHaveNthReturnedWith(2, true);

    await scrapingService.handleServiceAlerts();

    expect(doHandle).toHaveBeenCalledTimes(3);

    expect(formatData).toHaveBeenCalledTimes(3);
    expect(formatData).toHaveNthReturnedWith(3, [
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

    expect(update).toHaveBeenCalledTimes(6);

    expect(isPlannedStatus).toHaveBeenCalledTimes(6);
    expect(isPlannedStatus).toHaveNthReturnedWith(5, false);
    expect(isPlannedStatus).toHaveNthReturnedWith(6, false);

    expect(changed).toHaveBeenCalledTimes(6);
    expect(changed).toHaveNthReturnedWith(5, false);
    expect(changed).toHaveNthReturnedWith(6, false);

    expect(slugChanged).toHaveBeenCalledTimes(6);
    expect(slugChanged).toHaveNthReturnedWith(5, false);
    expect(slugChanged).toHaveNthReturnedWith(6, false);

    expect(rawChanged).toHaveBeenCalledTimes(2); // vu que slugChanged est à false, la deuxième condition n'est pas exécuté

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

    expect(
      (
        await archiveRepository.find({
          where: {
            serviceId: pcEu.id,
          },
          order: {
            createdAt: 'DESC',
          },
        })
      )[0].createdAt,
    ).toStrictEqual(firstUpdateDate);

    expect(
      (
        await archiveRepository.find({
          where: {
            serviceId: pcNa.id,
          },
          order: {
            createdAt: 'DESC',
          },
        })
      )[0].createdAt,
    ).toStrictEqual(firstUpdateDate);

    expect(pcNa.updatedAt).toStrictEqual(firstUpdateDate);
    expect(pcEu.updatedAt).toStrictEqual(firstUpdateDate);

    expect(getQueue).toHaveBeenCalledTimes(10);

    expect(scrapingService.queueService.getRawQueue()).toStrictEqual([]);

    scrapingService.doQueue();

    expect(pushQueue).toHaveBeenCalledTimes(3);

    expect(isQueueEmpty).toHaveBeenCalledTimes(3);
    expect(isQueueEmpty).toHaveNthReturnedWith(3, true);

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

    expect(doHandle).toHaveBeenCalledTimes(4);

    expect(formatData).toHaveBeenCalledTimes(4);
    expect(formatData).toHaveNthReturnedWith(4, [
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

    expect(update).toHaveBeenCalledTimes(8);

    expect(isPlannedStatus).toHaveBeenCalledTimes(8);
    expect(isPlannedStatus).toHaveNthReturnedWith(7, false);
    expect(isPlannedStatus).toHaveNthReturnedWith(8, false);

    expect(changed).toHaveBeenCalledTimes(8);
    expect(changed).toHaveNthReturnedWith(7, true);
    expect(changed).toHaveNthReturnedWith(8, true);

    expect(slugChanged).toHaveBeenCalledTimes(8);
    expect(slugChanged).toHaveNthReturnedWith(7, true);
    expect(slugChanged).toHaveNthReturnedWith(8, true);

    expect(rawChanged).toHaveBeenCalledTimes(4);
    expect(rawChanged).toHaveNthReturnedWith(3, true);
    expect(rawChanged).toHaveNthReturnedWith(4, true);

    const secondUpdateDate: Date = new Date();
    secondUpdateDate.setMilliseconds(0);

    expect(
      (
        await archiveRepository.find({
          where: {
            serviceId: pcEu.id,
          },
          order: {
            createdAt: 'DESC',
          },
        })
      )[0].createdAt,
    ).toStrictEqual(secondUpdateDate);

    expect(
      (
        await archiveRepository.find({
          where: {
            serviceId: pcNa.id,
          },
          order: {
            createdAt: 'DESC',
          },
        })
      )[0].createdAt,
    ).toStrictEqual(secondUpdateDate);

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

    expect(updateQueue).toHaveBeenCalledTimes(4);
    expect(getQueue).toHaveBeenCalledTimes(14);
    expect(setQueue).toHaveBeenCalledTimes(5);

    expectQueue = [
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
    ];

    expect(scrapingService.queueService.getRawQueue()).toStrictEqual(
      expectQueue,
    );

    await new Promise<void>((resolve): void => {
      clientSocket.on('statusUpdate', (data: EsoStatus[]): void => {
        expect(data).toEqual(expectQueue);
        resolve();
      });

      scrapingService.doQueue();
    });

    expect(pushQueue).toHaveBeenCalledTimes(4);

    expect(isQueueEmpty).toHaveBeenCalledTimes(4);
    expect(isQueueEmpty).toHaveNthReturnedWith(4, false);

    expect(scrapingService.queueService.getRawQueue()).toStrictEqual([]);

    await scrapingService.handleForumMessage();

    expect(doHandle).toHaveBeenCalledTimes(5);

    expect(formatData).toHaveBeenCalledTimes(5);
    expect(formatData).toHaveNthReturnedWith(5, [
      {
        slug: 'server_pc_eu',
        status: 'up',
        type: 'server',
        support: 'pc',
        zone: 'eu',
        raw: {
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
      },
      {
        slug: 'server_pc_na',
        status: 'up',
        type: 'server',
        support: 'pc',
        zone: 'na',
        raw: {
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
      },
    ]);

    expect(update).toHaveBeenCalledTimes(10);

    expect(isPlannedStatus).toHaveBeenCalledTimes(10);
    expect(isPlannedStatus).toHaveNthReturnedWith(9, false);
    expect(isPlannedStatus).toHaveNthReturnedWith(10, false);

    expect(changed).toHaveBeenCalledTimes(10);
    expect(changed).toHaveNthReturnedWith(9, false);
    expect(changed).toHaveNthReturnedWith(10, false);

    expect(slugChanged).toHaveBeenCalledTimes(10);
    expect(slugChanged).toHaveNthReturnedWith(9, false);
    expect(slugChanged).toHaveNthReturnedWith(10, false);

    expect(rawChanged).toHaveBeenCalledTimes(4); // vu que slugChanged est à false, la deuxième condition n'est pas exécuté

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

    expect(
      (
        await archiveRepository.find({
          where: {
            serviceId: pcEu.id,
          },
          order: {
            createdAt: 'DESC',
          },
        })
      )[0].createdAt,
    ).toStrictEqual(secondUpdateDate);

    expect(
      (
        await archiveRepository.find({
          where: {
            serviceId: pcNa.id,
          },
          order: {
            createdAt: 'DESC',
          },
        })
      )[0].createdAt,
    ).toStrictEqual(secondUpdateDate);

    expect(pcNa.updatedAt).toStrictEqual(secondUpdateDate);
    expect(pcEu.updatedAt).toStrictEqual(secondUpdateDate);

    expect(getQueue).toHaveBeenCalledTimes(19);

    expect(scrapingService.queueService.getRawQueue()).toStrictEqual([]);

    scrapingService.doQueue();

    expect(pushQueue).toHaveBeenCalledTimes(5);

    expect(isQueueEmpty).toHaveBeenCalledTimes(5);
    expect(isQueueEmpty).toHaveNthReturnedWith(5, true);

    await scrapingService.handleServiceAlerts();

    expect(doHandle).toHaveBeenCalledTimes(6);

    expect(formatData).toHaveBeenCalledTimes(6);
    expect(formatData).toHaveNthReturnedWith(6, [
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

    expect(update).toHaveBeenCalledTimes(12);

    expect(isPlannedStatus).toHaveBeenCalledTimes(12);
    expect(isPlannedStatus).toHaveNthReturnedWith(11, false);
    expect(isPlannedStatus).toHaveNthReturnedWith(12, false);

    expect(changed).toHaveBeenCalledTimes(12);
    expect(changed).toHaveNthReturnedWith(11, false);
    expect(changed).toHaveNthReturnedWith(12, false);

    expect(slugChanged).toHaveBeenCalledTimes(12);
    expect(slugChanged).toHaveNthReturnedWith(11, false);
    expect(slugChanged).toHaveNthReturnedWith(12, false);

    expect(rawChanged).toHaveBeenCalledTimes(4); // vu que slugChanged est à false, la deuxième condition n'est pas exécuté

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

    expect(
      (
        await archiveRepository.find({
          where: {
            serviceId: pcEu.id,
          },
          order: {
            createdAt: 'DESC',
          },
        })
      )[0].createdAt,
    ).toStrictEqual(secondUpdateDate);

    expect(
      (
        await archiveRepository.find({
          where: {
            serviceId: pcNa.id,
          },
          order: {
            createdAt: 'DESC',
          },
        })
      )[0].createdAt,
    ).toStrictEqual(secondUpdateDate);

    expect(pcNa.updatedAt).toStrictEqual(secondUpdateDate);
    expect(pcEu.updatedAt).toStrictEqual(secondUpdateDate);

    expect(getQueue).toHaveBeenCalledTimes(21);

    expect(scrapingService.queueService.getRawQueue()).toStrictEqual([]);

    scrapingService.doQueue();

    expect(pushQueue).toHaveBeenCalledTimes(6);

    expect(isQueueEmpty).toHaveBeenCalledTimes(6);
    expect(isQueueEmpty).toHaveNthReturnedWith(6, true);
  });

  it('revived planned status', async (): Promise<void> => {
    const doHandle = jest.spyOn(scrapingService, 'doHandle');
    const formatData = jest.spyOn(scrapingService, 'formatData');
    const update = jest.spyOn(scrapingService, 'update');
    const isPlannedStatus = jest.spyOn(scrapingService, 'isPlannedStatus');
    const changed = jest.spyOn(scrapingService, 'changed');
    const slugChanged = jest.spyOn(scrapingService, 'slugChanged');
    const rawChanged = jest.spyOn(scrapingService, 'rawChanged');
    const isQueueEmpty = jest.spyOn(
      scrapingService.queueService,
      'isQueueEmpty',
    );
    const pushQueue = jest.spyOn(scrapingService.queueService, 'pushQueue');

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

    expect(scrapingService.queueService.getRawQueue()).toStrictEqual([]);

    let pcNa: Service = await serviceRepository.findOne({
      where: {
        id: 5,
      },
    });
    let pcEu: Service = await serviceRepository.findOne({
      where: {
        id: 6,
      },
    });

    expect(pcNa.statusId).toEqual(2);
    expect(pcEu.statusId).toEqual(2);

    pcEu.statusId = 1;
    pcNa.statusId = 1;

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
    expect(pcEu.statusId).toEqual(1);

    jest
      .spyOn(ForumMessage, 'getData')
      .mockImplementation(async (): Promise<RawEsoStatus[]> => {
        return Promise.resolve(forumMessage);
      });

    await scrapingService.handleForumMessage();

    expect(doHandle).toHaveBeenCalledTimes(1);

    expect(formatData).toHaveBeenCalledTimes(1);
    expect(formatData).toHaveNthReturnedWith(1, [
      {
        slug: 'server_pc_eu',
        status: 'planned',
        type: 'server',
        support: 'pc',
        zone: 'eu',
        raw: {
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
      },
      {
        slug: 'server_pc_na',
        status: 'planned',
        type: 'server',
        support: 'pc',
        zone: 'na',
        raw: {
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
      },
    ]);

    expect(update).toHaveBeenCalledTimes(2);

    expect(isPlannedStatus).toHaveBeenCalledTimes(2);
    expect(isPlannedStatus).toHaveNthReturnedWith(1, true);
    expect(isPlannedStatus).toHaveNthReturnedWith(2, true);

    expect(changed).toHaveBeenCalledTimes(0);

    expect(slugChanged).toHaveBeenCalledTimes(0);

    expect(rawChanged).toHaveBeenCalledTimes(0);

    expect(scrapingService.queueService.getRawQueue()).toStrictEqual([]);

    scrapingService.doQueue();

    expect(pushQueue).toHaveBeenCalledTimes(1);

    expect(isQueueEmpty).toHaveBeenCalledTimes(1);
    expect(isQueueEmpty).toHaveNthReturnedWith(1, true);
  }, 15000);
});
