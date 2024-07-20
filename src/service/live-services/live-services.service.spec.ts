import { Test, TestingModule } from '@nestjs/testing';
import { UpdateService } from '../update/update.service';
import { LiveServicesService } from './live-services.service';
import { config } from 'dotenv';
import { WinstonService } from '../winston/winston.service';
import { ServiceService } from '../../resource/service/service.service';
import { StatusService } from '../../resource/status/status.service';
import { WebsocketService } from '../websocket/websocket.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../../config/typeorm.config';
import { Service } from '../../resource/service/entities/service.entity';
import { Status } from '../../resource/status/entities/status.entity';
import {
  liveServiceEsoStatusList,
  rawLiveServiceEsoStatusList,
} from '../../database/data/liveServices.data';

config();

describe('LiveServicesService', () => {
  let service: LiveServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        TypeOrmModule.forFeature([Service, Status]),
      ],
      providers: [
        LiveServicesService,
        UpdateService,
        WinstonService,
        ServiceService,
        StatusService,
        WebsocketService,
      ],
    }).compile();

    service = module.get<LiveServicesService>(LiveServicesService);
  });

  it('should format connector datas', async () => {
    jest
      .spyOn(service, 'getRawData')
      .mockImplementation(async () => rawLiveServiceEsoStatusList);

    const result = await service.getData();

    expect(result).toEqual(liveServiceEsoStatusList);
    expect(service.getRawData).toHaveBeenCalled();
  });
});
