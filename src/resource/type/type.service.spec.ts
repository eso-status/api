import { Test, TestingModule } from '@nestjs/testing';
import { TypeService } from './type.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Type } from './entities/type.entity';
import { typeData } from '../../db/data/type.data';

describe('TypeService', () => {
  let service: TypeService;
  let repository: Repository<Type>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TypeService,
        {
          provide: getRepositoryToken(Type),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<TypeService>(TypeService);
    repository = module.get<Repository<Type>>(getRepositoryToken(Type));
  });

  it('should return an array of types', async () => {
    jest.spyOn(repository, 'find').mockResolvedValue(typeData);

    expect(await service.findAll()).toEqual(typeData);
  });
});
