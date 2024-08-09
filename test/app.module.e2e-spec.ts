import { ForumMessage } from '@eso-status/forum-message';
import { LiveServices } from '@eso-status/live-services';
import { ServiceAlerts } from '@eso-status/service-alerts';
import {
  EsoStatus,
  MaintenanceEsoStatus,
  RawEsoStatus,
  Slug as EsoStatusSlug,
} from '@eso-status/types';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { Socket, io } from 'socket.io-client';

import { EsoStatus as CustomEsoStatus } from 'src/interface/esoStatus.interface';
import { MaintenanceEsoStatus as CustomMaintenanceEsoStatus } from 'src/interface/maintenanceEsoStatus.interface';
import { Maintenance } from 'src/resource/maintenance/entities/maintenance.entity';
import { Slug } from 'src/resource/slug/entities/slug.entity';
import { Repository } from 'typeorm';
import { runSeeders } from 'typeorm-extension';

import { dataSource, dataSourceOptions } from '../src/config/typeorm.config';
import { ArchiveService } from '../src/resource/archive/archive.service';
import { Archive } from '../src/resource/archive/entities/archive.entity';
import { Log } from '../src/resource/log/entities/log.entity';
import { LogService } from '../src/resource/log/log.service';
import { MaintenanceService } from '../src/resource/maintenance/maintenance.service';
import { Service } from '../src/resource/service/entities/service.entity';
import { ServiceController } from '../src/resource/service/service.controller';
import { ServiceService } from '../src/resource/service/service.service';
import { SlugService } from '../src/resource/slug/slug.service';
import { Status } from '../src/resource/status/entities/status.entity';
import { StatusService } from '../src/resource/status/status.service';
import { ScrapingService } from '../src/service/scraping/scraping.service';
import { WebsocketService } from '../src/service/websocket/websocket.service';
import { WinstonService } from '../src/service/winston/winston.service';

import { classicMaintenance } from './data/classicScenario';

import { Scenario } from './interface/scenario.interface';
import { Step } from './interface/step.interface';

config();

let app: INestApplication;
let scrapingService: ScrapingService;
let clientSocket: Socket;
let serviceRepository: Repository<Service>;
let archiveRepository: Repository<Archive>;
let maintenanceRepository: Repository<Maintenance>;
let logRepository: Repository<Log>;
let serviceController: ServiceController;

