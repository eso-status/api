import {
  EsoStatus,
  MaintenanceEsoStatus,
  RawEsoStatus,
} from '@eso-status/types';
import { Moment } from 'moment';
import * as moment from 'moment/moment';
import { RawEsoStatus as CustomRawEsoStatus } from 'src/interface/rawEsoStatus.interface';

export const LiveServicesServerPcEuUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (EU)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (EU)',
  rawStatus: 'UP',
  slugs: ['server_pc_eu'],
  support: 'pc',
  zone: 'eu',
  status: 'up',
};
export const LiveServicesServerPcEuUpRawStringDate: CustomRawEsoStatus = {
  sources: LiveServicesServerPcEuUpRaw.sources,
  raw: LiveServicesServerPcEuUpRaw.raw,
  rawSlug: LiveServicesServerPcEuUpRaw.rawSlug,
  rawStatus: LiveServicesServerPcEuUpRaw.rawStatus,
  slugs: LiveServicesServerPcEuUpRaw.slugs,
  support: LiveServicesServerPcEuUpRaw.support,
  zone: LiveServicesServerPcEuUpRaw.zone,
  status: LiveServicesServerPcEuUpRaw.status,
};

export const LiveServicesServerPcNaUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (NA)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (NA)',
  rawStatus: 'UP',
  slugs: ['server_pc_na'],
  support: 'pc',
  zone: 'na',
  status: 'up',
};
export const LiveServicesServerPcNaUpRawStringDate: CustomRawEsoStatus = {
  sources: LiveServicesServerPcNaUpRaw.sources,
  raw: LiveServicesServerPcNaUpRaw.raw,
  rawSlug: LiveServicesServerPcNaUpRaw.rawSlug,
  rawStatus: LiveServicesServerPcNaUpRaw.rawStatus,
  slugs: LiveServicesServerPcNaUpRaw.slugs,
  support: LiveServicesServerPcNaUpRaw.support,
  zone: LiveServicesServerPcNaUpRaw.zone,
  status: LiveServicesServerPcNaUpRaw.status,
};

export const LiveServicesServerPsEuUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (PS4 - EU)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
  rawStatus: 'UP',
  slugs: ['server_ps_eu'],
  support: 'ps',
  zone: 'eu',
  status: 'up',
};
export const LiveServicesServerPsEuUpRawStringDate: CustomRawEsoStatus = {
  sources: LiveServicesServerPsEuUpRaw.sources,
  raw: LiveServicesServerPsEuUpRaw.raw,
  rawSlug: LiveServicesServerPsEuUpRaw.rawSlug,
  rawStatus: LiveServicesServerPsEuUpRaw.rawStatus,
  slugs: LiveServicesServerPsEuUpRaw.slugs,
  support: LiveServicesServerPsEuUpRaw.support,
  zone: LiveServicesServerPsEuUpRaw.zone,
  status: LiveServicesServerPsEuUpRaw.status,
};

export const LiveServicesServerPsNaUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (PS4 - US)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (PS4 - US)',
  rawStatus: 'UP',
  slugs: ['server_ps_na'],
  support: 'ps',
  zone: 'na',
  status: 'up',
};
export const LiveServicesServerPsNaUpRawStringDate: CustomRawEsoStatus = {
  sources: LiveServicesServerPsNaUpRaw.sources,
  raw: LiveServicesServerPsNaUpRaw.raw,
  rawSlug: LiveServicesServerPsNaUpRaw.rawSlug,
  rawStatus: LiveServicesServerPsNaUpRaw.rawStatus,
  slugs: LiveServicesServerPsNaUpRaw.slugs,
  support: LiveServicesServerPsNaUpRaw.support,
  zone: LiveServicesServerPsNaUpRaw.zone,
  status: LiveServicesServerPsNaUpRaw.status,
};

export const LiveServicesServerPcPtsUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (PTS)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (PTS)',
  rawStatus: 'UP',
  slugs: ['server_pc_pts'],
  support: 'pc',
  zone: 'pts',
  status: 'up',
};
export const LiveServicesServerPcPtsUp: EsoStatus = {
  slug: LiveServicesServerPcPtsUpRaw.slugs[0],
  status: LiveServicesServerPcPtsUpRaw.status,
  type: 'server',
  support: LiveServicesServerPcPtsUpRaw.support,
  zone: LiveServicesServerPcPtsUpRaw.zone,
  raw: LiveServicesServerPcPtsUpRaw,
};
export const LiveServicesServerPcPtsDownRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (PTS)', 'DOWN'],
  rawSlug: 'The Elder Scrolls Online (PTS)',
  rawStatus: 'DOWN',
  slugs: ['server_pc_pts'],
  support: 'pc',
  zone: 'pts',
  status: 'down',
};
export const LiveServicesServerPcPtsDown: EsoStatus = {
  slug: LiveServicesServerPcPtsDownRaw.slugs[0],
  status: LiveServicesServerPcPtsDownRaw.status,
  type: 'server',
  support: LiveServicesServerPcPtsDownRaw.support,
  zone: LiveServicesServerPcPtsDownRaw.zone,
  raw: LiveServicesServerPcPtsDownRaw,
};
export const LiveServicesServerPcPtsDownRawStringDate: CustomRawEsoStatus = {
  sources: LiveServicesServerPcPtsDownRaw.sources,
  raw: LiveServicesServerPcPtsDownRaw.raw,
  rawSlug: LiveServicesServerPcPtsDownRaw.rawSlug,
  rawStatus: LiveServicesServerPcPtsDownRaw.rawStatus,
  slugs: LiveServicesServerPcPtsDownRaw.slugs,
  support: LiveServicesServerPcPtsDownRaw.support,
  zone: LiveServicesServerPcPtsDownRaw.zone,
  status: LiveServicesServerPcPtsDownRaw.status,
};
export const LiveServicesServerPcPtsUpRawStringDate: CustomRawEsoStatus = {
  sources: LiveServicesServerPcPtsUpRaw.sources,
  raw: LiveServicesServerPcPtsUpRaw.raw,
  rawSlug: LiveServicesServerPcPtsUpRaw.rawSlug,
  rawStatus: LiveServicesServerPcPtsUpRaw.rawStatus,
  slugs: LiveServicesServerPcPtsUpRaw.slugs,
  support: LiveServicesServerPcPtsUpRaw.support,
  zone: LiveServicesServerPcPtsUpRaw.zone,
  status: LiveServicesServerPcPtsUpRaw.status,
};

export const LiveServicesServerXboxEuUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (XBox - EU)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (XBox - EU)',
  rawStatus: 'UP',
  slugs: ['server_xbox_eu'],
  support: 'xbox',
  zone: 'eu',
  status: 'up',
};
export const LiveServicesServerXboxEuUpRawStringDate: CustomRawEsoStatus = {
  sources: LiveServicesServerXboxEuUpRaw.sources,
  raw: LiveServicesServerXboxEuUpRaw.raw,
  rawSlug: LiveServicesServerXboxEuUpRaw.rawSlug,
  rawStatus: LiveServicesServerXboxEuUpRaw.rawStatus,
  slugs: LiveServicesServerXboxEuUpRaw.slugs,
  support: LiveServicesServerXboxEuUpRaw.support,
  zone: LiveServicesServerXboxEuUpRaw.zone,
  status: LiveServicesServerXboxEuUpRaw.status,
};

export const LiveServicesServerXboxNaUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (XBox - US)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (XBox - US)',
  rawStatus: 'UP',
  slugs: ['server_xbox_na'],
  support: 'xbox',
  zone: 'na',
  status: 'up',
};
export const LiveServicesServerXboxNaUpRawStringDate: CustomRawEsoStatus = {
  sources: LiveServicesServerXboxNaUpRaw.sources,
  raw: LiveServicesServerXboxNaUpRaw.raw,
  rawSlug: LiveServicesServerXboxNaUpRaw.rawSlug,
  rawStatus: LiveServicesServerXboxNaUpRaw.rawStatus,
  slugs: LiveServicesServerXboxNaUpRaw.slugs,
  support: LiveServicesServerXboxNaUpRaw.support,
  zone: LiveServicesServerXboxNaUpRaw.zone,
  status: LiveServicesServerXboxNaUpRaw.status,
};

export const ServiceAlertsServerXboxNaUpRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
  ],
  rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
  rawData: 'The North American megaservers are currently available.',
  slugs: ['server_xbox_na'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
      .set('hours', 15)
      .set('minutes', 45)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'up',
};
export const ServiceAlertsServerXboxEuUpRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
  ],
  rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
  rawData: 'The European megaservers are currently available.',
  slugs: ['server_xbox_eu'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
      .set('hours', 15)
      .set('minutes', 45)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'up',
};

export const ServiceAlertsServerPsNaUpRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
  ],
  rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
  rawData: 'The North American megaservers are currently available.',
  slugs: ['server_ps_na'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
      .set('hours', 15)
      .set('minutes', 45)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'up',
};

export const ServiceAlertsServerPsEuUpRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
  ],
  rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
  rawData: 'The European megaservers are currently available.',
  slugs: ['server_ps_eu'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
      .set('hours', 15)
      .set('minutes', 45)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'up',
};

export const ServiceAlertsServerPcNaUpRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
  ],
  rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
  rawData: 'The North American megaservers are currently available.',
  slugs: ['server_pc_na'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
      .set('hours', 15)
      .set('minutes', 45)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'up',
};

export const ServiceAlertsServerPcEuUpRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
  ],
  rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
  rawData: 'The European megaservers are currently available.',
  slugs: ['server_pc_eu'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
      .set('hours', 15)
      .set('minutes', 45)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'up',
};

export const ServiceAlertsServerPcPtsUpRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n<p>2024.08.05 - 18:00 UTC (14:00 EDT)</p>\\n\\n<p>The PTS is currently available.</p>\\n\\n',
  ],
  rawDate: '2024.08.05 - 18:00 UTC (14:00 EDT)',
  rawData: 'The PTS is currently available.',
  slugs: ['server_pc_pts'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 5)
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
export const ServiceAlertsServerPcPtsDownRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n<p>2024.08.05 - 14:00 UTC (10:00 EDT))</p>\\n\\n<p>The PTS is currently unavailable while we perform maintenance.</p>\\n\\n',
  ],
  rawDate: '2024.08.05 - 14:00 UTC (10:00 EDT))',
  rawData: 'The PTS is currently unavailable while we perform maintenance.',
  slugs: ['server_pc_pts'],
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
  status: 'down',
};

export const ServiceAlertsServiceStoreEsoUpRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
  ],
  rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
  rawData: 'The ESO store and account system are currently available.',
  slugs: ['service_store_eso'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
      .set('hours', 15)
      .set('minutes', 45)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'service',
  support: 'store',
  zone: 'eso',
  status: 'up',
};
export const ServiceAlertsServiceStoreEsoDownRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 8:00 UTC (4:00 EDT)</p>\\n<p>The North American megaservers are currently unavailable while we perform maintenance.</p>\\n<p>The European megaservers are currently unavailable while we perform maintenance.</p>\\n<p>The PTS is currently unavailable while we perform maintenance.</p>\\n<p>The ESO store and account system are currently unavailable while we perform maintenance.</p>\\n',
  ],
  rawDate: '   2024.08.07 - 8:00 UTC (4:00 EDT)',
  rawData:
    'The ESO store and account system are currently unavailable while we perform maintenance.',
  slugs: ['service_store_eso'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'service',
  support: 'store',
  zone: 'eso',
  status: 'down',
};
export const ServiceAlertsServiceStoreEsoUpRawStringDate: CustomRawEsoStatus = {
  sources: ServiceAlertsServiceStoreEsoUpRaw.sources,
  raw: ServiceAlertsServiceStoreEsoUpRaw.raw,
  rawDate: ServiceAlertsServiceStoreEsoUpRaw.rawDate,
  rawData: ServiceAlertsServiceStoreEsoUpRaw.rawData,
  slugs: ServiceAlertsServiceStoreEsoUpRaw.slugs,
  dates: ServiceAlertsServiceStoreEsoUpRaw.dates.map((date: Moment): string =>
    date.toISOString(),
  ),
  type: ServiceAlertsServiceStoreEsoUpRaw.type,
  support: ServiceAlertsServiceStoreEsoUpRaw.support,
  zone: ServiceAlertsServiceStoreEsoUpRaw.zone,
  status: ServiceAlertsServiceStoreEsoUpRaw.status,
};

export const ServiceAlertsServiceSystemAccountUpRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
  ],
  rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
  rawData: 'The ESO store and account system are currently available.',
  slugs: ['service_system_account'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
      .set('hours', 15)
      .set('minutes', 45)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'service',
  support: 'system',
  zone: 'account',
  status: 'up',
};
export const ServiceAlertsServiceSystemAccountDownRaw: RawEsoStatus = {
  sources: ['https://help.elderscrollsonline.com/app/answers/detail/a_id/4320'],
  raw: [
    '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 8:00 UTC (4:00 EDT)</p>\\n<p>The North American megaservers are currently unavailable while we perform maintenance.</p>\\n<p>The European megaservers are currently unavailable while we perform maintenance.</p>\\n<p>The PTS is currently unavailable while we perform maintenance.</p>\\n<p>The ESO store and account system are currently unavailable while we perform maintenance.</p>\\n',
  ],
  rawDate: '   2024.08.07 - 8:00 UTC (4:00 EDT)',
  rawData:
    'The ESO store and account system are currently unavailable while we perform maintenance.',
  slugs: ['service_system_account'],
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'service',
  support: 'system',
  zone: 'account',
  status: 'down',
};
export const ServiceAlertsServiceSystemAccountUpRawStringDate: CustomRawEsoStatus =
  {
    sources: ServiceAlertsServiceSystemAccountUpRaw.sources,
    raw: ServiceAlertsServiceSystemAccountUpRaw.raw,
    rawDate: ServiceAlertsServiceSystemAccountUpRaw.rawDate,
    rawData: ServiceAlertsServiceSystemAccountUpRaw.rawData,
    slugs: ServiceAlertsServiceSystemAccountUpRaw.slugs,
    dates: ServiceAlertsServiceSystemAccountUpRaw.dates.map(
      (date: Moment): string => date.toISOString(),
    ),
    type: ServiceAlertsServiceSystemAccountUpRaw.type,
    support: ServiceAlertsServiceSystemAccountUpRaw.support,
    zone: ServiceAlertsServiceSystemAccountUpRaw.zone,
    status: ServiceAlertsServiceSystemAccountUpRaw.status,
  };

export const ForumMessageServerPcPtsPlannedRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
  raw: [
    'We will be performing maintenance on the PTS on Wednesday at 4:00AM EDT (8:00 UTC). ',
  ],
  slugs: ['server_pc_pts'],
  rawDate: 'Wednesday at 4:00AM EDT (8:00 UTC). ',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
      .set('hours', 8)
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
export const ForumMessageServerPcPtsPlannedRawStringDate: CustomRawEsoStatus = {
  sources: ForumMessageServerPcPtsPlannedRaw.sources,
  raw: ForumMessageServerPcPtsPlannedRaw.raw,
  slugs: ForumMessageServerPcPtsPlannedRaw.slugs,
  rawDate: ForumMessageServerPcPtsPlannedRaw.rawDate,
  dates: ForumMessageServerPcPtsPlannedRaw.dates.map((date: Moment): string =>
    date.toISOString(),
  ),
  type: ForumMessageServerPcPtsPlannedRaw.type,
  support: ForumMessageServerPcPtsPlannedRaw.support,
  zone: ForumMessageServerPcPtsPlannedRaw.zone,
  status: ForumMessageServerPcPtsPlannedRaw.status,
};
export const ForumMessageServerPcPtsPlanned: MaintenanceEsoStatus = {
  raw: ForumMessageServerPcPtsPlannedRaw,
  slug: ForumMessageServerPcPtsPlannedRaw.slugs[0],
  beginnerAt: ForumMessageServerPcPtsPlannedRaw.dates[0].toISOString(),
};
export const ForumMessageServerPcPtsUpRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
  raw: [
    'The maintenance is complete, and the PTS is now back online and patch 10.1.4 is available. ',
  ],
  slugs: ['server_pc_pts'],
  rawDate: '',
  dates: [],
  type: 'server',
  support: 'pc',
  zone: 'pts',
  status: 'up',
};
export const ForumMessageServerPcPtsDownRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
  raw: [
    'The PTS is now offline for maintenance, and is currently unavailable.',
  ],
  slugs: ['server_pc_pts'],
  rawDate: '',
  dates: [],
  type: 'server',
  support: 'pc',
  zone: 'pts',
  status: 'down',
};

export const ForumMessageServiceStoreEsoPlannedRaw: RawEsoStatus = {
  sources: [
    'https://forums.elderscrollsonline.com/',
    'https://forums.elderscrollsonline.com/en/categories/pts',
  ],
  raw: [
    '· ESO Store and Account System for maintenance – August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC) - <a href="https://forums.elderscrollsonline.com/en/discussion/663391" rel="nofollow">https://forums.elderscrollsonline.com/en/discussion/663391</a>',
  ],
  slugs: ['service_store_eso'],
  rawDate:
    'August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC) - <a href="https://forums.elderscrollsonline.com/en/discussion/663391" rel="nofollow">https://forums.elderscrollsonline.com/en/discussion/663391</a>',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'service',
  support: 'store',
  zone: 'eso',
  status: 'planned',
};
export const ForumMessageServiceStoreEsoPlannedRawStringDate: CustomRawEsoStatus =
  {
    sources: ForumMessageServiceStoreEsoPlannedRaw.sources,
    raw: ForumMessageServiceStoreEsoPlannedRaw.raw,
    slugs: ForumMessageServiceStoreEsoPlannedRaw.slugs,
    rawDate: ForumMessageServiceStoreEsoPlannedRaw.rawDate,
    dates: ForumMessageServiceStoreEsoPlannedRaw.dates.map(
      (date: Moment): string => date.toISOString(),
    ),
    type: ForumMessageServiceStoreEsoPlannedRaw.type,
    support: ForumMessageServiceStoreEsoPlannedRaw.support,
    zone: ForumMessageServiceStoreEsoPlannedRaw.zone,
    status: ForumMessageServiceStoreEsoPlannedRaw.status,
  };
export const ForumMessageServiceStoreEsoPlanned: MaintenanceEsoStatus = {
  raw: ForumMessageServiceStoreEsoPlannedRaw,
  slug: ForumMessageServiceStoreEsoPlannedRaw.slugs[0],
  beginnerAt: ForumMessageServiceStoreEsoPlannedRaw.dates[0].toISOString(),
  endingAt: ForumMessageServiceStoreEsoPlannedRaw.dates[1].toISOString(),
};
export const ForumMessageServiceStoreEsoDownRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
  raw: [
    '· [IN PROGRESS] ESO Store and Account System for maintenance – August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  ],
  slugs: ['service_store_eso'],
  rawDate: 'August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'service',
  support: 'store',
  zone: 'eso',
  status: 'down',
};
export const ForumMessageServiceStoreEsoDownRawStringDate: CustomRawEsoStatus =
  {
    sources: ForumMessageServiceStoreEsoDownRaw.sources,
    raw: ForumMessageServiceStoreEsoDownRaw.raw,
    slugs: ForumMessageServiceStoreEsoDownRaw.slugs,
    rawDate: ForumMessageServiceStoreEsoDownRaw.rawDate,
    dates: ForumMessageServiceStoreEsoDownRaw.dates.map(
      (date: Moment): string => date.toISOString(),
    ),
    type: ForumMessageServiceStoreEsoDownRaw.type,
    support: ForumMessageServiceStoreEsoDownRaw.support,
    zone: ForumMessageServiceStoreEsoDownRaw.zone,
    status: ForumMessageServiceStoreEsoDownRaw.status,
  };
