import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { config } from 'dotenv';
import { ServiceAlertsService } from './service-alerts.service';
import { Scraper } from '../../class/scraper/scraper';
import { UpdateService } from '../update/update.service';
import { StatusService } from '../../resource/status/status.service';
import { WebsocketService } from '../websocket/websocket.service';
import { WinstonService } from '../winston/winston.service';
import { ServiceService } from '../../resource/service/service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../../config/typeorm.config';
import { Service } from '../../resource/service/entities/service.entity';
import { Status } from '../../resource/status/entities/status.entity';

config();

describe('ServiceAlertsService (e2e)', () => {
  let app: INestApplication;
  let service: ServiceAlertsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        TypeOrmModule.forFeature([Service, Status]),
      ],
      providers: [
        ServiceAlertsService,
        Scraper,
        UpdateService,
        ServiceService,
        StatusService,
        WebsocketService,
        WinstonService,
      ],
    }).compile();

    app = module.createNestApplication();
    service = module.get<ServiceAlertsService>(ServiceAlertsService);
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('should getRawData called', async () => {
    const getRawData = jest.spyOn(service, 'getRawData');

    await service.handleInterval();

    expect(getRawData).toHaveBeenCalled();
  });
});
