import { RawEsoStatus } from '@eso-status/types';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as request from 'supertest';
import { runSeeders } from 'typeorm-extension';

import { dataSource, dataSourceOptions } from '../../config/typeorm.config';

import { serviceData } from '../../database/data/service.data';

import { ServiceModule } from './service.module';

describe('ServiceController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(dataSourceOptions), ServiceModule],
    }).compile();

    app = module.createNestApplication();
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

  it('should return correct data for all slugs', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const response = await request(app.getHttpServer()).get('/service');
    expect(response.status).toBe(200);
    for (let i: number = 0; i < 12; i += 1) {
      expect(JSON.stringify(response.body)).toContain(
        JSON.stringify({
          slug: serviceData[i].slug.slug,
          status: serviceData[i].status.status,
          type: serviceData[i].type.type,
          support: serviceData[i].support.support,
          zone: serviceData[i].zone.zone,
          raw: <RawEsoStatus>JSON.parse(serviceData[i].rawData),
        }),
      );
    }
  });

  it('should return correct data for specific slug', async () => {
    for (let i: number = 0; i < 12; i += 1) {
      // eslint-disable-next-line no-await-in-loop,@typescript-eslint/no-unsafe-argument
      const response = await request(app.getHttpServer()).get(
        `/service/${serviceData[i].slug.slug}`,
      );
      expect(response.status).toBe(200);
      expect(JSON.stringify(response.body)).toContain(
        JSON.stringify({
          slug: serviceData[i].slug.slug,
          status: serviceData[i].status.status,
          type: serviceData[i].type.type,
          support: serviceData[i].support.support,
          zone: serviceData[i].zone.zone,
          raw: <RawEsoStatus>JSON.parse(serviceData[i].rawData),
        }),
      );
    }
  });
});
