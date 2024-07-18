import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { runSeeders } from 'typeorm-extension';
import { SupportModule } from './support.module';
import { supportData } from '../../database/data/support.data';
import { dataSource, dataSourceOptions } from '../../config/typeorm.config';

describe('SupportController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(dataSourceOptions), SupportModule],
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

  it('should return an array of supports', async () => {
    const response = await request(app.getHttpServer()).get('/support');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(supportData);
  });
});
