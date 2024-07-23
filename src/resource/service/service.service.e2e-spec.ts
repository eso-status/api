import { RawEsoStatus } from '@eso-status/types';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { runSeeders } from 'typeorm-extension';

import { dataSource, dataSourceOptions } from '../../config/typeorm.config';

import { serviceData } from '../../database/data/service.data';

import { statusData } from '../../database/data/status.data';

import { Service } from './entities/service.entity';
import { ServiceModule } from './service.module';

import { ServiceService } from './service.service';

config();

describe('ServiceService (e2e)', () => {
  let app: INestApplication;
  let service: ServiceService;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        TypeOrmModule.forFeature([Service]),
        ServiceModule,
      ],
      providers: [ServiceService],
    }).compile();

    app = module.createNestApplication();
    service = module.get<ServiceService>(ServiceService);
    await app.init();

    await dataSource.initialize();
    await dataSource.dropDatabase();
    await dataSource.runMigrations();
    await runSeeders(dataSource);
  });

  afterEach(async (): Promise<void> => {
    await app.close();
    await dataSource.destroy();
  });

  it('should findBySlug return correct data for server_xbox_na', async (): Promise<void> => {
    const result: Service = await service.findBySlug('server_xbox_na');

    expect(result).toEqual(serviceData[0]);
  });

  it('should findBySlug return correct data for server_xbox_eu', async (): Promise<void> => {
    const result: Service = await service.findBySlug('server_xbox_eu');

    expect(result).toEqual(serviceData[1]);
  });

  it('should findBySlug return correct data for server_ps_na', async (): Promise<void> => {
    const result: Service = await service.findBySlug('server_ps_na');

    expect(result).toEqual(serviceData[2]);
  });

  it('should findBySlug return correct data for server_ps_eu', async (): Promise<void> => {
    const result: Service = await service.findBySlug('server_ps_eu');

    expect(result).toEqual(serviceData[3]);
  });

  it('should findBySlug return correct data for server_pc_na', async (): Promise<void> => {
    const result: Service = await service.findBySlug('server_pc_na');

    expect(result).toEqual(serviceData[4]);
  });

  it('should findBySlug return correct data for server_pc_eu', async (): Promise<void> => {
    const result: Service = await service.findBySlug('server_pc_eu');

    expect(result).toEqual(serviceData[5]);
  });

  it('should findBySlug return correct data for server_pc_pts', async (): Promise<void> => {
    const result: Service = await service.findBySlug('server_pc_pts');

    expect(result).toEqual(serviceData[6]);
  });

  it('should findBySlug return correct data for service_web_site', async (): Promise<void> => {
    const result: Service = await service.findBySlug('service_web_site');

    expect(result).toEqual(serviceData[7]);
  });

  it('should findBySlug return correct data for service_web_forum', async (): Promise<void> => {
    const result: Service = await service.findBySlug('service_web_forum');

    expect(result).toEqual(serviceData[8]);
  });

  it('should findBySlug return correct data for service_store_crown', async (): Promise<void> => {
    const result: Service = await service.findBySlug('service_store_crown');

    expect(result).toEqual(serviceData[9]);
  });

  it('should findBySlug return correct data for service_store_eso', async (): Promise<void> => {
    const result: Service = await service.findBySlug('service_store_eso');

    expect(result).toEqual(serviceData[10]);
  });

  it('should findBySlug return correct data for service_system_account', async (): Promise<void> => {
    const result: Service = await service.findBySlug('service_system_account');

    expect(result).toEqual(serviceData[11]);
  });

  it('should updateStatus works', async (): Promise<void> => {
    let findBySlugResult: Service = await service.findBySlug('server_xbox_na');
    expect(findBySlugResult.status).toEqual(statusData[1]);
    const newRawEsoStatus: RawEsoStatus = <RawEsoStatus>(
      JSON.parse(findBySlugResult.rawData)
    );
    newRawEsoStatus.status = 'up';

    await service.update(1, 1, newRawEsoStatus);
    findBySlugResult = await service.findBySlug('server_xbox_na');

    expect(findBySlugResult.status).toEqual(statusData[0]);
  });
});
