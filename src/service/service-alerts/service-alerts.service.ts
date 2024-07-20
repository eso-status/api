import ServiceAlertConnector from '@eso-status/service-alerts/lib/connectors/ServiceAlertConnector';
import { RawEsoStatus } from '@eso-status/types';
import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { config } from 'dotenv';

import { Scraper } from '../../class/scraper/scraper';

config();

@Injectable()
export class ServiceAlertsService {
  constructor(public readonly scraper: Scraper) {}

  public async getRawData(): Promise<RawEsoStatus[]> {
    const remoteContent: string =
      await ServiceAlertConnector.getRemoteContent();
    const filteredContent: string =
      ServiceAlertConnector.getFilterContent(remoteContent);
    const filteredContentList = filteredContent
      .split('<hr')
      .filter((item: string): boolean => !item.includes('&nbsp;'));
    const rawData: { raw: string; rawDate: string; rawData: string[] }[] =
      ServiceAlertConnector.getRawData(filteredContentList);
    const splitRawData: RawEsoStatus[] =
      ServiceAlertConnector.splitRawData(rawData);
    const splitRawDataWithSlug: RawEsoStatus[] =
      ServiceAlertConnector.getSlugOfSplitRawData(splitRawData);
    const splitRawDataList: RawEsoStatus[] =
      ServiceAlertConnector.splitRawDataList(splitRawDataWithSlug);
    const lastRawData: RawEsoStatus[] =
      ServiceAlertConnector.getLastRawData(splitRawDataList);
    return ServiceAlertConnector.getData(lastRawData);
  }

  @Interval(Number(process.env.SERVICE_ALERTS_UPDATE_INTERVAL))
  public async handleInterval() {
    await this.scraper.scrap(await this.getRawData());
  }
}
