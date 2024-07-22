import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dataSourceOptions } from '../../config/typeorm.config';
import { Service } from '../../resource/service/entities/service.entity';

import { ServiceService } from '../../resource/service/service.service';
import { Status } from '../../resource/status/entities/status.entity';
import { StatusService } from '../../resource/status/status.service';
import { QueueService } from '../../service/queue/queue.service';
import { ScrapingService } from '../../service/scraping/scraping.service';
import { WebsocketService } from '../../service/websocket/websocket.service';
import { WinstonService } from '../../service/winston/winston.service';
import { ForumMessage } from '../forum-message/forum-message';
import { ServiceAlerts } from '../service-alerts/service-alerts';

import { LiveServices } from './live-services';

describe('LiveServices (e2e)', () => {
  let app: INestApplication;
  let scrapingService: ScrapingService;
  let scrapingClass: LiveServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        TypeOrmModule.forFeature([Service, Status]),
      ],
      providers: [
        ScrapingService,
        ForumMessage,
        LiveServices,
        ServiceAlerts,
        QueueService,
        ServiceService,
        StatusService,
        WinstonService,
        WebsocketService,
      ],
    }).compile();

    app = module.createNestApplication();
    scrapingService = module.get<ScrapingService>(ScrapingService);
    scrapingClass = module.get<LiveServices>(LiveServices);
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('should getRawData called', async () => {
    const getRawData = jest.spyOn(scrapingClass, 'getRawData');

    await scrapingService.handleLiveServices();

    expect(getRawData).toHaveBeenCalled();
  });
});
