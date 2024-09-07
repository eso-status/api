import ForumMessage from '@eso-status/forum-message';
import LiveServices from '@eso-status/live-services';
import ServiceAlerts from '@eso-status/service-alerts';
import {
  EsoStatus,
  EsoStatusRawData,
  Slug as EsoStatusSlug,
} from '@eso-status/types';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { Socket, io } from 'socket.io-client';

import * as request from 'supertest';
import supertest from 'supertest';
import { App } from 'supertest/types';
import { Repository } from 'typeorm';
import { runSeeders } from 'typeorm-extension';

import { dataSource, dataSourceOptions } from '../src/config/typeorm.config';
import { EsoStatus as CustomEsoStatus } from '../src/interface/esoStatus.interface';
import { EsoStatusMaintenance as CustomEsoStatusMaintenance } from '../src/interface/esoStatusMaintenance.interface';
import { ArchiveService } from '../src/resource/archive/archive.service';
import { Archive } from '../src/resource/archive/entities/archive.entity';
import { Log } from '../src/resource/log/entities/log.entity';
import { LogService } from '../src/resource/log/log.service';
import { Maintenance } from '../src/resource/maintenance/entities/maintenance.entity';
import { MaintenanceService } from '../src/resource/maintenance/maintenance.service';
import { Service } from '../src/resource/service/entities/service.entity';
import { ServiceController } from '../src/resource/service/service.controller';
import { ServiceModule } from '../src/resource/service/service.module';
import { ServiceService } from '../src/resource/service/service.service';
import { Slug } from '../src/resource/slug/entities/slug.entity';
import { SlugService } from '../src/resource/slug/slug.service';
import { Status } from '../src/resource/status/entities/status.entity';
import { StatusService } from '../src/resource/status/status.service';
import { ScrapingService } from '../src/service/scraping/scraping.service';
import { WebsocketService } from '../src/service/websocket/websocket.service';
import { WinstonService } from '../src/service/winston/winston.service';

import { classicScenario } from './data/classicScenario';
import { doubleMaintenance } from './data/doubleMaintenance';
import { Scenario } from './interface/scenario.interface';
import { Step } from './interface/step.interface';

config();

describe('AppModule (e2e)', (): void => {
  let app: INestApplication;
  let scrapingService: ScrapingService;
  let clientSocket: Socket;
  let serviceRepository: Repository<Service>;
  let archiveRepository: Repository<Archive>;
  let maintenanceRepository: Repository<Maintenance>;
  let logRepository: Repository<Log>;

  const mockConnectorData = (step: Step): void => {
    if (step.connector === 'LiveServices') {
      jest
        .spyOn(LiveServices, 'getData')
        .mockImplementation(async (): Promise<EsoStatusRawData[]> => {
          return Promise.resolve(step.connectorData);
        });
    }

    if (
      step.connector === 'ForumMessage' ||
      step.connector === 'ForumMessagePts'
    ) {
      jest
        .spyOn(ForumMessage, 'getData')
        .mockImplementation(async (): Promise<EsoStatusRawData[]> => {
          return Promise.resolve(step.connectorData);
        });
    }

    if (step.connector === 'ServiceAlerts') {
      jest
        .spyOn(ServiceAlerts, 'getData')
        .mockImplementation(async (): Promise<EsoStatusRawData[]> => {
          return Promise.resolve(step.connectorData);
        });
    }
  };

  const callHandler = async (step: Step): Promise<void> => {
    if (step.connector === 'LiveServices') {
      await scrapingService.handleLiveServices();
    }

    if (step.connector === 'ForumMessage') {
      await scrapingService.handleForumMessage();
    }

    if (step.connector === 'ForumMessagePts') {
      await scrapingService.handleForumMessagePts();
    }

    if (step.connector === 'ServiceAlerts') {
      await scrapingService.handleServiceAlerts();
    }
  };

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
        ServiceModule,
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

  describe.each([doubleMaintenance, classicScenario])(
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
          const singleResponse: supertest.Response = await request(
            <App>app.getHttpServer(),
          ).get(`/service/${serviceControllerData.slug}`);
          expect(singleResponse.status).toBe(200);
          expect(JSON.stringify(singleResponse.body)).toContain(
            JSON.stringify(serviceControllerData),
          );

          const response: supertest.Response = await request(
            <App>app.getHttpServer(),
          ).get(`/service`);
          expect(response.status).toBe(200);
          expect(JSON.stringify(response.body)).toContain(
            JSON.stringify(serviceControllerData),
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
              mockConnectorData(step);

              const statusUpdateDataReceived: string[] = [];
              const maintenancePlannedDataReceived: string[] = [];
              const maintenanceRemovedDataReceived: string[] = [];

              clientSocket.on('statusUpdate', (esoStatus: EsoStatus): void => {
                statusUpdateDataReceived.push(JSON.stringify(esoStatus));
              });

              clientSocket.on(
                'maintenancePlanned',
                (maintenanceEsoStatus: CustomEsoStatusMaintenance): void => {
                  maintenancePlannedDataReceived.push(
                    JSON.stringify(maintenanceEsoStatus),
                  );
                },
              );

              clientSocket.on(
                'maintenanceRemoved',
                (slug: EsoStatusSlug): void => {
                  maintenanceRemovedDataReceived.push(slug);
                },
              );

              setTimeout((): void => {
                statusUpdateDataReceived.map((esoStatus: string): void =>
                  expect(
                    step.statusUpdateList.map(
                      (stepEsoStatus: EsoStatus): string =>
                        JSON.stringify(stepEsoStatus),
                    ),
                  ).toContain(esoStatus),
                );
                expect(statusUpdateDataReceived.length).toEqual(
                  step.statusUpdateList.length,
                );

                maintenancePlannedDataReceived.map(
                  (maintenanceEsoStatus: string): void =>
                    expect(
                      step.maintenancePlannedList.map(
                        (
                          stepMaintenancePlannedList: CustomEsoStatusMaintenance,
                        ): string => JSON.stringify(stepMaintenancePlannedList),
                      ),
                    ).toContain(maintenanceEsoStatus),
                );
                expect(maintenancePlannedDataReceived.length).toEqual(
                  step.maintenancePlannedList.length,
                );

                maintenanceRemovedDataReceived.map(
                  (slug: EsoStatusSlug): void =>
                    expect(step.maintenanceRemovedList).toContain(slug),
                );
                expect(maintenanceRemovedDataReceived.length).toEqual(
                  step.maintenanceRemovedList.length,
                );

                resolve();
              }, 100);

              await callHandler(step);
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

          it('should database has correct log count', async (): Promise<void> => {
            expect(await logRepository.count()).toEqual(step.logs.length);
          }, 15000);

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

          it('should database has correct maintenance count', async (): Promise<void> => {
            expect(await maintenanceRepository.count()).toEqual(
              step.maintenances.length,
            );
          }, 15000);

          it.each(step.serviceControllerReturn)(
            'should service ($slug) controller return exact data',
            async (serviceControllerData: CustomEsoStatus): Promise<void> => {
              const singleResponse: supertest.Response = await request(
                <App>app.getHttpServer(),
              ).get(`/service/${serviceControllerData.slug}`);
              expect(singleResponse.status).toBe(200);
              expect(JSON.stringify(singleResponse.body)).toContain(
                JSON.stringify(serviceControllerData),
              );

              const response: supertest.Response = await request(
                <App>app.getHttpServer(),
              ).get(`/service`);
              expect(response.status).toBe(200);
              expect(JSON.stringify(response.body)).toContain(
                JSON.stringify(serviceControllerData),
              );
            },
            15000,
          );
        },
      );
    },
  );
});
