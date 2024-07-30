import { ForumMessage } from '@eso-status/forum-message';
import { LiveServices } from '@eso-status/live-services';
import { ServiceAlerts } from '@eso-status/service-alerts';
import { EsoStatus, RawEsoStatus } from '@eso-status/types';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';

import { dataSourceOptions } from '../../../src/config/typeorm.config';
import {
  forumMessageEsoStatusList,
  rawForumMessageEsoStatusList,
} from '../../../src/database/data/forumMessage.data';
import {
  liveServiceEsoStatusList,
  rawLiveServiceEsoStatusList,
} from '../../../src/database/data/liveServices.data';
import {
  rawServiceAlertEsoStatusList,
  serviceAlertEsoStatusList,
} from '../../../src/database/data/serviceAlerts.data';
import { ArchiveService } from '../../../src/resource/archive/archive.service';
import { Archive } from '../../../src/resource/archive/entities/archive.entity';
import { Service } from '../../../src/resource/service/entities/service.entity';
import { ServiceService } from '../../../src/resource/service/service.service';
import { Status } from '../../../src/resource/status/entities/status.entity';
import { StatusService } from '../../../src/resource/status/status.service';
import { QueueService } from '../../../src/service/queue/queue.service';
import { ScrapingService } from '../../../src/service/scraping/scraping.service';
import { WebsocketService } from '../../../src/service/websocket/websocket.service';
import { WinstonService } from '../../../src/service/winston/winston.service';

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
