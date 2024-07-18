import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { INestApplication } from '@nestjs/common';
import { runSeeders } from 'typeorm-extension';
import { Support } from './entities/support.entity';
import { SupportService } from './support.service';
import { SupportModule } from './support.module';
import { supportData } from '../../database/data/support.data';
import { dataSource, dataSourceOptions } from '../../config/typeorm.config';

describe('SupportService (e2e)', () => {
  let app: INestApplication;
  let supportService: SupportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        TypeOrmModule.forFeature([Support]),
        SupportModule,
      ],
      providers: [SupportService],
    }).compile();

    app = module.createNestApplication();
    supportService = module.get<SupportService>(SupportService);
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
    const receivedSupports: Support[] = await supportService.findAll();
    expect(receivedSupports).toEqual(supportData);
  });
});
