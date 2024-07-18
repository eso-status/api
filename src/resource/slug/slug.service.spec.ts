import { SlugService } from './slug.service';
import { Repository } from 'typeorm';
import { Slug } from './entities/slug.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('SlugService', () => {
  let service: SlugService;
  let repository: Repository<Slug>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SlugService,
        {
          provide: getRepositoryToken(Slug),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<SlugService>(SlugService);
    repository = module.get<Repository<Slug>>(getRepositoryToken(Slug));
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

    jest.spyOn(repository, 'find').mockResolvedValue(slugs);

    expect(await service.findAll()).toEqual(slugs);
  });
});
