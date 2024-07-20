import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { config } from 'dotenv';
import { LiveServices } from '@eso-status/live-services';
import { UpdateService } from '../update/update.service';
import { EsoStatus, RawEsoStatus, Slug } from '@eso-status/types';

config();

@Injectable()
export class LiveServicesService {
  constructor(private readonly updateService: UpdateService) {}

  public async getRawData(): Promise<RawEsoStatus[]> {
    return await LiveServices.getData();
  }

  public formatData(rawEsoStatusList: RawEsoStatus[]): EsoStatus[] {
    return rawEsoStatusList.map(
      (rawEsoStatus: RawEsoStatus): EsoStatus => ({
        slug: <Slug>(rawEsoStatus.slugs ? rawEsoStatus.slugs[0] : ''),
        status: rawEsoStatus.status,
        type: 'server',
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

  @Interval(Number(process.env.LIVE_SERVICES_UPDATE_INTERVAL))
  public async handleInterval() {
    (await this.getData()).forEach((esoStatus: EsoStatus): void => {
      this.updateService.update(esoStatus);
      console.log(this.updateService.getQueue());
    });
  }
}
