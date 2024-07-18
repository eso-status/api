import { Test, TestingModule } from '@nestjs/testing';
import { ZoneService } from './zone.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Zone } from './entities/zone.entity';
import { zoneData } from '../../db/data/zone.data';

describe('ZoneService', () => {
  let service: ZoneService;
  let repository: Repository<Zone>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ZoneService,
        {
          provide: getRepositoryToken(Zone),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ZoneService>(ZoneService);
    repository = module.get<Repository<Zone>>(getRepositoryToken(Zone));
  });

  it('should return an array of zones', async () => {
    jest.spyOn(repository, 'find').mockResolvedValue(zoneData);

    expect(await service.findAll()).toEqual(zoneData);
  });
});
