import { SlugService } from './slug.service';
import { Repository } from 'typeorm';
import { Slug } from './entities/slug.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { slugData } from '../../db/data/slug.data';

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
    jest.spyOn(repository, 'find').mockResolvedValue(slugData);

    expect(await service.findAll()).toEqual(slugData);
  });
});