export const ForumMessageServiceStoreEsoDown: EsoStatus = {
  slug: ForumMessageServiceStoreEsoDownRaw.slugs[0],
  status: ForumMessageServiceStoreEsoDownRaw.status,
  type: ForumMessageServiceStoreEsoDownRaw.type,
  support: ForumMessageServiceStoreEsoDownRaw.support,
  zone: ForumMessageServiceStoreEsoDownRaw.zone,
  raw: ForumMessageServiceStoreEsoDownRaw,
};
export const ForumMessageServiceStoreEsoUpRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
  raw: [
    '· [COMPLETE] ESO Store and Account System for maintenance – August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  ],
  slugs: ['service_store_eso'],
  rawDate: 'August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
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
};
export const ForumMessageServiceStoreEsoUp: EsoStatus = {
  slug: ForumMessageServiceStoreEsoUpRaw.slugs[0],
  status: ForumMessageServiceStoreEsoUpRaw.status,
  type: ForumMessageServiceStoreEsoUpRaw.type,
  support: ForumMessageServiceStoreEsoUpRaw.support,
  zone: ForumMessageServiceStoreEsoUpRaw.zone,
  raw: ForumMessageServiceStoreEsoUpRaw,
};
export const ForumMessageServiceStoreEsoUpRawStringDate: CustomRawEsoStatus = {
  sources: ForumMessageServiceStoreEsoUpRaw.sources,
  raw: ForumMessageServiceStoreEsoUpRaw.raw,
  slugs: ForumMessageServiceStoreEsoUpRaw.slugs,
  rawDate: ForumMessageServiceStoreEsoUpRaw.rawDate,
  dates: ForumMessageServiceStoreEsoUpRaw.dates.map((date: Moment): string =>
    date.toISOString(),
  ),
  type: ForumMessageServiceStoreEsoUpRaw.type,
  support: ForumMessageServiceStoreEsoUpRaw.support,
  zone: ForumMessageServiceStoreEsoUpRaw.zone,
  status: ForumMessageServiceStoreEsoUpRaw.status,
};

export const ForumMessageServiceSystemAccountPlannedRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/'],
  raw: [
    '· ESO Store and Account System for maintenance – August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC) - <a href="https://forums.elderscrollsonline.com/en/discussion/663391" rel="nofollow">https://forums.elderscrollsonline.com/en/discussion/663391</a>',
  ],
  slugs: ['service_system_account'],
  rawDate:
    'August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC) - <a href="https://forums.elderscrollsonline.com/en/discussion/663391" rel="nofollow">https://forums.elderscrollsonline.com/en/discussion/663391</a>',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'service',
  support: 'system',
  zone: 'account',
  status: 'planned',
};
export const ForumMessageServiceSystemAccountPlannedRawStringDate: CustomRawEsoStatus =
  {
    sources: ForumMessageServiceSystemAccountPlannedRaw.sources,
    raw: ForumMessageServiceSystemAccountPlannedRaw.raw,
    slugs: ForumMessageServiceSystemAccountPlannedRaw.slugs,
    rawDate: ForumMessageServiceSystemAccountPlannedRaw.rawDate,
    dates: ForumMessageServiceSystemAccountPlannedRaw.dates.map(
      (date: Moment): string => date.toISOString(),
    ),
    type: ForumMessageServiceSystemAccountPlannedRaw.type,
    support: ForumMessageServiceSystemAccountPlannedRaw.support,
    zone: ForumMessageServiceSystemAccountPlannedRaw.zone,
    status: ForumMessageServiceSystemAccountPlannedRaw.status,
  };
