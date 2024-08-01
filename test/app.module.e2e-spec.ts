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
  ForumMessageDownPcEuRaw,
  ForumMessageDownPcNaRaw,
  ForumMessageInitial,
  ForumMessageInitialPcEuLastUpRaw,
  ForumMessageInitialPcNaLastUpRaw,
  ForumMessagePlanned,
  ForumMessagePlannedPcEuMaintenance,
  ForumMessagePlannedPcEuRaw,
  ForumMessagePlannedPcNaMaintenance,
  ForumMessagePlannedPcNaRaw,
  LiveServicesDown,
  LiveServicesInitial,
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
let serviceController: ServiceController;

const getServiceById = async (id: number): Promise<Service> => {
  return serviceRepository.findOne({
    relations: ['maintenance'],
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

  await new Promise<void>((resolve): void => {
    clientSocket.on('connect', (): void => {
      resolve();
    });
  });

  await dataSource.initialize();
  await dataSource.dropDatabase();
  await dataSource.runMigrations();
  await runSeeders(dataSource);
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
          let service: Service = await getServiceById(serviceId);
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
          let archive: Archive = await getArchiveByServiceIdAndConnectorName(
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
        ['server_pc_eu', LiveServicesPcEuUpRaw, undefined],
        ['server_pc_na', LiveServicesPcNaUpRaw, undefined],
      ])(
        'should service controller return correct data',
        async (
          slug: Slug,
          rawData: RawEsoStatus,
          maintenance: MaintenanceEsoStatus | undefined,
        ): Promise<void> => {
          const response: EsoStatus = await serviceController.findOne(slug);
          expect(response.status).toStrictEqual('up');
          expect(response.raw).toStrictEqual(rawData);
          expect(response.maintenance).toStrictEqual(maintenance);
        },
        15000,
      );
    });

    // Nothing changed
    describe('Nothing changed compare initial state', (): void => {
      describe('handle handleLiveServices (up)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
          await new Promise<void>(async (resolve): Promise<void> => {
            jest
              .spyOn(LiveServices, 'getData')
              .mockImplementation(async (): Promise<RawEsoStatus[]> => {
                return Promise.resolve(LiveServicesInitial);
              });

            const statusUpdateCalled: jest.Mock = jest.fn();
            const maintenanceRemovedCalled: jest.Mock = jest.fn();
            const maintenancePlannedCalled: jest.Mock = jest.fn();

            clientSocket.on('statusUpdate', statusUpdateCalled);
            clientSocket.on('maintenancePlanned', maintenancePlannedCalled);
            clientSocket.on('maintenanceRemoved', maintenanceRemovedCalled);

            setTimeout((): void => {
              expect(statusUpdateCalled).toHaveBeenCalledTimes(0);
              expect(maintenancePlannedCalled).toHaveBeenCalledTimes(0);
              expect(maintenanceRemovedCalled).toHaveBeenCalledTimes(0);
              resolve();
            }, 1000);

            await scrapingService.handleLiveServices();
          });
        }, 15000);

        it.each([
          [5, LiveServicesPcNaUpRaw],
          [6, LiveServicesPcEuUpRaw],
        ])(
          'should archives not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const archive = await getArchiveByServiceIdAndConnectorName(
              serviceId,
              'LiveServices',
            );
            expect(archive.statusId).toEqual(1);
            expect(archive.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          [5, LiveServicesPcNaUpRaw],
          [6, LiveServicesPcEuUpRaw],
        ])(
          'should services not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const service = await getServiceById(serviceId);
            expect(service.statusId).toEqual(1);
            expect(service.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          ['server_pc_eu', LiveServicesPcEuUpRaw, undefined],
          ['server_pc_na', LiveServicesPcNaUpRaw, undefined],
        ])(
          'should service controller return correct data',
          async (
            slug: Slug,
            rawData: RawEsoStatus,
            maintenance: MaintenanceEsoStatus | undefined,
          ): Promise<void> => {
            const response: EsoStatus = await serviceController.findOne(slug);
            expect(response.status).toStrictEqual('up');
            expect(response.raw).toStrictEqual(rawData);
            expect(response.maintenance).toStrictEqual(maintenance);
          },
          15000,
        );
      });

      describe('handle handleForumMessage (up)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
          await new Promise<void>(async (resolve): Promise<void> => {
            jest
              .spyOn(ForumMessage, 'getData')
              .mockImplementation(async (): Promise<RawEsoStatus[]> => {
                return Promise.resolve(ForumMessageInitial);
              });

            const statusUpdateCalled: jest.Mock = jest.fn();
            const maintenanceRemovedCalled: jest.Mock = jest.fn();
            const maintenancePlannedCalled: jest.Mock = jest.fn();

            clientSocket.on('statusUpdate', statusUpdateCalled);
            clientSocket.on('maintenancePlanned', maintenancePlannedCalled);
            clientSocket.on('maintenanceRemoved', maintenanceRemovedCalled);

            setTimeout((): void => {
              expect(statusUpdateCalled).toHaveBeenCalledTimes(0);
              expect(maintenancePlannedCalled).toHaveBeenCalledTimes(0);
              expect(maintenanceRemovedCalled).toHaveBeenCalledTimes(0);
              resolve();
            }, 1000);

            await scrapingService.handleForumMessage();
          });
        }, 15000);

        it.each([
          [5, ForumMessageInitialPcNaLastUpRaw],
          [6, ForumMessageInitialPcEuLastUpRaw],
        ])(
          'should archives not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const archive: Archive =
              await getArchiveByServiceIdAndConnectorName(
                serviceId,
                'ForumMessage',
              );
            expect(archive.statusId).toEqual(1);
            expect(archive.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          [5, LiveServicesPcNaUpRaw],
          [6, LiveServicesPcEuUpRaw],
        ])(
          'should services not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const service = await getServiceById(serviceId);
            expect(service.statusId).toEqual(1);
            expect(service.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          ['server_pc_eu', LiveServicesPcEuUpRaw, undefined],
          ['server_pc_na', LiveServicesPcNaUpRaw, undefined],
        ])(
          'should service controller return correct data',
          async (
            slug: Slug,
            rawData: RawEsoStatus,
            maintenance: MaintenanceEsoStatus | undefined,
          ): Promise<void> => {
            const response: EsoStatus = await serviceController.findOne(slug);
            expect(response.status).toStrictEqual('up');
            expect(response.raw).toStrictEqual(rawData);
            expect(response.maintenance).toStrictEqual(maintenance);
          },
          15000,
        );
      });

      describe('handle handleServiceAlerts (up)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
          await new Promise<void>(async (resolve): Promise<void> => {
            jest
              .spyOn(ServiceAlerts, 'getData')
              .mockImplementation(async (): Promise<RawEsoStatus[]> => {
                return Promise.resolve(ServiceAlertsInitial);
              });

            const statusUpdateCalled: jest.Mock = jest.fn();
            const maintenanceRemovedCalled: jest.Mock = jest.fn();
            const maintenancePlannedCalled: jest.Mock = jest.fn();

            clientSocket.on('statusUpdate', statusUpdateCalled);
            clientSocket.on('maintenancePlanned', maintenancePlannedCalled);
            clientSocket.on('maintenanceRemoved', maintenanceRemovedCalled);

            setTimeout((): void => {
              expect(statusUpdateCalled).toHaveBeenCalledTimes(0);
              expect(maintenancePlannedCalled).toHaveBeenCalledTimes(0);
              expect(maintenanceRemovedCalled).toHaveBeenCalledTimes(0);
              resolve();
            }, 1000);

            await scrapingService.handleServiceAlerts();
          });
        }, 15000);

        it.each([
          [5, ServiceAlertsInitialPcNaRaw],
          [6, ServiceAlertsInitialPcEuRaw],
        ])(
          'should archives not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const archive: Archive =
              await getArchiveByServiceIdAndConnectorName(
                serviceId,
                'ServiceAlerts',
              );
            expect(archive.statusId).toEqual(1);
            expect(archive.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          [5, LiveServicesPcNaUpRaw],
          [6, LiveServicesPcEuUpRaw],
        ])(
          'should services not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const service = await getServiceById(serviceId);
            expect(service.statusId).toEqual(1);
            expect(service.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          ['server_pc_eu', LiveServicesPcEuUpRaw, undefined],
          ['server_pc_na', LiveServicesPcNaUpRaw, undefined],
        ])(
          'should service controller return correct data',
          async (
            slug: Slug,
            rawData: RawEsoStatus,
            maintenance: MaintenanceEsoStatus | undefined,
          ): Promise<void> => {
            const response: EsoStatus = await serviceController.findOne(slug);
            expect(response.status).toStrictEqual('up');
            expect(response.raw).toStrictEqual(rawData);
            expect(response.maintenance).toStrictEqual(maintenance);
          },
          15000,
        );
      });
    });

    // maintenancePlanned emmit for server_pc_eu and server_pc_na
    // archive (ForumMessage) raw and statusId change for server_pc_eu and server_pc_na
    // maintenance created for server_pc_eu and server_pc_na
    // controller return maintenance for server_pc_eu and server_pc_na
    describe('ForumMessage new data => maintenance planned for PC EU/NA', (): void => {
      describe('handle handleLiveServices (up)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
          await new Promise<void>(async (resolve): Promise<void> => {
            const statusUpdateCalled: jest.Mock = jest.fn();
            const maintenanceRemovedCalled: jest.Mock = jest.fn();
            const maintenancePlannedCalled: jest.Mock = jest.fn();

            clientSocket.on('statusUpdate', statusUpdateCalled);
            clientSocket.on('maintenancePlanned', maintenancePlannedCalled);
            clientSocket.on('maintenanceRemoved', maintenanceRemovedCalled);

            setTimeout((): void => {
              expect(statusUpdateCalled).toHaveBeenCalledTimes(0);
              expect(maintenancePlannedCalled).toHaveBeenCalledTimes(0);
              expect(maintenanceRemovedCalled).toHaveBeenCalledTimes(0);
              resolve();
            }, 1000);

            await scrapingService.handleLiveServices();
          });
        }, 15000);

        it.each([
          [5, LiveServicesPcNaUpRaw],
          [6, LiveServicesPcEuUpRaw],
        ])(
          'should archives not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const archive = await getArchiveByServiceIdAndConnectorName(
              serviceId,
              'LiveServices',
            );
            expect(archive.statusId).toEqual(1);
            expect(archive.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          [5, LiveServicesPcNaUpRaw],
          [6, LiveServicesPcEuUpRaw],
        ])(
          'should services not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const service = await getServiceById(serviceId);
            expect(service.statusId).toEqual(1);
            expect(service.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          ['server_pc_eu', LiveServicesPcEuUpRaw, undefined],
          ['server_pc_na', LiveServicesPcNaUpRaw, undefined],
        ])(
          'should service controller return correct data',
          async (
            slug: Slug,
            rawData: RawEsoStatus,
            maintenance: MaintenanceEsoStatus | undefined,
          ): Promise<void> => {
            const response: EsoStatus = await serviceController.findOne(slug);
            expect(response.status).toStrictEqual('up');
            expect(response.raw).toStrictEqual(rawData);
            expect(response.maintenance).toStrictEqual(maintenance);
          },
          15000,
        );
      });

      // maintenancePlanned emmit for server_pc_eu and server_pc_na
      // archive (ForumMessage) raw and statusId change for server_pc_eu and server_pc_na
      // maintenance created for server_pc_eu and server_pc_na
      // controller return maintenance for server_pc_eu and server_pc_na
      describe('handle handleForumMessage (planned)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
          await new Promise<void>(async (resolve): Promise<void> => {
            jest
              .spyOn(ForumMessage, 'getData')
              .mockImplementation(async (): Promise<RawEsoStatus[]> => {
                return Promise.resolve(ForumMessagePlanned);
              });

            const statusUpdateCalled: jest.Mock = jest.fn();
            const maintenanceRemovedCalled: jest.Mock = jest.fn();

            let haveEu: boolean = false;
            let haveNa: boolean = false;

            clientSocket.on('statusUpdate', statusUpdateCalled);
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
              },
            );
            clientSocket.on('maintenanceRemoved', maintenanceRemovedCalled);

            setTimeout((): void => {
              expect(statusUpdateCalled).toHaveBeenCalledTimes(0);
              if (haveEu && haveNa) {
                resolve();
              }
              expect(maintenanceRemovedCalled).toHaveBeenCalledTimes(0);
              resolve();
            }, 1000);

            await scrapingService.handleForumMessage();
          });
        }, 15000);

        it.each([
          [5, ForumMessagePlannedPcNaRaw],
          [6, ForumMessagePlannedPcEuRaw],
        ])(
          'should archives changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const archive: Archive =
              await getArchiveByServiceIdAndConnectorName(
                serviceId,
                'ForumMessage',
              );
            expect(archive.statusId).toEqual(4);
            expect(archive.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          [5, LiveServicesPcNaUpRaw],
          [6, LiveServicesPcEuUpRaw],
        ])(
          'should services not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const service = await getServiceById(serviceId);
            expect(service.statusId).toEqual(1);
            expect(service.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          [
            'server_pc_eu',
            LiveServicesPcEuUpRaw,
            ForumMessagePlannedPcEuMaintenance,
          ],
          [
            'server_pc_na',
            LiveServicesPcNaUpRaw,
            ForumMessagePlannedPcNaMaintenance,
          ],
        ])(
          'should service controller return correct data',
          async (
            slug: Slug,
            rawData: RawEsoStatus,
            maintenance: MaintenanceEsoStatus | undefined,
          ): Promise<void> => {
            const response: EsoStatus = await serviceController.findOne(slug);
            expect(response.status).toStrictEqual('up');
            expect(response.raw).toStrictEqual(rawData);
            expect(response.maintenance).toStrictEqual(maintenance);
          },
          15000,
        );
      });

      describe('handle handleServiceAlerts (up)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
          await new Promise<void>(async (resolve): Promise<void> => {
            jest
              .spyOn(ServiceAlerts, 'getData')
              .mockImplementation(async (): Promise<RawEsoStatus[]> => {
                return Promise.resolve(ServiceAlertsInitial);
              });

            const statusUpdateCalled: jest.Mock = jest.fn();
            const maintenanceRemovedCalled: jest.Mock = jest.fn();
            const maintenancePlannedCalled: jest.Mock = jest.fn();

            clientSocket.on('statusUpdate', statusUpdateCalled);
            clientSocket.on('maintenancePlanned', maintenancePlannedCalled);
            clientSocket.on('maintenanceRemoved', maintenanceRemovedCalled);

            setTimeout((): void => {
              expect(statusUpdateCalled).toHaveBeenCalledTimes(0);
              expect(maintenancePlannedCalled).toHaveBeenCalledTimes(0);
              expect(maintenanceRemovedCalled).toHaveBeenCalledTimes(0);
              resolve();
            }, 1000);

            await scrapingService.handleServiceAlerts();
          });
        }, 15000);

        it.each([
          [5, ServiceAlertsInitialPcNaRaw],
          [6, ServiceAlertsInitialPcEuRaw],
        ])(
          'should archives not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const archive: Archive =
              await getArchiveByServiceIdAndConnectorName(
                serviceId,
                'ServiceAlerts',
              );
            expect(archive.statusId).toEqual(1);
            expect(archive.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          [5, LiveServicesPcNaUpRaw],
          [6, LiveServicesPcEuUpRaw],
        ])(
          'should services not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const service = await getServiceById(serviceId);
            expect(service.statusId).toEqual(1);
            expect(service.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          [
            'server_pc_eu',
            LiveServicesPcEuUpRaw,
            ForumMessagePlannedPcEuMaintenance,
          ],
          [
            'server_pc_na',
            LiveServicesPcNaUpRaw,
            ForumMessagePlannedPcNaMaintenance,
          ],
        ])(
          'should service controller return correct data',
          async (
            slug: Slug,
            rawData: RawEsoStatus,
            maintenance: MaintenanceEsoStatus | undefined,
          ): Promise<void> => {
            const response: EsoStatus = await serviceController.findOne(slug);
            expect(response.status).toStrictEqual('up');
            expect(response.raw).toStrictEqual(rawData);
            expect(response.maintenance).toStrictEqual(maintenance);
          },
          15000,
        );
      });
    });

    // Nothing changed
    describe('ForumMessage still planned', (): void => {
      describe('handle handleLiveServices (up)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
          await new Promise<void>(async (resolve): Promise<void> => {
            jest
              .spyOn(LiveServices, 'getData')
              .mockImplementation(async (): Promise<RawEsoStatus[]> => {
                return Promise.resolve(LiveServicesInitial);
              });

            const statusUpdateCalled: jest.Mock = jest.fn();
            const maintenanceRemovedCalled: jest.Mock = jest.fn();
            const maintenancePlannedCalled: jest.Mock = jest.fn();

            clientSocket.on('statusUpdate', statusUpdateCalled);
            clientSocket.on('maintenancePlanned', maintenancePlannedCalled);
            clientSocket.on('maintenanceRemoved', maintenanceRemovedCalled);

            setTimeout((): void => {
              expect(statusUpdateCalled).toHaveBeenCalledTimes(0);
              expect(maintenancePlannedCalled).toHaveBeenCalledTimes(0);
              expect(maintenanceRemovedCalled).toHaveBeenCalledTimes(0);
              resolve();
            }, 1000);

            await scrapingService.handleLiveServices();
          });
        }, 15000);

        it.each([
          [5, LiveServicesPcNaUpRaw],
          [6, LiveServicesPcEuUpRaw],
        ])(
          'should archives not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const archive = await getArchiveByServiceIdAndConnectorName(
              serviceId,
              'LiveServices',
            );
            expect(archive.statusId).toEqual(1);
            expect(archive.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          [5, LiveServicesPcNaUpRaw],
          [6, LiveServicesPcEuUpRaw],
        ])(
          'should services not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const service = await getServiceById(serviceId);
            expect(service.statusId).toEqual(1);
            expect(service.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          [
            'server_pc_eu',
            LiveServicesPcEuUpRaw,
            ForumMessagePlannedPcEuMaintenance,
          ],
          [
            'server_pc_na',
            LiveServicesPcNaUpRaw,
            ForumMessagePlannedPcNaMaintenance,
          ],
        ])(
          'should service controller return correct data',
          async (
            slug: Slug,
            rawData: RawEsoStatus,
            maintenance: MaintenanceEsoStatus | undefined,
          ): Promise<void> => {
            const response: EsoStatus = await serviceController.findOne(slug);
            expect(response.status).toStrictEqual('up');
            expect(response.raw).toStrictEqual(rawData);
            expect(response.maintenance).toStrictEqual(maintenance);
          },
          15000,
        );
      });

      describe('handle handleForumMessage (planned)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
          await new Promise<void>(async (resolve): Promise<void> => {
            jest
              .spyOn(ForumMessage, 'getData')
              .mockImplementation(async (): Promise<RawEsoStatus[]> => {
                return Promise.resolve(ForumMessageInitial);
              });

            const statusUpdateCalled: jest.Mock = jest.fn();
            const maintenanceRemovedCalled: jest.Mock = jest.fn();
            const maintenancePlannedCalled: jest.Mock = jest.fn();

            clientSocket.on('statusUpdate', statusUpdateCalled);
            clientSocket.on('maintenancePlanned', maintenancePlannedCalled);
            clientSocket.on('maintenanceRemoved', maintenanceRemovedCalled);

            setTimeout((): void => {
              expect(statusUpdateCalled).toHaveBeenCalledTimes(0);
              expect(maintenancePlannedCalled).toHaveBeenCalledTimes(0);
              expect(maintenanceRemovedCalled).toHaveBeenCalledTimes(0);
              resolve();
            }, 1000);

            await scrapingService.handleForumMessage();
          });
        }, 15000);

        it.each([
          [5, ForumMessagePlannedPcNaRaw],
          [6, ForumMessagePlannedPcEuRaw],
        ])(
          'should archives not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const archive: Archive =
              await getArchiveByServiceIdAndConnectorName(
                serviceId,
                'ForumMessage',
              );
            expect(archive.statusId).toEqual(4);
            expect(archive.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          [5, LiveServicesPcNaUpRaw],
          [6, LiveServicesPcEuUpRaw],
        ])(
          'should services not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const service = await getServiceById(serviceId);
            expect(service.statusId).toEqual(1);
            expect(service.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          [
            'server_pc_eu',
            LiveServicesPcEuUpRaw,
            ForumMessagePlannedPcEuMaintenance,
          ],
          [
            'server_pc_na',
            LiveServicesPcNaUpRaw,
            ForumMessagePlannedPcNaMaintenance,
          ],
        ])(
          'should service controller return correct data',
          async (
            slug: Slug,
            rawData: RawEsoStatus,
            maintenance: MaintenanceEsoStatus | undefined,
          ): Promise<void> => {
            const response: EsoStatus = await serviceController.findOne(slug);
            expect(response.status).toStrictEqual('up');
            expect(response.raw).toStrictEqual(rawData);
            expect(response.maintenance).toStrictEqual(maintenance);
          },
          15000,
        );
      });

      describe('handle handleServiceAlerts (up)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
          await new Promise<void>(async (resolve): Promise<void> => {
            jest
              .spyOn(ServiceAlerts, 'getData')
              .mockImplementation(async (): Promise<RawEsoStatus[]> => {
                return Promise.resolve(ServiceAlertsInitial);
              });

            const statusUpdateCalled: jest.Mock = jest.fn();
            const maintenanceRemovedCalled: jest.Mock = jest.fn();
            const maintenancePlannedCalled: jest.Mock = jest.fn();

            clientSocket.on('statusUpdate', statusUpdateCalled);
            clientSocket.on('maintenancePlanned', maintenancePlannedCalled);
            clientSocket.on('maintenanceRemoved', maintenanceRemovedCalled);

            setTimeout((): void => {
              expect(statusUpdateCalled).toHaveBeenCalledTimes(0);
              expect(maintenancePlannedCalled).toHaveBeenCalledTimes(0);
              expect(maintenanceRemovedCalled).toHaveBeenCalledTimes(0);
              resolve();
            }, 1000);

            await scrapingService.handleServiceAlerts();
          });
        }, 15000);

        it.each([
          [5, ServiceAlertsInitialPcNaRaw],
          [6, ServiceAlertsInitialPcEuRaw],
        ])(
          'should archives not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const archive: Archive =
              await getArchiveByServiceIdAndConnectorName(
                serviceId,
                'ServiceAlerts',
              );
            expect(archive.statusId).toEqual(1);
            expect(archive.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          [5, LiveServicesPcNaUpRaw],
          [6, LiveServicesPcEuUpRaw],
        ])(
          'should services not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const service = await getServiceById(serviceId);
            expect(service.statusId).toEqual(1);
            expect(service.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          [
            'server_pc_eu',
            LiveServicesPcEuUpRaw,
            ForumMessagePlannedPcEuMaintenance,
          ],
          [
            'server_pc_na',
            LiveServicesPcNaUpRaw,
            ForumMessagePlannedPcNaMaintenance,
          ],
        ])(
          'should service controller return correct data',
          async (
            slug: Slug,
            rawData: RawEsoStatus,
            maintenance: MaintenanceEsoStatus | undefined,
          ): Promise<void> => {
            const response: EsoStatus = await serviceController.findOne(slug);
            expect(response.status).toStrictEqual('up');
            expect(response.raw).toStrictEqual(rawData);
            expect(response.maintenance).toStrictEqual(maintenance);
          },
          15000,
        );
      });
    });

    // maintenanceRemoved emmit for server_pc_eu and server_pc_na
    // statusUpdate emmit for server_pc_eu and server_pc_na
    // archive (LiveServices) raw and statusId change for server_pc_eu and server_pc_na
    // maintenance remove for server_pc_eu and server_pc_na
    // controller return no maintenance for server_pc_eu and server_pc_na and change raw and id
    describe('LiveServices new data => PC EU/NA down', (): void => {
      // maintenanceRemoved emmit for server_pc_eu and server_pc_na
      // statusUpdate emmit for server_pc_eu and server_pc_na
      // archive (LiveServices) raw and statusId change for server_pc_eu and server_pc_na
      // maintenance remove for server_pc_eu and server_pc_na
      // controller return no maintenance for server_pc_eu and server_pc_na and change raw and id
      describe('handle handleLiveServices (down)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
          await new Promise<void>(async (resolve): Promise<void> => {
            jest
              .spyOn(LiveServices, 'getData')
              .mockImplementation(async (): Promise<RawEsoStatus[]> => {
                return Promise.resolve(LiveServicesDown);
              });

            const maintenancePlannedCalled: jest.Mock = jest.fn();

            let haveStatusUpdateEu: boolean = false;
            let haveStatusUpdateNa: boolean = false;

            let haveMaintenanceRemovedEu: boolean = false;
            let haveMaintenanceRemovedNa: boolean = false;

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
              },
            );
            clientSocket.on('maintenancePlanned', maintenancePlannedCalled);
            clientSocket.on('maintenanceRemoved', (data: Slug): void => {
              if (
                !haveMaintenanceRemovedEu &&
                data === LiveServicesPcEuDownEsoStatus.slug
              ) {
                haveMaintenanceRemovedEu = true;
              }
              if (
                !haveMaintenanceRemovedNa &&
                data === LiveServicesPcNaDownEsoStatus.slug
              ) {
                haveMaintenanceRemovedNa = true;
              }
            });

            setTimeout((): void => {
              expect(maintenancePlannedCalled).toHaveBeenCalledTimes(0);
              if (
                haveStatusUpdateEu &&
                haveStatusUpdateNa &&
                haveMaintenanceRemovedEu &&
                haveMaintenanceRemovedNa
              ) {
                resolve();
              }
            }, 1000);

            await scrapingService.handleLiveServices();
          });
        }, 15000);

        it.each([
          [5, LiveServicesPcNaDownRaw],
          [6, LiveServicesPcEuDownRaw],
        ])(
          'should archives changed',
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

        it.each([
          [5, LiveServicesPcNaDownRaw],
          [6, LiveServicesPcEuDownRaw],
        ])(
          'should services changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const service = await getServiceById(serviceId);
            expect(service.statusId).toEqual(2);
            expect(service.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          ['server_pc_eu', LiveServicesPcEuDownRaw, undefined],
          ['server_pc_na', LiveServicesPcNaDownRaw, undefined],
        ])(
          'should service controller return correct data',
          async (
            slug: Slug,
            rawData: RawEsoStatus,
            maintenance: MaintenanceEsoStatus | undefined,
          ): Promise<void> => {
            const response: EsoStatus = await serviceController.findOne(slug);
            expect(response.status).toStrictEqual('down');
            expect(response.raw).toStrictEqual(rawData);
            expect(response.maintenance).toStrictEqual(maintenance);
          },
          15000,
        );
      });

      describe('handle handleForumMessage (planned)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
          await new Promise<void>(async (resolve): Promise<void> => {
            const statusUpdateCalled: jest.Mock = jest.fn();
            const maintenanceRemovedCalled: jest.Mock = jest.fn();
            const maintenancePlannedCalled: jest.Mock = jest.fn();

            clientSocket.on('statusUpdate', statusUpdateCalled);
            clientSocket.on('maintenancePlanned', maintenancePlannedCalled);
            clientSocket.on('maintenanceRemoved', maintenanceRemovedCalled);

            setTimeout((): void => {
              expect(statusUpdateCalled).toHaveBeenCalledTimes(0);
              expect(maintenancePlannedCalled).toHaveBeenCalledTimes(0);
              expect(maintenanceRemovedCalled).toHaveBeenCalledTimes(0);
              resolve();
            }, 1000);

            await scrapingService.handleForumMessage();
          });
        }, 15000);

        it.each([
          [5, ForumMessagePlannedPcNaRaw],
          [6, ForumMessagePlannedPcEuRaw],
        ])(
          'should archives not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const archive: Archive =
              await getArchiveByServiceIdAndConnectorName(
                serviceId,
                'ForumMessage',
              );
            expect(archive.statusId).toEqual(4);
            expect(archive.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          [5, LiveServicesPcNaDownRaw],
          [6, LiveServicesPcEuDownRaw],
        ])(
          'should services not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const service = await getServiceById(serviceId);
            expect(service.statusId).toEqual(2);
            expect(service.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          ['server_pc_eu', LiveServicesPcEuDownRaw, undefined],
          ['server_pc_na', LiveServicesPcNaDownRaw, undefined],
        ])(
          'should service controller return correct data',
          async (
            slug: Slug,
            rawData: RawEsoStatus,
            maintenance: MaintenanceEsoStatus | undefined,
          ): Promise<void> => {
            const response: EsoStatus = await serviceController.findOne(slug);
            expect(response.status).toStrictEqual('down');
            expect(response.raw).toStrictEqual(rawData);
            expect(response.maintenance).toStrictEqual(maintenance);
          },
          15000,
        );
      });

      describe('handle handleServiceAlerts (up)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
          await new Promise<void>(async (resolve): Promise<void> => {
            const statusUpdateCalled: jest.Mock = jest.fn();
            const maintenanceRemovedCalled: jest.Mock = jest.fn();
            const maintenancePlannedCalled: jest.Mock = jest.fn();

            clientSocket.on('statusUpdate', statusUpdateCalled);
            clientSocket.on('maintenancePlanned', maintenancePlannedCalled);
            clientSocket.on('maintenanceRemoved', maintenanceRemovedCalled);

            setTimeout((): void => {
              expect(statusUpdateCalled).toHaveBeenCalledTimes(0);
              expect(maintenancePlannedCalled).toHaveBeenCalledTimes(0);
              expect(maintenanceRemovedCalled).toHaveBeenCalledTimes(0);
              resolve();
            }, 1000);

            await scrapingService.handleServiceAlerts();
          });
        }, 15000);

        it.each([
          [5, ServiceAlertsInitialPcNaRaw],
          [6, ServiceAlertsInitialPcEuRaw],
        ])(
          'should archives not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const archive: Archive =
              await getArchiveByServiceIdAndConnectorName(
                serviceId,
                'ServiceAlerts',
              );
            expect(archive.statusId).toEqual(1);
            expect(archive.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          [5, LiveServicesPcNaDownRaw],
          [6, LiveServicesPcEuDownRaw],
        ])(
          'should services not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const service = await getServiceById(serviceId);
            expect(service.statusId).toEqual(2);
            expect(service.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          ['server_pc_eu', LiveServicesPcEuDownRaw, undefined],
          ['server_pc_na', LiveServicesPcNaDownRaw, undefined],
        ])(
          'should service controller return correct data',
          async (
            slug: Slug,
            rawData: RawEsoStatus,
            maintenance: MaintenanceEsoStatus | undefined,
          ): Promise<void> => {
            const response: EsoStatus = await serviceController.findOne(slug);
            expect(response.status).toStrictEqual('down');
            expect(response.raw).toStrictEqual(rawData);
            expect(response.maintenance).toStrictEqual(maintenance);
          },
          15000,
        );
      });
    });

    // Nothing changed
    describe('ForumMessage still planned / LiveServices still down', (): void => {
      describe('handle handleLiveServices (down)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
          await new Promise<void>(async (resolve): Promise<void> => {
            const statusUpdateCalled: jest.Mock = jest.fn();
            const maintenanceRemovedCalled: jest.Mock = jest.fn();
            const maintenancePlannedCalled: jest.Mock = jest.fn();

            clientSocket.on('statusUpdate', statusUpdateCalled);
            clientSocket.on('maintenancePlanned', maintenancePlannedCalled);
            clientSocket.on('maintenanceRemoved', maintenanceRemovedCalled);

            setTimeout((): void => {
              expect(statusUpdateCalled).toHaveBeenCalledTimes(0);
              expect(maintenancePlannedCalled).toHaveBeenCalledTimes(0);
              expect(maintenanceRemovedCalled).toHaveBeenCalledTimes(0);
              resolve();
            }, 1000);

            await scrapingService.handleLiveServices();
          });
        }, 15000);

        it.each([
          [5, LiveServicesPcNaDownRaw],
          [6, LiveServicesPcEuDownRaw],
        ])(
          'should archives not changed',
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

        it.each([
          [5, LiveServicesPcNaDownRaw],
          [6, LiveServicesPcEuDownRaw],
        ])(
          'should services not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const service = await getServiceById(serviceId);
            expect(service.statusId).toEqual(2);
            expect(service.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          ['server_pc_eu', LiveServicesPcEuDownRaw, undefined],
          ['server_pc_na', LiveServicesPcNaDownRaw, undefined],
        ])(
          'should service controller return correct data',
          async (
            slug: Slug,
            rawData: RawEsoStatus,
            maintenance: MaintenanceEsoStatus | undefined,
          ): Promise<void> => {
            const response: EsoStatus = await serviceController.findOne(slug);
            expect(response.status).toStrictEqual('down');
            expect(response.raw).toStrictEqual(rawData);
            expect(response.maintenance).toStrictEqual(maintenance);
          },
          15000,
        );
      });

      describe('handle handleForumMessage (planned)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
          await new Promise<void>(async (resolve): Promise<void> => {
            const statusUpdateCalled: jest.Mock = jest.fn();
            const maintenanceRemovedCalled: jest.Mock = jest.fn();
            const maintenancePlannedCalled: jest.Mock = jest.fn();

            clientSocket.on('statusUpdate', statusUpdateCalled);
            clientSocket.on('maintenancePlanned', maintenancePlannedCalled);
            clientSocket.on('maintenanceRemoved', maintenanceRemovedCalled);

            setTimeout((): void => {
              expect(statusUpdateCalled).toHaveBeenCalledTimes(0);
              expect(maintenancePlannedCalled).toHaveBeenCalledTimes(0);
              expect(maintenanceRemovedCalled).toHaveBeenCalledTimes(0);
              resolve();
            }, 1000);

            await scrapingService.handleForumMessage();
          });
        }, 15000);

        it.each([
          [5, ForumMessagePlannedPcNaRaw],
          [6, ForumMessagePlannedPcEuRaw],
        ])(
          'should archives not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const archive: Archive =
              await getArchiveByServiceIdAndConnectorName(
                serviceId,
                'ForumMessage',
              );
            expect(archive.statusId).toEqual(4);
            expect(archive.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          [5, LiveServicesPcNaDownRaw],
          [6, LiveServicesPcEuDownRaw],
        ])(
          'should services not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const service = await getServiceById(serviceId);
            expect(service.statusId).toEqual(2);
            expect(service.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          ['server_pc_eu', LiveServicesPcEuDownRaw, undefined],
          ['server_pc_na', LiveServicesPcNaDownRaw, undefined],
        ])(
          'should service controller return correct data',
          async (
            slug: Slug,
            rawData: RawEsoStatus,
            maintenance: MaintenanceEsoStatus | undefined,
          ): Promise<void> => {
            const response: EsoStatus = await serviceController.findOne(slug);
            expect(response.status).toStrictEqual('down');
            expect(response.raw).toStrictEqual(rawData);
            expect(response.maintenance).toStrictEqual(maintenance);
          },
          15000,
        );
      });

      describe('handle handleServiceAlerts (up)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
          await new Promise<void>(async (resolve): Promise<void> => {
            const statusUpdateCalled: jest.Mock = jest.fn();
            const maintenanceRemovedCalled: jest.Mock = jest.fn();
            const maintenancePlannedCalled: jest.Mock = jest.fn();

            clientSocket.on('statusUpdate', statusUpdateCalled);
            clientSocket.on('maintenancePlanned', maintenancePlannedCalled);
            clientSocket.on('maintenanceRemoved', maintenanceRemovedCalled);

            setTimeout((): void => {
              expect(statusUpdateCalled).toHaveBeenCalledTimes(0);
              expect(maintenancePlannedCalled).toHaveBeenCalledTimes(0);
              expect(maintenanceRemovedCalled).toHaveBeenCalledTimes(0);
              resolve();
            }, 1000);

            await scrapingService.handleServiceAlerts();
          });
        }, 15000);

        it.each([
          [5, ServiceAlertsInitialPcNaRaw],
          [6, ServiceAlertsInitialPcEuRaw],
        ])(
          'should archives not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const archive: Archive =
              await getArchiveByServiceIdAndConnectorName(
                serviceId,
                'ServiceAlerts',
              );
            expect(archive.statusId).toEqual(1);
            expect(archive.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          [5, LiveServicesPcNaDownRaw],
          [6, LiveServicesPcEuDownRaw],
        ])(
          'should services not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const service = await getServiceById(serviceId);
            expect(service.statusId).toEqual(2);
            expect(service.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          ['server_pc_eu', LiveServicesPcEuDownRaw, undefined],
          ['server_pc_na', LiveServicesPcNaDownRaw, undefined],
        ])(
          'should service controller return correct data',
          async (
            slug: Slug,
            rawData: RawEsoStatus,
            maintenance: MaintenanceEsoStatus | undefined,
          ): Promise<void> => {
            const response: EsoStatus = await serviceController.findOne(slug);
            expect(response.status).toStrictEqual('down');
            expect(response.raw).toStrictEqual(rawData);
            expect(response.maintenance).toStrictEqual(maintenance);
          },
          15000,
        );
      });
    });

    // archive (ForumMessage) raw and statusId change for server_pc_eu and server_pc_na
    describe('ForumMessage down', (): void => {
      describe('handle handleLiveServices (down)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
          await new Promise<void>(async (resolve): Promise<void> => {
            const statusUpdateCalled: jest.Mock = jest.fn();
            const maintenanceRemovedCalled: jest.Mock = jest.fn();
            const maintenancePlannedCalled: jest.Mock = jest.fn();

            clientSocket.on('statusUpdate', statusUpdateCalled);
            clientSocket.on('maintenancePlanned', maintenancePlannedCalled);
            clientSocket.on('maintenanceRemoved', maintenanceRemovedCalled);

            setTimeout((): void => {
              expect(statusUpdateCalled).toHaveBeenCalledTimes(0);
              expect(maintenancePlannedCalled).toHaveBeenCalledTimes(0);
              expect(maintenanceRemovedCalled).toHaveBeenCalledTimes(0);
              resolve();
            }, 1000);

            await scrapingService.handleLiveServices();
          });
        }, 15000);

        it.each([
          [5, LiveServicesPcNaDownRaw],
          [6, LiveServicesPcEuDownRaw],
        ])(
          'should archives changed',
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

        it.each([
          [5, LiveServicesPcNaDownRaw],
          [6, LiveServicesPcEuDownRaw],
        ])(
          'should services not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const service = await getServiceById(serviceId);
            expect(service.statusId).toEqual(2);
            expect(service.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          ['server_pc_eu', LiveServicesPcEuDownRaw, undefined],
          ['server_pc_na', LiveServicesPcNaDownRaw, undefined],
        ])(
          'should service controller return correct data',
          async (
            slug: Slug,
            rawData: RawEsoStatus,
            maintenance: MaintenanceEsoStatus | undefined,
          ): Promise<void> => {
            const response: EsoStatus = await serviceController.findOne(slug);
            expect(response.status).toStrictEqual('down');
            expect(response.raw).toStrictEqual(rawData);
            expect(response.maintenance).toStrictEqual(maintenance);
          },
          15000,
        );
      });

      // archive (ForumMessage) raw and statusId change for server_pc_eu and server_pc_na
      describe('handle handleForumMessage (down)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
          await new Promise<void>(async (resolve): Promise<void> => {
            jest
              .spyOn(ForumMessage, 'getData')
              .mockImplementation(async (): Promise<RawEsoStatus[]> => {
                return Promise.resolve(ForumMessageDown);
              });

            const statusUpdateCalled: jest.Mock = jest.fn();
            const maintenanceRemovedCalled: jest.Mock = jest.fn();
            const maintenancePlannedCalled: jest.Mock = jest.fn();

            clientSocket.on('statusUpdate', statusUpdateCalled);
            clientSocket.on('maintenancePlanned', maintenancePlannedCalled);
            clientSocket.on('maintenanceRemoved', maintenanceRemovedCalled);

            setTimeout((): void => {
              expect(statusUpdateCalled).toHaveBeenCalledTimes(0);
              expect(maintenancePlannedCalled).toHaveBeenCalledTimes(0);
              expect(maintenanceRemovedCalled).toHaveBeenCalledTimes(0);
              resolve();
            }, 1000);

            await scrapingService.handleForumMessage();
          });
        }, 15000);

        it.each([
          [5, ForumMessageDownPcNaRaw],
          [6, ForumMessageDownPcEuRaw],
        ])(
          'should archives not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const archive: Archive =
              await getArchiveByServiceIdAndConnectorName(
                serviceId,
                'ForumMessage',
              );
            expect(archive.statusId).toEqual(2);
            expect(archive.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          [5, LiveServicesPcNaDownRaw],
          [6, LiveServicesPcEuDownRaw],
        ])(
          'should services not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const service = await getServiceById(serviceId);
            expect(service.statusId).toEqual(2);
            expect(service.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          ['server_pc_eu', LiveServicesPcEuDownRaw, undefined],
          ['server_pc_na', LiveServicesPcNaDownRaw, undefined],
        ])(
          'should service controller return correct data',
          async (
            slug: Slug,
            rawData: RawEsoStatus,
            maintenance: MaintenanceEsoStatus | undefined,
          ): Promise<void> => {
            const response: EsoStatus = await serviceController.findOne(slug);
            expect(response.status).toStrictEqual('down');
            expect(response.raw).toStrictEqual(rawData);
            expect(response.maintenance).toStrictEqual(maintenance);
          },
          15000,
        );
      });

      describe('handle handleServiceAlerts (up)', (): void => {
        it('should doHandle method called', async (): Promise<void> => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
          await new Promise<void>(async (resolve): Promise<void> => {
            const statusUpdateCalled: jest.Mock = jest.fn();
            const maintenanceRemovedCalled: jest.Mock = jest.fn();
            const maintenancePlannedCalled: jest.Mock = jest.fn();

            clientSocket.on('statusUpdate', statusUpdateCalled);
            clientSocket.on('maintenancePlanned', maintenancePlannedCalled);
            clientSocket.on('maintenanceRemoved', maintenanceRemovedCalled);

            setTimeout((): void => {
              expect(statusUpdateCalled).toHaveBeenCalledTimes(0);
              expect(maintenancePlannedCalled).toHaveBeenCalledTimes(0);
              expect(maintenanceRemovedCalled).toHaveBeenCalledTimes(0);
              resolve();
            }, 1000);

            await scrapingService.handleServiceAlerts();
          });
        }, 15000);

        it.each([
          [5, ServiceAlertsInitialPcNaRaw],
          [6, ServiceAlertsInitialPcEuRaw],
        ])(
          'should archives not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const archive: Archive =
              await getArchiveByServiceIdAndConnectorName(
                serviceId,
                'ServiceAlerts',
              );
            expect(archive.statusId).toEqual(1);
            expect(archive.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          [5, LiveServicesPcNaDownRaw],
          [6, LiveServicesPcEuDownRaw],
        ])(
          'should services not changed',
          async (serviceId: number, rawData: RawEsoStatus): Promise<void> => {
            const service = await getServiceById(serviceId);
            expect(service.statusId).toEqual(2);
            expect(service.rawData).toEqual(JSON.stringify(rawData));
          },
          15000,
        );

        it.each([
          ['server_pc_eu', LiveServicesPcEuDownRaw, undefined],
          ['server_pc_na', LiveServicesPcNaDownRaw, undefined],
        ])(
          'should service controller return correct data',
          async (
            slug: Slug,
            rawData: RawEsoStatus,
            maintenance: MaintenanceEsoStatus | undefined,
          ): Promise<void> => {
            const response: EsoStatus = await serviceController.findOne(slug);
            expect(response.status).toStrictEqual('down');
            expect(response.raw).toStrictEqual(rawData);
            expect(response.maintenance).toStrictEqual(maintenance);
          },
          15000,
        );
      });
    });

    describe('close test', (): void => {
      it('prepare', async (): Promise<void> => {
        await after();

        expect(true).toStrictEqual(true);
      }, 15000);
    });
  });
});
