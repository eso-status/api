import {
  EsoStatus,
  MaintenanceEsoStatus,
  RawEsoStatus,
} from '@eso-status/types';
import * as moment from 'moment/moment';

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
export const LiveServicesPcEuUp: EsoStatus = {
  raw: LiveServicesPcEuUpRaw,
  slug: 'server_pc_eu',
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'up',
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
export const LiveServicesPcEuDown: EsoStatus = {
  raw: LiveServicesPcEuDownRaw,
  slug: 'server_pc_eu',
  type: 'server',
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
export const LiveServicesPcNaUp: EsoStatus = {
  raw: LiveServicesPcNaUpRaw,
  slug: 'server_pc_na',
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'up',
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
export const LiveServicesPcNaDown: EsoStatus = {
  raw: LiveServicesPcNaDownRaw,
  slug: 'server_pc_na',
  type: 'server',
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
export const LiveServicesPsEuUp: EsoStatus = {
  raw: LiveServicesPsEuUpRaw,
  slug: 'server_ps_eu',
  type: 'server',
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
export const LiveServicesPsNaUp: EsoStatus = {
  raw: LiveServicesPsNaUpRaw,
  slug: 'server_ps_na',
  type: 'server',
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
export const LiveServicesPcPtsUp: EsoStatus = {
  raw: LiveServicesPcPtsUpRaw,
  slug: 'server_pc_pts',
  type: 'server',
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
export const LiveServicesXboxEuUp: EsoStatus = {
  raw: LiveServicesXboxEuUpRaw,
  slug: 'server_xbox_eu',
  type: 'server',
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
export const LiveServicesXboxNaUp: EsoStatus = {
  raw: LiveServicesXboxNaUpRaw,
  slug: 'server_xbox_na',
  type: 'server',
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
export const LiveServicesInitialFormated: EsoStatus[] = [
  LiveServicesPcEuUp,
  LiveServicesPcNaUp,
  LiveServicesPsEuUp,
  LiveServicesPsNaUp,
  LiveServicesPcPtsUp,
  LiveServicesXboxEuUp,
  LiveServicesXboxNaUp,
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
export const LiveServicesDownFormated: EsoStatus[] = [
  LiveServicesPcEuDown,
  LiveServicesPcNaDown,
  LiveServicesPsEuUp,
  LiveServicesPsNaUp,
  LiveServicesPcPtsUp,
  LiveServicesXboxEuUp,
  LiveServicesXboxNaUp,
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
export const ServiceAlertsInitialPcPts: EsoStatus = {
  raw: ServiceAlertsInitialPcPtsRaw,
  slug: 'server_pc_pts',
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
export const ServiceAlertsInitialXboxNa: EsoStatus = {
  raw: ServiceAlertsInitialXboxNaRaw,
  slug: 'server_xbox_na',
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
export const ServiceAlertsInitialXboxEu: EsoStatus = {
  raw: ServiceAlertsInitialXboxEuRaw,
  slug: 'server_xbox_eu',
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
export const ServiceAlertsInitialPsNa: EsoStatus = {
  raw: ServiceAlertsInitialPsNaRaw,
  slug: 'server_ps_na',
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
export const ServiceAlertsInitialPsEu: EsoStatus = {
  raw: ServiceAlertsInitialPsEuRaw,
  slug: 'server_ps_eu',
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
export const ServiceAlertsInitialPcNa: EsoStatus = {
  raw: ServiceAlertsInitialPcNaRaw,
  slug: 'server_pc_na',
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'up',
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
export const ServiceAlertsInitialPcEu: EsoStatus = {
  raw: ServiceAlertsInitialPcEuRaw,
  slug: 'server_pc_eu',
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'up',
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
export const ServiceAlertsInitialStoreEso: EsoStatus = {
  raw: ServiceAlertsInitialStoreEsoRaw,
  slug: 'service_store_eso',
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
export const ServiceAlertsInitialSystemAccount: EsoStatus = {
  raw: ServiceAlertsInitialSystemAccountRaw,
  slug: 'service_system_account',
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
export const ServiceAlertsInitialFormatted: EsoStatus[] = [
  ServiceAlertsInitialPcPts,
  ServiceAlertsInitialXboxNa,
  ServiceAlertsInitialXboxEu,
  ServiceAlertsInitialPsNa,
  ServiceAlertsInitialPsEu,
  ServiceAlertsInitialPcNa,
  ServiceAlertsInitialPcEu,
  ServiceAlertsInitialStoreEso,
  ServiceAlertsInitialSystemAccount,
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
export const ForumMessagePlannedPcEu: EsoStatus = {
  raw: ForumMessagePlannedPcEuRaw,
  slug: 'server_pc_eu',
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'planned',
};
export const ForumMessagePlannedPcEuMaintenance: MaintenanceEsoStatus = {
  raw: {
    sources: ForumMessagePlannedPcEuRaw.sources,
    raw: ForumMessagePlannedPcEuRaw.raw,
    slugs: ForumMessagePlannedPcEuRaw.slugs,
    rawDate: ForumMessagePlannedPcEuRaw.rawDate,
    dates: [
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      ForumMessagePlannedPcEuRaw.dates[0].toISOString(),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
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
export const ForumMessagePlannedPcNa: EsoStatus = {
  raw: ForumMessagePlannedPcNaRaw,
  slug: 'server_pc_na',
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'planned',
};
export const ForumMessagePlannedPcNaMaintenance: MaintenanceEsoStatus = {
  raw: {
    sources: ForumMessagePlannedPcNaRaw.sources,
    raw: ForumMessagePlannedPcNaRaw.raw,
    slugs: ForumMessagePlannedPcNaRaw.slugs,
    rawDate: ForumMessagePlannedPcNaRaw.rawDate,
    dates: [
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      ForumMessagePlannedPcNaRaw.dates[0].toISOString(),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
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

export const ForumMessagePlanned: RawEsoStatus[] = [
  ForumMessagePlannedPcEuRaw,
  ForumMessagePlannedPcNaRaw,
];
export const ForumMessagePlannedFormatted: EsoStatus[] = [
  ForumMessagePlannedPcEu,
  ForumMessagePlannedPcNa,
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
export const ForumMessageDownPcEu: EsoStatus = {
  raw: ForumMessageDownPcEuRaw,
  slug: 'server_pc_eu',
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'down',
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
export const ForumMessageDownPcNa: EsoStatus = {
  raw: ForumMessageDownPcNaRaw,
  slug: 'server_pc_na',
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'down',
};

export const ForumMessageDown: RawEsoStatus[] = [
  ForumMessageDownPcEuRaw,
  ForumMessageDownPcNaRaw,
];
export const ForumMessageDownFormatted: EsoStatus[] = [
  ForumMessageDownPcEu,
  ForumMessageDownPcNa,
];
