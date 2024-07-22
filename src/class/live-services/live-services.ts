import { LiveServices as LiveServicesEsoStatus } from '@eso-status/live-services';
import { RawEsoStatus } from '@eso-status/types';
import { Injectable } from '@nestjs/common';

import { Scraper } from '../scraper/scraper';

@Injectable()
export class LiveServices extends Scraper {
  public async getRawData(): Promise<RawEsoStatus[]> {
    return LiveServicesEsoStatus.getData();
  }
}
