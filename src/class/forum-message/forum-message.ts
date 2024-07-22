import { ForumMessage as ForumMessageEsoStatus } from '@eso-status/forum-message';
import { RawEsoStatus } from '@eso-status/types';
import { Injectable } from '@nestjs/common';

import { Scraper } from '../scraper/scraper';

@Injectable()
export class ForumMessage extends Scraper {
  public async getRawData(): Promise<RawEsoStatus[]> {
    return ForumMessageEsoStatus.getData();
  }
}
