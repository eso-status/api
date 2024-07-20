import { EsoStatus, RawEsoStatus, Slug } from '@eso-status/types';
import { UpdateService } from '../../service/update/update.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Scraper {
  constructor(private readonly updateService: UpdateService) {}

  public formatData(rawEsoStatusList: RawEsoStatus[]): EsoStatus[] {
    return rawEsoStatusList.map(
      (rawEsoStatus: RawEsoStatus): EsoStatus => ({
        slug: <Slug>(rawEsoStatus.slugs ? rawEsoStatus.slugs[0] : ''),
        status: rawEsoStatus.status,
        type: rawEsoStatus.type ?? 'server',
        support: rawEsoStatus.support,
        zone: rawEsoStatus.zone,
        raw: rawEsoStatus,
      }),
    );
  }

  public async scrap(rawEsoStatusList: RawEsoStatus[]) {
    this.formatData(rawEsoStatusList).forEach((esoStatus: EsoStatus): void => {
      this.updateService.update(esoStatus);
    });
  }
}
