import { Test, TestingModule } from '@nestjs/testing';
import { SlugController } from './slug.controller';
import { SlugService } from './slug.service';
import { slugData } from '../../db/data/slug.data';

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

  it('should return an array of slugs', async () => {
    jest.spyOn(service, 'findAll').mockResolvedValue(slugData);

    expect(await controller.findAll()).toBe(slugData);
  });
});
