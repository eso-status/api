import { ForumMessage } from '@eso-status/forum-message';
import { LiveServices } from '@eso-status/live-services';
import { ServiceAlerts } from '@eso-status/service-alerts';
import {
  EsoStatus,
  MaintenanceEsoStatus,
  RawEsoStatus,
  Slug,
} from '@eso-status/types';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { Server } from 'socket.io';
import { Socket, io } from 'socket.io-client';

import { Maintenance } from 'src/resource/maintenance/entities/maintenance.entity';
import { Connector } from 'src/type/connector.type';
import { Repository } from 'typeorm';

import { runSeeders } from 'typeorm-extension';

import { dataSource, dataSourceOptions } from '../src/config/typeorm.config';
import { ArchiveService } from '../src/resource/archive/archive.service';
import { Archive } from '../src/resource/archive/entities/archive.entity';
import { MaintenanceService } from '../src/resource/maintenance/maintenance.service';
import { Service } from '../src/resource/service/entities/service.entity';
import { ServiceController } from '../src/resource/service/service.controller';
import { ServiceService } from '../src/resource/service/service.service';
import { Status } from '../src/resource/status/entities/status.entity';
import { StatusService } from '../src/resource/status/status.service';
import { ScrapingService } from '../src/service/scraping/scraping.service';
import { WebsocketService } from '../src/service/websocket/websocket.service';
import { WinstonService } from '../src/service/winston/winston.service';

import {
  ForumMessageDown,
  ForumMessageDownFormatted,
  ForumMessageDownPcEuRaw,
  ForumMessageDownPcNaRaw,
  ForumMessageInitial,
  ForumMessageInitialPcEuLastUpRaw,
  ForumMessageInitialPcNaLastUpRaw,
  ForumMessagePlanned,
  ForumMessagePlannedFormatted,
  ForumMessagePlannedPcEuMaintenance,
  ForumMessagePlannedPcEuRaw,
  ForumMessagePlannedPcNaMaintenance,
  ForumMessagePlannedPcNaRaw,
  LiveServicesDown,
  LiveServicesDownFormated,
  LiveServicesInitial,
  LiveServicesInitialFormated,
  LiveServicesPcEuDownEsoStatus,
  LiveServicesPcEuDownRaw,
  LiveServicesPcEuUpRaw,
  LiveServicesPcNaDownEsoStatus,
  LiveServicesPcNaDownRaw,
  LiveServicesPcNaUpRaw,
  LiveServicesPcPtsUpRaw,
  LiveServicesPsEuUpRaw,
  LiveServicesPsNaUpRaw,
  LiveServicesXboxEuUpRaw,
  LiveServicesXboxNaUpRaw,
  ServiceAlertsInitial,
  ServiceAlertsInitialFormatted,
  ServiceAlertsInitialPcEuRaw,
  ServiceAlertsInitialPcNaRaw,
  ServiceAlertsInitialPcPtsRaw,
  ServiceAlertsInitialPsEuRaw,
  ServiceAlertsInitialPsNaRaw,
  ServiceAlertsInitialStoreEsoRaw,
  ServiceAlertsInitialSystemAccountRaw,
  ServiceAlertsInitialXboxEuRaw,
  ServiceAlertsInitialXboxNaRaw,
} from './data/data';

config();

let app: INestApplication;
let websocketService: WebsocketService;
let scrapingService: ScrapingService;
let serverSocket: Server;
let clientSocket: Socket;
let serviceRepository: Repository<Service>;
let archiveRepository: Repository<Archive>;
let maintenanceRepository: Repository<Maintenance>;
let serviceController: ServiceController;

let doHandle: jest.SpyInstance<Promise<void>>;
let formatData: jest.SpyInstance<EsoStatus[]>;
let prepareUpdate: jest.SpyInstance<Promise<void>>;
let getService: jest.SpyInstance<Promise<Service>>;
let getArchive: jest.SpyInstance<Promise<Archive>>;
let archiveChanged: jest.SpyInstance<boolean>;
let getStatus: jest.SpyInstance<Promise<Status>>;
let updateArchive: jest.SpyInstance<Promise<void>>;
let slugChanged: jest.SpyInstance<boolean>;
let isPlannedStatus: jest.SpyInstance<boolean>;
let updateMaintenance: jest.SpyInstance<Promise<void>>;
let updateNoMaintenance: jest.SpyInstance<Promise<void>>;
let updateService: jest.SpyInstance<Promise<void>>;
let addMaintenance: jest.SpyInstance<Promise<Maintenance>>;
let serviceHaveMaintenance: jest.SpyInstance<boolean>;
let detachMaintenanceToService: jest.SpyInstance<Promise<void>>;

const getServiceById = async (id: number): Promise<Service> => {
  return serviceRepository.findOne({
    where: {
      id,
    },
  });
};

const getArchiveByServiceIdAndConnectorName = async (
  serviceId: number,
  connector: Connector,
): Promise<Archive> => {
  return archiveRepository.findOne({
    where: {
      connector,
      serviceId,
    },
  });
};