export const ForumMessageServiceSystemAccountPlanned: MaintenanceEsoStatus = {
  raw: ForumMessageServiceSystemAccountPlannedRaw,
  slug: ForumMessageServiceSystemAccountPlannedRaw.slugs[0],
  beginnerAt: ForumMessageServiceSystemAccountPlannedRaw.dates[0].toISOString(),
  endingAt: ForumMessageServiceSystemAccountPlannedRaw.dates[1].toISOString(),
};
export const ForumMessageServiceSystemAccountDownRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
  raw: [
    '· [IN PROGRESS] ESO Store and Account System for maintenance – August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  ],
  slugs: ['service_system_account'],
  rawDate: 'August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
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
};
export const ForumMessageServiceSystemAccountDownRawStringDate: CustomRawEsoStatus =
  {
    sources: ForumMessageServiceSystemAccountDownRaw.sources,
    raw: ForumMessageServiceSystemAccountDownRaw.raw,
    slugs: ForumMessageServiceSystemAccountDownRaw.slugs,
    rawDate: ForumMessageServiceSystemAccountDownRaw.rawDate,
    dates: ForumMessageServiceSystemAccountDownRaw.dates.map(
      (date: Moment): string => date.toISOString(),
    ),
    type: ForumMessageServiceSystemAccountDownRaw.type,
    support: ForumMessageServiceSystemAccountDownRaw.support,
    zone: ForumMessageServiceSystemAccountDownRaw.zone,
    status: ForumMessageServiceSystemAccountDownRaw.status,
  };
export const ForumMessageServiceSystemAccountDown: EsoStatus = {
  slug: ForumMessageServiceSystemAccountDownRaw.slugs[0],
  status: ForumMessageServiceSystemAccountDownRaw.status,
  type: ForumMessageServiceSystemAccountDownRaw.type,
  support: ForumMessageServiceSystemAccountDownRaw.support,
  zone: ForumMessageServiceSystemAccountDownRaw.zone,
  raw: ForumMessageServiceSystemAccountDownRaw,
};
export const ForumMessageServiceSystemAccountUpRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
  raw: [
    '· [COMPLETE] ESO Store and Account System for maintenance – August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  ],
  slugs: ['service_system_account'],
  rawDate: 'August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 8)
      .set('date', 7)
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
};
export const ForumMessageServiceSystemAccountUp: EsoStatus = {
  slug: ForumMessageServiceSystemAccountUpRaw.slugs[0],
  status: ForumMessageServiceSystemAccountUpRaw.status,
  type: ForumMessageServiceSystemAccountUpRaw.type,
  support: ForumMessageServiceSystemAccountUpRaw.support,
  zone: ForumMessageServiceSystemAccountUpRaw.zone,
  raw: ForumMessageServiceSystemAccountUpRaw,
};
export const ForumMessageServiceSystemAccountUpRawStringDate: CustomRawEsoStatus =
  {
    sources: ForumMessageServiceSystemAccountUpRaw.sources,
    raw: ForumMessageServiceSystemAccountUpRaw.raw,
    slugs: ForumMessageServiceSystemAccountUpRaw.slugs,
    rawDate: ForumMessageServiceSystemAccountUpRaw.rawDate,
    dates: ForumMessageServiceSystemAccountUpRaw.dates.map(
      (date: Moment): string => date.toISOString(),
    ),
    type: ForumMessageServiceSystemAccountUpRaw.type,
    support: ForumMessageServiceSystemAccountUpRaw.support,
    zone: ForumMessageServiceSystemAccountUpRaw.zone,
    status: ForumMessageServiceSystemAccountUpRaw.status,
  };
