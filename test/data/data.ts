import { EsoStatus, RawEsoStatus } from '@eso-status/types';
import * as moment from 'moment/moment';
import { MaintenanceEsoStatus as CustomMaintenanceEsoStatus } from 'src/interface/maintenanceEsoStatus.interface';

export const LiveServicesPcEuUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (EU)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (EU)',
  rawStatus: 'UP',
  slugs: ['server_pc_eu'],
  support: 'pc',
  zone: 'eu',
  status: 'up',
};
export const LiveServicesPcEuUpRawEsoStatus: EsoStatus = {
  slug: 'server_pc_eu',
  status: 'up',
  type: 'server',
  support: 'pc',
  zone: 'eu',
  raw: LiveServicesPcEuUpRaw,
};

export const LiveServicesPcEuDownRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (EU)', 'DOWN'],
  rawSlug: 'The Elder Scrolls Online (EU)',
  rawStatus: 'DOWN',
  slugs: ['server_pc_eu'],
  support: 'pc',
  zone: 'eu',
  status: 'down',
};
export const LiveServicesPcEuDownEsoStatus: EsoStatus = {
  slug: 'server_pc_eu',
  status: 'down',
  type: 'server',
  support: 'pc',
  zone: 'eu',
  raw: LiveServicesPcEuDownRaw,
};

export const LiveServicesPcNaUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (NA)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (NA)',
  rawStatus: 'UP',
  slugs: ['server_pc_na'],
  support: 'pc',
  zone: 'na',
  status: 'up',
};
export const LiveServicesPcNaUpRawEsoStatus: EsoStatus = {
  slug: 'server_pc_na',
  status: 'up',
  type: 'server',
  support: 'pc',
  zone: 'na',
  raw: LiveServicesPcNaUpRaw,
};

export const LiveServicesPcNaDownRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (NA)', 'DOWN'],
  rawSlug: 'The Elder Scrolls Online (NA)',
  rawStatus: 'DOWN',
  slugs: ['server_pc_na'],
  support: 'pc',
  zone: 'na',
  status: 'down',
};
export const LiveServicesPcNaDownEsoStatus: EsoStatus = {
  slug: 'server_pc_na',
  status: 'down',
  type: 'server',
  support: 'pc',
  zone: 'na',
  raw: LiveServicesPcNaDownRaw,
};

export const LiveServicesPsEuUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (PS4 - EU)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
  rawStatus: 'UP',
  slugs: ['server_ps_eu'],
  support: 'ps',
  zone: 'eu',
  status: 'up',
};

export const LiveServicesPsNaUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (PS4 - US)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (PS4 - US)',
  rawStatus: 'UP',
  slugs: ['server_ps_na'],
  support: 'ps',
  zone: 'na',
  status: 'up',
};

export const LiveServicesPcPtsUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (PTS)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (PTS)',
  rawStatus: 'UP',
  slugs: ['server_pc_pts'],
  support: 'pc',
  zone: 'pts',
  status: 'up',
};

export const LiveServicesXboxEuUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (XBox - EU)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (XBox - EU)',
  rawStatus: 'UP',
  slugs: ['server_xbox_eu'],
  support: 'xbox',
  zone: 'eu',
  status: 'up',
};

export const LiveServicesXboxNaUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (XBox - US)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (XBox - US)',
  rawStatus: 'UP',
  slugs: ['server_xbox_na'],
  support: 'xbox',
  zone: 'na',
  status: 'up',
};

export const LiveServicesInitial: RawEsoStatus[] = [
  LiveServicesPcEuUpRaw,
  LiveServicesPcNaUpRaw,
  LiveServicesPsEuUpRaw,
  LiveServicesPsNaUpRaw,
  LiveServicesPcPtsUpRaw,
  LiveServicesXboxEuUpRaw,
  LiveServicesXboxNaUpRaw,
];

export const LiveServicesDown: RawEsoStatus[] = [
  LiveServicesPcEuDownRaw,
  LiveServicesPcNaDownRaw,
  LiveServicesPsEuUpRaw,
  LiveServicesPsNaUpRaw,
  LiveServicesPcPtsUpRaw,
  LiveServicesXboxEuUpRaw,
  LiveServicesXboxNaUpRaw,
];

export const ForumMessageInitialPcEuLastUpRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/'],
  raw: [
    '• [COMPLETE] PC/Mac: NA and EU megaservers for patch maintenance – July 22, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
  ],
  slugs: ['server_pc_eu'],
  rawDate: 'July 22, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 22)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 22)
      .set('hours', 12)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'up',
};
export const ForumMessageInitialPcNaLastUpRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/'],
  raw: [
    '• [COMPLETE] PC/Mac: NA and EU megaservers for patch maintenance – July 22, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
  ],
  slugs: ['server_pc_na'],
  rawDate: 'July 22, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 22)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 22)
      .set('hours', 12)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'up',
};

