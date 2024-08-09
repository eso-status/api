import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { runSeeders } from 'typeorm-extension';

import {
  dataSource,
  dataSourceOptions,
} from '../../../src/config/typeorm.config';
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

  it('should return 400 error when bad slug passed', async (): Promise<void> => {
    expect(
      (await request(<App>app.getHttpServer()).get('/service/test')).status,
    ).toBe(400);
  });
});
