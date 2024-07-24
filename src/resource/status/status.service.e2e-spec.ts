import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';

import { dataSource, dataSourceOptions } from '../../config/typeorm.config';
import { statusData } from '../../database/data/status.data';

import { Status } from './entities/status.entity';
import { StatusModule } from './status.module';
import { StatusService } from './status.service';

config();

describe('StatusService (e2e)', (): void => {
  let app: INestApplication;
  let service: StatusService;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        TypeOrmModule.forFeature([Status]),
        StatusModule,
      ],
      providers: [StatusService],
    }).compile();

    await dataSource.initialize();
    await dataSource.dropDatabase();
    await dataSource.runMigrations();

    app = module.createNestApplication();
    service = module.get<StatusService>(StatusService);
    await app.init();
  });

  afterEach(async (): Promise<void> => {
    await app.close();
    await dataSource.destroy();
  });

  it('should findByStatus return correct data for up', async (): Promise<void> => {
    const result: Status = await service.findByStatus('up');

    expect(result).toEqual(statusData[0]);
  });

  it('should findByStatus return correct data for down', async (): Promise<void> => {
    const result: Status = await service.findByStatus('down');

    expect(result).toEqual(statusData[1]);
  });

  it('should findByStatus return correct data for issues', async (): Promise<void> => {
    const result: Status = await service.findByStatus('issues');

    expect(result).toEqual(statusData[2]);
  });

  it('should findByStatus return correct data for planned', async (): Promise<void> => {
    const result: Status = await service.findByStatus('planned');

    expect(result).toEqual(statusData[3]);
  });
});
