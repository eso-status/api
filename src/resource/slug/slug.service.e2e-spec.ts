import { Test, TestingModule } from '@nestjs/testing';
import { Slug } from './entities/slug.entity';
import { SlugModule } from './slug.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource, dataSourceOptions } from '../../db/data-source';
import { INestApplication } from '@nestjs/common';
import { runSeeders } from 'typeorm-extension';
import { SlugService } from './slug.service';

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
    const slugs: Slug[] = [
      { id: 1, slug: 'server_xbox_na' },
      { id: 2, slug: 'server_xbox_eu' },
      { id: 3, slug: 'server_ps_na' },
      { id: 4, slug: 'server_ps_eu' },
      { id: 5, slug: 'server_pc_na' },
      { id: 6, slug: 'server_pc_eu' },
      { id: 7, slug: 'server_pc_pts' },
      { id: 8, slug: 'service_web_site' },
      { id: 9, slug: 'service_web_forum' },
      { id: 10, slug: 'service_store_crown' },
      { id: 11, slug: 'service_store_eso' },
      { id: 12, slug: 'service_system_account' },
    ];

    const receivedUsers = await slugService.findAll();
    expect(receivedUsers).toEqual(slugs);
  });
});
