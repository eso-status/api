import { RawEsoStatus } from '@eso-status/types';
import * as moment from 'moment/moment';

import { Slug } from '../../resource/slug/entities/slug.entity';

export const slugData: Slug[] = [
  {
    id: 1,
    slug: 'server_xbox_na',
    typeId: 1,
    supportId: 6,
    zoneId: 2,
    type: { id: 1, type: 'server' },
    support: { id: 6, support: 'xbox' },
    zone: { id: 2, zone: 'na' },
    service: {
      id: 1,
      slugId: 1,
      statusId: 2,
      typeId: 1,
      supportId: 6,
      zoneId: 2,
      rawData: JSON.stringify(<RawEsoStatus>{
        sources: ['https://live-services.elderscrollsonline.com/status/realms'],
        raw: ['The Elder Scrolls Online (XBox - US)', 'DOWN'],
        slugs: ['server_xbox_na'],
        support: 'xbox',
        zone: 'na',
        status: 'down',
        rawSlug: 'The Elder Scrolls Online (XBox - US)',
        rawStatus: 'DOWN',
      }),
    },
  },
  {
    id: 2,
    slug: 'server_xbox_eu',
    typeId: 1,
    supportId: 6,
    zoneId: 1,
    type: { id: 1, type: 'server' },
    support: { id: 6, support: 'xbox' },
    zone: { id: 1, zone: 'eu' },
    service: {
      id: 2,
      slugId: 2,
      statusId: 2,
      typeId: 1,
      supportId: 6,
      zoneId: 1,
      rawData: JSON.stringify(<RawEsoStatus>{
        sources: ['https://live-services.elderscrollsonline.com/status/realms'],
        raw: ['The Elder Scrolls Online (XBox - EU)', 'DOWN'],
        slugs: ['server_xbox_eu'],
        support: 'xbox',
        zone: 'eu',
        status: 'down',
        rawSlug: 'The Elder Scrolls Online (XBox - EU)',
        rawStatus: 'DOWN',
      }),
    },
  },
  {
    id: 3,
    slug: 'server_ps_na',
    typeId: 1,
    supportId: 5,
    zoneId: 2,
    type: { id: 1, type: 'server' },
    support: { id: 5, support: 'ps' },
    zone: { id: 2, zone: 'na' },
    service: {
      id: 3,
      slugId: 3,
      statusId: 2,
      typeId: 1,
      supportId: 5,
      zoneId: 2,
      rawData: JSON.stringify(<RawEsoStatus>{
        sources: ['https://live-services.elderscrollsonline.com/status/realms'],
        raw: ['The Elder Scrolls Online (PS4 - US)', 'DOWN'],
        slugs: ['server_ps_na'],
        support: 'ps',
        zone: 'na',
        status: 'down',
        rawSlug: 'The Elder Scrolls Online (PS4 - US)',
        rawStatus: 'DOWN',
      }),
    },
  },
  {
    id: 4,
    slug: 'server_ps_eu',
    typeId: 1,
    supportId: 5,
    zoneId: 1,
    type: { id: 1, type: 'server' },
    support: { id: 5, support: 'ps' },
    zone: { id: 1, zone: 'eu' },
    service: {
      id: 4,
      slugId: 4,
      statusId: 2,
      typeId: 1,
      supportId: 5,
      zoneId: 1,
      rawData: JSON.stringify(<RawEsoStatus>{
        sources: ['https://live-services.elderscrollsonline.com/status/realms'],
        raw: ['The Elder Scrolls Online (PS4 - EU)', 'DOWN'],
        slugs: ['server_ps_eu'],
        support: 'ps',
        zone: 'eu',
        status: 'down',
        rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
        rawStatus: 'DOWN',
      }),
    },
  },
  {
    id: 5,
    slug: 'server_pc_na',
    typeId: 1,
    supportId: 4,
    zoneId: 2,
    type: { id: 1, type: 'server' },
    support: { id: 4, support: 'pc' },
    zone: { id: 2, zone: 'na' },
    service: {
      id: 5,
      slugId: 5,
      statusId: 2,
      typeId: 1,
      supportId: 4,
      zoneId: 2,
      rawData: JSON.stringify(<RawEsoStatus>{
        sources: ['https://live-services.elderscrollsonline.com/status/realms'],
        raw: ['The Elder Scrolls Online (NA)', 'DOWN'],
        slugs: ['server_pc_na'],
        support: 'pc',
        zone: 'na',
        status: 'down',
        rawSlug: 'The Elder Scrolls Online (NA)',
        rawStatus: 'DOWN',
      }),
    },
  },
  {
    id: 6,
    slug: 'server_pc_eu',
    typeId: 1,
    supportId: 4,
    zoneId: 1,
    type: { id: 1, type: 'server' },
    support: { id: 4, support: 'pc' },
    zone: { id: 1, zone: 'eu' },
    service: {
      id: 6,
      slugId: 6,
      statusId: 2,
      typeId: 1,
      supportId: 4,
      zoneId: 1,
      rawData: JSON.stringify(<RawEsoStatus>{
        sources: ['https://live-services.elderscrollsonline.com/status/realms'],
        raw: ['The Elder Scrolls Online (EU)', 'DOWN'],
        slugs: ['server_pc_eu'],
        support: 'pc',
        zone: 'eu',
        status: 'down',
        rawSlug: 'The Elder Scrolls Online (EU)',
        rawStatus: 'DOWN',
      }),
    },
  },
  {
    id: 7,
    slug: 'server_pc_pts',
    typeId: 1,
    supportId: 4,
    zoneId: 3,
    type: { id: 1, type: 'server' },
    support: { id: 4, support: 'pc' },
    zone: { id: 3, zone: 'pts' },
    service: {
      id: 7,
      slugId: 7,
      statusId: 2,
      typeId: 1,
      supportId: 4,
      zoneId: 3,
      rawData: JSON.stringify(<RawEsoStatus>{
        sources: ['https://live-services.elderscrollsonline.com/status/realms'],
        raw: ['The Elder Scrolls Online (PTS)', 'DOWN'],
        slugs: ['server_pc_pts'],
        support: 'pc',
        zone: 'pts',
        status: 'down',
        rawSlug: 'The Elder Scrolls Online (PTS)',
        rawStatus: 'DOWN',
      }),
    },
  },
  {
    id: 8,
    slug: 'service_web_site',
    typeId: 2,
    supportId: 1,
    zoneId: 4,
    type: { id: 2, type: 'service' },
    support: { id: 1, support: 'web' },
    zone: { id: 4, zone: 'site' },
    service: {
      id: 8,
      slugId: 8,
      statusId: 2,
      typeId: 2,
      supportId: 1,
      zoneId: 4,
      rawData: JSON.stringify(<RawEsoStatus>{
        sources: [
          'https://forums.elderscrollsonline.com/,https://forums.elderscrollsonline.com/en/categories/pts',
        ],
        raw: [
          '• [COMPLETE] ESO Website for maintenance – January 26, 3:00PM EST (20:00 UTC) - 8:00PM EST (January 27 - 3:00 UTC)',
        ],
        slugs: ['service_web_site'],
        rawDate:
          'January 26, 3:00PM EST (20:00 UTC) - 8:00PM EST (January 27 - 3:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2023)
            .set('months', 12)
            .set('date', 31)
            .set('hours', 0)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2023)
            .set('months', 12)
            .set('date', 31)
            .set('hours', 0)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        type: 'service',
        support: 'web',
        zone: 'site',
        status: 'up',
      }),
    },
  },
  {
    id: 9,
    slug: 'service_web_forum',
    typeId: 2,
    supportId: 1,
    zoneId: 5,
    type: { id: 2, type: 'service' },
    support: { id: 1, support: 'web' },
    zone: { id: 5, zone: 'forum' },
    service: {
      id: 9,
      slugId: 9,
      statusId: 2,
      typeId: 2,
      supportId: 1,
      zoneId: 5,
      rawData: JSON.stringify(<RawEsoStatus>{
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: ['The ESO Forums are currently available.'],
        slugs: ['service_web_forum'],
        rawDate: '2021.01.03 - 23:00 UTC (18:00 EST)',
        dates: [
          moment()
            .utc()
            .set('years', 2012)
            .set('months', 1)
            .set('date', 3)
            .set('hours', 23)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        type: 'service',
        support: 'web',
        zone: 'forum',
        status: 'up',
      }),
    },
  },
  {
    id: 10,
    slug: 'service_store_crown',
    typeId: 2,
    supportId: 2,
    zoneId: 7,
    type: { id: 2, type: 'service' },
    support: { id: 2, support: 'store' },
    zone: { id: 7, zone: 'crown' },
    service: {
      id: 10,
      slugId: 10,
      statusId: 2,
      typeId: 2,
      supportId: 2,
      zoneId: 7,
      rawData: JSON.stringify(<RawEsoStatus>{
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: ['The Crown Store is currently available.'],
        slugs: ['service_store_crown'],
        rawDate: '2021.01.03 - 23:00 UTC (18:00 EST)',
        dates: [
          moment()
            .utc()
            .set('years', 2012)
            .set('months', 1)
            .set('date', 3)
            .set('hours', 23)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        type: 'service',
        support: 'store',
        zone: 'crown',
        status: 'up',
      }),
    },
  },
  {
    id: 11,
    slug: 'service_store_eso',
    typeId: 2,
    supportId: 2,
    zoneId: 6,
    type: { id: 2, type: 'service' },
    support: { id: 2, support: 'store' },
    zone: { id: 6, zone: 'eso' },
    service: {
      id: 11,
      slugId: 11,
      statusId: 2,
      typeId: 2,
      supportId: 2,
      zoneId: 6,
      rawData: JSON.stringify(<RawEsoStatus>{
        sources: [
          'https://forums.elderscrollsonline.com/,https://forums.elderscrollsonline.com/en/categories/pts',
        ],
        raw: [
          '• [COMPLETE] ESO Store and Account System for maintenance – June 22, 8:00AM EDT (12:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['service_store_eso'],
        rawDate: 'June 22, 8:00AM EDT (12:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2023)
            .set('months', 6)
            .set('date', 22)
            .set('hours', 12)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2023)
            .set('months', 6)
            .set('date', 22)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        type: 'service',
        support: 'store',
        zone: 'eso',
        status: 'up',
      }),
    },
  },
  {
    id: 12,
    slug: 'service_system_account',
    typeId: 2,
    supportId: 3,
    zoneId: 8,
    type: { id: 2, type: 'service' },
    support: { id: 3, support: 'system' },
    zone: { id: 8, zone: 'account' },
    service: {
      id: 12,
      slugId: 12,
      statusId: 2,
      typeId: 2,
      supportId: 3,
      zoneId: 8,
      rawData: JSON.stringify(<RawEsoStatus>{
        sources: [
          'https://forums.elderscrollsonline.com/,https://forums.elderscrollsonline.com/en/categories/pts',
        ],
        raw: [
          '• [COMPLETE] ESO Store and Account System for maintenance – June 22, 8:00AM EDT (12:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['service_system_account'],
        rawDate: 'June 22, 8:00AM EDT (12:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2023)
            .set('months', 6)
            .set('date', 22)
            .set('hours', 12)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2023)
            .set('months', 6)
            .set('date', 22)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
        type: 'service',
        support: 'system',
        zone: 'account',
        status: 'up',
      }),
    },
  },
];
