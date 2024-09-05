import { EsoStatusRawData } from '@eso-status/types';
import * as moment from 'moment';

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
      statusId: 1,
      typeId: 1,
      supportId: 6,
      zoneId: 2,
      rawData: JSON.stringify(<EsoStatusRawData>{
        source: 'https://live-services.elderscrollsonline.com/status/realms',
        raw: 'The Elder Scrolls Online (XBox - US) UP',
        rawSlug: 'The Elder Scrolls Online (XBox - US)',
        rawStatus: 'UP',
        slug: 'server_xbox_na',
        support: 'xbox',
        zone: 'na',
        status: 'up',
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
      statusId: 1,
      typeId: 1,
      supportId: 6,
      zoneId: 1,
      rawData: JSON.stringify(<EsoStatusRawData>{
        source: 'https://live-services.elderscrollsonline.com/status/realms',
        raw: 'The Elder Scrolls Online (XBox - EU) UP',
        rawSlug: 'The Elder Scrolls Online (XBox - EU)',
        rawStatus: 'UP',
        slug: 'server_xbox_eu',
        support: 'xbox',
        zone: 'eu',
        status: 'up',
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
      statusId: 1,
      typeId: 1,
      supportId: 5,
      zoneId: 2,
      rawData: JSON.stringify(<EsoStatusRawData>{
        source: 'https://live-services.elderscrollsonline.com/status/realms',
        raw: 'The Elder Scrolls Online (PS4 - US) UP',
        rawSlug: 'The Elder Scrolls Online (PS4 - US)',
        rawStatus: 'UP',
        slug: 'server_ps_na',
        support: 'ps',
        zone: 'na',
        status: 'up',
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
      statusId: 1,
      typeId: 1,
      supportId: 5,
      zoneId: 1,
      rawData: JSON.stringify(<EsoStatusRawData>{
        source: 'https://live-services.elderscrollsonline.com/status/realms',
        raw: 'The Elder Scrolls Online (PS4 - EU) UP',
        rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
        rawStatus: 'UP',
        slug: 'server_ps_eu',
        support: 'ps',
        zone: 'eu',
        status: 'up',
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
      statusId: 1,
      typeId: 1,
      supportId: 4,
      zoneId: 2,
      rawData: JSON.stringify(<EsoStatusRawData>{
        source: 'https://live-services.elderscrollsonline.com/status/realms',
        raw: 'The Elder Scrolls Online (NA) UP',
        rawSlug: 'The Elder Scrolls Online (NA)',
        rawStatus: 'UP',
        slug: 'server_pc_na',
        support: 'pc',
        zone: 'na',
        status: 'up',
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
      statusId: 1,
      typeId: 1,
      supportId: 4,
      zoneId: 1,
      rawData: JSON.stringify(<EsoStatusRawData>{
        source: 'https://live-services.elderscrollsonline.com/status/realms',
        raw: 'The Elder Scrolls Online (EU) UP',
        rawSlug: 'The Elder Scrolls Online (EU)',
        rawStatus: 'UP',
        slug: 'server_pc_eu',
        support: 'pc',
        zone: 'eu',
        status: 'up',
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
      statusId: 1,
      typeId: 1,
      supportId: 4,
      zoneId: 3,
      rawData: JSON.stringify(<EsoStatusRawData>{
        source: 'https://live-services.elderscrollsonline.com/status/realms',
        raw: 'The Elder Scrolls Online (PTS) UP',
        rawSlug: 'The Elder Scrolls Online (PTS)',
        rawStatus: 'UP',
        slug: 'server_pc_pts',
        support: 'pc',
        zone: 'pts',
        status: 'up',
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
      statusId: 1,
      typeId: 2,
      supportId: 1,
      zoneId: 4,
      rawData: JSON.stringify(<EsoStatusRawData>{
        source:
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        raw: ' />\n<p>2021.01.14 - 14:45 UTC (9:45 EST)</p>\n\n<p>The ESO Website is currently online.</p>\n\n',
        rawDate: ' />2021.01.14 - 14:45 UTC (9:45 EST)',
        slug: 'service_web_site',
        dates: [
          moment()
            .utc()
            .set('years', 2021)
            .set('months', 1)
            .set('date', 14)
            .set('hours', 14)
            .set('minutes', 45)
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
      statusId: 1,
      typeId: 2,
      supportId: 1,
      zoneId: 5,
      rawData: JSON.stringify(<EsoStatusRawData>{
        source:
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        raw: ' />\n<p>2021.01.03 - 23:00 UTC (18:00 EST)</p>\n\n<p>The ESO Forums are currently available.</p>\n\n',
        rawDate: ' />2021.01.03 - 23:00 UTC (18:00 EST)',
        slug: 'service_web_forum',
        dates: [
          moment()
            .utc()
            .set('years', 2021)
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
      statusId: 1,
      typeId: 2,
      supportId: 2,
      zoneId: 7,
      rawData: JSON.stringify(<EsoStatusRawData>{
        source:
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        raw: ' />\n<p>2021.01.03 - 23:00 UTC (18:00 EST)</p>\n\n<p>The Crown Store is currently available.</p>\n\n',
        rawDate: ' />2021.01.03 - 23:00 UTC (18:00 EST)',
        slug: 'service_store_crown',
        dates: [
          moment()
            .utc()
            .set('years', 2021)
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
      statusId: 1,
      typeId: 2,
      supportId: 2,
      zoneId: 6,
      rawData: JSON.stringify(<EsoStatusRawData>{
        source:
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        raw: ' />\n<p>2024.07.01 - 12:00 UTC (08:00 EDT)</p>\n\n<p>The North American megaservers are currently available.</p>\n\n<p>The ESO store and account system are currently available.</p>\n\n',
        rawDate: ' />2024.07.01 - 12:00 UTC (08:00 EDT)',
        slug: 'service_store_eso',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7)
            .set('date', 1)
            .set('hours', 12)
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
      statusId: 1,
      typeId: 2,
      supportId: 3,
      zoneId: 8,
      rawData: JSON.stringify(<EsoStatusRawData>{
        source:
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        raw: ' />\n<p>2024.07.01 - 12:00 UTC (08:00 EDT)</p>\n\n<p>The North American megaservers are currently available.</p>\n\n<p>The ESO store and account system are currently available.</p>\n\n',
        rawDate: ' />2024.07.01 - 12:00 UTC (08:00 EDT)',
        slug: 'service_system_account',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 7)
            .set('date', 1)
            .set('hours', 12)
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
