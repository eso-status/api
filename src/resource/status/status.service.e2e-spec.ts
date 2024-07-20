import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { runSeeders } from 'typeorm-extension';

import { dataSource, dataSourceOptions } from '../../config/typeorm.config';
import { statusData } from '../../database/data/status.data';

import { Status } from './entities/status.entity';
import { StatusModule } from './status.module';
import { StatusService } from './status.service';

config();

describe('StatusService (e2e)', () => {
  let app: INestApplication;
  let service: StatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        TypeOrmModule.forFeature([Status]),
        StatusModule,
      ],
      providers: [StatusService],
    }).compile();

    app = module.createNestApplication();
    service = module.get<StatusService>(StatusService);
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

  it('should findByStatus return correct data for up', async () => {
    const result = await service.findByStatus('up');

    expect(result).toEqual(statusData[0]);
  });

  it('should findByStatus return correct data for down', async () => {
    const result = await service.findByStatus('down');

    expect(result).toEqual(statusData[1]);
  });

  it('should findByStatus return correct data for issues', async () => {
    const result = await service.findByStatus('issues');

    expect(result).toEqual(statusData[2]);
  });

  it('should findByStatus return correct data for planned', async () => {
    const result = await service.findByStatus('planned');

    expect(result).toEqual(statusData[3]);
  });
});
