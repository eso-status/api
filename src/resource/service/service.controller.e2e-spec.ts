import { RawEsoStatus } from '@eso-status/types';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as request from 'supertest';
import supertest from 'supertest';
import { App } from 'supertest/types';

import { dataSource, dataSourceOptions } from '../../config/typeorm.config';

import { serviceData } from '../../database/data/service.data';

import { ServiceModule } from './service.module';

describe('ServiceController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(dataSourceOptions), ServiceModule],
    }).compile();
    await dataSource.dropDatabase();
    await dataSource.runMigrations();

    app = module.createNestApplication();
    await app.init();
  });

  afterEach(async (): Promise<void> => {
    await app.close();
    await dataSource.destroy();
  });

  it('should return correct data for all slugs', async (): Promise<void> => {
    const response: supertest.Response = await request(
      <App>app.getHttpServer(),
    ).get('/service');
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
      // eslint-disable-next-line no-await-in-loop
      const response: supertest.Response = await request(
        <App>app.getHttpServer(),
      ).get(`/service/${serviceData[i].slug.slug}`);
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
