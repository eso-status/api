import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { config } from 'dotenv';
import { EsoStatus, RawEsoStatus, Slug } from '@eso-status/types';
import { UpdateService } from '../update/update.service';
import ServiceAlertConnector from '@eso-status/service-alerts/lib/connectors/ServiceAlertConnector';

config();

@Injectable()
export class ServiceAlertsService {
  constructor(private readonly updateService: UpdateService) {}

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

  public formatData(rawEsoStatusList: RawEsoStatus[]): EsoStatus[] {
    return rawEsoStatusList.map(
      (rawEsoStatus: RawEsoStatus): EsoStatus => ({
        slug: <Slug>(rawEsoStatus.slugs ? rawEsoStatus.slugs[0] : ''),
        status: rawEsoStatus.status,
        type: rawEsoStatus.type,
        support: rawEsoStatus.support,
        zone: rawEsoStatus.zone,
        raw: rawEsoStatus,
      }),
    );
  }

  public async getData(): Promise<EsoStatus[]> {
    const rawEsoStatusList = await this.getRawData();

    return this.formatData(rawEsoStatusList);
  }

  @Interval(Number(process.env.SERVICE_ALERTS_UPDATE_INTERVAL))
  public async handleInterval() {
    (await this.getData()).forEach((esoStatus: EsoStatus): void => {
      this.updateService.update(esoStatus);
    });
  }
}
