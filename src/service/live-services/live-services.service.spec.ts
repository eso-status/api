import { RawEsoStatus } from '@eso-status/types';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';

import { Scraper } from '../../class/scraper/scraper';
import { dataSourceOptions } from '../../config/typeorm.config';
import {
  liveServiceEsoStatusList,
  rawLiveServiceEsoStatusList,
} from '../../database/data/liveServices.data';
import { Service } from '../../resource/service/entities/service.entity';
import { ServiceService } from '../../resource/service/service.service';
import { Status } from '../../resource/status/entities/status.entity';
import { StatusService } from '../../resource/status/status.service';
import { UpdateService } from '../update/update.service';

import { WebsocketService } from '../websocket/websocket.service';
import { WinstonService } from '../winston/winston.service';

import { LiveServicesService } from './live-services.service';

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
        Scraper,
      ],
    }).compile();

    service = module.get<LiveServicesService>(LiveServicesService);
  });

  it('should format connector datas', async () => {
    const getRawData = jest.spyOn(service, 'getRawData');

    jest.spyOn(service, 'getRawData').mockImplementation(
      // eslint-disable-next-line @typescript-eslint/require-await
      async (): Promise<RawEsoStatus[]> => rawLiveServiceEsoStatusList,
    );

    const result = service.scraper.formatData(await service.getRawData());

    expect(result).toEqual(liveServiceEsoStatusList);
    expect(getRawData).toHaveBeenCalled();
  });
});
