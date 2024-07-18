import { Test, TestingModule } from '@nestjs/testing';
import { ZoneController } from './zone.controller';
import { ZoneService } from './zone.service';
import { zoneData } from '../../db/data/zone.data';

describe('ZoneController', () => {
  let controller: ZoneController;
  let service: ZoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZoneController],
      providers: [
        {
          provide: ZoneService,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ZoneController>(ZoneController);
    service = module.get<ZoneService>(ZoneService);
  });

  it('should return an array of zones', async () => {
    jest.spyOn(service, 'findAll').mockResolvedValue(zoneData);

    expect(await controller.findAll()).toBe(zoneData);
  });
});
