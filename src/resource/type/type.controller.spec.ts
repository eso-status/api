import { Test, TestingModule } from '@nestjs/testing';
import { TypeController } from './type.controller';
import { TypeService } from './type.service';
import { typeData } from '../../db/data/type.data';

describe('TypeController', () => {
  let controller: TypeController;
  let service: TypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeController],
      providers: [
        {
          provide: TypeService,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<TypeController>(TypeController);
    service = module.get<TypeService>(TypeService);
  });

  it('should return an array of types', async () => {
    jest.spyOn(service, 'findAll').mockResolvedValue(typeData);

    expect(await controller.findAll()).toBe(typeData);
  });
});
