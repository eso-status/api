import { EsoStatus, RawEsoStatus } from '@eso-status/types';
import { Injectable } from '@nestjs/common';

import { UpdateService } from '../../service/update/update.service';

@Injectable()
export class Scraper {
  constructor(private readonly updateService: UpdateService) {}

  public formatData(rawEsoStatusList: RawEsoStatus[]): EsoStatus[] {
    return rawEsoStatusList.map(
      (rawEsoStatus: RawEsoStatus): EsoStatus => ({
        slug: rawEsoStatus.slugs[0],
        status: rawEsoStatus.status,
        type: rawEsoStatus.type ?? 'server',
        support: rawEsoStatus.support,
        zone: rawEsoStatus.zone,
        raw: rawEsoStatus,
      }),
    );
  }

  public async scrap(rawEsoStatusList: RawEsoStatus[]) {
    await Promise.all(
      this.formatData(rawEsoStatusList).map(
        (esoStatus: EsoStatus): Promise<void> => {
          return this.updateService.update(esoStatus);
        },
      ),
    );
  }
}