const before = async (): Promise<void> => {
  const module: TestingModule = await Test.createTestingModule({
    imports: [
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      TypeOrmModule.forRoot(dataSourceOptions),
      TypeOrmModule.forFeature([Service, Status, Archive, Maintenance]),
    ],
    providers: [
      WebsocketService,
      WinstonService,
      ScrapingService,
      ServiceService,
      ArchiveService,
      MaintenanceService,
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
  maintenanceRepository = dataSource.getRepository(Maintenance);

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
  prepareUpdate = jest.spyOn(scrapingService, 'prepareUpdate');
  getService = jest.spyOn(scrapingService, 'getService');
  getArchive = jest.spyOn(scrapingService, 'getArchive');
  archiveChanged = jest.spyOn(scrapingService, 'archiveChanged');
  getStatus = jest.spyOn(scrapingService, 'getStatus');
  updateArchive = jest.spyOn(scrapingService, 'updateArchive');
  slugChanged = jest.spyOn(scrapingService, 'slugChanged');
  isPlannedStatus = jest.spyOn(scrapingService, 'isPlannedStatus');
  updateMaintenance = jest.spyOn(scrapingService, 'updateMaintenance');
  updateNoMaintenance = jest.spyOn(scrapingService, 'updateNoMaintenance');
  updateService = jest.spyOn(scrapingService, 'updateService');
  addMaintenance = jest.spyOn(scrapingService, 'addMaintenance');
  serviceHaveMaintenance = jest.spyOn(
    scrapingService,
    'serviceHaveMaintenance',
  );
  detachMaintenanceToService = jest.spyOn(
    scrapingService,
    'detachMaintenanceToService',
  );
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

describe('ScrapingService (e2e)', (): void => {
  describe('classic maintenance', (): void => {
    let updateDate: Date;

    describe('prepare test', (): void => {
      it('prepare', async (): Promise<void> => {
        await before();

        expect(true).toStrictEqual(true);
      }, 15000);

      it.each([
        [5, 1, LiveServicesPcNaUpRaw],
        [6, 1, LiveServicesPcEuUpRaw],
      ])(
        'update service status to up',
        async (
          serviceId: number,
          statusId: number,
          rawData: RawEsoStatus,
        ): Promise<void> => {
          let service = await getServiceById(serviceId);
          service.statusId = statusId;
          service.rawData = JSON.stringify(rawData);
          await serviceRepository.save(service);
          service = await getServiceById(serviceId);
          expect(service.statusId).toEqual(statusId);
          expect(service.rawData).toEqual(JSON.stringify(rawData));
        },
        15000,
      );

      it.each([
        ['LiveServices', 1, 1, LiveServicesXboxNaUpRaw],
        ['LiveServices', 2, 1, LiveServicesXboxEuUpRaw],
        ['LiveServices', 3, 1, LiveServicesPsNaUpRaw],
        ['LiveServices', 4, 1, LiveServicesPsEuUpRaw],
        ['LiveServices', 5, 1, LiveServicesPcNaUpRaw],
        ['LiveServices', 6, 1, LiveServicesPcEuUpRaw],
        ['LiveServices', 7, 1, LiveServicesPcPtsUpRaw],

        ['ForumMessage', 5, 1, ForumMessageInitialPcNaLastUpRaw],
        ['ForumMessage', 6, 1, ForumMessageInitialPcEuLastUpRaw],

        ['ServiceAlerts', 1, 1, ServiceAlertsInitialXboxNaRaw],
        ['ServiceAlerts', 2, 1, ServiceAlertsInitialXboxEuRaw],
        ['ServiceAlerts', 3, 1, ServiceAlertsInitialPsNaRaw],
        ['ServiceAlerts', 4, 1, ServiceAlertsInitialPsEuRaw],
        ['ServiceAlerts', 5, 1, ServiceAlertsInitialPcNaRaw],
        ['ServiceAlerts', 6, 1, ServiceAlertsInitialPcEuRaw],
        ['ServiceAlerts', 7, 1, ServiceAlertsInitialPcPtsRaw],
        ['ServiceAlerts', 11, 1, ServiceAlertsInitialStoreEsoRaw],
        ['ServiceAlerts', 12, 1, ServiceAlertsInitialSystemAccountRaw],
      ])(
        'update %s archive',
        async (
          connector: Connector,
          serviceId: number,
          statusId: number,
          rawData: RawEsoStatus,
        ): Promise<void> => {
          let archive = await getArchiveByServiceIdAndConnectorName(
            serviceId,
            connector,
          );
          archive.statusId = statusId;
          archive.rawData = JSON.stringify(rawData);
          await archiveRepository.save(archive);
          archive = await getArchiveByServiceIdAndConnectorName(
            serviceId,
            connector,
          );
          expect(archive.statusId).toEqual(statusId);
          expect(archive.rawData).toEqual(JSON.stringify(rawData));
        },
        15000,
      );

      it.each([
        ['server_pc_eu', LiveServicesPcEuUpRaw],
        ['server_pc_na', LiveServicesPcNaUpRaw],
      ])(
        'should service controller return correct data',
        async (slug: Slug, rawData: RawEsoStatus): Promise<void> => {
          const response: EsoStatus = await serviceController.findOne(slug);
          expect(response.status).toStrictEqual('up');
          expect(response.raw).toStrictEqual(rawData);
        },
        15000,
      );
    });

    describe('Nothing changed compare initial state', (): void => {
      describe('handle handleLiveServices 1 (up)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          jest
            .spyOn(LiveServices, 'getData')
            .mockImplementation(async (): Promise<RawEsoStatus[]> => {
              return Promise.resolve(LiveServicesInitial);
            });

          await scrapingService.handleLiveServices();

          updateDate = new Date();
          updateDate.setMilliseconds(0);

          expect(doHandle).toHaveBeenCalledTimes(1);
        }, 15000);

        it('should formatData method called and works correctly', (): void => {
          expect(formatData).toHaveBeenCalledTimes(1);
          expect(formatData).toHaveNthReturnedWith(
            1,
            LiveServicesInitialFormated,
          );
        });

        it('should prepareUpdate method called', (): void => {
          expect(prepareUpdate).toHaveBeenCalledTimes(7);
        });

        it('should getService method called', (): void => {
          expect(getService).toHaveBeenCalledTimes(7);
        });

        it('should getArchive method called', (): void => {
          expect(getArchive).toHaveBeenCalledTimes(7);
        });

        it('should archiveChanged method called and works', (): void => {
          expect(archiveChanged).toHaveBeenCalledTimes(7);
          expect(archiveChanged).toHaveNthReturnedWith(1, false);
          expect(archiveChanged).toHaveNthReturnedWith(2, false);
          expect(archiveChanged).toHaveNthReturnedWith(3, false);
          expect(archiveChanged).toHaveNthReturnedWith(4, false);
          expect(archiveChanged).toHaveNthReturnedWith(5, false);
          expect(archiveChanged).toHaveNthReturnedWith(6, false);
          expect(archiveChanged).toHaveNthReturnedWith(7, false);
        });

        it('should getStatus method not called', (): void => {
          expect(getStatus).toHaveBeenCalledTimes(0);
        });
      });

      describe('handle handleForumMessage 1 (up)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          jest
            .spyOn(ForumMessage, 'getData')
            .mockImplementation(async (): Promise<RawEsoStatus[]> => {
              return Promise.resolve(ForumMessageInitial);
            });

          await scrapingService.handleForumMessage();

          updateDate = new Date();
          updateDate.setMilliseconds(0);

          expect(doHandle).toHaveBeenCalledTimes(2);
        }, 15000);

        it('should formatData method called and works correctly', (): void => {
          expect(formatData).toHaveBeenCalledTimes(2);
          expect(formatData).toHaveNthReturnedWith(2, <EsoStatus[]>[]);
        });

        it('should prepareUpdate method not called', (): void => {
          expect(prepareUpdate).toHaveBeenCalledTimes(7);
        });
      });

      describe('handle handleServiceAlerts 1 (up)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          jest
            .spyOn(ServiceAlerts, 'getData')
            .mockImplementation(async (): Promise<RawEsoStatus[]> => {
              return Promise.resolve(ServiceAlertsInitial);
            });

          await scrapingService.handleServiceAlerts();

          updateDate = new Date();
          updateDate.setMilliseconds(0);

          expect(doHandle).toHaveBeenCalledTimes(3);
        }, 15000);

        it('should formatData method called and works correctly', (): void => {
          expect(formatData).toHaveBeenCalledTimes(3);
          expect(formatData).toHaveNthReturnedWith(
            3,
            ServiceAlertsInitialFormatted,
          );
        });

        it('should prepareUpdate method called', (): void => {
          expect(prepareUpdate).toHaveBeenCalledTimes(16);
        });

        it('should getService method called', (): void => {
          expect(getService).toHaveBeenCalledTimes(16);
        });

        it('should getArchive method called', (): void => {
          expect(getArchive).toHaveBeenCalledTimes(16);
        });

        it('should archiveChanged method called and works', (): void => {
          expect(archiveChanged).toHaveBeenCalledTimes(16);
          expect(archiveChanged).toHaveNthReturnedWith(8, false);
          expect(archiveChanged).toHaveNthReturnedWith(9, false);
          expect(archiveChanged).toHaveNthReturnedWith(10, false);
          expect(archiveChanged).toHaveNthReturnedWith(11, false);
          expect(archiveChanged).toHaveNthReturnedWith(12, false);
          expect(archiveChanged).toHaveNthReturnedWith(13, false);
          expect(archiveChanged).toHaveNthReturnedWith(14, false);
          expect(archiveChanged).toHaveNthReturnedWith(15, false);
          expect(archiveChanged).toHaveNthReturnedWith(16, false);
        });

        it('should getStatus method not called', (): void => {
          expect(getStatus).toHaveBeenCalledTimes(0);
        });
      });
    });

    describe('ForumMessage new data => maintenance planned for PC EU/NA', (): void => {
      describe('handle handleLiveServices 2 (up)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          await scrapingService.handleLiveServices();

          updateDate = new Date();
          updateDate.setMilliseconds(0);

          expect(doHandle).toHaveBeenCalledTimes(4);
        }, 15000);

        it('should formatData method called and works correctly', (): void => {
          expect(formatData).toHaveBeenCalledTimes(4);
          expect(formatData).toHaveNthReturnedWith(
            4,
            LiveServicesInitialFormated,
          );
        });

        it('should prepareUpdate method called', (): void => {
          expect(prepareUpdate).toHaveBeenCalledTimes(23);
        });

        it('should getService method called', (): void => {
          expect(getService).toHaveBeenCalledTimes(23);
        });

        it('should getArchive method called', (): void => {
          expect(getArchive).toHaveBeenCalledTimes(23);
        });

        it('should archiveChanged method called and works', (): void => {
          expect(archiveChanged).toHaveBeenCalledTimes(23);
          expect(archiveChanged).toHaveNthReturnedWith(17, false);
          expect(archiveChanged).toHaveNthReturnedWith(18, false);
          expect(archiveChanged).toHaveNthReturnedWith(19, false);
          expect(archiveChanged).toHaveNthReturnedWith(20, false);
          expect(archiveChanged).toHaveNthReturnedWith(21, false);
          expect(archiveChanged).toHaveNthReturnedWith(22, false);
          expect(archiveChanged).toHaveNthReturnedWith(23, false);
        });

        it('should getStatus method not called', (): void => {
          expect(getStatus).toHaveBeenCalledTimes(0);
        });
      });

      describe('handle handleForumMessage 2 (planned)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
          await new Promise<void>(async (resolve): Promise<void> => {
            jest
              .spyOn(ForumMessage, 'getData')
              .mockImplementation(async (): Promise<RawEsoStatus[]> => {
                return Promise.resolve(ForumMessagePlanned);
              });

            let haveEu: boolean = false;
            let haveNa: boolean = false;
            clientSocket.on(
              'maintenancePlanned',
              (data: MaintenanceEsoStatus): void => {
                if (
                  !haveEu &&
                  JSON.stringify(data) ===
                    JSON.stringify(ForumMessagePlannedPcEuMaintenance)
                ) {
                  haveEu = true;
                }
                if (
                  !haveNa &&
                  JSON.stringify(data) ===
                    JSON.stringify(ForumMessagePlannedPcNaMaintenance)
                ) {
                  haveNa = true;
                }
                if (haveEu && haveNa) {
                  resolve();
                }
              },
            );

            await scrapingService.handleForumMessage();

            updateDate = new Date();
            updateDate.setMilliseconds(0);

            expect(doHandle).toHaveBeenCalledTimes(5);
          });
        }, 15000);

        it('should formatData method called and works correctly', (): void => {
          expect(formatData).toHaveBeenCalledTimes(5);
          expect(formatData).toHaveNthReturnedWith(
            5,
            ForumMessagePlannedFormatted,
          );
        });

        it('should prepareUpdate method not called', (): void => {
          expect(prepareUpdate).toHaveBeenCalledTimes(25);
        });

        it('should getService method called', (): void => {
          expect(getService).toHaveBeenCalledTimes(25);
        });

        it('should getArchive method called', (): void => {
          expect(getArchive).toHaveBeenCalledTimes(25);
        });

        it('should archiveChanged method called and works', (): void => {
          expect(archiveChanged).toHaveBeenCalledTimes(25);
          expect(archiveChanged).toHaveNthReturnedWith(24, true);
          expect(archiveChanged).toHaveNthReturnedWith(25, true);
        });

        it('should getStatus method called and works', (): void => {
          expect(getStatus).toHaveBeenCalledTimes(2);
        });

        it('should updateArchive method called', (): void => {
          expect(updateArchive).toHaveBeenCalledTimes(2);
        });

        it.each([
          [5, ForumMessagePlannedPcNaRaw],
          [6, ForumMessagePlannedPcEuRaw],
        ])(
          'should updateArchive method works',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const archive = await getArchiveByServiceIdAndConnectorName(
              serviceId,
              'ForumMessage',
            );
            expect(archive.statusId).toEqual(4);
            expect(archive.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it('should isPlannedStatus method called and works', (): void => {
          expect(isPlannedStatus).toHaveBeenCalledTimes(2);
          expect(isPlannedStatus).toHaveNthReturnedWith(1, true);
          expect(isPlannedStatus).toHaveNthReturnedWith(2, true);
        });

        it('should updateMaintenance method called', (): void => {
          expect(updateMaintenance).toHaveBeenCalledTimes(2);
        });

        it('should addMaintenance method called', (): void => {
          expect(addMaintenance).toHaveBeenCalledTimes(2);
        });

        it.each([
          [5, ForumMessagePlannedPcNaRaw],
          [6, ForumMessagePlannedPcEuRaw],
        ])(
          'should addMaintenance method works',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const maintenance: Maintenance =
              await maintenanceRepository.findOne({
                where: {
                  serviceId,
                },
              });
            const service: Service = await serviceRepository.findOne({
              relations: ['maintenances'], // TODO mettre en 1 to 1
              where: {
                id: serviceId,
              },
            });
            expect(maintenance.rawData).toStrictEqual(JSON.stringify(rawData));
            expect(maintenance.serviceId).toStrictEqual(serviceId);
            expect(maintenance.beginnerAt).toStrictEqual(
              new Date(rawData.dates[0].toISOString()),
            );
            expect(maintenance.endingAt).toStrictEqual(
              new Date(rawData.dates[1].toISOString()),
            );
            expect(service.maintenances[0].id).toStrictEqual(maintenance.id); // TODO mettre en 1 to 1
          },
          15000,
        );
      });

      describe('handle handleServiceAlerts 2 (up)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          await scrapingService.handleServiceAlerts();

          updateDate = new Date();
          updateDate.setMilliseconds(0);

          expect(doHandle).toHaveBeenCalledTimes(6);
        }, 15000);

        it('should formatData method called and works correctly', (): void => {
          expect(formatData).toHaveBeenCalledTimes(6);
          expect(formatData).toHaveNthReturnedWith(
            6,
            ServiceAlertsInitialFormatted,
          );
        });

        it('should prepareUpdate method called', (): void => {
          expect(prepareUpdate).toHaveBeenCalledTimes(34);
        });

        it('should getService method called', (): void => {
          expect(getService).toHaveBeenCalledTimes(34);
        });

        it('should getArchive method called', (): void => {
          expect(getArchive).toHaveBeenCalledTimes(34);
        });

        it('should archiveChanged method called and works', (): void => {
          expect(archiveChanged).toHaveBeenCalledTimes(34);
          expect(archiveChanged).toHaveNthReturnedWith(26, false);
          expect(archiveChanged).toHaveNthReturnedWith(27, false);
          expect(archiveChanged).toHaveNthReturnedWith(28, false);
          expect(archiveChanged).toHaveNthReturnedWith(29, false);
          expect(archiveChanged).toHaveNthReturnedWith(30, false);
          expect(archiveChanged).toHaveNthReturnedWith(31, false);
          expect(archiveChanged).toHaveNthReturnedWith(32, false);
          expect(archiveChanged).toHaveNthReturnedWith(33, false);
          expect(archiveChanged).toHaveNthReturnedWith(34, false);
        });

        it('should getStatus method not called', (): void => {
          expect(getStatus).toHaveBeenCalledTimes(2);
        });
      });
    });

    describe('ForumMessage still planned', (): void => {
      describe('handle handleLiveServices 3 (up)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          await scrapingService.handleLiveServices();

          updateDate = new Date();
          updateDate.setMilliseconds(0);

          expect(doHandle).toHaveBeenCalledTimes(7);
        }, 15000);

        it('should formatData method called and works correctly', (): void => {
          expect(formatData).toHaveBeenCalledTimes(7);
          expect(formatData).toHaveNthReturnedWith(
            7,
            LiveServicesInitialFormated,
          );
        });

        it('should prepareUpdate method called', (): void => {
          expect(prepareUpdate).toHaveBeenCalledTimes(41);
        });

        it('should getService method called', (): void => {
          expect(getService).toHaveBeenCalledTimes(41);
        });

        it('should getArchive method called', (): void => {
          expect(getArchive).toHaveBeenCalledTimes(41);
        });

        it('should archiveChanged method called and works', (): void => {
          expect(archiveChanged).toHaveBeenCalledTimes(41);
          expect(archiveChanged).toHaveNthReturnedWith(35, false);
          expect(archiveChanged).toHaveNthReturnedWith(36, false);
          expect(archiveChanged).toHaveNthReturnedWith(37, false);
          expect(archiveChanged).toHaveNthReturnedWith(38, false);
          expect(archiveChanged).toHaveNthReturnedWith(39, false);
          expect(archiveChanged).toHaveNthReturnedWith(40, false);
          expect(archiveChanged).toHaveNthReturnedWith(41, false);
        });

        it('should getStatus method not called', (): void => {
          expect(getStatus).toHaveBeenCalledTimes(2);
        });
      });

      describe('handle handleForumMessage 3 (planned)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          await scrapingService.handleForumMessage();

          updateDate = new Date();
          updateDate.setMilliseconds(0);

          expect(doHandle).toHaveBeenCalledTimes(8);
        }, 15000);

        it('should formatData method called and works correctly', (): void => {
          expect(formatData).toHaveBeenCalledTimes(8);
          expect(formatData).toHaveNthReturnedWith(
            8,
            ForumMessagePlannedFormatted,
          );
        });

        it('should prepareUpdate method called', (): void => {
          expect(prepareUpdate).toHaveBeenCalledTimes(43);
        });

        it('should getService method called', (): void => {
          expect(getService).toHaveBeenCalledTimes(43);
        });

        it('should getArchive method called', (): void => {
          expect(getArchive).toHaveBeenCalledTimes(43);
        });

        it('should archiveChanged method called and works', (): void => {
          expect(archiveChanged).toHaveBeenCalledTimes(43);
          expect(archiveChanged).toHaveNthReturnedWith(42, false);
          expect(archiveChanged).toHaveNthReturnedWith(43, false);
        });

        it('should getStatus method not called', (): void => {
          expect(getStatus).toHaveBeenCalledTimes(2);
        });
      });

      describe('handle handleServiceAlerts 3 (up)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          await scrapingService.handleServiceAlerts();

          updateDate = new Date();
          updateDate.setMilliseconds(0);

          expect(doHandle).toHaveBeenCalledTimes(9);
        }, 15000);

        it('should formatData method called and works correctly', (): void => {
          expect(formatData).toHaveBeenCalledTimes(9);
          expect(formatData).toHaveNthReturnedWith(
            9,
            ServiceAlertsInitialFormatted,
          );
        });

        it('should prepareUpdate method called', (): void => {
          expect(prepareUpdate).toHaveBeenCalledTimes(52);
        });

        it('should getService method called', (): void => {
          expect(getService).toHaveBeenCalledTimes(52);
        });

        it('should getArchive method called', (): void => {
          expect(getArchive).toHaveBeenCalledTimes(52);
        });

        it('should archiveChanged method called and works', (): void => {
          expect(archiveChanged).toHaveBeenCalledTimes(52);
          expect(archiveChanged).toHaveNthReturnedWith(44, false);
          expect(archiveChanged).toHaveNthReturnedWith(45, false);
          expect(archiveChanged).toHaveNthReturnedWith(46, false);
          expect(archiveChanged).toHaveNthReturnedWith(47, false);
          expect(archiveChanged).toHaveNthReturnedWith(48, false);
          expect(archiveChanged).toHaveNthReturnedWith(49, false);
          expect(archiveChanged).toHaveNthReturnedWith(50, false);
          expect(archiveChanged).toHaveNthReturnedWith(51, false);
          expect(archiveChanged).toHaveNthReturnedWith(52, false);
        });

        it('should getStatus method not called', (): void => {
          expect(getStatus).toHaveBeenCalledTimes(2);
        });
      });
    });

    describe('LiveServices new data => PC EU/NA down', (): void => {
      describe('handle handleLiveServices 4 (down)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
          await new Promise<void>(async (resolve): Promise<void> => {
            jest
              .spyOn(LiveServices, 'getData')
              .mockImplementation(async (): Promise<RawEsoStatus[]> => {
                return Promise.resolve(LiveServicesDown);
              });

            let haveStatusUpdateEu: boolean = false;
            let haveStatusUpdateNa: boolean = false;

            let haveMaintenanceRemovedEu: boolean = false;
            let haveMaintenanceRemovedNa: boolean = false;

            let statusUpdateDone: boolean = false;
            let maintenanceRemovedDone: boolean = false;

            clientSocket.on(
              'statusUpdate',
              (data: MaintenanceEsoStatus): void => {
                if (
                  !haveStatusUpdateEu &&
                  JSON.stringify(data) ===
                    JSON.stringify(LiveServicesPcEuDownEsoStatus)
                ) {
                  haveStatusUpdateEu = true;
                }
                if (
                  !haveStatusUpdateNa &&
                  JSON.stringify(data) ===
                    JSON.stringify(LiveServicesPcNaDownEsoStatus)
                ) {
                  haveStatusUpdateNa = true;
                }
                if (haveStatusUpdateEu && haveStatusUpdateNa) {
                  statusUpdateDone = true;

                  if (statusUpdateDone && maintenanceRemovedDone) {
                    resolve();
                  }
                }
              },
            );

            clientSocket.on('maintenanceRemoved', (data: Slug): void => {
              if (!haveMaintenanceRemovedEu && data === 'server_pc_eu') {
                haveMaintenanceRemovedEu = true;
              }

              if (!haveMaintenanceRemovedNa && data === 'server_pc_na') {
                haveMaintenanceRemovedNa = true;
              }

              if (haveMaintenanceRemovedEu && haveMaintenanceRemovedNa) {
                maintenanceRemovedDone = true;

                if (statusUpdateDone && maintenanceRemovedDone) {
                  resolve();
                }
              }
            });

            await scrapingService.handleLiveServices();

            updateDate = new Date();
            updateDate.setMilliseconds(0);

            expect(doHandle).toHaveBeenCalledTimes(10);
          });
        }, 15000);

        it('should formatData method called and works correctly', (): void => {
          expect(formatData).toHaveBeenCalledTimes(10);
          expect(formatData).toHaveNthReturnedWith(
            10,
            LiveServicesDownFormated,
          );
        });

        it('should prepareUpdate method called', (): void => {
          expect(prepareUpdate).toHaveBeenCalledTimes(59);
        });

        it('should getService method called', (): void => {
          expect(getService).toHaveBeenCalledTimes(59);
        });

        it('should getArchive method called', (): void => {
          expect(getArchive).toHaveBeenCalledTimes(59);
        });

        it('should archiveChanged method called and works', (): void => {
          expect(archiveChanged).toHaveBeenCalledTimes(59); // TODO check les resultat
          // expect(archiveChanged).toHaveNthReturnedWith(53, true);
          // expect(archiveChanged).toHaveNthReturnedWith(54, true);
          // expect(archiveChanged).toHaveNthReturnedWith(55, false);
          // expect(archiveChanged).toHaveNthReturnedWith(56, false);
          // expect(archiveChanged).toHaveNthReturnedWith(57, false);
          // expect(archiveChanged).toHaveNthReturnedWith(58, false);
          // expect(archiveChanged).toHaveNthReturnedWith(59, false);
        });

        it('should getStatus method called and works', (): void => {
          expect(getStatus).toHaveBeenCalledTimes(4);
        });

        it('should updateArchive method called', (): void => {
          expect(updateArchive).toHaveBeenCalledTimes(4);
        });

        it.each([
          [5, LiveServicesPcNaDownRaw],
          [6, LiveServicesPcEuDownRaw],
        ])(
          'should updateArchive method works',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const archive = await getArchiveByServiceIdAndConnectorName(
              serviceId,
              'LiveServices',
            );
            expect(archive.statusId).toEqual(2);
            expect(archive.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it('should isPlannedStatus method called and works', (): void => {
          expect(isPlannedStatus).toHaveBeenCalledTimes(4);
          expect(isPlannedStatus).toHaveNthReturnedWith(3, false);
          expect(isPlannedStatus).toHaveNthReturnedWith(4, false);
        });

        it('should isPlannedStatus method called', (): void => {
          expect(updateNoMaintenance).toHaveBeenCalledTimes(2);
        });

        it('should slugChanged method called and works', (): void => {
          expect(slugChanged).toHaveBeenCalledTimes(2);
          expect(slugChanged).toHaveNthReturnedWith(2, true);
          expect(slugChanged).toHaveNthReturnedWith(2, true);
        });

        it('should updateService method called', (): void => {
          expect(updateService).toHaveBeenCalledTimes(2);
        });

        it.each([
          [5, LiveServicesPcNaDownRaw],
          [6, LiveServicesPcEuDownRaw],
        ])(
          'should updateService method works',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const servie = await getServiceById(serviceId);
            expect(servie.statusId).toEqual(2);
            expect(servie.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          ['server_pc_eu', LiveServicesPcEuDownRaw],
          ['server_pc_na', LiveServicesPcNaDownRaw],
        ])(
          'should service controller return correct data',
          async (slug: Slug, rawData: RawEsoStatus): Promise<void> => {
            const response: EsoStatus = await serviceController.findOne(slug);
            expect(response.status).toStrictEqual('down');
            expect(response.raw).toStrictEqual(rawData);
          },
          15000,
        );

        it('should serviceHaveMaintenance method called and works', (): void => {
          expect(serviceHaveMaintenance).toHaveBeenCalledTimes(2);
          expect(serviceHaveMaintenance).toHaveNthReturnedWith(1, true);
          expect(serviceHaveMaintenance).toHaveNthReturnedWith(2, true);
        });

        it('should detachMaintenanceToService method called and works', (): void => {
          expect(detachMaintenanceToService).toHaveBeenCalledTimes(2);
        });
      });

      describe('handle handleForumMessage 4 (planned)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          await scrapingService.handleForumMessage();

          updateDate = new Date();
          updateDate.setMilliseconds(0);

          expect(doHandle).toHaveBeenCalledTimes(11);
        }, 15000);

        it('should formatData method called and works correctly', (): void => {
          expect(formatData).toHaveBeenCalledTimes(11);
          expect(formatData).toHaveNthReturnedWith(
            11,
            ForumMessagePlannedFormatted,
          );
        });

        it('should prepareUpdate method called', (): void => {
          expect(prepareUpdate).toHaveBeenCalledTimes(61);
        });

        it('should getService method called', (): void => {
          expect(getService).toHaveBeenCalledTimes(61);
        });

        it('should getArchive method called', (): void => {
          expect(getArchive).toHaveBeenCalledTimes(61);
        });

        it('should archiveChanged method called and works', (): void => {
          expect(archiveChanged).toHaveBeenCalledTimes(61);
          expect(archiveChanged).toHaveNthReturnedWith(60, false);
          expect(archiveChanged).toHaveNthReturnedWith(61, false);
        });

        it('should getStatus method not called', (): void => {
          expect(getStatus).toHaveBeenCalledTimes(4);
        });
      });

      describe('handle handleServiceAlerts 4 (up)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          await scrapingService.handleServiceAlerts();

          updateDate = new Date();
          updateDate.setMilliseconds(0);

          expect(doHandle).toHaveBeenCalledTimes(12);
        }, 15000);

        it('should formatData method called and works correctly', (): void => {
          expect(formatData).toHaveBeenCalledTimes(12);
          expect(formatData).toHaveNthReturnedWith(
            12,
            ServiceAlertsInitialFormatted,
          );
        });

        it('should prepareUpdate method called', (): void => {
          expect(prepareUpdate).toHaveBeenCalledTimes(70);
        });

        it('should getService method called', (): void => {
          expect(getService).toHaveBeenCalledTimes(70);
        });

        it('should getArchive method called', (): void => {
          expect(getArchive).toHaveBeenCalledTimes(70);
        });

        it('should archiveChanged method called and works', (): void => {
          expect(archiveChanged).toHaveBeenCalledTimes(70);
          expect(archiveChanged).toHaveNthReturnedWith(61, false);
          expect(archiveChanged).toHaveNthReturnedWith(62, false);
          expect(archiveChanged).toHaveNthReturnedWith(63, false);
          expect(archiveChanged).toHaveNthReturnedWith(64, false);
          expect(archiveChanged).toHaveNthReturnedWith(65, false);
          expect(archiveChanged).toHaveNthReturnedWith(66, false);
          expect(archiveChanged).toHaveNthReturnedWith(67, false);
          expect(archiveChanged).toHaveNthReturnedWith(68, false);
          expect(archiveChanged).toHaveNthReturnedWith(69, false);
          expect(archiveChanged).toHaveNthReturnedWith(70, false);
        });

        it('should getStatus method not called', (): void => {
          expect(getStatus).toHaveBeenCalledTimes(4);
        });
      });
    });

    describe('ForumMessage still planned / LiveServices still down', (): void => {
      describe('handle handleLiveServices 5 (down)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          await scrapingService.handleLiveServices();

          updateDate = new Date();
          updateDate.setMilliseconds(0);

          expect(doHandle).toHaveBeenCalledTimes(13);
        }, 15000);

        it('should formatData method called and works correctly', (): void => {
          expect(formatData).toHaveBeenCalledTimes(13);
          expect(formatData).toHaveNthReturnedWith(
            13,
            LiveServicesDownFormated,
          );
        });

        it('should prepareUpdate method called', (): void => {
          expect(prepareUpdate).toHaveBeenCalledTimes(77);
        });

        it('should getService method called', (): void => {
          expect(getService).toHaveBeenCalledTimes(77);
        });

        it('should getArchive method called', (): void => {
          expect(getArchive).toHaveBeenCalledTimes(77);
        });

        it('should archiveChanged method called and works', (): void => {
          expect(archiveChanged).toHaveBeenCalledTimes(77);
          expect(archiveChanged).toHaveNthReturnedWith(71, false);
          expect(archiveChanged).toHaveNthReturnedWith(72, false);
          expect(archiveChanged).toHaveNthReturnedWith(73, false);
          expect(archiveChanged).toHaveNthReturnedWith(74, false);
          expect(archiveChanged).toHaveNthReturnedWith(75, false);
          expect(archiveChanged).toHaveNthReturnedWith(76, false);
          expect(archiveChanged).toHaveNthReturnedWith(77, false);
        });

        it('should getStatus method not called', (): void => {
          expect(getStatus).toHaveBeenCalledTimes(4);
        });
      });

      describe('handle handleForumMessage 5 (planned)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          await scrapingService.handleForumMessage();

          updateDate = new Date();
          updateDate.setMilliseconds(0);

          expect(doHandle).toHaveBeenCalledTimes(14);
        }, 15000);

        it('should formatData method called and works correctly', (): void => {
          expect(formatData).toHaveBeenCalledTimes(14);
          expect(formatData).toHaveNthReturnedWith(
            14,
            ForumMessagePlannedFormatted,
          );
        });

        it('should prepareUpdate method called', (): void => {
          expect(prepareUpdate).toHaveBeenCalledTimes(79);
        });

        it('should getService method called', (): void => {
          expect(getService).toHaveBeenCalledTimes(79);
        });

        it('should getArchive method called', (): void => {
          expect(getArchive).toHaveBeenCalledTimes(79);
        });

        it('should archiveChanged method called and works', (): void => {
          expect(archiveChanged).toHaveBeenCalledTimes(79);
          expect(archiveChanged).toHaveNthReturnedWith(79, false);
          expect(archiveChanged).toHaveNthReturnedWith(79, false);
        });

        it('should getStatus method not called', (): void => {
          expect(getStatus).toHaveBeenCalledTimes(4);
        });
      });

      describe('handle handleServiceAlerts 5 (up)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          await scrapingService.handleServiceAlerts();

          updateDate = new Date();
          updateDate.setMilliseconds(0);

          expect(doHandle).toHaveBeenCalledTimes(15);
        }, 15000);

        it('should formatData method called and works correctly', (): void => {
          expect(formatData).toHaveBeenCalledTimes(15);
          expect(formatData).toHaveNthReturnedWith(
            15,
            ServiceAlertsInitialFormatted,
          );
        });

        it('should prepareUpdate method called', (): void => {
          expect(prepareUpdate).toHaveBeenCalledTimes(88);
        });

        it('should getService method called', (): void => {
          expect(getService).toHaveBeenCalledTimes(88);
        });

        it('should getArchive method called', (): void => {
          expect(getArchive).toHaveBeenCalledTimes(88);
        });

        it('should archiveChanged method called and works', (): void => {
          expect(archiveChanged).toHaveBeenCalledTimes(88);
          expect(archiveChanged).toHaveNthReturnedWith(80, false);
          expect(archiveChanged).toHaveNthReturnedWith(81, false);
          expect(archiveChanged).toHaveNthReturnedWith(82, false);
          expect(archiveChanged).toHaveNthReturnedWith(83, false);
          expect(archiveChanged).toHaveNthReturnedWith(84, false);
          expect(archiveChanged).toHaveNthReturnedWith(85, false);
          expect(archiveChanged).toHaveNthReturnedWith(86, false);
          expect(archiveChanged).toHaveNthReturnedWith(87, false);
          expect(archiveChanged).toHaveNthReturnedWith(88, false);
        });

        it('should getStatus method not called', (): void => {
          expect(getStatus).toHaveBeenCalledTimes(4);
        });
      });
    });

    describe('ForumMessage down', (): void => {
      describe('handle handleLiveServices 6 (down)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          await scrapingService.handleLiveServices();

          updateDate = new Date();
          updateDate.setMilliseconds(0);

          expect(doHandle).toHaveBeenCalledTimes(16);
        }, 15000);

        it('should formatData method called and works correctly', (): void => {
          expect(formatData).toHaveBeenCalledTimes(16);
          expect(formatData).toHaveNthReturnedWith(
            16,
            LiveServicesDownFormated,
          );
        });

        it('should prepareUpdate method called', (): void => {
          expect(prepareUpdate).toHaveBeenCalledTimes(95);
        });

        it('should getService method called', (): void => {
          expect(getService).toHaveBeenCalledTimes(95);
        });

        it('should getArchive method called', (): void => {
          expect(getArchive).toHaveBeenCalledTimes(95);
        });

        it('should archiveChanged method called and works', (): void => {
          expect(archiveChanged).toHaveBeenCalledTimes(95);
          expect(archiveChanged).toHaveNthReturnedWith(89, false);
          expect(archiveChanged).toHaveNthReturnedWith(90, false);
          expect(archiveChanged).toHaveNthReturnedWith(91, false);
          expect(archiveChanged).toHaveNthReturnedWith(92, false);
          expect(archiveChanged).toHaveNthReturnedWith(93, false);
          expect(archiveChanged).toHaveNthReturnedWith(94, false);
          expect(archiveChanged).toHaveNthReturnedWith(95, false);
        });

        it('should getStatus method not called', (): void => {
          expect(getStatus).toHaveBeenCalledTimes(4);
        });
      });

      describe('handle handleForumMessage 6 (down)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          jest
            .spyOn(ForumMessage, 'getData')
            .mockImplementation(async (): Promise<RawEsoStatus[]> => {
              return Promise.resolve(ForumMessageDown);
            });

          await scrapingService.handleForumMessage();

          updateDate = new Date();
          updateDate.setMilliseconds(0);

          expect(doHandle).toHaveBeenCalledTimes(17);
        }, 15000);

        it('should formatData method called and works correctly', (): void => {
          expect(formatData).toHaveBeenCalledTimes(17);
          expect(formatData).toHaveNthReturnedWith(
            17,
            ForumMessageDownFormatted,
          );
        });

        it('should prepareUpdate method called', (): void => {
          expect(prepareUpdate).toHaveBeenCalledTimes(97);
        });

        it('should getService method called', (): void => {
          expect(getService).toHaveBeenCalledTimes(97);
        });

        it('should getArchive method called', (): void => {
          expect(getArchive).toHaveBeenCalledTimes(97);
        });

        it('should archiveChanged method called and works', (): void => {
          expect(archiveChanged).toHaveBeenCalledTimes(97);
          expect(archiveChanged).toHaveNthReturnedWith(96, true);
          expect(archiveChanged).toHaveNthReturnedWith(97, true);
        });

        it('should getStatus method called', (): void => {
          expect(getStatus).toHaveBeenCalledTimes(6);
        });

        it('should updateArchive method called', (): void => {
          expect(updateArchive).toHaveBeenCalledTimes(6);
        });

        it.each([
          [5, ForumMessageDownPcNaRaw],
          [6, ForumMessageDownPcEuRaw],
        ])(
          'should updateArchive method works',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const archive = await getArchiveByServiceIdAndConnectorName(
              serviceId,
              'ForumMessage',
            );
            expect(archive.statusId).toEqual(2);
            expect(archive.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it('should isPlannedStatus method called and works', (): void => {
          expect(isPlannedStatus).toHaveBeenCalledTimes(6);
          expect(isPlannedStatus).toHaveNthReturnedWith(5, false);
          expect(isPlannedStatus).toHaveNthReturnedWith(6, false);
        });

        it('should isPlannedStatus method called', (): void => {
          expect(updateNoMaintenance).toHaveBeenCalledTimes(4);
        });

        it('should slugChanged method called and works', (): void => {
          expect(slugChanged).toHaveBeenCalledTimes(4);
          expect(slugChanged).toHaveNthReturnedWith(3, false);
          expect(slugChanged).toHaveNthReturnedWith(4, false);
        });

        it('should updateService method not called', (): void => {
          expect(updateService).toHaveBeenCalledTimes(2);
        });
      });

      describe('handle handleServiceAlerts 6 (up)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          await scrapingService.handleServiceAlerts();

          updateDate = new Date();
          updateDate.setMilliseconds(0);

          expect(doHandle).toHaveBeenCalledTimes(18);
        }, 15000);

        it('should formatData method called and works correctly', (): void => {
          expect(formatData).toHaveBeenCalledTimes(18);
          expect(formatData).toHaveNthReturnedWith(
            18,
            ServiceAlertsInitialFormatted,
          );
        });

        it('should prepareUpdate method called', (): void => {
          expect(prepareUpdate).toHaveBeenCalledTimes(106);
        });

        it('should getService method called', (): void => {
          expect(getService).toHaveBeenCalledTimes(106);
        });

        it('should getArchive method called', (): void => {
          expect(getArchive).toHaveBeenCalledTimes(106);
        });

        it('should archiveChanged method called and works', (): void => {
          expect(archiveChanged).toHaveBeenCalledTimes(106);
          expect(archiveChanged).toHaveNthReturnedWith(98, false);
          expect(archiveChanged).toHaveNthReturnedWith(99, false);
          expect(archiveChanged).toHaveNthReturnedWith(100, false);
          expect(archiveChanged).toHaveNthReturnedWith(101, false);
          expect(archiveChanged).toHaveNthReturnedWith(102, false);
          expect(archiveChanged).toHaveNthReturnedWith(103, false);
          expect(archiveChanged).toHaveNthReturnedWith(104, false);
          expect(archiveChanged).toHaveNthReturnedWith(105, false);
          expect(archiveChanged).toHaveNthReturnedWith(106, false);
        });

        it('should getStatus method not called', async (): Promise<void> => {
          expect(getStatus).toHaveBeenCalledTimes(6);
          await after();
        });
      });
    });
  });
});
