import { Test, TestingModule } from '@nestjs/testing';
import { UpdateService } from '../update/update.service';
import { config } from 'dotenv';
import { ServiceAlertsService } from './service-alerts.service';
import { WebsocketService } from '../websocket/websocket.service';
import { WinstonService } from '../winston/winston.service';
import { ServiceService } from '../../resource/service/service.service';
import { StatusService } from '../../resource/status/status.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../../config/typeorm.config';
import { Service } from '../../resource/service/entities/service.entity';
import { Status } from '../../resource/status/entities/status.entity';
import {
  rawServiceAlertEsoStatusList,
  serviceAlertEsoStatusList,
} from '../../database/data/serviceAlerts.data';

config();

describe('ServiceAlertsService', () => {
  let service: ServiceAlertsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        TypeOrmModule.forFeature([Service, Status]),
      ],
      providers: [
        ServiceAlertsService,
        UpdateService,
        WinstonService,
        ServiceService,
        StatusService,
        WebsocketService,
      ],
    }).compile();

    service = module.get<ServiceAlertsService>(ServiceAlertsService);
  });

  it('should format connector datas', async () => {
    jest
      .spyOn(service, 'getRawData')
      .mockImplementation(async () => rawServiceAlertEsoStatusList);

    const result = await service.getData();

    expect(result).toEqual(serviceAlertEsoStatusList);
    expect(service.getRawData).toHaveBeenCalled();
  });
});
