import { EsoStatus, RawEsoStatus } from '@eso-status/types';
import { Test, TestingModule } from '@nestjs/testing';
import { config } from 'dotenv';

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
import { ForumMessage } from '../forum-message/forum-message';
import { LiveServices } from '../live-services/live-services';
import { ServiceAlerts } from '../service-alerts/service-alerts';

config();

describe('Scraper', () => {
  let scrapingForumMessage: ForumMessage;
  let scrapingLiveServices: LiveServices;
  let scrapingServiceAlerts: ServiceAlerts;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForumMessage, LiveServices, ServiceAlerts],
    }).compile();

    scrapingForumMessage = module.get<ForumMessage>(ForumMessage);
    scrapingLiveServices = module.get<LiveServices>(LiveServices);
    scrapingServiceAlerts = module.get<ServiceAlerts>(ServiceAlerts);
  });

  it('should format ForumMessage datas', async () => {
    jest.spyOn(scrapingForumMessage, 'getRawData').mockImplementation(
      // eslint-disable-next-line @typescript-eslint/require-await
      async (): Promise<RawEsoStatus[]> => rawForumMessageEsoStatusList,
    );

    const result: EsoStatus[] = ForumMessage.formatData(
      await scrapingForumMessage.getRawData(),
    );

    expect(result).toEqual(forumMessageEsoStatusList);
  });

  it('should format LiveServices datas', async () => {
    jest.spyOn(scrapingLiveServices, 'getRawData').mockImplementation(
      // eslint-disable-next-line @typescript-eslint/require-await
      async (): Promise<RawEsoStatus[]> => rawLiveServiceEsoStatusList,
    );

    const result: EsoStatus[] = LiveServices.formatData(
      await scrapingLiveServices.getRawData(),
    );

    expect(result).toEqual(liveServiceEsoStatusList);
  });

  it('should format ServiceAlerts datas', async () => {
    jest.spyOn(scrapingServiceAlerts, 'getRawData').mockImplementation(
      // eslint-disable-next-line @typescript-eslint/require-await
      async (): Promise<RawEsoStatus[]> => rawServiceAlertEsoStatusList,
    );

    const result: EsoStatus[] = ServiceAlerts.formatData(
      await scrapingServiceAlerts.getRawData(),
    );

    expect(result).toEqual(serviceAlertEsoStatusList);
  });
});
