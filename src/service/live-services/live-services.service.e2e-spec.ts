import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';

import { Scraper } from '../../class/scraper/scraper';
import { dataSourceOptions } from '../../config/typeorm.config';
import { Service } from '../../resource/service/entities/service.entity';
import { ServiceService } from '../../resource/service/service.service';
import { Status } from '../../resource/status/entities/status.entity';
import { StatusService } from '../../resource/status/status.service';
import { UpdateService } from '../update/update.service';
import { WebsocketService } from '../websocket/websocket.service';
import { WinstonService } from '../winston/winston.service';

import { LiveServicesService } from './live-services.service';

config();

describe('LiveServicesService (e2e)', () => {
  let app: INestApplication;
  let service: LiveServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        TypeOrmModule.forFeature([Service, Status]),
      ],
      providers: [
        LiveServicesService,
        Scraper,
        UpdateService,
        ServiceService,
        StatusService,
        WebsocketService,
        WinstonService,
      ],
    }).compile();

    app = module.createNestApplication();
    service = module.get<LiveServicesService>(LiveServicesService);
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
