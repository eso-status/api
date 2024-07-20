import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { config } from 'dotenv';
import { RawEsoStatus } from '@eso-status/types';
import { ForumMessage } from '@eso-status/forum-message';
import { Scraper } from '../../class/scraper/scraper';

config();

@Injectable()
export class ForumMessageService {
  constructor(public readonly scraper: Scraper) {}

  public async getRawData(): Promise<RawEsoStatus[]> {
    return await ForumMessage.getData();
  }

  @Interval(Number(process.env.FORUM_MESSAGE_UPDATE_INTERVAL))
  public async handleInterval() {
    await this.scraper.scrap(await this.getRawData());
  }
}