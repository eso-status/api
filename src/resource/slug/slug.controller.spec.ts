import { Test, TestingModule } from '@nestjs/testing';
import { SlugController } from './slug.controller';
import { SlugService } from './slug.service';
import { Slug } from './entities/slug.entity';

describe('SlugController', () => {
  let controller: SlugController;
  let service: SlugService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SlugController],
      providers: [
        {
          provide: SlugService,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<SlugController>(SlugController);
    service = module.get<SlugService>(SlugService);
  });

  it('should return an array of users', async () => {
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

    jest.spyOn(service, 'findAll').mockResolvedValue(slugs);

    expect(await controller.findAll()).toBe(slugs);
  });
});
