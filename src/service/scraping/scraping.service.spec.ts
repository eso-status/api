import { ForumMessage } from '@eso-status/forum-message';
import { LiveServices } from '@eso-status/live-services';
import { ServiceAlerts } from '@eso-status/service-alerts';
import { EsoStatus, RawEsoStatus } from '@eso-status/types';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';

import { dataSourceOptions } from '../../config/typeorm.config';
import {
  forumMessageEsoStatusList,
  rawForumMessageEsoStatusList,
} from '../../database/data/forumMessage.data';

import {
  liveServiceEsoStatusList,
  rawLiveServiceEsoStatusList,
} from '../../database/data/liveServices.data';
import {
  rawServiceAlertEsoStatusList,
  serviceAlertEsoStatusList,
} from '../../database/data/serviceAlerts.data';

import { Service } from '../../resource/service/entities/service.entity';
import { ServiceService } from '../../resource/service/service.service';
import { Status } from '../../resource/status/entities/status.entity';
import { StatusService } from '../../resource/status/status.service';
import { QueueService } from '../queue/queue.service';
import { WebsocketService } from '../websocket/websocket.service';
import { WinstonService } from '../winston/winston.service';

import { ScrapingService } from './scraping.service';

config();

describe('ScrapingService', () => {
  let service: ScrapingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        TypeOrmModule.forFeature([Service, Status]),
      ],
      providers: [
        ScrapingService,
        QueueService,
        ServiceService,
        StatusService,
        WinstonService,
        WebsocketService,
      ],
    }).compile();

    service = module.get<ScrapingService>(ScrapingService);
  });

  it('should format ForumMessage datas', async () => {
    jest
      .spyOn(ForumMessage, 'getData')
      .mockImplementation(async (): Promise<RawEsoStatus[]> => {
        return Promise.resolve(rawForumMessageEsoStatusList);
      });

    const result: EsoStatus[] = service.formatData(
      await ForumMessage.getData(),
    );

    expect(result).toEqual(forumMessageEsoStatusList);
  });

  it('should format LiveServices datas', async () => {
    jest
      .spyOn(LiveServices, 'getData')
      .mockImplementation(async (): Promise<RawEsoStatus[]> => {
        return Promise.resolve(rawLiveServiceEsoStatusList);
      });

    const result: EsoStatus[] = service.formatData(
      await LiveServices.getData(),
    );

    expect(result).toEqual(liveServiceEsoStatusList);
  });

  it('should format ServiceAlerts datas', async () => {
    jest
      .spyOn(ServiceAlerts, 'getData')
      .mockImplementation(async (): Promise<RawEsoStatus[]> => {
        return Promise.resolve(rawServiceAlertEsoStatusList);
      });

    const result: EsoStatus[] = service.formatData(
      await ServiceAlerts.getData(),
    );

    expect(result).toEqual(serviceAlertEsoStatusList);
  });
});
