import { Test, TestingModule } from '@nestjs/testing';
import { UpdateService } from '../update/update.service';
import { config } from 'dotenv';
import { ForumMessageService } from './forum-message.service';
import { WinstonService } from '../winston/winston.service';
import { ServiceService } from '../../resource/service/service.service';
import { StatusService } from '../../resource/status/status.service';
import { WebsocketService } from '../websocket/websocket.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../../config/typeorm.config';
import { Service } from '../../resource/service/entities/service.entity';
import { Status } from '../../resource/status/entities/status.entity';
import {
  forumMessageEsoStatusList,
  rawForumMessageEsoStatusList,
} from '../../database/data/forumMessage.data';
import { Scraper } from '../../class/scraper/scraper';

config();

describe('ForumMessageService', () => {
  let service: ForumMessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        TypeOrmModule.forFeature([Service, Status]),
      ],
      providers: [
        ForumMessageService,
        UpdateService,
        WinstonService,
        ServiceService,
        StatusService,
        WebsocketService,
        Scraper,
      ],
    }).compile();

    service = module.get<ForumMessageService>(ForumMessageService);
  });

  it('should format connector datas', async () => {
    jest
      .spyOn(service, 'getRawData')
      .mockImplementation(async () => rawForumMessageEsoStatusList);

    const result = service.scraper.formatData(await service.getRawData());

    expect(result).toEqual(forumMessageEsoStatusList);
    expect(service.getRawData).toHaveBeenCalled();
  });
});
