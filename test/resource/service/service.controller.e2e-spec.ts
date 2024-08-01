import { RawEsoStatus } from '@eso-status/types';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from 'src/resource/service/entities/service.entity';
import * as request from 'supertest';
import supertest from 'supertest';
import { App } from 'supertest/types';
import { runSeeders } from 'typeorm-extension';

import {
  dataSource,
  dataSourceOptions,
} from '../../../src/config/typeorm.config';
import { serviceData } from '../../../src/database/data/service.data';
import { ServiceModule } from '../../../src/resource/service/service.module';

describe('ServiceController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async (): Promise<void> => {
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

  afterEach(async (): Promise<void> => {
    await app.close();
    await dataSource.destroy();
  });

  describe('should return correct data for all slugs', (): void => {
    let response: supertest.Response;

    it('should return correct data for all slugs status 200', async (): Promise<void> => {
      response = await request(<App>app.getHttpServer()).get('/service');
      expect(response.status).toBe(200);
    });

    it.each(serviceData)(
      'should return correct data for specific slug',
      (service: Service): void => {
        expect(JSON.stringify(response.body)).toContain(
          JSON.stringify({
            slug: service.slug.slug,
            status: service.status.status,
            type: service.type.type,
            support: service.support.support,
            zone: service.zone.zone,
            raw: <RawEsoStatus>JSON.parse(service.rawData),
          }),
        );
      },
      15000,
    );
  });

  it.each(serviceData)(
    'should return correct data for specific slug',
    async (service: Service): Promise<void> => {
      const response: supertest.Response = await request(
        <App>app.getHttpServer(),
      ).get(`/service/${service.slug.slug}`);
      expect(response.status).toBe(200);
      expect(JSON.stringify(response.body)).toContain(
        JSON.stringify({
          slug: service.slug.slug,
          status: service.status.status,
          type: service.type.type,
          support: service.support.support,
          zone: service.zone.zone,
          raw: <RawEsoStatus>JSON.parse(service.rawData),
        }),
      );
    },
    15000,
  );
});
