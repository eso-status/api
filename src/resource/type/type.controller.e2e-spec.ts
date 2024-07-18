import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { runSeeders } from 'typeorm-extension';
import { typeData } from '../../db/data/type.data';
import { dataSource, dataSourceOptions } from '../../db/data-source';
import { TypeModule } from './type.module';

describe('TypeController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(dataSourceOptions), TypeModule],
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

  it('should return an array of types', async () => {
    const response = await request(app.getHttpServer()).get('/type');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(typeData);
  });
});