describe('ScrapingService (e2e)', (): void => {
  beforeAll(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        TypeOrmModule.forFeature([
          Service,
          Status,
          Archive,
          Maintenance,
          Log,
          Slug,
        ]),
      ],
      providers: [
        WebsocketService,
        WinstonService,
        ScrapingService,
        SlugService,
        ServiceService,
        ArchiveService,
        MaintenanceService,
        LogService,
        StatusService,
        ServiceController,
      ],
    }).compile();

    app = module.createNestApplication();
    scrapingService = module.get<ScrapingService>(ScrapingService);
    serviceController = module.get<ServiceController>(ServiceController);

    clientSocket = io(`ws://${process.env.APP_HOST}:${process.env.APP_PORT}`, {
      secure: true,
      rejectUnauthorized: false,
      transports: ['websocket'],
    });

    await app.listen(process.env.APP_PORT);

    serviceRepository = dataSource.getRepository(Service);
    archiveRepository = dataSource.getRepository(Archive);
    logRepository = dataSource.getRepository(Log);
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
  }, 15000);

  afterAll(async (): Promise<void> => {
    await app.close();
    await dataSource.destroy();
    clientSocket.disconnect();
  });

  describe.each([classicMaintenance])(
    'Should scenario works',
    (scenario: Scenario): void => {
      it('reset database', async (): Promise<void> => {
        await dataSource.dropDatabase();
        await dataSource.runMigrations();
        await runSeeders(dataSource);
        expect(true).toBe(true);
      });

      it.each(scenario.initial.logs)(
        'initialize log data',
        async (log: Log): Promise<void> => {
          let newLog: Log = logRepository.create({
            connector: log.connector,
            serviceId: log.serviceId,
            statusId: log.statusId,
            rawData: log.rawData,
          });
          await logRepository.save(newLog);
          newLog = await logRepository.findOne({
            where: {
              connector: log.connector,
              serviceId: log.serviceId,
            },
            order: {
              createdAt: 'DESC',
            },
          });
          expect(newLog.statusId).toEqual(log.statusId);
          expect(newLog.rawData).toEqual(log.rawData);
        },
        15000,
      );

      it.each(scenario.initial.archives)(
        'initialize archive data',
        async (archive: Archive): Promise<void> => {
          let archiveReceived: Archive = await archiveRepository.findOne({
            where: {
              connector: archive.connector,
              serviceId: archive.serviceId,
            },
          });
          archiveReceived.statusId = archive.statusId;
          archiveReceived.rawData = archive.rawData;
          await archiveRepository.save(archiveReceived);
          archiveReceived = await archiveRepository.findOne({
            where: {
              connector: archive.connector,
              serviceId: archive.serviceId,
            },
          });
          expect(archiveReceived.statusId).toEqual(archive.statusId);
          expect(archiveReceived.rawData).toEqual(archive.rawData);
        },
        15000,
      );

      it.each(scenario.initial.services)(
        'initialize service data',
        async (service: Service): Promise<void> => {
          let serviceReceived: Service = await serviceRepository.findOne({
            relations: ['maintenance'],
            where: {
              id: service.id,
            },
          });
          serviceReceived.slugId = service.slugId;
          serviceReceived.statusId = service.statusId;
          serviceReceived.typeId = service.typeId;
          serviceReceived.supportId = service.supportId;
          serviceReceived.zoneId = service.zoneId;
          serviceReceived.rawData = service.rawData;
          await serviceRepository.save(serviceReceived);
          serviceReceived = await serviceRepository.findOne({
            relations: ['maintenance'],
            where: {
              id: service.id,
            },
          });
          expect(serviceReceived.slugId).toEqual(service.slugId);
          expect(serviceReceived.statusId).toEqual(service.statusId);
          expect(serviceReceived.typeId).toEqual(service.typeId);
          expect(serviceReceived.supportId).toEqual(service.supportId);
          expect(serviceReceived.zoneId).toEqual(service.zoneId);
          expect(serviceReceived.rawData).toEqual(service.rawData);
        },
        15000,
      );

      it.each(scenario.initial.serviceControllerReturn)(
        'should service ($slug) controller return exact data',
        async (serviceControllerData: CustomEsoStatus): Promise<void> => {
          const response: EsoStatus = await serviceController.findOne(
            serviceControllerData.slug,
          );
          expect(response.slug).toStrictEqual(serviceControllerData.slug);
          expect(response.status).toStrictEqual(serviceControllerData.status);
          expect(response.type).toStrictEqual(serviceControllerData.type);
          expect(response.support).toStrictEqual(serviceControllerData.support);
          expect(response.zone).toStrictEqual(serviceControllerData.zone);
          expect(response.raw).toStrictEqual(serviceControllerData.raw);
          expect(response.maintenance).toStrictEqual(
            serviceControllerData.maintenance,
          );
        },
        15000,
      );

      describe.each(scenario.steps)(
        'Should steps works',
        (step: Step): void => {
          // eslint-disable-next-line jest/expect-expect
          it('should doHandle method called', async (): Promise<void> => {
            // eslint-disable-next-line @typescript-eslint/no-misused-promises,no-async-promise-executor
            await new Promise<void>(async (resolve): Promise<void> => {
              if (step.connector === 'LiveServices') {
                jest
                  .spyOn(LiveServices, 'getData')
                  .mockImplementation(async (): Promise<RawEsoStatus[]> => {
                    return Promise.resolve(step.connectorData);
                  });
              }

              if (step.connector === 'ForumMessage') {
                jest
                  .spyOn(ForumMessage, 'getData')
                  .mockImplementation(async (): Promise<RawEsoStatus[]> => {
                    return Promise.resolve(step.connectorData);
                  });
              }

              if (step.connector === 'ServiceAlerts') {
                jest
                  .spyOn(ServiceAlerts, 'getData')
                  .mockImplementation(async (): Promise<RawEsoStatus[]> => {
                    return Promise.resolve(step.connectorData);
                  });
              }

              let statusUpdateCalled: boolean = false;
              let maintenancePlannedCalled: boolean = false;
              let maintenanceRemovedCalled: boolean = false;

              const statusUpdateReallyReceived: EsoStatusSlug[] = [];
              const maintenancePlannedReallyReceived: EsoStatusSlug[] = [];
              const maintenanceRemovedReallyReceived: EsoStatusSlug[] = [];

              let statusUpdateCalledNb: number = 0;
              let maintenancePlannedCalledNb: number = 0;
              let maintenanceRemovedCalledNb: number = 0;

              const statusUpdateReceived = [];
              step.statusUpdateList.forEach((esoStatus: EsoStatus): void => {
                statusUpdateReceived[esoStatus.slug] = false;
              });

              const maintenancePlannedReceived = [];
              step.maintenancePlannedList.forEach(
                (maintenanceEsoStatus: MaintenanceEsoStatus): void => {
                  maintenancePlannedReceived[maintenanceEsoStatus.slug] = false;
                },
              );

              const maintenanceRemovedReceived = [];
              step.maintenanceRemovedList.forEach(
                (slug: EsoStatusSlug): void => {
                  maintenanceRemovedReceived[slug] = false;
                },
              );

              clientSocket.on('statusUpdate', (esoStatus: EsoStatus): void => {
                statusUpdateCalled = true;
                statusUpdateReallyReceived[esoStatus.slug] = true;
                statusUpdateCalledNb += 1;
                if (
                  !statusUpdateReceived[esoStatus.slug] &&
                  JSON.stringify(esoStatus) ===
                    JSON.stringify(
                      step.statusUpdateList.find(
                        (esoStatusItem: EsoStatus): boolean =>
                          esoStatusItem.slug === esoStatus.slug,
                      ),
                    )
                ) {
                  statusUpdateReceived[esoStatus.slug] = true;
                }
              });

              clientSocket.on(
                'maintenancePlanned',
                (maintenanceEsoStatus: CustomMaintenanceEsoStatus): void => {
                  maintenancePlannedCalled = true;
                  maintenancePlannedCalledNb += 1;
                  maintenancePlannedReallyReceived[maintenanceEsoStatus.slug] =
                    true;
                  if (
                    !maintenancePlannedReceived[maintenanceEsoStatus.slug] &&
                    JSON.stringify(maintenanceEsoStatus) ===
                      JSON.stringify(
                        step.maintenancePlannedList.find(
                          (
                            maintenanceEsoStatusItem: MaintenanceEsoStatus,
                          ): boolean =>
                            maintenanceEsoStatusItem.slug ===
                            maintenanceEsoStatus.slug,
                        ),
                      )
                  ) {
                    maintenancePlannedReceived[maintenanceEsoStatus.slug] =
                      true;
                  }
                },
              );

              clientSocket.on(
                'maintenanceRemoved',
                (slug: EsoStatusSlug): void => {
                  maintenanceRemovedCalled = true;
                  maintenanceRemovedReallyReceived[slug] = true;
                  maintenanceRemovedCalledNb += 1;
                  if (!maintenanceRemovedReceived[slug]) {
                    maintenanceRemovedReceived[slug] = true;
                  }
                },
              );

              setTimeout((): void => {
                let callUnexpected: boolean = false;
                if (
                  !callUnexpected &&
                  step.statusUpdateList.length === 0 &&
                  statusUpdateCalled
                ) {
                  callUnexpected = true;
                }
                if (
                  !callUnexpected &&
                  step.maintenancePlannedList.length === 0 &&
                  maintenancePlannedCalled
                ) {
                  callUnexpected = true;
                }
                if (
                  !callUnexpected &&
                  step.maintenanceRemovedList.length === 0 &&
                  maintenanceRemovedCalled
                ) {
                  callUnexpected = true;
                }

                let unexpectedSlug: boolean = false;

                Object.keys(statusUpdateReallyReceived).forEach(
                  (slug: EsoStatusSlug): void => {
                    if (
                      !unexpectedSlug &&
                      statusUpdateReceived[slug] !== true
                    ) {
                      unexpectedSlug = true;
                    }
                  },
                );

                Object.keys(maintenancePlannedReallyReceived).forEach(
                  (slug: EsoStatusSlug): void => {
                    if (
                      !unexpectedSlug &&
                      maintenancePlannedReceived[slug] !== true
                    ) {
                      unexpectedSlug = true;
                    }
                  },
                );

                Object.keys(maintenanceRemovedReallyReceived).forEach(
                  (slug: EsoStatusSlug): void => {
                    if (
                      !unexpectedSlug &&
                      maintenanceRemovedReceived[slug] !== true
                    ) {
                      unexpectedSlug = true;
                    }
                  },
                );

                let unexpectedCallNb: boolean = false;
                if (
                  !unexpectedCallNb &&
                  statusUpdateCalledNb !== step.statusUpdateList.length
                ) {
                  unexpectedCallNb = true;
                }

                if (
                  !unexpectedCallNb &&
                  maintenancePlannedCalledNb !==
                    step.maintenancePlannedList.length
                ) {
                  unexpectedCallNb = true;
                }

                if (
                  !unexpectedCallNb &&
                  maintenanceRemovedCalledNb !==
                    step.maintenanceRemovedList.length
                ) {
                  unexpectedCallNb = true;
                }

                if (
                  Object.values(statusUpdateReceived).filter(
                    (received: boolean): boolean => received === false,
                  ).length === 0 &&
                  Object.values(maintenancePlannedReceived).filter(
                    (received: boolean): boolean => received === false,
                  ).length === 0 &&
                  Object.values(maintenanceRemovedReceived).filter(
                    (received: boolean): boolean => received === false,
                  ).length === 0 &&
                  !callUnexpected &&
                  !unexpectedSlug &&
                  !unexpectedCallNb
                ) {
                  resolve();
                }
              }, 1000);

              if (step.connector === 'LiveServices') {
                await scrapingService.handleLiveServices();
              }

              if (step.connector === 'ForumMessage') {
                await scrapingService.handleForumMessage();
              }

              if (step.connector === 'ServiceAlerts') {
                await scrapingService.handleServiceAlerts();
              }
            });
          }, 15000);

          it.each(step.logs)(
            'should log ($serviceId) exist',
            async (log: Log): Promise<void> => {
              expect(
                await logRepository.count({
                  where: {
                    connector: log.connector,
                    serviceId: log.serviceId,
                    statusId: log.statusId,
                    rawData: log.rawData,
                  },
                }),
              ).toBeGreaterThanOrEqual(1);
            },
            15000,
          );

          it.each(step.archives)(
            'should archive ($serviceId) exist',
            async (archive: Archive): Promise<void> => {
              expect(
                await archiveRepository.count({
                  where: {
                    connector: archive.connector,
                    serviceId: archive.serviceId,
                    statusId: archive.statusId,
                    rawData: archive.rawData,
                  },
                }),
              ).toEqual(1);
            },
            15000,
          );

          it.each(step.services)(
            'should service ($slugId) exist',
            async (service: Service): Promise<void> => {
              expect(
                await serviceRepository.count({
                  where: {
                    slugId: service.slugId,
                    statusId: service.statusId,
                    typeId: service.typeId,
                    supportId: service.supportId,
                    zoneId: service.zoneId,
                    rawData: service.rawData,
                  },
                }),
              ).toEqual(1);
            },
            15000,
          );

          if (step.maintenances.length > 0) {
            it.each(step.maintenances)(
              'should maintenance ($serviceId) exist',
              async (maintenance: Maintenance): Promise<void> => {
                expect(
                  await maintenanceRepository.count({
                    where: {
                      serviceId: maintenance.serviceId,
                      beginnerAt: maintenance.beginnerAt,
                      rawData: maintenance.rawData,
                    },
                  }),
                ).toEqual(1);
              },
              15000,
            );
          }

          // TODO tester avec une vrai request
          it.each(step.serviceControllerReturn)(
            'should service ($slug) controller return exact data',
            async (serviceControllerData: CustomEsoStatus): Promise<void> => {
              const response: EsoStatus = await serviceController.findOne(
                serviceControllerData.slug,
              );
              expect(response.slug).toStrictEqual(serviceControllerData.slug);
              expect(response.status).toStrictEqual(
                serviceControllerData.status,
              );
              expect(response.type).toStrictEqual(serviceControllerData.type);
              expect(response.support).toStrictEqual(
                serviceControllerData.support,
              );
              expect(response.zone).toStrictEqual(serviceControllerData.zone);
              expect(response.raw).toStrictEqual(serviceControllerData.raw);
              expect(response.maintenance).toStrictEqual(
                serviceControllerData.maintenance,
              );
            },
            15000,
          );
        },
      );
    },
  );
});
