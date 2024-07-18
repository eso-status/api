import { Test, TestingModule } from '@nestjs/testing';
import { SupportService } from './support.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Support } from './entities/support.entity';
import { supportData } from '../../database/data/support.data';

describe('SupportService', () => {
  let service: SupportService;
  let repository: Repository<Support>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SupportService,
        {
          provide: getRepositoryToken(Support),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<SupportService>(SupportService);
    repository = module.get<Repository<Support>>(getRepositoryToken(Support));
  });

  it('should return an array of supports', async () => {
    jest.spyOn(repository, 'find').mockResolvedValue(supportData);

    expect(await service.findAll()).toEqual(supportData);
  });
});
