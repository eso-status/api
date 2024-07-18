import { Test, TestingModule } from '@nestjs/testing';
import { SlugModule } from './slug.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { runSeeders } from 'typeorm-extension';
import { slugData } from '../../database/data/slug.data';
import { dataSource, dataSourceOptions } from '../../config/typeorm.config';

describe('SlugController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(dataSourceOptions), SlugModule],
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

  it('should return an array of slugs', async () => {
    const response = await request(app.getHttpServer()).get('/slug');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(slugData);
  });
});