export const ForumMessageInitial: RawEsoStatus[] = [];

export const ServiceAlertsInitialPcPtsRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\n<p>2024.07.29 - 18:00 UTC (14:00 EDT)</p>\n\n<p>The PTS is currently available.</p>\n\n',
  ],
  rawDate: '2024.07.29 - 18:00 UTC (14:00 EDT)',
  rawData: 'The PTS is currently available.',
  slugs: ['server_pc_pts'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 29)
      .set('hours', 18)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'pc',
  zone: 'pts',
  status: 'up',
};

export const ServiceAlertsInitialXboxNaRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    ' />\n  <p>2024.07.24 - 15:35 UTC (11:35 EDT)</p>\n<p>The North American Xbox megaserver is currently available.</p>\n<p>The European Xbox megaserver is currently available.</p>\n<p>The North American PlayStation® megaserver is currently available.</p>\n<p>The European PlayStation® megaserver is currently available.</p>\n',
  ],
  rawDate: ' />  2024.07.24 - 15:35 UTC (11:35 EDT)',
  rawData: 'The North American Xbox megaserver is currently available.',
  slugs: ['server_xbox_na'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 24)
      .set('hours', 15)
      .set('minutes', 35)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'up',
};

export const ServiceAlertsInitialXboxEuRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    ' />\n  <p>2024.07.24 - 15:35 UTC (11:35 EDT)</p>\n<p>The North American Xbox megaserver is currently available.</p>\n<p>The European Xbox megaserver is currently available.</p>\n<p>The North American PlayStation® megaserver is currently available.</p>\n<p>The European PlayStation® megaserver is currently available.</p>\n',
  ],
  rawDate: ' />  2024.07.24 - 15:35 UTC (11:35 EDT)',
  rawData: 'The European Xbox megaserver is currently available.',
  slugs: ['server_xbox_eu'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 24)
      .set('hours', 15)
      .set('minutes', 35)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'up',
};

export const ServiceAlertsInitialPsNaRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    ' />\n  <p>2024.07.24 - 15:35 UTC (11:35 EDT)</p>\n<p>The North American Xbox megaserver is currently available.</p>\n<p>The European Xbox megaserver is currently available.</p>\n<p>The North American PlayStation® megaserver is currently available.</p>\n<p>The European PlayStation® megaserver is currently available.</p>\n',
  ],
  rawDate: ' />  2024.07.24 - 15:35 UTC (11:35 EDT)',
  rawData:
    'The North American PlayStation® megaserver is currently available.',
  slugs: ['server_ps_na'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 24)
      .set('hours', 15)
      .set('minutes', 35)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'up',
};

export const ServiceAlertsInitialPsEuRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    ' />\n  <p>2024.07.24 - 15:35 UTC (11:35 EDT)</p>\n<p>The North American Xbox megaserver is currently available.</p>\n<p>The European Xbox megaserver is currently available.</p>\n<p>The North American PlayStation® megaserver is currently available.</p>\n<p>The European PlayStation® megaserver is currently available.</p>\n',
  ],
  rawDate: ' />  2024.07.24 - 15:35 UTC (11:35 EDT)',
  rawData: 'The European PlayStation® megaserver is currently available.',
  slugs: ['server_ps_eu'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 24)
      .set('hours', 15)
      .set('minutes', 35)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'up',
};

export const ServiceAlertsInitialPcNaRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    ' />\n<p>2024.07.22 - 12:10 UTC (8:10 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
  ],
  rawDate: ' />2024.07.22 - 12:10 UTC (8:10 EDT)',
  rawData: 'The North American PC/Mac megaserver is currently available.',
  slugs: ['server_pc_na'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 22)
      .set('hours', 12)
      .set('minutes', 10)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'up',
};

export const ServiceAlertsUpPcNaRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    ' />\n<p>2024.07.29 - 12:10 UTC (8:10 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
  ],
  rawDate: ' />2024.07.22 - 12:10 UTC (8:10 EDT)',
  rawData: 'The North American PC/Mac megaserver is currently available.',
  slugs: ['server_pc_na'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 29)
      .set('hours', 12)
      .set('minutes', 10)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'up',
};
export const ServiceAlertsDownPcNaRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    ' />\n<p>2024.07.29 - 8:00 UTC (4:00 EDT)</p>\n<p>The North American PC/Mac megaserver is currently unavailable while we perform maintenance.</p>\n<p>The European PC/Mac megaserver is currently unavailable while we perform maintenance.</p>\n',
  ],
  rawDate: ' />2024.07.29 - 8:00 UTC (4:00 EDT)',
  rawData: 'The North American PC/Mac megaserver is currently available.',
  slugs: ['server_pc_na'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 29)
      .set('hours', 8)
      .set('minutes', 10)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'down',
};

export const ServiceAlertsInitialPcEuRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    ' />\n<p>2024.07.22 - 12:10 UTC (8:10 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
  ],
  rawDate: ' />2024.07.22 - 12:10 UTC (8:10 EDT)',
  rawData: 'The European PC/Mac megaserver is currently available.',
  slugs: ['server_pc_eu'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 22)
      .set('hours', 12)
      .set('minutes', 10)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'up',
};
export const ServiceAlertsUpPcEuRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    ' />\n<p>2024.07.29 - 12:10 UTC (8:10 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
  ],
  rawDate: ' />2024.07.22 - 12:10 UTC (8:10 EDT)',
  rawData: 'The North American PC/Mac megaserver is currently available.',
  slugs: ['server_pc_eu'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 29)
      .set('hours', 12)
      .set('minutes', 10)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'up',
};

export const ServiceAlertsDownPcEuRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    ' />\n<p>2024.07.29 - 8:00 UTC (4:00 EDT)</p>\n<p>The North American PC/Mac megaserver is currently unavailable while we perform maintenance.</p>\n<p>The European PC/Mac megaserver is currently unavailable while we perform maintenance.</p>\n',
  ],
  rawDate: ' />2024.07.29 - 8:00 UTC (4:00 EDT)',
  rawData:
    'The European PC/Mac megaserver is currently unavailable while we perform maintenance.',
  slugs: ['server_pc_eu'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 29)
      .set('hours', 8)
      .set('minutes', 10)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'down',
};

export const ServiceAlertsInitialStoreEsoRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    ' />\n<p>2024.07.01 - 12:00 UTC (08:00 EDT)</p>\n\n<p>The North American megaservers are currently available.</p>\n\n<p>The ESO store and account system are currently available.</p>\n\n',
  ],
  rawDate: ' />2024.07.01 - 12:00 UTC (08:00 EDT)',
  rawData: 'The ESO store and account system are currently available.',
  slugs: ['service_store_eso'],
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
};

export const ServiceAlertsInitialSystemAccountRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    ' />\n<p>2024.07.01 - 12:00 UTC (08:00 EDT)</p>\n\n<p>The North American megaservers are currently available.</p>\n\n<p>The ESO store and account system are currently available.</p>\n\n',
  ],
  rawDate: ' />2024.07.01 - 12:00 UTC (08:00 EDT)',
  rawData: 'The ESO store and account system are currently available.',
  slugs: ['service_system_account'],
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
};

export const ServiceAlertsInitial: RawEsoStatus[] = [
  ServiceAlertsInitialPcPtsRaw,
  ServiceAlertsInitialXboxNaRaw,
  ServiceAlertsInitialXboxEuRaw,
  ServiceAlertsInitialPsNaRaw,
  ServiceAlertsInitialPsEuRaw,
  ServiceAlertsInitialPcNaRaw,
  ServiceAlertsInitialPcEuRaw,
  ServiceAlertsInitialStoreEsoRaw,
  ServiceAlertsInitialSystemAccountRaw,
];

export const ServiceAlertsDown: RawEsoStatus[] = [
  ServiceAlertsDownPcNaRaw,
  ServiceAlertsDownPcEuRaw,
  ServiceAlertsInitialPcPtsRaw,
  ServiceAlertsInitialXboxNaRaw,
  ServiceAlertsInitialXboxEuRaw,
  ServiceAlertsInitialPsNaRaw,
  ServiceAlertsInitialPsEuRaw,
  ServiceAlertsInitialStoreEsoRaw,
  ServiceAlertsInitialSystemAccountRaw,
];

export const ServiceAlertsUp: RawEsoStatus[] = [
  ServiceAlertsUpPcNaRaw,
  ServiceAlertsUpPcEuRaw,
  ServiceAlertsInitialPcPtsRaw,
  ServiceAlertsInitialXboxNaRaw,
  ServiceAlertsInitialXboxEuRaw,
  ServiceAlertsInitialPsNaRaw,
  ServiceAlertsInitialPsEuRaw,
  ServiceAlertsInitialStoreEsoRaw,
  ServiceAlertsInitialSystemAccountRaw,
];

export const ForumMessagePlannedPcEuRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/'],
  raw: [
    '• PC/Mac: NA and EU megaservers for patch maintenance – July 29, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
  ],
  slugs: ['server_pc_eu'],
  rawDate: 'July 29, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 29)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 29)
      .set('hours', 12)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'planned',
};
export const ForumMessagePlannedPcEuMaintenance: CustomMaintenanceEsoStatus = {
  raw: {
    sources: ForumMessagePlannedPcEuRaw.sources,
    raw: ForumMessagePlannedPcEuRaw.raw,
    slugs: ForumMessagePlannedPcEuRaw.slugs,
    rawDate: ForumMessagePlannedPcEuRaw.rawDate,
    dates: [
      ForumMessagePlannedPcEuRaw.dates[0].toISOString(),
      ForumMessagePlannedPcEuRaw.dates[1].toISOString(),
    ],
    type: ForumMessagePlannedPcEuRaw.type,
    support: ForumMessagePlannedPcEuRaw.support,
    zone: ForumMessagePlannedPcEuRaw.zone,
    status: ForumMessagePlannedPcEuRaw.status,
  },
  slug: 'server_pc_eu',
  beginnerAt: ForumMessagePlannedPcEuRaw.dates[0].toISOString(),
  endingAt: ForumMessagePlannedPcEuRaw.dates[1].toISOString(),
};

export const ForumMessagePlannedPcNaRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/'],
  raw: [
    '• PC/Mac: NA and EU megaservers for patch maintenance – July 29, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
  ],
  slugs: ['server_pc_na'],
  rawDate: 'July 29, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 29)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 29)
      .set('hours', 12)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'planned',
};
export const ForumMessagePlannedPcNaMaintenance: CustomMaintenanceEsoStatus = {
  raw: {
    sources: ForumMessagePlannedPcNaRaw.sources,
    raw: ForumMessagePlannedPcNaRaw.raw,
    slugs: ForumMessagePlannedPcNaRaw.slugs,
    rawDate: ForumMessagePlannedPcNaRaw.rawDate,
    dates: [
      ForumMessagePlannedPcNaRaw.dates[0].toISOString(),
      ForumMessagePlannedPcNaRaw.dates[1].toISOString(),
    ],
    type: ForumMessagePlannedPcNaRaw.type,
    support: ForumMessagePlannedPcNaRaw.support,
    zone: ForumMessagePlannedPcNaRaw.zone,
    status: ForumMessagePlannedPcNaRaw.status,
  },
  slug: 'server_pc_na',
  beginnerAt: ForumMessagePlannedPcNaRaw.dates[0].toISOString(),
  endingAt: ForumMessagePlannedPcNaRaw.dates[1].toISOString(),
};

export const ForumMessagePlannedPcPTSRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
  raw: [
    'We will be performing maintenance for patch 10.1.4 on the PTS on Monday at 10:00AM EDT (14:00 UTC). ',
  ],
  slugs: ['server_pc_pts'],
  rawDate: 'Monday at 10:00AM EDT (14:00 UTC). ',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 5)
      .set('hours', 14)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'pc',
  zone: 'pts',
  status: 'planned',
};

export const ForumMessagePlanned: RawEsoStatus[] = [
  ForumMessagePlannedPcEuRaw,
  ForumMessagePlannedPcNaRaw,
  ForumMessagePlannedPcPTSRaw,
];

export const ForumMessageDownPcEuRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/'],
  raw: [
    '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – July 29, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
  ],
  slugs: ['server_pc_eu'],
  rawDate: 'July 29, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 29)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 29)
      .set('hours', 12)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'down',
};
export const ForumMessageUpPcEuRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/'],
  raw: [
    '• [COMPLETE] PC/Mac: NA and EU megaservers for patch maintenance – July 29, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
  ],
  slugs: ['server_pc_eu'],
  rawDate: 'July 29, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 29)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 29)
      .set('hours', 12)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'up',
};

export const ForumMessageDownPcNaRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/'],
  raw: [
    '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – July 29, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
  ],
  slugs: ['server_pc_na'],
  rawDate: 'July 29, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 29)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 29)
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
};
export const ForumMessageUpPcNaRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/'],
  raw: [
    '• [COMPLETE] PC/Mac: NA and EU megaservers for patch maintenance – July 29, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
  ],
  slugs: ['server_pc_na'],
  rawDate: 'July 29, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 29)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 29)
      .set('hours', 12)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'up',
};

export const ForumMessageDown: RawEsoStatus[] = [
  ForumMessageDownPcEuRaw,
  ForumMessageDownPcNaRaw,
];

export const ForumMessageUp: RawEsoStatus[] = [
  ForumMessageUpPcEuRaw,
  ForumMessageUpPcNaRaw,
];
