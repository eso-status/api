import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { config } from 'dotenv';
import { LiveServices } from '@eso-status/live-services';
import { RawEsoStatus } from '@eso-status/types';
import { Scraper } from '../../class/scraper/scraper';

config();

@Injectable()
export class LiveServicesService {
  constructor(public readonly scraper: Scraper) {}

  public async getRawData(): Promise<RawEsoStatus[]> {
    return await LiveServices.getData();
  }

  @Interval(Number(process.env.LIVE_SERVICES_UPDATE_INTERVAL))
  public async handleInterval() {
    await this.scraper.scrap(await this.getRawData());
  }
}
