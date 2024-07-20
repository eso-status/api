import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { config } from 'dotenv';
import { UpdateService } from '../update/update.service';
import { EsoStatus, RawEsoStatus, Slug } from '@eso-status/types';
import { ForumMessage } from '@eso-status/forum-message';

config();

@Injectable()
export class ForumMessageService {
  constructor(private readonly updateService: UpdateService) {}

  public async getRawData(): Promise<RawEsoStatus[]> {
    return await ForumMessage.getData();
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

  @Interval(Number(process.env.FORUM_MESSAGE_UPDATE_INTERVAL))
  public async handleInterval() {
    (await this.getData()).forEach((esoStatus: EsoStatus): void => {
      this.updateService.update(esoStatus);
    });
  }
}
