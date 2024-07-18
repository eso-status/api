import { Test, TestingModule } from '@nestjs/testing';
import { SupportController } from './support.controller';
import { SupportService } from './support.service';
import { supportData } from '../../database/data/support.data';

describe('SupportController', () => {
  let controller: SupportController;
  let service: SupportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupportController],
      providers: [
        {
          provide: SupportService,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<SupportController>(SupportController);
    service = module.get<SupportService>(SupportService);
  });

  it('should return an array of support', async () => {
    jest.spyOn(service, 'findAll').mockResolvedValue(supportData);

    expect(await controller.findAll()).toBe(supportData);
  });
});
