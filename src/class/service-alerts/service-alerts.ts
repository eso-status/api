import ServiceAlertConnector from '@eso-status/service-alerts/lib/connectors/ServiceAlertConnector';
import { RawEsoStatus } from '@eso-status/types';
import { Injectable } from '@nestjs/common';

import { Scraper } from '../scraper/scraper';

@Injectable()
export class ServiceAlerts extends Scraper {
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
}
