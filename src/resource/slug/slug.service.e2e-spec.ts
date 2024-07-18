import { Test, TestingModule } from '@nestjs/testing';
import { Slug } from './entities/slug.entity';
import { SlugModule } from './slug.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { INestApplication } from '@nestjs/common';
import { runSeeders } from 'typeorm-extension';
import { SlugService } from './slug.service';
import { slugData } from '../../database/data/slug.data';
import { dataSource, dataSourceOptions } from '../../config/typeorm.config';

describe('SlugService (e2e)', () => {
  let app: INestApplication;
  let slugService: SlugService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        TypeOrmModule.forFeature([Slug]),
        SlugModule,
      ],
      providers: [SlugService],
    }).compile();

    app = module.createNestApplication();
    slugService = module.get<SlugService>(SlugService);
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
    const receivedUsers = await slugService.findAll();
    expect(receivedUsers).toEqual(slugData);
  });
});
