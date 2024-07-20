import { Test, TestingModule } from '@nestjs/testing';
import { config } from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource, dataSourceOptions } from '../../config/typeorm.config';
import { ServiceService } from './service.service';
import { Service } from 'aws-sdk';
import { serviceData } from '../../database/data/service.data';
import { INestApplication } from '@nestjs/common';
import { runSeeders } from 'typeorm-extension';
import { ServiceModule } from './service.module';
import { statusData } from '../../database/data/status.data';

config();

describe('ServiceService (e2e)', () => {
  let app: INestApplication;
  let service: ServiceService;

  beforeEach(async () => {
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

  afterEach(async () => {
    await app.close();
    await dataSource.destroy();
  });

  it('should findBySlug return correct data for server_xbox_na', async () => {
    const result = await service.findBySlug('server_xbox_na');

    expect(result).toEqual(serviceData[0]);
  });

  it('should findBySlug return correct data for server_xbox_eu', async () => {
    const result = await service.findBySlug('server_xbox_eu');

    expect(result).toEqual(serviceData[1]);
  });

  it('should findBySlug return correct data for server_ps_na', async () => {
    const result = await service.findBySlug('server_ps_na');

    expect(result).toEqual(serviceData[2]);
  });

  it('should findBySlug return correct data for server_ps_eu', async () => {
    const result = await service.findBySlug('server_ps_eu');

    expect(result).toEqual(serviceData[3]);
  });

  it('should findBySlug return correct data for server_pc_na', async () => {
    const result = await service.findBySlug('server_pc_na');

    expect(result).toEqual(serviceData[4]);
  });

  it('should findBySlug return correct data for server_pc_eu', async () => {
    const result = await service.findBySlug('server_pc_eu');

    expect(result).toEqual(serviceData[5]);
  });

  it('should findBySlug return correct data for server_pc_pts', async () => {
    const result = await service.findBySlug('server_pc_pts');

    expect(result).toEqual(serviceData[6]);
  });

  it('should findBySlug return correct data for service_web_site', async () => {
    const result = await service.findBySlug('service_web_site');

    expect(result).toEqual(serviceData[7]);
  });

  it('should findBySlug return correct data for service_web_forum', async () => {
    const result = await service.findBySlug('service_web_forum');

    expect(result).toEqual(serviceData[8]);
  });

  it('should findBySlug return correct data for service_store_crown', async () => {
    const result = await service.findBySlug('service_store_crown');

    expect(result).toEqual(serviceData[9]);
  });

  it('should findBySlug return correct data for service_store_eso', async () => {
    const result = await service.findBySlug('service_store_eso');

    expect(result).toEqual(serviceData[10]);
  });

  it('should findBySlug return correct data for service_system_account', async () => {
    const result = await service.findBySlug('service_system_account');

    expect(result).toEqual(serviceData[11]);
  });

  it('should updateStatus works', async () => {
    let findBySlugResult = await service.findBySlug('server_xbox_na');
    expect(findBySlugResult.status).toEqual(statusData[1]);

    await service.updateStatus(1, 1);
    findBySlugResult = await service.findBySlug('server_xbox_na');

    expect(findBySlugResult.status).toEqual(statusData[0]);
  });
});
