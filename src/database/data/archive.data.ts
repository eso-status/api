import { RawEsoStatus } from '@eso-status/types';
import * as moment from 'moment';

import { Archive } from '../../resource/archive/entities/archive.entity';

export const archiveData: Archive[] = [
  {
    id: 1,
    connector: 'ForumMessage',
    serviceId: 1,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://forums.elderscrollsonline.com/,https://forums.elderscrollsonline.com/en/categories/pts',
      ],
      raw: [
        '• [IN PROGRESS] Xbox: NA megaserver for maintenance – August 3, 5:00PM EDT (21:00 UTC) - 7:00PM EDT (23:00 UTC)',
      ],
      slugs: ['server_xbox_na'],
      rawDate: 'August 3, 5:00PM EDT (21:00 UTC) - 7:00PM EDT (23:00 UTC)',
      dates: [
        moment()
          .utc()
          .set('years', 2023)
          .set('months', 8)
          .set('date', 3)
          .set('hours', 21)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
        moment()
          .utc()
          .set('years', 2023)
          .set('months', 8)
          .set('date', 3)
          .set('hours', 23)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'server',
      support: 'xbox',
      zone: 'na',
      status: 'down',
    }),
  },
  {
    id: 2,
    connector: 'LiveServices',
    serviceId: 1,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://live-services.elderscrollsonline.com/status/realms'],
      raw: ['The Elder Scrolls Online (XBox - US)', 'DOWN'],
      rawSlug: 'The Elder Scrolls Online (XBox - US)',
      rawStatus: 'DOWN',
      slugs: ['server_xbox_na'],
      support: 'xbox',
      zone: 'na',
      status: 'down',
    }),
  },
  {
    id: 3,
    connector: 'ServiceAlerts',
    serviceId: 1,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
      raw: [
        'The North American Xbox megaserver is currently unavailable while we perform maintenance. ',
      ],
      slugs: ['server_xbox_na'],
      rawDate: '2021.07.08 - 10:00 UTC (6:00 EDT)',
      dates: [
        moment()
          .utc()
          .set('years', 2021)
          .set('months', 7)
          .set('date', 8)
          .set('hours', 10)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'server',
      support: 'xbox',
      zone: 'na',
      status: 'down',
    }),
  },
  {
    id: 4,
    connector: 'ForumMessage',
    serviceId: 2,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://forums.elderscrollsonline.com/,https://forums.elderscrollsonline.com/en/categories/pts',
      ],
      raw: [
        '• [IN PROGRESS] Xbox: EU megaserver for maintenance – February 16 , 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
      ],
      slugs: ['server_xbox_eu'],
      rawDate: 'February 16 , 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
      dates: [
        moment()
          .utc()
          .set('years', 2024)
          .set('months', 2)
          .set('date', 16)
          .set('hours', 11)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', 2024)
          .set('months', 2)
          .set('date', 16)
          .set('hours', 15)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
      type: 'server',
      support: 'xbox',
      zone: 'eu',
      status: 'down',
    }),
  },
  {
    id: 5,
    connector: 'LiveServices',
    serviceId: 2,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://live-services.elderscrollsonline.com/status/realms'],
      raw: ['The Elder Scrolls Online (XBox - EU)', 'DOWN'],
      rawSlug: 'The Elder Scrolls Online (XBox - EU)',
      rawStatus: 'DOWN',
      slugs: ['server_xbox_eu'],
      support: 'xbox',
      zone: 'eu',
      status: 'down',
    }),
  },
  {
    id: 6,
    connector: 'ServiceAlerts',
    serviceId: 2,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
      raw: [
        'The European Xbox megaserver is currently unavailable while we perform maintenance.',
      ],
      slugs: ['server_xbox_na'],
      rawDate: '2021.07.08 - 10:00 UTC (6:00 EDT)',
      dates: [
        moment()
          .utc()
          .set('years', 2021)
          .set('months', 7)
          .set('date', 8)
          .set('hours', 10)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'server',
      support: 'xbox',
      zone: 'eu',
      status: 'down',
    }),
  },
  {
    id: 7,
    connector: 'ForumMessage',
    serviceId: 3,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://forums.elderscrollsonline.com/,https://forums.elderscrollsonline.com/en/categories/pts',
      ],
      raw: [
        '• [IN PROGRESS] PlayStation®: NA megaserver for maintenance – January 19, 2:00AM EST (7:00 UTC) – 12:00PM EST (17:00 UTC)',
      ],
      slugs: ['server_ps_na'],
      rawDate: 'January 19, 2:00AM EST (7:00 UTC) – 12:00PM EST (17:00 UTC)',
      dates: [
        moment()
          .utc()
          .set('years', 2024)
          .set('months', 1)
          .set('date', 19)
          .set('hours', 7)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', 2024)
          .set('months', 1)
          .set('date', 19)
          .set('hours', 17)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
      type: 'server',
      support: 'ps',
      zone: 'na',
      status: 'down',
    }),
  },
  {
    id: 8,
    connector: 'LiveServices',
    serviceId: 3,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://live-services.elderscrollsonline.com/status/realms'],
      raw: ['The Elder Scrolls Online (PS4 - US)', 'DOWN'],
      rawSlug: 'The Elder Scrolls Online (PS4 - US)',
      rawStatus: 'DOWN',
      slugs: ['server_ps_na'],
      support: 'ps',
      zone: 'na',
      status: 'down',
    }),
  },
  {
    id: 9,
    connector: 'ServiceAlerts',
    serviceId: 3,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
      raw: [
        'The North American PlayStation® megaserver is currently unavailable while we perform maintenance. ',
      ],
      slugs: ['server_ps_na'],
      rawDate: '2021.07.08 - 10:00 UTC (6:00 EDT)',
      dates: [
        moment()
          .utc()
          .set('years', 2021)
          .set('months', 7)
          .set('date', 8)
          .set('hours', 10)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'server',
      support: 'ps',
      zone: 'na',
      status: 'down',
    }),
  },
  {
    id: 10,
    connector: 'ForumMessage',
    serviceId: 4,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://forums.elderscrollsonline.com/,https://forums.elderscrollsonline.com/en/categories/pts',
      ],
      raw: [
        '• [IN PROGRESS] PlayStation®: EU megaserver for maintenance – January 19, 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
      ],
      slugs: ['server_ps_eu'],
      rawDate: 'January 19, 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
      dates: [
        moment()
          .utc()
          .set('years', 2024)
          .set('months', 1)
          .set('date', 19)
          .set('hours', 11)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', 2024)
          .set('months', 1)
          .set('date', 19)
          .set('hours', 15)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
      type: 'server',
      support: 'ps',
      zone: 'eu',
      status: 'down',
    }),
  },
  {
    id: 11,
    connector: 'LiveServices',
    serviceId: 4,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://live-services.elderscrollsonline.com/status/realms'],
      raw: ['The Elder Scrolls Online (PS4 - EU)', 'DOWN'],
      rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
      rawStatus: 'DOWN',
      slugs: ['server_ps_eu'],
      support: 'ps',
      zone: 'eu',
      status: 'down',
    }),
  },
  {
    id: 12,
    connector: 'ServiceAlerts',
    serviceId: 4,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
      raw: [
        'The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
      ],
      slugs: ['server_ps_na'],
      rawDate: '2021.07.08 - 10:00 UTC (6:00 EDT)',
      dates: [
        moment()
          .utc()
          .set('years', 2021)
          .set('months', 7)
          .set('date', 8)
          .set('hours', 10)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'server',
      support: 'ps',
      zone: 'eu',
      status: 'down',
    }),
  },
  {
    id: 13,
    connector: 'ForumMessage',
    serviceId: 5,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://forums.elderscrollsonline.com/,https://forums.elderscrollsonline.com/en/categories/pts',
      ],
      raw: [
        '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
      ],
      slugs: ['server_pc_na', 'server_pc_eu'],
      rawDate: 'July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
      dates: [
        moment()
          .utc()
          .set('years', 2024)
          .set('months', 7)
          .set('date', 26)
          .set('hours', 8)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
        moment()
          .utc()
          .set('years', 2024)
          .set('months', 7)
          .set('date', 26)
          .set('hours', 12)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'server',
      support: 'pc',
      zone: 'na',
      status: 'down',
    }),
  },
  {
    id: 14,
    connector: 'LiveServices',
    serviceId: 5,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://live-services.elderscrollsonline.com/status/realms'],
      raw: ['The Elder Scrolls Online (NA)', 'DOWN'],
      rawSlug: 'The Elder Scrolls Online (NA)',
      rawStatus: 'DOWN',
      slugs: ['server_pc_na'],
      support: 'pc',
      zone: 'na',
      status: 'down',
    }),
  },
  {
    id: 15,
    connector: 'ServiceAlerts',
    serviceId: 5,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
      raw: [
        'The North American PC/Mac megaserver is currently unavailable while we perform maintenance.',
      ],
      slugs: ['server_pc_na'],
      rawDate: '2021.07.12 - 8:00 UTC (4:00 EDT)',
      dates: [
        moment()
          .utc()
          .set('years', 2021)
          .set('months', 7)
          .set('date', 12)
          .set('hours', 8)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'server',
      support: 'pc',
      zone: 'na',
      status: 'down',
    }),
  },
  {
    id: 16,
    connector: 'ForumMessage',
    serviceId: 6,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://forums.elderscrollsonline.com/,https://forums.elderscrollsonline.com/en/categories/pts',
      ],
      raw: [
        '• [IN PROGRESS] PC/Mac: EU megaserver for maintenance – September 14, 3:00AM EDT (7:00 UTC) – 10:00AM EDT (14:00 UTC)',
      ],
      slugs: ['server_pc_eu'],
      rawDate: 'September 14, 3:00AM EDT (7:00 UTC) – 10:00AM EDT (14:00 UTC)',
      dates: [
        moment()
          .utc()
          .set('years', 2023)
          .set('months', 9)
          .set('date', 14)
          .set('hours', 7)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', 2023)
          .set('months', 9)
          .set('date', 14)
          .set('hours', 14)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
      type: 'server',
      support: 'pc',
      zone: 'eu',
      status: 'down',
    }),
  },
  {
    id: 17,
    connector: 'LiveServices',
    serviceId: 6,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://live-services.elderscrollsonline.com/status/realms'],
      raw: ['The Elder Scrolls Online (EU)', 'DOWN'],
      rawSlug: 'The Elder Scrolls Online (EU)',
      rawStatus: 'DOWN',
      slugs: ['server_pc_eu'],
      support: 'pc',
      zone: 'eu',
      status: 'down',
    }),
  },
  {
    id: 18,
    connector: 'ServiceAlerts',
    serviceId: 6,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
      raw: [
        'The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
      ],
      slugs: ['server_pc_eu'],
      rawDate: '2021.07.12 - 8:00 UTC (4:00 EDT)',
      dates: [
        moment()
          .utc()
          .set('years', 2021)
          .set('months', 7)
          .set('date', 12)
          .set('hours', 8)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'server',
      support: 'pc',
      zone: 'eu',
      status: 'down',
    }),
  },
  {
    id: 19,
    connector: 'ForumMessage',
    serviceId: 7,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
      raw: [
        'The PTS is now offline for the patch 7.1.1 maintenance and is currently unavailable. ',
      ],
      slugs: ['server_pc_pts'],
      rawDate: '',
      dates: [],
      type: 'server',
      support: 'pc',
      zone: 'pts',
      status: 'down',
    }),
  },
  {
    id: 20,
    connector: 'LiveServices',
    serviceId: 7,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://live-services.elderscrollsonline.com/status/realms'],
      raw: ['The Elder Scrolls Online (PTS)', 'DOWN'],
      rawSlug: 'The Elder Scrolls Online (PTS)',
      rawStatus: 'DOWN',
      slugs: ['server_pc_pts'],
      support: 'pc',
      zone: 'pts',
      status: 'down',
    }),
  },
  {
    id: 21,
    connector: 'ServiceAlerts',
    serviceId: 7,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
      raw: ['The PTS is currently unavailable while we perform maintenance.'],
      slugs: ['server_pc_pts'],
      rawDate: '2021.07.12 - 6:00 UTC (2:00 EDT)',
      dates: [
        moment()
          .utc()
          .set('years', 2021)
          .set('months', 7)
          .set('date', 12)
          .set('hours', 6)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'server',
      support: 'pc',
      zone: 'pts',
      status: 'down',
    }),
  },
  {
    id: 22,
    connector: 'ForumMessage',
    serviceId: 8,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://forums.elderscrollsonline.com/,https://forums.elderscrollsonline.com/en/categories/pts',
      ],
      raw: [
        '• [IN PROGRESS] ESO Website for maintenance – December 8, 7:00AM EST (12:00 UTC) - 3:00PM EST (20:00 UTC)',
      ],
      slugs: ['service_web_site'],
      rawDate: 'December 8, 7:00AM EST (12:00 UTC) - 3:00PM EST (20:00 UTC)',
      dates: [
        moment()
          .utc()
          .set('years', 2023)
          .set('months', 12)
          .set('date', 8)
          .set('hours', 12)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', 2023)
          .set('months', 12)
          .set('date', 8)
          .set('hours', 20)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
      type: 'service',
      support: 'web',
      zone: 'site',
      status: 'down',
    }),
  },
  {
    id: 23,
    connector: 'ServiceAlerts',
    serviceId: 8,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
      raw: [
        'The ESO Website is currently unavailable while we perform maintenance.',
      ],
      slugs: ['service_web_site'],
      rawDate: '2021.01.14 - 12:00 UTC (7:00 EST)',
      dates: [
        moment()
          .utc()
          .set('years', 2021)
          .set('months', 1)
          .set('date', 14)
          .set('hours', 12)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'service',
      support: 'web',
      zone: 'site',
      status: 'down',
    }),
  },
  {
    id: 24,
    connector: 'ServiceAlerts',
    serviceId: 9,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
      raw: ['The ESO Forums are currently unavailable.'],
      slugs: ['service_web_forum'],
      rawDate: '2021.01.03 - 23:00 UTC (18:00 EST)',
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
      status: 'down',
    }),
  },
  {
    id: 25,
    connector: 'ServiceAlerts',
    serviceId: 10,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
      raw: ['The Crown Store is currently unavailable.'],
      slugs: ['service_store_crown'],
      rawDate: '2021.01.03 - 23:00 UTC (18:00 EST)',
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
      status: 'down',
    }),
  },
  {
    id: 26,
    connector: 'ForumMessage',
    serviceId: 11,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://forums.elderscrollsonline.com/,https://forums.elderscrollsonline.com/en/categories/pts',
      ],
      raw: [
        '• [IN PROGRESS] ESO Store for maintenance – January 27, 2:30PM EST (19:30 UTC) – 3:30PM EST (20:30 UTC)',
      ],
      slugs: ['service_store_eso'],
      rawDate: 'January 27, 2:30PM EST (19:30 UTC) – 3:30PM EST (20:30 UTC)',
      dates: [
        moment()
          .utc()
          .set('years', 2024)
          .set('months', 1)
          .set('date', 27)
          .set('hours', 19)
          .set('minutes', 30)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', 2024)
          .set('months', 1)
          .set('date', 27)
          .set('hours', 20)
          .set('minutes', 30)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
      type: 'service',
      support: 'store',
      zone: 'eso',
      status: 'down',
    }),
  },
  {
    id: 27,
    connector: 'ServiceAlerts',
    serviceId: 11,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
      raw: [
        'The ESO store is currently unavailable while we perform maintenance.',
      ],
      slugs: ['service_store_eso'],
      rawDate: '2022.01.27 - 19:30 UTC (14:30 EST)',
      dates: [
        moment()
          .utc()
          .set('years', 2022)
          .set('months', 1)
          .set('date', 27)
          .set('hours', 19)
          .set('minutes', 30)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'service',
      support: 'store',
      zone: 'eso',
      status: 'down',
    }),
  },
  {
    id: 28,
    connector: 'ForumMessage',
    serviceId: 12,
    statusId: 2,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://forums.elderscrollsonline.com/,https://forums.elderscrollsonline.com/en/categories/pts',
      ],
      raw: [
        '• [IN PROGRESS] ESO Store and Account System for maintenance – July 23, 8:00AM EDT (12:00 UTC) – 12:00PM EDT (16:00 UTC)',
      ],
      slugs: ['service_store_eso', 'service_system_account'],
      rawDate: 'July 23, 8:00AM EDT (12:00 UTC) – 12:00PM EDT (16:00 UTC)',
      dates: [
        moment()
          .utc()
          .set('years', 2024)
          .set('months', 7)
          .set('date', 23)
          .set('hours', 12)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
        moment()
          .utc()
          .set('years', 2024)
          .set('months', 7)
          .set('date', 23)
          .set('hours', 16)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'service',
      support: 'system',
      zone: 'account',
      status: 'down',
    }),
  },
  {
    id: 29,
    connector: 'ServiceAlerts',
    serviceId: 12,
    statusId: 2,

    rawData: JSON.stringify(<RawEsoStatus>{
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
      raw: [
        'The ESO store and account system are currently unavailable while we perform maintenance.',
      ],
      slugs: ['service_store_eso', 'service_system_account'],
      rawDate: '2021.07.13 - 12:00 UTC (8:00 EDT)',
      dates: [
        moment()
          .utc()
          .set('years', 2021)
          .set('months', 7)
          .set('date', 13)
          .set('hours', 12)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'service',
      support: 'system',
      zone: 'account',
      status: 'down',
    }),
  },
];
