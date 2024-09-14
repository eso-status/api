import { EsoStatusRawData, Slug, Status } from '@eso-status/types';

import { Moment } from 'moment';

import { EsoStatusRawData as CustomEsoStatusRawData } from '../../src/interface/esoStatusRawData.interface';

export default class Helper {
  public static generateCustomRaw(
    raw: EsoStatusRawData,
  ): CustomEsoStatusRawData {
    const customRaw: CustomEsoStatusRawData = <CustomEsoStatusRawData>{
      source: raw.source,
      raw: raw.raw,
      status: raw.status,
    };

    if (raw.rawStatus) {
      customRaw.rawStatus = raw.rawStatus;
    }

    customRaw.slug = raw.slug;
    customRaw.rawSlug = raw.rawSlug;
    customRaw.type = raw.type;
    customRaw.support = raw.support;
    customRaw.zone = raw.zone;

    if (raw.dates) {
      customRaw.dates = raw.dates.map((date: Moment): string =>
        date.toISOString(),
      );
      customRaw.rawDate = raw.rawDate;
    }

    return customRaw;
  }

  public static getSlugByServiceId(serviceId: number): Slug {
    switch (serviceId) {
      case 1:
        return 'server_xbox_na';
      case 2:
        return 'server_xbox_eu';
      case 3:
        return 'server_ps_na';
      case 4:
        return 'server_ps_eu';
      case 5:
        return 'server_pc_na';
      case 6:
        return 'server_pc_eu';
      case 7:
        return 'server_pc_pts';
      case 11:
        return 'service_store_eso';
      default:
        return 'service_system_account';
    }
  }

  public static getServiceId(slug: Slug): number {
    switch (slug) {
      case 'server_xbox_na':
        return 1;
      case 'server_xbox_eu':
        return 2;
      case 'server_ps_na':
        return 3;
      case 'server_ps_eu':
        return 4;
      case 'server_pc_na':
        return 5;
      case 'server_pc_eu':
        return 6;
      case 'server_pc_pts':
        return 7;
      case 'service_store_eso':
        return 11;
      default:
        return 12;
    }
  }

  public static getStatusId(status: Status): number {
    switch (status) {
      case 'up':
        return 1;
      case 'down':
        return 2;
      case 'issues':
        return 3;
      default:
        return 4;
    }
  }

  public static getTypeId(slug: Slug): number {
    switch (slug) {
      case 'server_xbox_na':
        return 1;
      case 'server_xbox_eu':
        return 1;
      case 'server_ps_na':
        return 1;
      case 'server_ps_eu':
        return 1;
      case 'server_pc_na':
        return 1;
      case 'server_pc_eu':
        return 1;
      case 'server_pc_pts':
        return 1;
      case 'service_store_eso':
        return 2;
      default:
        return 2;
    }
  }

  public static getSupportId(slug: Slug): number {
    switch (slug) {
      case 'server_xbox_na':
        return 6;
      case 'server_xbox_eu':
        return 6;
      case 'server_ps_na':
        return 5;
      case 'server_ps_eu':
        return 5;
      case 'server_pc_na':
        return 4;
      case 'server_pc_eu':
        return 4;
      case 'server_pc_pts':
        return 4;
      case 'service_store_eso':
        return 2;
      default:
        return 3;
    }
  }

  public static getZoneId(slug: Slug): number {
    switch (slug) {
      case 'server_xbox_na':
        return 2;
      case 'server_xbox_eu':
        return 1;
      case 'server_ps_na':
        return 2;
      case 'server_ps_eu':
        return 1;
      case 'server_pc_na':
        return 2;
      case 'server_pc_eu':
        return 1;
      case 'server_pc_pts':
        return 3;
      case 'service_store_eso':
        return 6;
      default:
        return 8;
    }
  }
}
