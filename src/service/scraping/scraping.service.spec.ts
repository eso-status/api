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

import { ArchiveService } from '../../resource/archive/archive.service';
import { Archive } from '../../resource/archive/entities/archive.entity';
import { Service } from '../../resource/service/entities/service.entity';
import { ServiceService } from '../../resource/service/service.service';
import { Status } from '../../resource/status/entities/status.entity';
import { StatusService } from '../../resource/status/status.service';
import { QueueService } from '../queue/queue.service';
import { WebsocketService } from '../websocket/websocket.service';
import { WinstonService } from '../winston/winston.service';

import { ScrapingService } from './scraping.service';

config();

describe('ScrapingService', (): void => {
  let service: ScrapingService;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        TypeOrmModule.forFeature([Service, Status, Archive]),
      ],
      providers: [
        ScrapingService,
        QueueService,
        ServiceService,
        ArchiveService,
        StatusService,
        WinstonService,
        WebsocketService,
      ],
    }).compile();

    service = module.get<ScrapingService>(ScrapingService);
  });

  it('should format ForumMessage datas', async (): Promise<void> => {
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

  it('should format LiveServices datas', async (): Promise<void> => {
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

  it('should format ServiceAlerts datas', async (): Promise<void> => {
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
