import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { runSeeders } from 'typeorm-extension';
import { dataSource, dataSourceOptions } from '../../db/data-source';
import { ZoneModule } from './zone.module';
import { zoneData } from '../../db/data/zone.data';

describe('ZoneController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(dataSourceOptions), ZoneModule],
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
  });

  it('should return an array of zones', async () => {
    const response = await request(app.getHttpServer()).get('/zone');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(zoneData);
  });
});
