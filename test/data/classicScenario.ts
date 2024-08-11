import {
  EsoStatus,
  MaintenanceEsoStatus,
  RawEsoStatus,
} from '@eso-status/types';

import * as moment from 'moment';

import { RawEsoStatus as CustomRawEsoStatus } from '../../src/interface/rawEsoStatus.interface';
import { Initial } from '../interface/initial.interface';
import { Scenario } from '../interface/scenario.interface';
import { Step } from '../interface/step.interface';

const LiveServicesServerPcEuUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (EU)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (EU)',
  rawStatus: 'UP',
  slugs: ['server_pc_eu'],
  support: 'pc',
  zone: 'eu',
  status: 'up',
};
const LiveServicesServerPcEuUpRawStringDate: CustomRawEsoStatus = {
  sources: LiveServicesServerPcEuUpRaw.sources,
  raw: LiveServicesServerPcEuUpRaw.raw,
  rawSlug: LiveServicesServerPcEuUpRaw.rawSlug,
  rawStatus: LiveServicesServerPcEuUpRaw.rawStatus,
  slugs: LiveServicesServerPcEuUpRaw.slugs,
  support: LiveServicesServerPcEuUpRaw.support,
  zone: LiveServicesServerPcEuUpRaw.zone,
  status: LiveServicesServerPcEuUpRaw.status,
};

const LiveServicesServerPcNaUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (NA)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (NA)',
  rawStatus: 'UP',
  slugs: ['server_pc_na'],
  support: 'pc',
  zone: 'na',
  status: 'up',
};
const LiveServicesServerPcNaUpRawStringDate: CustomRawEsoStatus = {
  sources: LiveServicesServerPcNaUpRaw.sources,
  raw: LiveServicesServerPcNaUpRaw.raw,
  rawSlug: LiveServicesServerPcNaUpRaw.rawSlug,
  rawStatus: LiveServicesServerPcNaUpRaw.rawStatus,
  slugs: LiveServicesServerPcNaUpRaw.slugs,
  support: LiveServicesServerPcNaUpRaw.support,
  zone: LiveServicesServerPcNaUpRaw.zone,
  status: LiveServicesServerPcNaUpRaw.status,
};

const LiveServicesServerPsEuUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (PS4 - EU)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
  rawStatus: 'UP',
  slugs: ['server_ps_eu'],
  support: 'ps',
  zone: 'eu',
  status: 'up',
};
const LiveServicesServerPsEuUpRawStringDate: CustomRawEsoStatus = {
  sources: LiveServicesServerPsEuUpRaw.sources,
  raw: LiveServicesServerPsEuUpRaw.raw,
  rawSlug: LiveServicesServerPsEuUpRaw.rawSlug,
  rawStatus: LiveServicesServerPsEuUpRaw.rawStatus,
  slugs: LiveServicesServerPsEuUpRaw.slugs,
  support: LiveServicesServerPsEuUpRaw.support,
  zone: LiveServicesServerPsEuUpRaw.zone,
  status: LiveServicesServerPsEuUpRaw.status,
};

const LiveServicesServerPsNaUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (PS4 - US)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (PS4 - US)',
  rawStatus: 'UP',
  slugs: ['server_ps_na'],
  support: 'ps',
  zone: 'na',
  status: 'up',
};
const LiveServicesServerPsNaUpRawStringDate: CustomRawEsoStatus = {
  sources: LiveServicesServerPsNaUpRaw.sources,
  raw: LiveServicesServerPsNaUpRaw.raw,
  rawSlug: LiveServicesServerPsNaUpRaw.rawSlug,
  rawStatus: LiveServicesServerPsNaUpRaw.rawStatus,
  slugs: LiveServicesServerPsNaUpRaw.slugs,
  support: LiveServicesServerPsNaUpRaw.support,
  zone: LiveServicesServerPsNaUpRaw.zone,
  status: LiveServicesServerPsNaUpRaw.status,
};

const LiveServicesServerPcPtsUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (PTS)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (PTS)',
  rawStatus: 'UP',
  slugs: ['server_pc_pts'],
  support: 'pc',
  zone: 'pts',
  status: 'up',
};
const LiveServicesServerPcPtsUpRawStringDate: CustomRawEsoStatus = {
  sources: LiveServicesServerPcPtsUpRaw.sources,
  raw: LiveServicesServerPcPtsUpRaw.raw,
  rawSlug: LiveServicesServerPcPtsUpRaw.rawSlug,
  rawStatus: LiveServicesServerPcPtsUpRaw.rawStatus,
  slugs: LiveServicesServerPcPtsUpRaw.slugs,
  support: LiveServicesServerPcPtsUpRaw.support,
  zone: LiveServicesServerPcPtsUpRaw.zone,
  status: LiveServicesServerPcPtsUpRaw.status,
};
const LiveServicesServerPcPtsUp: EsoStatus = {
  slug: 'server_pc_pts',
  status: 'up',
  type: 'server',
  support: 'pc',
  zone: 'pts',
  raw: LiveServicesServerPcPtsUpRaw,
};

const LiveServicesServerPcPtsDownRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (PTS)', 'DOWN'],
  rawSlug: 'The Elder Scrolls Online (PTS)',
  rawStatus: 'DOWN',
  slugs: ['server_pc_pts'],
  support: 'pc',
  zone: 'pts',
  status: 'down',
};
const LiveServicesServerPcPtsDownRawStringDate: CustomRawEsoStatus = {
  sources: LiveServicesServerPcPtsDownRaw.sources,
  raw: LiveServicesServerPcPtsDownRaw.raw,
  rawSlug: LiveServicesServerPcPtsDownRaw.rawSlug,
  rawStatus: LiveServicesServerPcPtsDownRaw.rawStatus,
  slugs: LiveServicesServerPcPtsDownRaw.slugs,
  support: LiveServicesServerPcPtsDownRaw.support,
  zone: LiveServicesServerPcPtsDownRaw.zone,
  status: LiveServicesServerPcPtsDownRaw.status,
};
const LiveServicesServerPcPtsDown: EsoStatus = {
  slug: 'server_pc_pts',
  status: 'down',
  type: 'server',
  support: 'pc',
  zone: 'pts',
  raw: LiveServicesServerPcPtsDownRaw,
};

const LiveServicesServerXboxEuUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (XBox - EU)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (XBox - EU)',
  rawStatus: 'UP',
  slugs: ['server_xbox_eu'],
  support: 'xbox',
  zone: 'eu',
  status: 'up',
};
const LiveServicesServerXboxEuUpRawStringDate: CustomRawEsoStatus = {
  sources: LiveServicesServerXboxEuUpRaw.sources,
  raw: LiveServicesServerXboxEuUpRaw.raw,
  rawSlug: LiveServicesServerXboxEuUpRaw.rawSlug,
  rawStatus: LiveServicesServerXboxEuUpRaw.rawStatus,
  slugs: LiveServicesServerXboxEuUpRaw.slugs,
  support: LiveServicesServerXboxEuUpRaw.support,
  zone: LiveServicesServerXboxEuUpRaw.zone,
  status: LiveServicesServerXboxEuUpRaw.status,
};

const LiveServicesServerXboxNaUpRaw: RawEsoStatus = {
  sources: ['https://live-services.elderscrollsonline.com/status/realms'],
  raw: ['The Elder Scrolls Online (XBox - US)', 'UP'],
  rawSlug: 'The Elder Scrolls Online (XBox - US)',
  rawStatus: 'UP',
  slugs: ['server_xbox_na'],
  support: 'xbox',
  zone: 'na',
  status: 'up',
};
const LiveServicesServerXboxNaUpRawStringDate: CustomRawEsoStatus = {
  sources: LiveServicesServerXboxNaUpRaw.sources,
  raw: LiveServicesServerXboxNaUpRaw.raw,
  rawSlug: LiveServicesServerXboxNaUpRaw.rawSlug,
  rawStatus: LiveServicesServerXboxNaUpRaw.rawStatus,
  slugs: LiveServicesServerXboxNaUpRaw.slugs,
  support: LiveServicesServerXboxNaUpRaw.support,
  zone: LiveServicesServerXboxNaUpRaw.zone,
  status: LiveServicesServerXboxNaUpRaw.status,
};

const ServiceAlertsServerXboxNaUpRaw: RawEsoStatus = {
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
      .set('months', 7)
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

const ServiceAlertsServerXboxEuUpRaw: RawEsoStatus = {
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
      .set('months', 7)
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

const ServiceAlertsServerPsNaUpRaw: RawEsoStatus = {
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
      .set('months', 7)
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

const ServiceAlertsServerPsEuUpRaw: RawEsoStatus = {
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
      .set('months', 7)
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

const ServiceAlertsServerPcNaUpRaw: RawEsoStatus = {
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
      .set('months', 7)
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

const ServiceAlertsServerPcEuUpRaw: RawEsoStatus = {
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
      .set('months', 7)
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

const ServiceAlertsServerPcPtsUpRaw: RawEsoStatus = {
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
      .set('months', 7)
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

const ServiceAlertsServerPcPtsDownRaw: RawEsoStatus = {
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
      .set('months', 7)
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

const ServiceAlertsServiceStoreEsoUpRaw: RawEsoStatus = {
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
      .set('months', 7)
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
const ServiceAlertsServiceStoreEsoUpRawStringDate: CustomRawEsoStatus = {
  sources: ServiceAlertsServiceStoreEsoUpRaw.sources,
  raw: ServiceAlertsServiceStoreEsoUpRaw.raw,
  rawDate: ServiceAlertsServiceStoreEsoUpRaw.rawDate,
  rawData: ServiceAlertsServiceStoreEsoUpRaw.rawData,
  slugs: ServiceAlertsServiceStoreEsoUpRaw.slugs,
  dates: ['2024-08-07T15:45:00.000Z'],
  type: ServiceAlertsServiceStoreEsoUpRaw.type,
  support: ServiceAlertsServiceStoreEsoUpRaw.support,
  zone: ServiceAlertsServiceStoreEsoUpRaw.zone,
  status: ServiceAlertsServiceStoreEsoUpRaw.status,
};

const ServiceAlertsServiceStoreEsoDownRaw: RawEsoStatus = {
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
      .set('months', 7)
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

const ServiceAlertsServiceSystemAccountUpRaw: RawEsoStatus = {
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
      .set('months', 7)
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
const ServiceAlertsServiceSystemAccountUpRawStringDate: CustomRawEsoStatus = {
  sources: ServiceAlertsServiceSystemAccountUpRaw.sources,
  raw: ServiceAlertsServiceSystemAccountUpRaw.raw,
  rawDate: ServiceAlertsServiceSystemAccountUpRaw.rawDate,
  rawData: ServiceAlertsServiceSystemAccountUpRaw.rawData,
  slugs: ServiceAlertsServiceSystemAccountUpRaw.slugs,
  dates: ['2024-08-07T15:45:00.000Z'],
  type: ServiceAlertsServiceSystemAccountUpRaw.type,
  support: ServiceAlertsServiceSystemAccountUpRaw.support,
  zone: ServiceAlertsServiceSystemAccountUpRaw.zone,
  status: ServiceAlertsServiceSystemAccountUpRaw.status,
};

const ServiceAlertsServiceSystemAccountDownRaw: RawEsoStatus = {
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
      .set('months', 7)
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

const ForumMessagePtsServerPcPtsPlannedRaw: RawEsoStatus = {
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
      .set('months', 7)
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
const ForumMessagePtsServerPcPtsPlannedRawStringDate: CustomRawEsoStatus = {
  sources: ForumMessagePtsServerPcPtsPlannedRaw.sources,
  raw: ForumMessagePtsServerPcPtsPlannedRaw.raw,
  slugs: ForumMessagePtsServerPcPtsPlannedRaw.slugs,
  rawDate: ForumMessagePtsServerPcPtsPlannedRaw.rawDate,
  dates: ['2024-08-07T08:00:00.000Z'],
  type: ForumMessagePtsServerPcPtsPlannedRaw.type,
  support: ForumMessagePtsServerPcPtsPlannedRaw.support,
  zone: ForumMessagePtsServerPcPtsPlannedRaw.zone,
  status: ForumMessagePtsServerPcPtsPlannedRaw.status,
};
const ForumMessagePtsServerPcPtsPlanned: MaintenanceEsoStatus = {
  raw: ForumMessagePtsServerPcPtsPlannedRaw,
  slug: 'server_pc_pts',
  beginnerAt: '2024-08-07T08:00:00.000Z',
};

const ForumMessagePtsServerPcPtsUpRaw: RawEsoStatus = {
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

const ForumMessagePtsServerPcPtsDownRaw: RawEsoStatus = {
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

const ForumMessageServiceStoreEsoPlannedRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/'],
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
      .set('months', 7)
      .set('date', 7)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
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
const ForumMessageServiceStoreEsoPlannedRawStringDate: CustomRawEsoStatus = {
  sources: ForumMessageServiceStoreEsoPlannedRaw.sources,
  raw: ForumMessageServiceStoreEsoPlannedRaw.raw,
  slugs: ForumMessageServiceStoreEsoPlannedRaw.slugs,
  rawDate: ForumMessageServiceStoreEsoPlannedRaw.rawDate,
  dates: ['2024-08-07T08:00:00.000Z', '2024-08-07T16:00:00.000Z'],
  type: ForumMessageServiceStoreEsoPlannedRaw.type,
  support: ForumMessageServiceStoreEsoPlannedRaw.support,
  zone: ForumMessageServiceStoreEsoPlannedRaw.zone,
  status: ForumMessageServiceStoreEsoPlannedRaw.status,
};
const ForumMessageServiceStoreEsoPlanned: MaintenanceEsoStatus = {
  raw: ForumMessageServiceStoreEsoPlannedRaw,
  slug: 'service_store_eso',
  beginnerAt: '2024-08-07T08:00:00.000Z',
  endingAt: '2024-08-07T16:00:00.000Z',
};

const ForumMessageServiceStoreEsoDownRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/'],
  raw: [
    '· [IN PROGRESS] ESO Store and Account System for maintenance – August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  ],
  slugs: ['service_store_eso'],
  rawDate: 'August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 7)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
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
const ForumMessageServiceStoreEsoDownRawStringDate: CustomRawEsoStatus = {
  sources: ForumMessageServiceStoreEsoDownRaw.sources,
  raw: ForumMessageServiceStoreEsoDownRaw.raw,
  slugs: ForumMessageServiceStoreEsoDownRaw.slugs,
  rawDate: ForumMessageServiceStoreEsoDownRaw.rawDate,
  dates: ['2024-08-07T08:00:00.000Z', '2024-08-07T16:00:00.000Z'],
  type: ForumMessageServiceStoreEsoDownRaw.type,
  support: ForumMessageServiceStoreEsoDownRaw.support,
  zone: ForumMessageServiceStoreEsoDownRaw.zone,
  status: ForumMessageServiceStoreEsoDownRaw.status,
};
const ForumMessageServiceStoreEsoDown: EsoStatus = {
  slug: 'service_store_eso',
  status: 'down',
  type: 'service',
  support: 'store',
  zone: 'eso',
  raw: ForumMessageServiceStoreEsoDownRaw,
};

const ForumMessageServiceStoreEsoUpRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/'],
  raw: [
    '· [COMPLETE] ESO Store and Account System for maintenance – August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  ],
  slugs: ['service_store_eso'],
  rawDate: 'August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 7)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
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
const ForumMessageServiceStoreEsoUpRawStringDate: CustomRawEsoStatus = {
  sources: ForumMessageServiceStoreEsoUpRaw.sources,
  raw: ForumMessageServiceStoreEsoUpRaw.raw,
  slugs: ForumMessageServiceStoreEsoUpRaw.slugs,
  rawDate: ForumMessageServiceStoreEsoUpRaw.rawDate,
  dates: ['2024-08-07T08:00:00.000Z', '2024-08-07T16:00:00.000Z'],
  type: ForumMessageServiceStoreEsoUpRaw.type,
  support: ForumMessageServiceStoreEsoUpRaw.support,
  zone: ForumMessageServiceStoreEsoUpRaw.zone,
  status: ForumMessageServiceStoreEsoUpRaw.status,
};
const ForumMessageServiceStoreEsoUp: EsoStatus = {
  slug: 'service_store_eso',
  status: 'up',
  type: 'service',
  support: 'store',
  zone: 'eso',
  raw: ForumMessageServiceStoreEsoUpRaw,
};

const ForumMessageServiceSystemAccountPlannedRaw: RawEsoStatus = {
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
      .set('months', 7)
      .set('date', 7)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
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
const ForumMessageServiceSystemAccountPlannedRawStringDate: CustomRawEsoStatus =
  {
    sources: ForumMessageServiceSystemAccountPlannedRaw.sources,
    raw: ForumMessageServiceSystemAccountPlannedRaw.raw,
    slugs: ForumMessageServiceSystemAccountPlannedRaw.slugs,
    rawDate: ForumMessageServiceSystemAccountPlannedRaw.rawDate,
    dates: ['2024-08-07T08:00:00.000Z', '2024-08-07T16:00:00.000Z'],
    type: ForumMessageServiceSystemAccountPlannedRaw.type,
    support: ForumMessageServiceSystemAccountPlannedRaw.support,
    zone: ForumMessageServiceSystemAccountPlannedRaw.zone,
    status: ForumMessageServiceSystemAccountPlannedRaw.status,
  };
const ForumMessageServiceSystemAccountPlanned: MaintenanceEsoStatus = {
  raw: ForumMessageServiceSystemAccountPlannedRaw,
  slug: 'service_system_account',
  beginnerAt: '2024-08-07T08:00:00.000Z',
  endingAt: '2024-08-07T16:00:00.000Z',
};

const ForumMessageServiceSystemAccountDownRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/'],
  raw: [
    '· [IN PROGRESS] ESO Store and Account System for maintenance – August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  ],
  slugs: ['service_system_account'],
  rawDate: 'August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 7)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
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
const ForumMessageServiceSystemAccountDownRawStringDate: CustomRawEsoStatus = {
  sources: ForumMessageServiceSystemAccountDownRaw.sources,
  raw: ForumMessageServiceSystemAccountDownRaw.raw,
  slugs: ForumMessageServiceSystemAccountDownRaw.slugs,
  rawDate: ForumMessageServiceSystemAccountDownRaw.rawDate,
  dates: ['2024-08-07T08:00:00.000Z', '2024-08-07T16:00:00.000Z'],
  type: ForumMessageServiceSystemAccountDownRaw.type,
  support: ForumMessageServiceSystemAccountDownRaw.support,
  zone: ForumMessageServiceSystemAccountDownRaw.zone,
  status: ForumMessageServiceSystemAccountDownRaw.status,
};
const ForumMessageServiceSystemAccountDown: EsoStatus = {
  slug: 'service_system_account',
  status: 'down',
  type: 'service',
  support: 'system',
  zone: 'account',
  raw: ForumMessageServiceSystemAccountDownRaw,
};

const ForumMessageServiceSystemAccountUpRaw: RawEsoStatus = {
  sources: ['https://forums.elderscrollsonline.com/'],
  raw: [
    '· [COMPLETE] ESO Store and Account System for maintenance – August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  ],
  slugs: ['service_system_account'],
  rawDate: 'August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 7)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
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
const ForumMessageServiceSystemAccountUpRawStringDate: CustomRawEsoStatus = {
  sources: ForumMessageServiceSystemAccountUpRaw.sources,
  raw: ForumMessageServiceSystemAccountUpRaw.raw,
  slugs: ForumMessageServiceSystemAccountUpRaw.slugs,
  rawDate: ForumMessageServiceSystemAccountUpRaw.rawDate,
  dates: ['2024-08-07T08:00:00.000Z', '2024-08-07T16:00:00.000Z'],
  type: ForumMessageServiceSystemAccountUpRaw.type,
  support: ForumMessageServiceSystemAccountUpRaw.support,
  zone: ForumMessageServiceSystemAccountUpRaw.zone,
  status: ForumMessageServiceSystemAccountUpRaw.status,
};
const ForumMessageServiceSystemAccountUp: EsoStatus = {
  slug: 'service_system_account',
  status: 'up',
  type: 'service',
  support: 'system',
  zone: 'account',
  raw: ForumMessageServiceSystemAccountUpRaw,
};

const initial: Initial = {
  logs: [
    {
      connector: 'LiveServices',
      serviceId: 1,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerXboxNaUpRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 2,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerXboxEuUpRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 3,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPsNaUpRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 4,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPsEuUpRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 5,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPcNaUpRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 6,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPcEuUpRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 7,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPcPtsUpRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 1,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerXboxNaUpRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 2,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerXboxEuUpRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 3,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPsNaUpRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 4,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPsEuUpRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 5,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPcNaUpRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 6,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPcEuUpRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 7,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPcPtsUpRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 11,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServiceStoreEsoUpRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 12,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServiceSystemAccountUpRaw),
    },
    {
      connector: 'ForumMessagePts',
      serviceId: 7,
      statusId: 1,
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsUpRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 11,
      statusId: 1,
      rawData: JSON.stringify(ForumMessageServiceStoreEsoUpRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 12,
      statusId: 1,
      rawData: JSON.stringify(ForumMessageServiceSystemAccountUpRaw),
    },
  ],
  archives: [
    {
      connector: 'LiveServices',
      serviceId: 1,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerXboxNaUpRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 2,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerXboxEuUpRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 3,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPsNaUpRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 4,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPsEuUpRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 5,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPcNaUpRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 6,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPcEuUpRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 7,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPcPtsUpRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 1,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerXboxNaUpRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 2,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerXboxEuUpRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 3,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPsNaUpRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 4,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPsEuUpRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 5,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPcNaUpRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 6,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPcEuUpRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 7,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPcPtsUpRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 11,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServiceStoreEsoUpRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 12,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServiceSystemAccountUpRaw),
    },
    {
      connector: 'ForumMessagePts',
      serviceId: 7,
      statusId: 1,
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsUpRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 11,
      statusId: 1,
      rawData: JSON.stringify(ForumMessageServiceStoreEsoUpRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 12,
      statusId: 1,
      rawData: JSON.stringify(ForumMessageServiceSystemAccountUpRaw),
    },
  ],
  services: [
    {
      id: 1,
      slugId: 1,
      statusId: 1,
      typeId: 1,
      supportId: 6,
      zoneId: 2,
      rawData: JSON.stringify(LiveServicesServerXboxNaUpRaw),
    },
    {
      id: 2,
      slugId: 2,
      statusId: 1,
      typeId: 1,
      supportId: 6,
      zoneId: 1,
      rawData: JSON.stringify(LiveServicesServerXboxEuUpRaw),
    },
    {
      id: 3,
      slugId: 3,
      statusId: 1,
      typeId: 1,
      supportId: 5,
      zoneId: 2,
      rawData: JSON.stringify(LiveServicesServerPsNaUpRaw),
    },
    {
      id: 4,
      slugId: 4,
      statusId: 1,
      typeId: 1,
      supportId: 5,
      zoneId: 1,
      rawData: JSON.stringify(LiveServicesServerPsEuUpRaw),
    },
    {
      id: 5,
      slugId: 5,
      statusId: 1,
      typeId: 1,
      supportId: 4,
      zoneId: 2,
      rawData: JSON.stringify(LiveServicesServerPcNaUpRaw),
    },
    {
      id: 6,
      slugId: 6,
      statusId: 1,
      typeId: 1,
      supportId: 4,
      zoneId: 1,
      rawData: JSON.stringify(LiveServicesServerPcEuUpRaw),
    },
    {
      id: 7,
      slugId: 7,
      statusId: 1,
      typeId: 1,
      supportId: 4,
      zoneId: 3,
      rawData: JSON.stringify(LiveServicesServerPcPtsUpRaw),
    },
    {
      id: 11,
      slugId: 11,
      statusId: 1,
      typeId: 2,
      supportId: 2,
      zoneId: 6,
      rawData: JSON.stringify(ServiceAlertsServiceStoreEsoUpRaw),
    },
    {
      id: 12,
      slugId: 12,
      statusId: 1,
      typeId: 2,
      supportId: 3,
      zoneId: 8,
      rawData: JSON.stringify(ServiceAlertsServiceSystemAccountUpRaw),
    },
  ],
  maintenances: [],
  serviceControllerReturn: [
    {
      slug: 'server_xbox_na',
      status: 'up',
      type: 'server',
      support: 'xbox',
      zone: 'na',
      raw: LiveServicesServerXboxNaUpRawStringDate,
    },
    {
      slug: 'server_xbox_eu',
      status: 'up',
      type: 'server',
      support: 'xbox',
      zone: 'eu',
      raw: LiveServicesServerXboxEuUpRawStringDate,
    },
    {
      slug: 'server_ps_na',
      status: 'up',
      type: 'server',
      support: 'ps',
      zone: 'na',
      raw: LiveServicesServerPsNaUpRawStringDate,
    },
    {
      slug: 'server_ps_eu',
      status: 'up',
      type: 'server',
      support: 'ps',
      zone: 'eu',
      raw: LiveServicesServerPsEuUpRawStringDate,
    },
    {
      slug: 'server_pc_na',
      status: 'up',
      type: 'server',
      support: 'pc',
      zone: 'na',
      raw: LiveServicesServerPcNaUpRawStringDate,
    },
    {
      slug: 'server_pc_eu',
      status: 'up',
      type: 'server',
      support: 'pc',
      zone: 'eu',
      raw: LiveServicesServerPcEuUpRawStringDate,
    },
    {
      slug: 'server_pc_pts',
      status: 'up',
      type: 'server',
      support: 'pc',
      zone: 'pts',
      raw: LiveServicesServerPcPtsUpRawStringDate,
    },
    {
      slug: 'service_store_eso',
      status: 'up',
      type: 'service',
      support: 'store',
      zone: 'eso',
      raw: ServiceAlertsServiceStoreEsoUpRawStringDate,
    },
    {
      slug: 'service_system_account',
      status: 'up',
      type: 'service',
      support: 'system',
      zone: 'account',
      raw: ServiceAlertsServiceSystemAccountUpRawStringDate,
    },
  ],
};

// Initial state
const InitialStateLiveServices: Step = {
  connector: 'LiveServices',
  connectorData: [
    LiveServicesServerPcEuUpRaw,
    LiveServicesServerPcNaUpRaw,
    LiveServicesServerPsEuUpRaw,
    LiveServicesServerPsNaUpRaw,
    LiveServicesServerPcPtsUpRaw,
    LiveServicesServerXboxEuUpRaw,
    LiveServicesServerXboxNaUpRaw,
  ],
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: initial.logs,
  archives: initial.archives,
  services: initial.services,
  maintenances: initial.maintenances,
  serviceControllerReturn: initial.serviceControllerReturn,
};
const InitialStateForumMessage: Step = {
  connector: 'ForumMessage',
  connectorData: [],
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: initial.logs,
  archives: initial.archives,
  services: initial.services,
  maintenances: initial.maintenances,
  serviceControllerReturn: initial.serviceControllerReturn,
};
const InitialStateForumMessagePts: Step = {
  connector: 'ForumMessagePts',
  connectorData: [],
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: initial.logs,
  archives: initial.archives,
  services: initial.services,
  maintenances: initial.maintenances,
  serviceControllerReturn: initial.serviceControllerReturn,
};
const InitialStateServiceAlerts: Step = {
  connector: 'ServiceAlerts',
  connectorData: [
    ServiceAlertsServerPcEuUpRaw,
    ServiceAlertsServerPcNaUpRaw,
    ServiceAlertsServerPsEuUpRaw,
    ServiceAlertsServerPsNaUpRaw,
    ServiceAlertsServerPcPtsUpRaw,
    ServiceAlertsServerXboxEuUpRaw,
    ServiceAlertsServerXboxNaUpRaw,
    ServiceAlertsServiceStoreEsoUpRaw,
    ServiceAlertsServiceSystemAccountUpRaw,
  ],
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: initial.logs,
  archives: initial.archives,
  services: initial.services,
  maintenances: initial.maintenances,
  serviceControllerReturn: initial.serviceControllerReturn,
};

// Forum message planned (service_store_eso, service_system_account)
// connectorData => changed
// maintenancePlannedList => emitted for service_store_eso and service_system_account
// log => created for service_store_eso and service_system_account
// archive => updated (statusId and rawData) for service_store_eso and service_system_account
// maintenance => created for service_store_eso and service_system_account
// serviceControllerReturn => updated (maintenance) for service_store_eso and service_system_account
const FirstForumMessagePlannedForumMessage: Step = {
  connector: InitialStateForumMessage.connector,
  connectorData: [
    // changed
    ForumMessageServiceStoreEsoPlannedRaw,
    ForumMessageServiceSystemAccountPlannedRaw,
  ],
  statusUpdateList: [],
  maintenancePlannedList: [
    ForumMessageServiceStoreEsoPlanned, // emitted
    ForumMessageServiceSystemAccountPlanned, // emitted
  ],
  maintenanceRemovedList: [],
  logs: [
    ...initial.logs,
    {
      // created
      connector: 'ForumMessage',
      serviceId: 11,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServiceStoreEsoPlannedRaw),
    },
    {
      // created
      connector: 'ForumMessage',
      serviceId: 12,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServiceSystemAccountPlannedRaw),
    },
  ],
  archives: [
    initial.archives[0],
    initial.archives[1],
    initial.archives[2],
    initial.archives[3],
    initial.archives[4],
    initial.archives[5],
    initial.archives[6],
    initial.archives[7],
    initial.archives[8],
    initial.archives[9],
    initial.archives[10],
    initial.archives[11],
    initial.archives[12],
    initial.archives[13],
    initial.archives[14],
    initial.archives[15],
    initial.archives[16],
    {
      connector: initial.archives[17].connector,
      serviceId: initial.archives[17].serviceId,
      statusId: 4, // Updated from 1
      rawData: JSON.stringify(ForumMessageServiceStoreEsoPlannedRaw), // Updated from ForumMessageServiceStoreEsoUpRaw
    },
    {
      connector: initial.archives[18].connector,
      serviceId: initial.archives[18].serviceId,
      statusId: 4, // Updated from 1
      rawData: JSON.stringify(ForumMessageServiceSystemAccountPlannedRaw), // Updated from ForumMessageServiceSystemAccountUpRaw
    },
  ],
  services: initial.services,
  maintenances: [
    {
      // created
      serviceId: 11,
      beginnerAt: new Date(ForumMessageServiceStoreEsoPlanned.beginnerAt),
      endingAt: new Date(ForumMessageServiceStoreEsoPlanned.endingAt),
      rawData: JSON.stringify(ForumMessageServiceStoreEsoPlannedRaw),
    },
    {
      // created
      serviceId: 12,
      beginnerAt: new Date(ForumMessageServiceSystemAccountPlanned.beginnerAt),
      endingAt: new Date(ForumMessageServiceSystemAccountPlanned.endingAt),
      rawData: JSON.stringify(ForumMessageServiceSystemAccountPlannedRaw),
    },
  ],
  serviceControllerReturn: [
    initial.serviceControllerReturn[0],
    initial.serviceControllerReturn[1],
    initial.serviceControllerReturn[2],
    initial.serviceControllerReturn[3],
    initial.serviceControllerReturn[4],
    initial.serviceControllerReturn[5],
    initial.serviceControllerReturn[6],
    {
      slug: initial.serviceControllerReturn[7].slug,
      status: initial.serviceControllerReturn[7].status,
      type: initial.serviceControllerReturn[7].type,
      support: initial.serviceControllerReturn[7].support,
      zone: initial.serviceControllerReturn[7].zone,
      raw: initial.serviceControllerReturn[7].raw,
      maintenance: {
        // created
        raw: ForumMessageServiceStoreEsoPlannedRawStringDate,
        slug: ForumMessageServiceStoreEsoPlannedRawStringDate.slugs[0],
        beginnerAt: ForumMessageServiceStoreEsoPlannedRawStringDate.dates[0],
        endingAt: ForumMessageServiceStoreEsoPlannedRawStringDate.dates[1],
      },
    },
    {
      slug: initial.serviceControllerReturn[8].slug,
      status: initial.serviceControllerReturn[8].status,
      type: initial.serviceControllerReturn[8].type,
      support: initial.serviceControllerReturn[8].support,
      zone: initial.serviceControllerReturn[8].zone,
      raw: initial.serviceControllerReturn[8].raw,
      maintenance: {
        // created
        raw: ForumMessageServiceSystemAccountPlannedRawStringDate,
        slug: ForumMessageServiceSystemAccountPlannedRawStringDate.slugs[0],
        beginnerAt:
          ForumMessageServiceSystemAccountPlannedRawStringDate.dates[0],
        endingAt: ForumMessageServiceSystemAccountPlannedRawStringDate.dates[1],
      },
    },
  ],
};
const ForumMessagePlannedForumMessage: Step = {
  connector: FirstForumMessagePlannedForumMessage.connector,
  connectorData: FirstForumMessagePlannedForumMessage.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessagePlannedForumMessage.logs,
  archives: FirstForumMessagePlannedForumMessage.archives,
  services: FirstForumMessagePlannedForumMessage.services,
  maintenances: FirstForumMessagePlannedForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessagePlannedForumMessage.serviceControllerReturn,
};
const ForumMessagePlannedForumMessagePts: Step = {
  connector: InitialStateForumMessagePts.connector,
  connectorData: InitialStateForumMessagePts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessagePlannedForumMessage.logs,
  archives: FirstForumMessagePlannedForumMessage.archives,
  services: FirstForumMessagePlannedForumMessage.services,
  maintenances: FirstForumMessagePlannedForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessagePlannedForumMessage.serviceControllerReturn,
};
const ForumMessagePlannedLiveServices: Step = {
  connector: InitialStateLiveServices.connector,
  connectorData: InitialStateLiveServices.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessagePlannedForumMessage.logs,
  archives: FirstForumMessagePlannedForumMessage.archives,
  services: FirstForumMessagePlannedForumMessage.services,
  maintenances: FirstForumMessagePlannedForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessagePlannedForumMessage.serviceControllerReturn,
};
const ForumMessagePlannedServiceAlerts: Step = {
  connector: InitialStateServiceAlerts.connector,
  connectorData: InitialStateServiceAlerts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessagePlannedForumMessage.logs,
  archives: FirstForumMessagePlannedForumMessage.archives,
  services: FirstForumMessagePlannedForumMessage.services,
  maintenances: FirstForumMessagePlannedForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessagePlannedForumMessage.serviceControllerReturn,
};

// Forum message pts planned (server_pc_pts)
// connectorData => changed
// maintenancePlannedList => emitted for server_pc_pts
// log => created for server_pc_pts
// archive => updated (statusId and rawData) for server_pc_pts
// maintenance => created for server_pc_pts
// serviceControllerReturn => updated (maintenance) for server_pc_pts
const FirstForumMessagePtsPlannedForumMessagePts: Step = {
  connector: ForumMessagePlannedForumMessagePts.connector,
  connectorData: [ForumMessagePtsServerPcPtsPlannedRaw], // changed
  statusUpdateList: [],
  maintenancePlannedList: [ForumMessagePtsServerPcPtsPlanned], // emitted
  maintenanceRemovedList: [],
  logs: [
    ...FirstForumMessagePlannedForumMessage.logs,
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 7,
      statusId: 4,
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsPlannedRaw),
    },
  ],
  archives: [
    FirstForumMessagePlannedForumMessage.archives[0],
    FirstForumMessagePlannedForumMessage.archives[1],
    FirstForumMessagePlannedForumMessage.archives[2],
    FirstForumMessagePlannedForumMessage.archives[3],
    FirstForumMessagePlannedForumMessage.archives[4],
    FirstForumMessagePlannedForumMessage.archives[5],
    FirstForumMessagePlannedForumMessage.archives[6],
    FirstForumMessagePlannedForumMessage.archives[7],
    FirstForumMessagePlannedForumMessage.archives[8],
    FirstForumMessagePlannedForumMessage.archives[9],
    FirstForumMessagePlannedForumMessage.archives[10],
    FirstForumMessagePlannedForumMessage.archives[11],
    FirstForumMessagePlannedForumMessage.archives[12],
    FirstForumMessagePlannedForumMessage.archives[13],
    FirstForumMessagePlannedForumMessage.archives[14],
    FirstForumMessagePlannedForumMessage.archives[15],
    {
      connector: FirstForumMessagePlannedForumMessage.archives[16].connector,
      serviceId: FirstForumMessagePlannedForumMessage.archives[16].serviceId,
      statusId: 4, // Updated from 1
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsPlannedRaw), // Updated form ForumMessagePtsServerPcPtsUpRaw
    },
    FirstForumMessagePlannedForumMessage.archives[17],
    FirstForumMessagePlannedForumMessage.archives[18],
  ],
  services: FirstForumMessagePlannedForumMessage.services,
  maintenances: [
    ...FirstForumMessagePlannedForumMessage.maintenances,
    {
      // created
      serviceId: 7,
      beginnerAt: new Date(ForumMessagePtsServerPcPtsPlanned.beginnerAt),
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsPlannedRaw),
    },
  ],
  serviceControllerReturn: [
    FirstForumMessagePlannedForumMessage.serviceControllerReturn[0],
    FirstForumMessagePlannedForumMessage.serviceControllerReturn[1],
    FirstForumMessagePlannedForumMessage.serviceControllerReturn[2],
    FirstForumMessagePlannedForumMessage.serviceControllerReturn[3],
    FirstForumMessagePlannedForumMessage.serviceControllerReturn[4],
    FirstForumMessagePlannedForumMessage.serviceControllerReturn[5],
    {
      slug: FirstForumMessagePlannedForumMessage.serviceControllerReturn[6]
        .slug,
      status:
        FirstForumMessagePlannedForumMessage.serviceControllerReturn[6].status,
      type: FirstForumMessagePlannedForumMessage.serviceControllerReturn[6]
        .type,
      support:
        FirstForumMessagePlannedForumMessage.serviceControllerReturn[6].support,
      zone: FirstForumMessagePlannedForumMessage.serviceControllerReturn[6]
        .zone,
      raw: FirstForumMessagePlannedForumMessage.serviceControllerReturn[6].raw,
      maintenance: {
        // created
        raw: ForumMessagePtsServerPcPtsPlannedRawStringDate,
        slug: ForumMessagePtsServerPcPtsPlannedRawStringDate.slugs[0],
        beginnerAt: ForumMessagePtsServerPcPtsPlannedRawStringDate.dates[0],
        endingAt: ForumMessagePtsServerPcPtsPlannedRawStringDate.dates[1],
      },
    },
    FirstForumMessagePlannedForumMessage.serviceControllerReturn[7],
    FirstForumMessagePlannedForumMessage.serviceControllerReturn[8],
  ],
};
const ForumMessagePtsPlannedForumMessagePts: Step = {
  connector: FirstForumMessagePtsPlannedForumMessagePts.connector,
  connectorData: FirstForumMessagePtsPlannedForumMessagePts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessagePtsPlannedForumMessagePts.logs,
  archives: FirstForumMessagePtsPlannedForumMessagePts.archives,
  services: FirstForumMessagePtsPlannedForumMessagePts.services,
  maintenances: FirstForumMessagePtsPlannedForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn,
};
const ForumMessagePtsPlannedLiveServices: Step = {
  connector: ForumMessagePlannedLiveServices.connector,
  connectorData: ForumMessagePlannedLiveServices.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessagePtsPlannedForumMessagePts.logs,
  archives: FirstForumMessagePtsPlannedForumMessagePts.archives,
  services: FirstForumMessagePtsPlannedForumMessagePts.services,
  maintenances: FirstForumMessagePtsPlannedForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn,
};
const ForumMessagePtsPlannedForumMessage: Step = {
  connector: ForumMessagePlannedForumMessage.connector,
  connectorData: ForumMessagePlannedForumMessage.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessagePtsPlannedForumMessagePts.logs,
  archives: FirstForumMessagePtsPlannedForumMessagePts.archives,
  services: FirstForumMessagePtsPlannedForumMessagePts.services,
  maintenances: FirstForumMessagePtsPlannedForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn,
};
const ForumMessagePtsPlannedServiceAlerts: Step = {
  connector: ForumMessagePlannedServiceAlerts.connector,
  connectorData: ForumMessagePlannedServiceAlerts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessagePtsPlannedForumMessagePts.logs,
  archives: FirstForumMessagePtsPlannedForumMessagePts.archives,
  services: FirstForumMessagePtsPlannedForumMessagePts.services,
  maintenances: FirstForumMessagePtsPlannedForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn,
};

// Live services down (server_pc_pts)
// connectorData => changed
// statusUpdateList => emitted for server_pc_pts
// maintenanceRemovedList => emitted for server_pc_pts
// log => created for server_pc_pts
// archive => updated (statusId and rawData) for server_pc_pts
// service => updated (statusId and rawData) for server_pc_pts
// maintenance => removed for server_pc_pts
// serviceControllerReturn => updated (status and raw and maintenance removed) for server_pc_pts
const FirstLiveServicesDownLiveServices: Step = {
  connector: ForumMessagePtsPlannedLiveServices.connector,
  connectorData: [
    // changed
    LiveServicesServerPcEuUpRaw,
    LiveServicesServerPcNaUpRaw,
    LiveServicesServerPsEuUpRaw,
    LiveServicesServerPsNaUpRaw,
    LiveServicesServerPcPtsDownRaw,
    LiveServicesServerXboxEuUpRaw,
    LiveServicesServerXboxNaUpRaw,
  ],
  statusUpdateList: [LiveServicesServerPcPtsDown], // emitted
  maintenancePlannedList: [],
  maintenanceRemovedList: ['server_pc_pts'], // emitted
  logs: [
    ...FirstForumMessagePtsPlannedForumMessagePts.logs,
    {
      // created
      connector: 'LiveServices',
      serviceId: 7,
      statusId: 2,
      rawData: JSON.stringify(LiveServicesServerPcPtsDownRaw),
    },
  ],
  archives: [
    FirstForumMessagePtsPlannedForumMessagePts.archives[0],
    FirstForumMessagePtsPlannedForumMessagePts.archives[1],
    FirstForumMessagePtsPlannedForumMessagePts.archives[2],
    FirstForumMessagePtsPlannedForumMessagePts.archives[3],
    FirstForumMessagePtsPlannedForumMessagePts.archives[4],
    FirstForumMessagePtsPlannedForumMessagePts.archives[5],
    {
      connector:
        FirstForumMessagePtsPlannedForumMessagePts.archives[6].connector,
      serviceId:
        FirstForumMessagePtsPlannedForumMessagePts.archives[6].serviceId,
      statusId: 2, // Updated from 1
      rawData: JSON.stringify(LiveServicesServerPcPtsDownRaw), // Updated from LiveServicesServerPcPtsUpRaw
    },
    FirstForumMessagePtsPlannedForumMessagePts.archives[7],
    FirstForumMessagePtsPlannedForumMessagePts.archives[8],
    FirstForumMessagePtsPlannedForumMessagePts.archives[9],
    FirstForumMessagePtsPlannedForumMessagePts.archives[10],
    FirstForumMessagePtsPlannedForumMessagePts.archives[11],
    FirstForumMessagePtsPlannedForumMessagePts.archives[12],
    FirstForumMessagePtsPlannedForumMessagePts.archives[13],
    FirstForumMessagePtsPlannedForumMessagePts.archives[14],
    FirstForumMessagePtsPlannedForumMessagePts.archives[15],
    FirstForumMessagePtsPlannedForumMessagePts.archives[16],
    FirstForumMessagePtsPlannedForumMessagePts.archives[17],
    FirstForumMessagePtsPlannedForumMessagePts.archives[18],
  ],
  services: [
    FirstForumMessagePtsPlannedForumMessagePts.services[0],
    FirstForumMessagePtsPlannedForumMessagePts.services[1],
    FirstForumMessagePtsPlannedForumMessagePts.services[2],
    FirstForumMessagePtsPlannedForumMessagePts.services[3],
    FirstForumMessagePtsPlannedForumMessagePts.services[4],
    FirstForumMessagePtsPlannedForumMessagePts.services[5],
    {
      id: FirstForumMessagePtsPlannedForumMessagePts.services[6].id,
      slugId: FirstForumMessagePtsPlannedForumMessagePts.services[6].slugId,
      statusId: 2, // Updated from 1
      typeId: FirstForumMessagePtsPlannedForumMessagePts.services[6].typeId,
      supportId:
        FirstForumMessagePtsPlannedForumMessagePts.services[6].supportId,
      zoneId: FirstForumMessagePtsPlannedForumMessagePts.services[6].zoneId,
      rawData: JSON.stringify(LiveServicesServerPcPtsDownRaw), // Updated from LiveServicesServerPcPtsUpRaw
    },
    FirstForumMessagePtsPlannedForumMessagePts.services[7],
    FirstForumMessagePtsPlannedForumMessagePts.services[8],
  ],
  maintenances: [
    {
      serviceId: 11,
      beginnerAt: new Date(ForumMessageServiceStoreEsoPlanned.beginnerAt),
      endingAt: new Date(ForumMessageServiceStoreEsoPlanned.endingAt),
      rawData: JSON.stringify(ForumMessageServiceStoreEsoPlannedRaw),
    },
    {
      serviceId: 12,
      beginnerAt: new Date(ForumMessageServiceSystemAccountPlanned.beginnerAt),
      endingAt: new Date(ForumMessageServiceSystemAccountPlanned.endingAt),
      rawData: JSON.stringify(ForumMessageServiceSystemAccountPlannedRaw),
    },
  ],
  serviceControllerReturn: [
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn[0],
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn[1],
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn[2],
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn[3],
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn[4],
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn[5],
    {
      slug: FirstForumMessagePtsPlannedForumMessagePts
        .serviceControllerReturn[6].slug,
      status: 'down', // Updated from up
      type: FirstForumMessagePtsPlannedForumMessagePts
        .serviceControllerReturn[6].type,
      support:
        FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn[6]
          .support,
      zone: FirstForumMessagePtsPlannedForumMessagePts
        .serviceControllerReturn[6].zone,
      raw: LiveServicesServerPcPtsDownRawStringDate, // Updated from LiveServicesServerPcPtsUpRawStringDate
    },
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn[7],
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn[8],
  ],
};
const LiveServicesDownLiveServices: Step = {
  connector: FirstLiveServicesDownLiveServices.connector,
  connectorData: FirstLiveServicesDownLiveServices.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstLiveServicesDownLiveServices.logs,
  archives: FirstLiveServicesDownLiveServices.archives,
  services: FirstLiveServicesDownLiveServices.services,
  maintenances: FirstLiveServicesDownLiveServices.maintenances,
  serviceControllerReturn:
    FirstLiveServicesDownLiveServices.serviceControllerReturn,
};
const LiveServicesDownForumMessage: Step = {
  connector: ForumMessagePtsPlannedForumMessage.connector,
  connectorData: ForumMessagePtsPlannedForumMessage.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstLiveServicesDownLiveServices.logs,
  archives: FirstLiveServicesDownLiveServices.archives,
  services: FirstLiveServicesDownLiveServices.services,
  maintenances: FirstLiveServicesDownLiveServices.maintenances,
  serviceControllerReturn:
    FirstLiveServicesDownLiveServices.serviceControllerReturn,
};
const LiveServicesDownForumMessagePts: Step = {
  connector: ForumMessagePtsPlannedForumMessagePts.connector,
  connectorData: ForumMessagePtsPlannedForumMessagePts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstLiveServicesDownLiveServices.logs,
  archives: FirstLiveServicesDownLiveServices.archives,
  services: FirstLiveServicesDownLiveServices.services,
  maintenances: FirstLiveServicesDownLiveServices.maintenances,
  serviceControllerReturn:
    FirstLiveServicesDownLiveServices.serviceControllerReturn,
};
const LiveServicesDownServiceAlerts: Step = {
  connector: ForumMessagePtsPlannedServiceAlerts.connector,
  connectorData: ForumMessagePtsPlannedServiceAlerts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstLiveServicesDownLiveServices.logs,
  archives: FirstLiveServicesDownLiveServices.archives,
  services: FirstLiveServicesDownLiveServices.services,
  maintenances: FirstLiveServicesDownLiveServices.maintenances,
  serviceControllerReturn:
    FirstLiveServicesDownLiveServices.serviceControllerReturn,
};

// Forum message down (service_store_eso, service_system_account)
// connectorData => changed
// statusUpdateList => emitted for service_store_eso and service_system_account
// maintenanceRemovedList => emitted for service_store_eso and service_system_account
// log => created for service_store_eso and service_system_account
// archive => updated (statusId and rawData) for service_store_eso and service_system_account
// service => updated (statusId and rawData) for service_store_eso and service_system_account
// maintenance => removed for service_store_eso and service_system_account
// serviceControllerReturn => updated (status and raw and maintenance removed) for service_store_eso and service_system_account
const FirstForumMessageDownForumMessage: Step = {
  connector: LiveServicesDownForumMessage.connector,
  connectorData: [
    // changed
    ForumMessageServiceStoreEsoDownRaw,
    ForumMessageServiceSystemAccountDownRaw,
  ],
  statusUpdateList: [
    // emitted
    ForumMessageServiceStoreEsoDown,
    ForumMessageServiceSystemAccountDown,
  ],
  maintenancePlannedList: [],
  maintenanceRemovedList: ['service_store_eso', 'service_system_account'], // emitted
  logs: [
    ...FirstLiveServicesDownLiveServices.logs,
    {
      // created
      connector: 'ForumMessage',
      serviceId: 11,
      statusId: 2,
      rawData: JSON.stringify(ForumMessageServiceStoreEsoDownRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 12,
      statusId: 2,
      rawData: JSON.stringify(ForumMessageServiceSystemAccountDownRaw),
    },
  ],
  archives: [
    FirstLiveServicesDownLiveServices.archives[0],
    FirstLiveServicesDownLiveServices.archives[1],
    FirstLiveServicesDownLiveServices.archives[2],
    FirstLiveServicesDownLiveServices.archives[3],
    FirstLiveServicesDownLiveServices.archives[4],
    FirstLiveServicesDownLiveServices.archives[5],
    FirstLiveServicesDownLiveServices.archives[6],
    FirstLiveServicesDownLiveServices.archives[7],
    FirstLiveServicesDownLiveServices.archives[8],
    FirstLiveServicesDownLiveServices.archives[9],
    FirstLiveServicesDownLiveServices.archives[10],
    FirstLiveServicesDownLiveServices.archives[11],
    FirstLiveServicesDownLiveServices.archives[12],
    FirstLiveServicesDownLiveServices.archives[13],
    FirstLiveServicesDownLiveServices.archives[14],
    FirstLiveServicesDownLiveServices.archives[15],
    FirstLiveServicesDownLiveServices.archives[16],
    {
      connector: FirstLiveServicesDownLiveServices.archives[17].connector,
      serviceId: FirstLiveServicesDownLiveServices.archives[17].serviceId,
      statusId: 2, // Updated from 4
      rawData: JSON.stringify(ForumMessageServiceStoreEsoDownRaw), // Updated from ForumMessageServiceStoreEsoPlannedRaw
    },
    {
      connector: FirstLiveServicesDownLiveServices.archives[18].connector,
      serviceId: FirstLiveServicesDownLiveServices.archives[18].serviceId,
      statusId: 2, // Updated from 4
      rawData: JSON.stringify(ForumMessageServiceSystemAccountDownRaw), // Updated from ForumMessageServiceSystemAccountPlannedRaw
    },
  ],
  services: [
    FirstLiveServicesDownLiveServices.services[0],
    FirstLiveServicesDownLiveServices.services[1],
    FirstLiveServicesDownLiveServices.services[2],
    FirstLiveServicesDownLiveServices.services[3],
    FirstLiveServicesDownLiveServices.services[4],
    FirstLiveServicesDownLiveServices.services[5],
    FirstLiveServicesDownLiveServices.services[6],
    {
      id: FirstLiveServicesDownLiveServices.services[7].id,
      slugId: FirstLiveServicesDownLiveServices.services[7].slugId,
      statusId: 2, // Updated from 1
      typeId: FirstLiveServicesDownLiveServices.services[7].typeId,
      supportId: FirstLiveServicesDownLiveServices.services[7].supportId,
      zoneId: FirstLiveServicesDownLiveServices.services[7].zoneId,
      rawData: JSON.stringify(ForumMessageServiceStoreEsoDownRaw), // Updated from ForumMessageServiceStoreEsoUpRaw
    },
    {
      id: FirstLiveServicesDownLiveServices.services[8].id,
      slugId: FirstLiveServicesDownLiveServices.services[8].slugId,
      statusId: 2, // Updated from 1
      typeId: FirstLiveServicesDownLiveServices.services[8].typeId,
      supportId: FirstLiveServicesDownLiveServices.services[8].supportId,
      zoneId: FirstLiveServicesDownLiveServices.services[8].zoneId,
      rawData: JSON.stringify(ForumMessageServiceSystemAccountDownRaw), // Updated from ForumMessageServiceSystemAccountUpRaw
    },
  ],
  maintenances: [],
  serviceControllerReturn: [
    FirstLiveServicesDownLiveServices.serviceControllerReturn[0],
    FirstLiveServicesDownLiveServices.serviceControllerReturn[1],
    FirstLiveServicesDownLiveServices.serviceControllerReturn[2],
    FirstLiveServicesDownLiveServices.serviceControllerReturn[3],
    FirstLiveServicesDownLiveServices.serviceControllerReturn[4],
    FirstLiveServicesDownLiveServices.serviceControllerReturn[5],
    FirstLiveServicesDownLiveServices.serviceControllerReturn[6],
    {
      slug: FirstLiveServicesDownLiveServices.serviceControllerReturn[7].slug,
      status: 'down', // Updated from up
      type: FirstLiveServicesDownLiveServices.serviceControllerReturn[7].type,
      support:
        FirstLiveServicesDownLiveServices.serviceControllerReturn[7].support,
      zone: FirstLiveServicesDownLiveServices.serviceControllerReturn[7].zone,
      raw: ForumMessageServiceStoreEsoDownRawStringDate, // Updated from ForumMessageServiceStoreEsoUpRawStringDate
    },
    {
      slug: FirstLiveServicesDownLiveServices.serviceControllerReturn[8].slug,
      status: 'down', // Updated from up
      type: FirstLiveServicesDownLiveServices.serviceControllerReturn[8].type,
      support:
        FirstLiveServicesDownLiveServices.serviceControllerReturn[8].support,
      zone: FirstLiveServicesDownLiveServices.serviceControllerReturn[8].zone,
      raw: ForumMessageServiceSystemAccountDownRawStringDate, // Updated from ForumMessageServiceSystemAccountUpRawStringDate
    },
  ],
};
const ForumMessageDownForumMessage: Step = {
  connector: FirstForumMessageDownForumMessage.connector,
  connectorData: FirstForumMessageDownForumMessage.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageDownForumMessage.logs,
  archives: FirstForumMessageDownForumMessage.archives,
  services: FirstForumMessageDownForumMessage.services,
  maintenances: FirstForumMessageDownForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageDownForumMessage.serviceControllerReturn,
};
const ForumMessageDownForumMessagePts: Step = {
  connector: LiveServicesDownForumMessagePts.connector,
  connectorData: LiveServicesDownForumMessagePts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageDownForumMessage.logs,
  archives: FirstForumMessageDownForumMessage.archives,
  services: FirstForumMessageDownForumMessage.services,
  maintenances: FirstForumMessageDownForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageDownForumMessage.serviceControllerReturn,
};
const ForumMessageDownLiveServices: Step = {
  connector: LiveServicesDownLiveServices.connector,
  connectorData: LiveServicesDownLiveServices.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageDownForumMessage.logs,
  archives: FirstForumMessageDownForumMessage.archives,
  services: FirstForumMessageDownForumMessage.services,
  maintenances: FirstForumMessageDownForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageDownForumMessage.serviceControllerReturn,
};
const ForumMessageDownServiceAlerts: Step = {
  connector: LiveServicesDownServiceAlerts.connector,
  connectorData: LiveServicesDownServiceAlerts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageDownForumMessage.logs,
  archives: FirstForumMessageDownForumMessage.archives,
  services: FirstForumMessageDownForumMessage.services,
  maintenances: FirstForumMessageDownForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageDownForumMessage.serviceControllerReturn,
};

// Forum message pts down (server_pc_pts)
// connectorData => changed
// log => created for server_pc_pts
// archive => updated (statusId and rawData) for server_pc_pts
const FirstForumMessagePtsDownForumMessagePts: Step = {
  connector: ForumMessageDownForumMessagePts.connector,
  connectorData: [ForumMessagePtsServerPcPtsDownRaw], // changed
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstForumMessageDownForumMessage.logs,
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 7,
      statusId: 2,
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsDownRaw),
    },
  ],
  archives: [
    FirstForumMessageDownForumMessage.archives[0],
    FirstForumMessageDownForumMessage.archives[1],
    FirstForumMessageDownForumMessage.archives[2],
    FirstForumMessageDownForumMessage.archives[3],
    FirstForumMessageDownForumMessage.archives[4],
    FirstForumMessageDownForumMessage.archives[5],
    FirstForumMessageDownForumMessage.archives[6],
    FirstForumMessageDownForumMessage.archives[7],
    FirstForumMessageDownForumMessage.archives[8],
    FirstForumMessageDownForumMessage.archives[9],
    FirstForumMessageDownForumMessage.archives[10],
    FirstForumMessageDownForumMessage.archives[11],
    FirstForumMessageDownForumMessage.archives[12],
    FirstForumMessageDownForumMessage.archives[13],
    FirstForumMessageDownForumMessage.archives[14],
    FirstForumMessageDownForumMessage.archives[15],
    {
      connector: FirstForumMessageDownForumMessage.archives[16].connector,
      serviceId: FirstForumMessageDownForumMessage.archives[16].serviceId,
      statusId: 2, // Updated from 4
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsDownRaw), // Updated from ForumMessagePtsServerPcPtsPlannedRaw
    },
    FirstForumMessageDownForumMessage.archives[17],
    FirstForumMessageDownForumMessage.archives[18],
  ],
  services: FirstForumMessageDownForumMessage.services,
  maintenances: FirstForumMessageDownForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageDownForumMessage.serviceControllerReturn,
};
const ForumMessagePtsDownForumMessagePts: Step = {
  connector: FirstForumMessagePtsDownForumMessagePts.connector,
  connectorData: FirstForumMessagePtsDownForumMessagePts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessagePtsDownForumMessagePts.logs,
  archives: FirstForumMessagePtsDownForumMessagePts.archives,
  services: FirstForumMessagePtsDownForumMessagePts.services,
  maintenances: FirstForumMessagePtsDownForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn,
};
const ForumMessagePtsDownForumMessage: Step = {
  connector: ForumMessageDownForumMessage.connector,
  connectorData: ForumMessageDownForumMessage.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessagePtsDownForumMessagePts.logs,
  archives: FirstForumMessagePtsDownForumMessagePts.archives,
  services: FirstForumMessagePtsDownForumMessagePts.services,
  maintenances: FirstForumMessagePtsDownForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn,
};
const ForumMessagePtsDownLiveServices: Step = {
  connector: ForumMessageDownLiveServices.connector,
  connectorData: ForumMessageDownLiveServices.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessagePtsDownForumMessagePts.logs,
  archives: FirstForumMessagePtsDownForumMessagePts.archives,
  services: FirstForumMessagePtsDownForumMessagePts.services,
  maintenances: FirstForumMessagePtsDownForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn,
};
const ForumMessagePtsDownServiceAlerts: Step = {
  connector: ForumMessageDownServiceAlerts.connector,
  connectorData: ForumMessageDownServiceAlerts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessagePtsDownForumMessagePts.logs,
  archives: FirstForumMessagePtsDownForumMessagePts.archives,
  services: FirstForumMessagePtsDownForumMessagePts.services,
  maintenances: FirstForumMessagePtsDownForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn,
};

// Service alerts down (server_pc_pts, service_store_eso, service_system_account)
// connectorData => changed
// log => created for server_pc_pts, service_store_eso and service_system_account
// archive => updated (statusId and rawData) for server_pc_pts, service_store_eso and service_system_account
const FirstServiceAlertsDownServiceAlerts: Step = {
  connector: ForumMessagePtsDownServiceAlerts.connector,
  connectorData: [
    // changed
    ServiceAlertsServerPcEuUpRaw,
    ServiceAlertsServerPcNaUpRaw,
    ServiceAlertsServerPsEuUpRaw,
    ServiceAlertsServerPsNaUpRaw,
    ServiceAlertsServerPcPtsDownRaw,
    ServiceAlertsServerXboxEuUpRaw,
    ServiceAlertsServerXboxNaUpRaw,
    ServiceAlertsServiceStoreEsoDownRaw,
    ServiceAlertsServiceSystemAccountDownRaw,
  ],
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstForumMessagePtsDownForumMessagePts.logs,
    {
      // created
      connector: 'ServiceAlerts',
      serviceId: 7,
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServerPcPtsDownRaw),
    },
    {
      // created
      connector: 'ServiceAlerts',
      serviceId: 11,
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServiceStoreEsoDownRaw),
    },
    {
      // created
      connector: 'ServiceAlerts',
      serviceId: 12,
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServiceSystemAccountDownRaw),
    },
  ],
  archives: [
    FirstForumMessagePtsDownForumMessagePts.archives[0],
    FirstForumMessagePtsDownForumMessagePts.archives[1],
    FirstForumMessagePtsDownForumMessagePts.archives[2],
    FirstForumMessagePtsDownForumMessagePts.archives[3],
    FirstForumMessagePtsDownForumMessagePts.archives[4],
    FirstForumMessagePtsDownForumMessagePts.archives[5],
    FirstForumMessagePtsDownForumMessagePts.archives[6],
    FirstForumMessagePtsDownForumMessagePts.archives[7],
    FirstForumMessagePtsDownForumMessagePts.archives[8],
    FirstForumMessagePtsDownForumMessagePts.archives[9],
    FirstForumMessagePtsDownForumMessagePts.archives[10],
    FirstForumMessagePtsDownForumMessagePts.archives[11],
    FirstForumMessagePtsDownForumMessagePts.archives[12],
    {
      connector: FirstForumMessagePtsDownForumMessagePts.archives[13].connector,
      serviceId: FirstForumMessagePtsDownForumMessagePts.archives[13].serviceId,
      statusId: 2, // Updated from 1
      rawData: JSON.stringify(ServiceAlertsServerPcPtsDownRaw), // Update from ServiceAlertsServerPcPtsUpRaw
    },
    {
      connector: FirstForumMessagePtsDownForumMessagePts.archives[14].connector,
      serviceId: FirstForumMessagePtsDownForumMessagePts.archives[14].serviceId,
      statusId: 2, // Updated from 1
      rawData: JSON.stringify(ServiceAlertsServiceStoreEsoDownRaw), // Update from ServiceAlertsServiceStoreEsoUpRaw
    },
    {
      connector: FirstForumMessagePtsDownForumMessagePts.archives[15].connector,
      serviceId: FirstForumMessagePtsDownForumMessagePts.archives[15].serviceId,
      statusId: 2, // Updated from 1
      rawData: JSON.stringify(ServiceAlertsServiceSystemAccountDownRaw), // Updated from ServiceAlertsServiceSystemAccountUpRaw
    },
    FirstForumMessagePtsDownForumMessagePts.archives[16],
    FirstForumMessagePtsDownForumMessagePts.archives[17],
    FirstForumMessagePtsDownForumMessagePts.archives[18],
  ],
  services: FirstForumMessagePtsDownForumMessagePts.services,
  maintenances: FirstForumMessagePtsDownForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn,
};
const ServiceAlertsDownServiceAlerts: Step = {
  connector: FirstServiceAlertsDownServiceAlerts.connector,
  connectorData: FirstServiceAlertsDownServiceAlerts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstServiceAlertsDownServiceAlerts.logs,
  archives: FirstServiceAlertsDownServiceAlerts.archives,
  services: FirstServiceAlertsDownServiceAlerts.services,
  maintenances: FirstServiceAlertsDownServiceAlerts.maintenances,
  serviceControllerReturn:
    FirstServiceAlertsDownServiceAlerts.serviceControllerReturn,
};
const ServiceAlertsDownLiveServices: Step = {
  connector: ForumMessagePtsDownLiveServices.connector,
  connectorData: ForumMessagePtsDownLiveServices.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstServiceAlertsDownServiceAlerts.logs,
  archives: FirstServiceAlertsDownServiceAlerts.archives,
  services: FirstServiceAlertsDownServiceAlerts.services,
  maintenances: FirstServiceAlertsDownServiceAlerts.maintenances,
  serviceControllerReturn:
    FirstServiceAlertsDownServiceAlerts.serviceControllerReturn,
};
const ServiceAlertsDownForumMessage: Step = {
  connector: ForumMessagePtsDownForumMessage.connector,
  connectorData: ForumMessagePtsDownForumMessage.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstServiceAlertsDownServiceAlerts.logs,
  archives: FirstServiceAlertsDownServiceAlerts.archives,
  services: FirstServiceAlertsDownServiceAlerts.services,
  maintenances: FirstServiceAlertsDownServiceAlerts.maintenances,
  serviceControllerReturn:
    FirstServiceAlertsDownServiceAlerts.serviceControllerReturn,
};
const ServiceAlertsDownForumMessagePts: Step = {
  connector: ForumMessagePtsDownForumMessagePts.connector,
  connectorData: ForumMessagePtsDownForumMessagePts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstServiceAlertsDownServiceAlerts.logs,
  archives: FirstServiceAlertsDownServiceAlerts.archives,
  services: FirstServiceAlertsDownServiceAlerts.services,
  maintenances: FirstServiceAlertsDownServiceAlerts.maintenances,
  serviceControllerReturn:
    FirstServiceAlertsDownServiceAlerts.serviceControllerReturn,
};

// Live services up (server_pc_pts)
// connectorData => changed
// statusUpdateList => emitted for server_pc_pts
// log => created for server_pc_pts
// archive => updated (statusId and rawData) for server_pc_pts
// service => updated (statusId and rawData) for server_pc_pts
// serviceControllerReturn => updated (statusId and raw) for server_pc_pts
const FirstLiveServicesUpLiveServices: Step = {
  connector: ServiceAlertsDownLiveServices.connector,
  connectorData: [
    // changed
    LiveServicesServerPcEuUpRaw,
    LiveServicesServerPcNaUpRaw,
    LiveServicesServerPsEuUpRaw,
    LiveServicesServerPsNaUpRaw,
    LiveServicesServerPcPtsUpRaw,
    LiveServicesServerXboxEuUpRaw,
    LiveServicesServerXboxNaUpRaw,
  ],
  statusUpdateList: [LiveServicesServerPcPtsUp], // emitted
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstServiceAlertsDownServiceAlerts.logs,
    {
      // created
      connector: 'LiveServices',
      serviceId: 7,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPcPtsUpRaw),
    },
  ],
  archives: [
    FirstServiceAlertsDownServiceAlerts.archives[0],
    FirstServiceAlertsDownServiceAlerts.archives[1],
    FirstServiceAlertsDownServiceAlerts.archives[2],
    FirstServiceAlertsDownServiceAlerts.archives[3],
    FirstServiceAlertsDownServiceAlerts.archives[4],
    FirstServiceAlertsDownServiceAlerts.archives[5],
    {
      connector: FirstServiceAlertsDownServiceAlerts.archives[6].connector,
      serviceId: FirstServiceAlertsDownServiceAlerts.archives[6].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(LiveServicesServerPcPtsUpRaw), // Updated from LiveServicesServerPcPtsDownRaw
    },
    FirstServiceAlertsDownServiceAlerts.archives[7],
    FirstServiceAlertsDownServiceAlerts.archives[8],
    FirstServiceAlertsDownServiceAlerts.archives[9],
    FirstServiceAlertsDownServiceAlerts.archives[10],
    FirstServiceAlertsDownServiceAlerts.archives[11],
    FirstServiceAlertsDownServiceAlerts.archives[12],
    FirstServiceAlertsDownServiceAlerts.archives[13],
    FirstServiceAlertsDownServiceAlerts.archives[14],
    FirstServiceAlertsDownServiceAlerts.archives[15],
    FirstServiceAlertsDownServiceAlerts.archives[16],
    FirstServiceAlertsDownServiceAlerts.archives[17],
    FirstServiceAlertsDownServiceAlerts.archives[18],
  ],
  services: [
    FirstServiceAlertsDownServiceAlerts.services[0],
    FirstServiceAlertsDownServiceAlerts.services[1],
    FirstServiceAlertsDownServiceAlerts.services[2],
    FirstServiceAlertsDownServiceAlerts.services[3],
    FirstServiceAlertsDownServiceAlerts.services[4],
    FirstServiceAlertsDownServiceAlerts.services[5],
    {
      id: FirstServiceAlertsDownServiceAlerts.services[6].id,
      slugId: FirstServiceAlertsDownServiceAlerts.services[6].slugId,
      statusId: 1, // Updated from 2
      typeId: FirstServiceAlertsDownServiceAlerts.services[6].typeId,
      supportId: FirstServiceAlertsDownServiceAlerts.services[6].supportId,
      zoneId: FirstServiceAlertsDownServiceAlerts.services[6].zoneId,
      rawData: JSON.stringify(LiveServicesServerPcPtsUpRaw), // Updated from LiveServicesServerPcPtsDownRaw
    },
    FirstServiceAlertsDownServiceAlerts.services[7],
    FirstServiceAlertsDownServiceAlerts.services[8],
  ],
  maintenances: FirstServiceAlertsDownServiceAlerts.maintenances,
  serviceControllerReturn: [
    FirstServiceAlertsDownServiceAlerts.serviceControllerReturn[0],
    FirstServiceAlertsDownServiceAlerts.serviceControllerReturn[1],
    FirstServiceAlertsDownServiceAlerts.serviceControllerReturn[2],
    FirstServiceAlertsDownServiceAlerts.serviceControllerReturn[3],
    FirstServiceAlertsDownServiceAlerts.serviceControllerReturn[4],
    FirstServiceAlertsDownServiceAlerts.serviceControllerReturn[5],
    {
      slug: FirstServiceAlertsDownServiceAlerts.serviceControllerReturn[6].slug,
      status: 'up', // Updated from down
      type: FirstServiceAlertsDownServiceAlerts.serviceControllerReturn[6].type,
      support:
        FirstServiceAlertsDownServiceAlerts.serviceControllerReturn[6].support,
      zone: FirstServiceAlertsDownServiceAlerts.serviceControllerReturn[6].zone,
      raw: LiveServicesServerPcPtsUpRawStringDate, // Updated from LiveServicesServerPcPtsDownRawStringDate
    },
    FirstServiceAlertsDownServiceAlerts.serviceControllerReturn[7],
    FirstServiceAlertsDownServiceAlerts.serviceControllerReturn[8],
  ],
};
const LiveServicesUpLiveServices: Step = {
  connector: FirstLiveServicesUpLiveServices.connector,
  connectorData: FirstLiveServicesUpLiveServices.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstLiveServicesUpLiveServices.logs,
  archives: FirstLiveServicesUpLiveServices.archives,
  services: FirstLiveServicesUpLiveServices.services,
  maintenances: FirstLiveServicesUpLiveServices.maintenances,
  serviceControllerReturn:
    FirstLiveServicesUpLiveServices.serviceControllerReturn,
};
const LiveServicesUpForumMessage: Step = {
  connector: ServiceAlertsDownForumMessage.connector,
  connectorData: ServiceAlertsDownForumMessage.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstLiveServicesUpLiveServices.logs,
  archives: FirstLiveServicesUpLiveServices.archives,
  services: FirstLiveServicesUpLiveServices.services,
  maintenances: FirstLiveServicesUpLiveServices.maintenances,
  serviceControllerReturn:
    FirstLiveServicesUpLiveServices.serviceControllerReturn,
};
const LiveServicesUpForumMessagePts: Step = {
  connector: ServiceAlertsDownForumMessagePts.connector,
  connectorData: ServiceAlertsDownForumMessagePts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstLiveServicesUpLiveServices.logs,
  archives: FirstLiveServicesUpLiveServices.archives,
  services: FirstLiveServicesUpLiveServices.services,
  maintenances: FirstLiveServicesUpLiveServices.maintenances,
  serviceControllerReturn:
    FirstLiveServicesUpLiveServices.serviceControllerReturn,
};
const LiveServicesUpServiceAlerts: Step = {
  connector: ServiceAlertsDownServiceAlerts.connector,
  connectorData: ServiceAlertsDownServiceAlerts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstLiveServicesUpLiveServices.logs,
  archives: FirstLiveServicesUpLiveServices.archives,
  services: FirstLiveServicesUpLiveServices.services,
  maintenances: FirstLiveServicesUpLiveServices.maintenances,
  serviceControllerReturn:
    FirstLiveServicesUpLiveServices.serviceControllerReturn,
};

// Forum message up (service_store_eso, service_system_account)
// connectorData => changed
// statusUpdateList => emitted for service_store_eso, service_system_account
// log => created for service_store_eso, service_system_account
// archive => updated (statusId and rawData) for service_store_eso, service_system_account
// service => updated (statusId and rawData) for service_store_eso, service_system_account
// serviceControllerReturn => updated (statusId and raw) for service_store_eso, service_system_account
const FirstForumMessageUpForumMessage: Step = {
  connector: LiveServicesUpForumMessage.connector,
  connectorData: [
    // changed
    ForumMessageServiceStoreEsoUpRaw,
    ForumMessageServiceSystemAccountUpRaw,
  ],
  statusUpdateList: [
    ForumMessageServiceStoreEsoUp,
    ForumMessageServiceSystemAccountUp,
  ],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstLiveServicesUpLiveServices.logs,
    {
      // created
      connector: 'ForumMessage',
      serviceId: 11,
      statusId: 1,
      rawData: JSON.stringify(ForumMessageServiceStoreEsoUpRaw),
    },
    {
      // created
      connector: 'ForumMessage',
      serviceId: 12,
      statusId: 1,
      rawData: JSON.stringify(ForumMessageServiceSystemAccountUpRaw),
    },
  ],
  archives: [
    FirstLiveServicesUpLiveServices.archives[0],
    FirstLiveServicesUpLiveServices.archives[1],
    FirstLiveServicesUpLiveServices.archives[2],
    FirstLiveServicesUpLiveServices.archives[3],
    FirstLiveServicesUpLiveServices.archives[4],
    FirstLiveServicesUpLiveServices.archives[5],
    FirstLiveServicesUpLiveServices.archives[6],
    FirstLiveServicesUpLiveServices.archives[7],
    FirstLiveServicesUpLiveServices.archives[8],
    FirstLiveServicesUpLiveServices.archives[9],
    FirstLiveServicesUpLiveServices.archives[10],
    FirstLiveServicesUpLiveServices.archives[11],
    FirstLiveServicesUpLiveServices.archives[12],
    FirstLiveServicesUpLiveServices.archives[13],
    FirstLiveServicesUpLiveServices.archives[14],
    FirstLiveServicesUpLiveServices.archives[15],
    FirstLiveServicesUpLiveServices.archives[16],
    {
      connector: FirstLiveServicesUpLiveServices.archives[17].connector,
      serviceId: FirstLiveServicesUpLiveServices.archives[17].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(ForumMessageServiceStoreEsoUpRaw), // Updated from ForumMessageServiceStoreEsoDownRaw
    },
    {
      connector: FirstLiveServicesUpLiveServices.archives[18].connector,
      serviceId: FirstLiveServicesUpLiveServices.archives[18].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(ForumMessageServiceSystemAccountUpRaw), // Updated from ForumMessageServiceSystemAccountDownRaw
    },
  ],
  services: [
    FirstLiveServicesUpLiveServices.services[0],
    FirstLiveServicesUpLiveServices.services[1],
    FirstLiveServicesUpLiveServices.services[2],
    FirstLiveServicesUpLiveServices.services[3],
    FirstLiveServicesUpLiveServices.services[4],
    FirstLiveServicesUpLiveServices.services[5],
    FirstLiveServicesUpLiveServices.services[6],
    {
      id: FirstLiveServicesUpLiveServices.services[7].id,
      slugId: FirstLiveServicesUpLiveServices.services[7].slugId,
      statusId: 1, // Updated from 2
      typeId: FirstLiveServicesUpLiveServices.services[7].typeId,
      supportId: FirstLiveServicesUpLiveServices.services[7].supportId,
      zoneId: FirstLiveServicesUpLiveServices.services[7].zoneId,
      rawData: JSON.stringify(ForumMessageServiceStoreEsoUpRaw), // Updated from ForumMessageServiceStoreEsoDownRaw
    },
    {
      id: FirstLiveServicesUpLiveServices.services[8].id,
      slugId: FirstLiveServicesUpLiveServices.services[8].slugId,
      statusId: 1, // Updated from 2
      typeId: FirstLiveServicesUpLiveServices.services[8].typeId,
      supportId: FirstLiveServicesUpLiveServices.services[8].supportId,
      zoneId: FirstLiveServicesUpLiveServices.services[8].zoneId,
      rawData: JSON.stringify(ForumMessageServiceSystemAccountUpRaw), // Updated from ForumMessageServiceSystemAccountDownRaw
    },
  ],
  maintenances: FirstLiveServicesUpLiveServices.maintenances,
  serviceControllerReturn: [
    FirstLiveServicesUpLiveServices.serviceControllerReturn[0],
    FirstLiveServicesUpLiveServices.serviceControllerReturn[1],
    FirstLiveServicesUpLiveServices.serviceControllerReturn[2],
    FirstLiveServicesUpLiveServices.serviceControllerReturn[3],
    FirstLiveServicesUpLiveServices.serviceControllerReturn[4],
    FirstLiveServicesUpLiveServices.serviceControllerReturn[5],
    FirstLiveServicesUpLiveServices.serviceControllerReturn[6],
    {
      slug: FirstLiveServicesUpLiveServices.serviceControllerReturn[7].slug,
      status: 'up', // Updated from down
      type: FirstLiveServicesUpLiveServices.serviceControllerReturn[7].type,
      support:
        FirstLiveServicesUpLiveServices.serviceControllerReturn[7].support,
      zone: FirstLiveServicesUpLiveServices.serviceControllerReturn[7].zone,
      raw: ForumMessageServiceStoreEsoUpRawStringDate, // Updated from ForumMessageServiceStoreEsoDownRawStringDate
    },
    {
      slug: FirstLiveServicesUpLiveServices.serviceControllerReturn[8].slug,
      status: 'up', // Updated from down
      type: FirstLiveServicesUpLiveServices.serviceControllerReturn[8].type,
      support:
        FirstLiveServicesUpLiveServices.serviceControllerReturn[8].support,
      zone: FirstLiveServicesUpLiveServices.serviceControllerReturn[8].zone,
      raw: ForumMessageServiceSystemAccountUpRawStringDate, // Updated from ForumMessageServiceSystemAccountDownRawStringDate
    },
  ],
};
const ForumMessageUpForumMessage: Step = {
  connector: FirstForumMessageUpForumMessage.connector,
  connectorData: FirstForumMessageUpForumMessage.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageUpForumMessage.logs,
  archives: FirstForumMessageUpForumMessage.archives,
  services: FirstForumMessageUpForumMessage.services,
  maintenances: FirstForumMessageUpForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageUpForumMessage.serviceControllerReturn,
};
const ForumMessageUpLiveServices: Step = {
  connector: LiveServicesUpLiveServices.connector,
  connectorData: LiveServicesUpLiveServices.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageUpForumMessage.logs,
  archives: FirstForumMessageUpForumMessage.archives,
  services: FirstForumMessageUpForumMessage.services,
  maintenances: FirstForumMessageUpForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageUpForumMessage.serviceControllerReturn,
};
const ForumMessageUpForumMessagePts: Step = {
  connector: LiveServicesUpForumMessagePts.connector,
  connectorData: LiveServicesUpForumMessagePts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageUpForumMessage.logs,
  archives: FirstForumMessageUpForumMessage.archives,
  services: FirstForumMessageUpForumMessage.services,
  maintenances: FirstForumMessageUpForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageUpForumMessage.serviceControllerReturn,
};
const ForumMessageUpServiceAlerts: Step = {
  connector: LiveServicesUpServiceAlerts.connector,
  connectorData: LiveServicesUpServiceAlerts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageUpForumMessage.logs,
  archives: FirstForumMessageUpForumMessage.archives,
  services: FirstForumMessageUpForumMessage.services,
  maintenances: FirstForumMessageUpForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageUpForumMessage.serviceControllerReturn,
};

// Forum message pts up (server_pc_pts)
// connectorData => changed
// log => created for server_pc_pts
// archive => updated (statusId and rawData) for server_pc_pts
const FirstForumMessagePtsUpForumMessagePts: Step = {
  connector: ForumMessageUpForumMessagePts.connector,
  connectorData: [ForumMessagePtsServerPcPtsUpRaw], // changed
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstForumMessageUpForumMessage.logs,
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 7,
      statusId: 1,
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsUpRaw),
    },
  ],
  archives: [
    FirstForumMessageUpForumMessage.archives[0],
    FirstForumMessageUpForumMessage.archives[1],
    FirstForumMessageUpForumMessage.archives[2],
    FirstForumMessageUpForumMessage.archives[3],
    FirstForumMessageUpForumMessage.archives[4],
    FirstForumMessageUpForumMessage.archives[5],
    FirstForumMessageUpForumMessage.archives[6],
    FirstForumMessageUpForumMessage.archives[7],
    FirstForumMessageUpForumMessage.archives[8],
    FirstForumMessageUpForumMessage.archives[9],
    FirstForumMessageUpForumMessage.archives[10],
    FirstForumMessageUpForumMessage.archives[11],
    FirstForumMessageUpForumMessage.archives[12],
    FirstForumMessageUpForumMessage.archives[13],
    FirstForumMessageUpForumMessage.archives[14],
    FirstForumMessageUpForumMessage.archives[15],
    {
      connector: FirstForumMessageUpForumMessage.archives[16].connector,
      serviceId: FirstForumMessageUpForumMessage.archives[16].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsUpRaw), // Updated from ForumMessagePtsServerPcPtsDownRaw
    },
    FirstForumMessageUpForumMessage.archives[17],
    FirstForumMessageUpForumMessage.archives[18],
  ],
  services: FirstForumMessageUpForumMessage.services,
  maintenances: FirstForumMessageUpForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageUpForumMessage.serviceControllerReturn,
};
const ForumMessagePtsUpForumMessagePts: Step = {
  connector: FirstForumMessagePtsUpForumMessagePts.connector,
  connectorData: FirstForumMessagePtsUpForumMessagePts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessagePtsUpForumMessagePts.logs,
  archives: FirstForumMessagePtsUpForumMessagePts.archives,
  services: FirstForumMessagePtsUpForumMessagePts.services,
  maintenances: FirstForumMessagePtsUpForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsUpForumMessagePts.serviceControllerReturn,
};
const ForumMessagePtsUpForumMessage: Step = {
  connector: ForumMessageUpForumMessage.connector,
  connectorData: ForumMessageUpForumMessage.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessagePtsUpForumMessagePts.logs,
  archives: FirstForumMessagePtsUpForumMessagePts.archives,
  services: FirstForumMessagePtsUpForumMessagePts.services,
  maintenances: FirstForumMessagePtsUpForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsUpForumMessagePts.serviceControllerReturn,
};
const ForumMessagePtsUpLiveServices: Step = {
  connector: ForumMessageUpLiveServices.connector,
  connectorData: ForumMessageUpLiveServices.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessagePtsUpForumMessagePts.logs,
  archives: FirstForumMessagePtsUpForumMessagePts.archives,
  services: FirstForumMessagePtsUpForumMessagePts.services,
  maintenances: FirstForumMessagePtsUpForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsUpForumMessagePts.serviceControllerReturn,
};
const ForumMessagePtsUpServiceAlerts: Step = {
  connector: ForumMessageUpServiceAlerts.connector,
  connectorData: ForumMessageUpServiceAlerts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessagePtsUpForumMessagePts.logs,
  archives: FirstForumMessagePtsUpForumMessagePts.archives,
  services: FirstForumMessagePtsUpForumMessagePts.services,
  maintenances: FirstForumMessagePtsUpForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsUpForumMessagePts.serviceControllerReturn,
};

// Service alerts up (server_pc_pts, service_store_eso, service_system_account)
// connectorData => changed
// log => created for server_pc_pts, service_store_eso and service_system_account
// archive => updated (statusId and rawData) for server_pc_pts, service_store_eso and service_system_account
const FirstServiceAlertsUpServiceAlerts: Step = {
  connector: ForumMessagePtsUpServiceAlerts.connector,
  connectorData: [
    // changed
    ServiceAlertsServerPcEuUpRaw,
    ServiceAlertsServerPcNaUpRaw,
    ServiceAlertsServerPsEuUpRaw,
    ServiceAlertsServerPsNaUpRaw,
    ServiceAlertsServerPcPtsUpRaw,
    ServiceAlertsServerXboxEuUpRaw,
    ServiceAlertsServerXboxNaUpRaw,
    ServiceAlertsServiceStoreEsoUpRaw,
    ServiceAlertsServiceSystemAccountUpRaw,
  ],
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstForumMessagePtsUpForumMessagePts.logs,
    {
      // created
      connector: 'ServiceAlerts',
      serviceId: 7,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPcPtsUpRaw),
    },
    {
      // created
      connector: 'ServiceAlerts',
      serviceId: 11,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServiceStoreEsoUpRaw),
    },
    {
      // created
      connector: 'ServiceAlerts',
      serviceId: 12,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServiceSystemAccountUpRaw),
    },
  ],
  archives: [
    FirstForumMessagePtsUpForumMessagePts.archives[0],
    FirstForumMessagePtsUpForumMessagePts.archives[1],
    FirstForumMessagePtsUpForumMessagePts.archives[2],
    FirstForumMessagePtsUpForumMessagePts.archives[3],
    FirstForumMessagePtsUpForumMessagePts.archives[4],
    FirstForumMessagePtsUpForumMessagePts.archives[5],
    FirstForumMessagePtsUpForumMessagePts.archives[6],
    FirstForumMessagePtsUpForumMessagePts.archives[7],
    FirstForumMessagePtsUpForumMessagePts.archives[8],
    FirstForumMessagePtsUpForumMessagePts.archives[9],
    FirstForumMessagePtsUpForumMessagePts.archives[10],
    FirstForumMessagePtsUpForumMessagePts.archives[11],
    FirstForumMessagePtsUpForumMessagePts.archives[12],
    {
      connector: FirstForumMessagePtsUpForumMessagePts.archives[13].connector,
      serviceId: FirstForumMessagePtsUpForumMessagePts.archives[13].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(ServiceAlertsServerPcPtsUpRaw), // Updated from ServiceAlertsServerPcPtsDownRaw
    },
    {
      connector: FirstForumMessagePtsUpForumMessagePts.archives[14].connector,
      serviceId: FirstForumMessagePtsUpForumMessagePts.archives[14].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(ServiceAlertsServiceStoreEsoUpRaw), // Updated from ServiceAlertsServiceStoreEsoDownRaw
    },
    {
      connector: FirstForumMessagePtsUpForumMessagePts.archives[15].connector,
      serviceId: FirstForumMessagePtsUpForumMessagePts.archives[15].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(ServiceAlertsServiceSystemAccountUpRaw), // Updated from ServiceAlertsServiceSystemAccountDownRaw
    },
    FirstForumMessagePtsUpForumMessagePts.archives[16],
    FirstForumMessagePtsUpForumMessagePts.archives[17],
    FirstForumMessagePtsUpForumMessagePts.archives[18],
  ],
  services: FirstForumMessagePtsUpForumMessagePts.services,
  maintenances: FirstForumMessagePtsUpForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsUpForumMessagePts.serviceControllerReturn,
};
const ServiceAlertsUpServiceAlerts: Step = {
  connector: FirstServiceAlertsUpServiceAlerts.connector,
  connectorData: FirstServiceAlertsUpServiceAlerts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstServiceAlertsUpServiceAlerts.logs,
  archives: FirstServiceAlertsUpServiceAlerts.archives,
  services: FirstServiceAlertsUpServiceAlerts.services,
  maintenances: FirstServiceAlertsUpServiceAlerts.maintenances,
  serviceControllerReturn:
    FirstServiceAlertsUpServiceAlerts.serviceControllerReturn,
};
const ServiceAlertsUpLiveServices: Step = {
  connector: ForumMessagePtsUpLiveServices.connector,
  connectorData: ForumMessagePtsUpLiveServices.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstServiceAlertsUpServiceAlerts.logs,
  archives: FirstServiceAlertsUpServiceAlerts.archives,
  services: FirstServiceAlertsUpServiceAlerts.services,
  maintenances: FirstServiceAlertsUpServiceAlerts.maintenances,
  serviceControllerReturn:
    FirstServiceAlertsUpServiceAlerts.serviceControllerReturn,
};
const ServiceAlertsUpForumMessage: Step = {
  connector: ForumMessagePtsUpForumMessage.connector,
  connectorData: ForumMessagePtsUpForumMessage.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstServiceAlertsUpServiceAlerts.logs,
  archives: FirstServiceAlertsUpServiceAlerts.archives,
  services: FirstServiceAlertsUpServiceAlerts.services,
  maintenances: FirstServiceAlertsUpServiceAlerts.maintenances,
  serviceControllerReturn:
    FirstServiceAlertsUpServiceAlerts.serviceControllerReturn,
};
const ServiceAlertsUpForumMessagePts: Step = {
  connector: ForumMessagePtsUpForumMessagePts.connector,
  connectorData: ForumMessagePtsUpForumMessagePts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstServiceAlertsUpServiceAlerts.logs,
  archives: FirstServiceAlertsUpServiceAlerts.archives,
  services: FirstServiceAlertsUpServiceAlerts.services,
  maintenances: FirstServiceAlertsUpServiceAlerts.maintenances,
  serviceControllerReturn:
    FirstServiceAlertsUpServiceAlerts.serviceControllerReturn,
};

const InitialStatesStepList: Step[] = [
  // Initial state
  InitialStateLiveServices,
  InitialStateForumMessage,
  InitialStateForumMessagePts,
  // Same
  InitialStateLiveServices,
  InitialStateForumMessage,
  InitialStateForumMessagePts,
  // Same
  InitialStateLiveServices,
  InitialStateForumMessage,
  InitialStateForumMessagePts,
  // Same
  InitialStateLiveServices,
  InitialStateForumMessage,
  InitialStateForumMessagePts,
  InitialStateServiceAlerts,
  // Same
  InitialStateLiveServices,
  InitialStateForumMessage,
  InitialStateForumMessagePts,
  // Same
  InitialStateLiveServices,
  InitialStateForumMessage,
  InitialStateForumMessagePts,
  // Same
  InitialStateLiveServices,
  InitialStateForumMessage,
  InitialStateForumMessagePts,
  InitialStateServiceAlerts,
  // Same
  InitialStateLiveServices,
  InitialStateForumMessage,
  InitialStateForumMessagePts,
  // Same
  InitialStateLiveServices,
  InitialStateForumMessage,
  InitialStateForumMessagePts,
];
const ForumMessagePlannedStepList: Step[] = [
  // Forum message planned (service_store_eso, service_system_account)
  InitialStateLiveServices,
  FirstForumMessagePlannedForumMessage,
  ForumMessagePlannedForumMessagePts,
  // Same
  ForumMessagePlannedLiveServices,
  ForumMessagePlannedForumMessage,
  ForumMessagePlannedForumMessagePts,
  // Same
  ForumMessagePlannedLiveServices,
  ForumMessagePlannedForumMessage,
  ForumMessagePlannedForumMessagePts,
  // Same
  ForumMessagePlannedLiveServices,
  ForumMessagePlannedForumMessage,
  ForumMessagePlannedForumMessagePts,
  ForumMessagePlannedServiceAlerts,
  // Same
  ForumMessagePlannedLiveServices,
  ForumMessagePlannedForumMessage,
  ForumMessagePlannedForumMessagePts,
  // Same
  ForumMessagePlannedLiveServices,
  ForumMessagePlannedForumMessage,
  ForumMessagePlannedForumMessagePts,
  // Same
  ForumMessagePlannedLiveServices,
  ForumMessagePlannedForumMessage,
  ForumMessagePlannedForumMessagePts,
  ForumMessagePlannedServiceAlerts,
  // Same
  ForumMessagePlannedLiveServices,
  ForumMessagePlannedForumMessage,
  ForumMessagePlannedForumMessagePts,
  // Same
  ForumMessagePlannedLiveServices,
  ForumMessagePlannedForumMessage,
  ForumMessagePlannedForumMessagePts,
];
const ForumMessagePtsPlannedStepList: Step[] = [
  // Forum message pts planned (server_pc_pts)
  ForumMessagePlannedLiveServices,
  ForumMessagePlannedForumMessage,
  FirstForumMessagePtsPlannedForumMessagePts,
  // Same
  ForumMessagePtsPlannedLiveServices,
  ForumMessagePtsPlannedForumMessage,
  ForumMessagePtsPlannedForumMessagePts,
  // Same
  ForumMessagePtsPlannedLiveServices,
  ForumMessagePtsPlannedForumMessage,
  ForumMessagePtsPlannedForumMessagePts,
  // Same
  ForumMessagePtsPlannedLiveServices,
  ForumMessagePtsPlannedForumMessage,
  ForumMessagePtsPlannedForumMessagePts,
  ForumMessagePtsPlannedServiceAlerts,
  // Same
  ForumMessagePtsPlannedLiveServices,
  ForumMessagePtsPlannedForumMessage,
  ForumMessagePtsPlannedForumMessagePts,
  // Same
  ForumMessagePtsPlannedLiveServices,
  ForumMessagePtsPlannedForumMessage,
  ForumMessagePtsPlannedForumMessagePts,
  // Same
  ForumMessagePtsPlannedLiveServices,
  ForumMessagePtsPlannedForumMessage,
  ForumMessagePtsPlannedForumMessagePts,
  ForumMessagePtsPlannedServiceAlerts,
  // Same
  ForumMessagePtsPlannedLiveServices,
  ForumMessagePtsPlannedForumMessage,
  ForumMessagePtsPlannedForumMessagePts,
  // Same
  ForumMessagePtsPlannedLiveServices,
  ForumMessagePtsPlannedForumMessage,
  ForumMessagePtsPlannedForumMessagePts,
];
const LiveServicesDownStepList: Step[] = [
  // Live services down (server_pc_pts)
  FirstLiveServicesDownLiveServices,
  LiveServicesDownForumMessage,
  LiveServicesDownForumMessagePts,
  // Same
  LiveServicesDownLiveServices,
  LiveServicesDownForumMessage,
  LiveServicesDownForumMessagePts,
  // Same
  LiveServicesDownLiveServices,
  LiveServicesDownForumMessage,
  LiveServicesDownForumMessagePts,
  // Same
  LiveServicesDownLiveServices,
  LiveServicesDownForumMessage,
  LiveServicesDownForumMessagePts,
  LiveServicesDownServiceAlerts,
  // Same
  LiveServicesDownLiveServices,
  LiveServicesDownForumMessage,
  LiveServicesDownForumMessagePts,
  // Same
  LiveServicesDownLiveServices,
  LiveServicesDownForumMessage,
  LiveServicesDownForumMessagePts,
  // Same
  LiveServicesDownLiveServices,
  LiveServicesDownForumMessage,
  LiveServicesDownForumMessagePts,
  LiveServicesDownServiceAlerts,
  // Same
  LiveServicesDownLiveServices,
  LiveServicesDownForumMessage,
  LiveServicesDownForumMessagePts,
  // Same
  LiveServicesDownLiveServices,
  LiveServicesDownForumMessage,
  LiveServicesDownForumMessagePts,
];
const ForumMessageDownStepList: Step[] = [
  // Forum message down (service_store_eso, service_system_account)
  LiveServicesDownLiveServices,
  FirstForumMessageDownForumMessage,
  ForumMessageDownForumMessagePts,
  // Same
  ForumMessageDownLiveServices,
  ForumMessageDownForumMessage,
  ForumMessageDownForumMessagePts,
  // Same
  ForumMessageDownLiveServices,
  ForumMessageDownForumMessage,
  ForumMessageDownForumMessagePts,
  // Same
  ForumMessageDownLiveServices,
  ForumMessageDownForumMessage,
  ForumMessageDownForumMessagePts,
  ForumMessageDownServiceAlerts,
  // Same
  ForumMessageDownLiveServices,
  ForumMessageDownForumMessage,
  ForumMessageDownForumMessagePts,
  // Same
  ForumMessageDownLiveServices,
  ForumMessageDownForumMessage,
  ForumMessageDownForumMessagePts,
  // Same
  ForumMessageDownLiveServices,
  ForumMessageDownForumMessage,
  ForumMessageDownForumMessagePts,
  ForumMessageDownServiceAlerts,
  // Same
  ForumMessageDownLiveServices,
  ForumMessageDownForumMessage,
  ForumMessageDownForumMessagePts,
  // Same
  ForumMessageDownLiveServices,
  ForumMessageDownForumMessage,
  ForumMessageDownForumMessagePts,
];
const ForumMessagePtsDownStepList: Step[] = [
  // Forum message pts down (server_pc_pts)
  ForumMessageDownLiveServices,
  ForumMessageDownForumMessage,
  FirstForumMessagePtsDownForumMessagePts,
  // Same
  ForumMessagePtsDownLiveServices,
  ForumMessagePtsDownForumMessage,
  ForumMessagePtsDownForumMessagePts,
  // Same
  ForumMessagePtsDownLiveServices,
  ForumMessagePtsDownForumMessage,
  ForumMessagePtsDownForumMessagePts,
  // Same
  ForumMessagePtsDownLiveServices,
  ForumMessagePtsDownForumMessage,
  ForumMessagePtsDownForumMessagePts,
  ForumMessagePtsDownServiceAlerts,
  // Same
  ForumMessagePtsDownLiveServices,
  ForumMessagePtsDownForumMessage,
  ForumMessagePtsDownForumMessagePts,
  // Same
  ForumMessagePtsDownLiveServices,
  ForumMessagePtsDownForumMessage,
  ForumMessagePtsDownForumMessagePts,
  // Same
  ForumMessagePtsDownLiveServices,
  ForumMessagePtsDownForumMessage,
  ForumMessagePtsDownForumMessagePts,
  ForumMessagePtsDownServiceAlerts,
  // Same
  ForumMessagePtsDownLiveServices,
  ForumMessagePtsDownForumMessage,
  ForumMessagePtsDownForumMessagePts,
  // Same
  ForumMessagePtsDownLiveServices,
  ForumMessagePtsDownForumMessage,
  ForumMessagePtsDownForumMessagePts,
];
const ServiceAlertsDownStepList: Step[] = [
  // Service alerts down (server_pc_pts, service_store_eso, service_system_account)
  ForumMessagePtsDownLiveServices,
  ForumMessagePtsDownForumMessage,
  ForumMessagePtsDownForumMessagePts,
  FirstServiceAlertsDownServiceAlerts,
  // Same
  ServiceAlertsDownLiveServices,
  ServiceAlertsDownForumMessage,
  ServiceAlertsDownForumMessagePts,
  // Same
  ServiceAlertsDownLiveServices,
  ServiceAlertsDownForumMessage,
  ServiceAlertsDownForumMessagePts,
  // Same
  ServiceAlertsDownLiveServices,
  ServiceAlertsDownForumMessage,
  ServiceAlertsDownForumMessagePts,
  ServiceAlertsDownServiceAlerts,
  // Same
  ServiceAlertsDownLiveServices,
  ServiceAlertsDownForumMessage,
  ServiceAlertsDownForumMessagePts,
  // Same
  ServiceAlertsDownLiveServices,
  ServiceAlertsDownForumMessage,
  ServiceAlertsDownForumMessagePts,
  // Same
  ServiceAlertsDownLiveServices,
  ServiceAlertsDownForumMessage,
  ServiceAlertsDownForumMessagePts,
  ServiceAlertsDownServiceAlerts,
  // Same
  ServiceAlertsDownLiveServices,
  ServiceAlertsDownForumMessage,
  ServiceAlertsDownForumMessagePts,
  // Same
  ServiceAlertsDownLiveServices,
  ServiceAlertsDownForumMessage,
  ServiceAlertsDownForumMessagePts,
];
const LiveServicesUpStepList: Step[] = [
  // Live services up (server_pc_pts)
  FirstLiveServicesUpLiveServices,
  LiveServicesUpForumMessage,
  LiveServicesUpForumMessagePts,
  // Same
  LiveServicesUpLiveServices,
  LiveServicesUpForumMessage,
  LiveServicesUpForumMessagePts,
  // Same
  LiveServicesUpLiveServices,
  LiveServicesUpForumMessage,
  LiveServicesUpForumMessagePts,
  // Same
  LiveServicesUpLiveServices,
  LiveServicesUpForumMessage,
  LiveServicesUpForumMessagePts,
  LiveServicesUpServiceAlerts,
  // Same
  LiveServicesUpLiveServices,
  LiveServicesUpForumMessage,
  LiveServicesUpForumMessagePts,
  // Same
  LiveServicesUpLiveServices,
  LiveServicesUpForumMessage,
  LiveServicesUpForumMessagePts,
  // Same
  LiveServicesUpLiveServices,
  LiveServicesUpForumMessage,
  LiveServicesUpForumMessagePts,
  LiveServicesUpServiceAlerts,
  // Same
  LiveServicesUpLiveServices,
  LiveServicesUpForumMessage,
  LiveServicesUpForumMessagePts,
  // Same
  LiveServicesUpLiveServices,
  LiveServicesUpForumMessage,
  LiveServicesUpForumMessagePts,
];
const ForumMessageUpStepList: Step[] = [
  // Forum message up (service_store_eso, service_system_account)
  LiveServicesUpLiveServices,
  FirstForumMessageUpForumMessage,
  ForumMessageUpForumMessagePts,
  // Same
  ForumMessageUpLiveServices,
  ForumMessageUpForumMessage,
  ForumMessageUpForumMessagePts,
  // Same
  ForumMessageUpLiveServices,
  ForumMessageUpForumMessage,
  ForumMessageUpForumMessagePts,
  // Same
  ForumMessageUpLiveServices,
  ForumMessageUpForumMessage,
  ForumMessageUpForumMessagePts,
  ForumMessageUpServiceAlerts,
  // Same
  ForumMessageUpLiveServices,
  ForumMessageUpForumMessage,
  ForumMessageUpForumMessagePts,
  // Same
  ForumMessageUpLiveServices,
  ForumMessageUpForumMessage,
  ForumMessageUpForumMessagePts,
  // Same
  ForumMessageUpLiveServices,
  ForumMessageUpForumMessage,
  ForumMessageUpForumMessagePts,
  ForumMessageUpServiceAlerts,
  // Same
  ForumMessageUpLiveServices,
  ForumMessageUpForumMessage,
  ForumMessageUpForumMessagePts,
  // Same
  ForumMessageUpLiveServices,
  ForumMessageUpForumMessage,
  ForumMessageUpForumMessagePts,
];
const ForumMessagePtsUpStepList: Step[] = [
  // Forum message pts up (server_pc_pts)
  ForumMessageUpLiveServices,
  ForumMessageUpForumMessage,
  FirstForumMessagePtsUpForumMessagePts,
  // Same
  ForumMessagePtsUpLiveServices,
  ForumMessagePtsUpForumMessage,
  ForumMessagePtsUpForumMessagePts,
  // Same
  ForumMessagePtsUpLiveServices,
  ForumMessagePtsUpForumMessage,
  ForumMessagePtsUpForumMessagePts,
  // Same
  ForumMessagePtsUpLiveServices,
  ForumMessagePtsUpForumMessage,
  ForumMessagePtsUpForumMessagePts,
  ForumMessagePtsUpServiceAlerts,
  // Same
  ForumMessagePtsUpLiveServices,
  ForumMessagePtsUpForumMessage,
  ForumMessagePtsUpForumMessagePts,
  // Same
  ForumMessagePtsUpLiveServices,
  ForumMessagePtsUpForumMessage,
  ForumMessagePtsUpForumMessagePts,
  // Same
  ForumMessagePtsUpLiveServices,
  ForumMessagePtsUpForumMessage,
  ForumMessagePtsUpForumMessagePts,
  ForumMessagePtsUpServiceAlerts,
  // Same
  ForumMessagePtsUpLiveServices,
  ForumMessagePtsUpForumMessage,
  ForumMessagePtsUpForumMessagePts,
  // Same
  ForumMessagePtsUpLiveServices,
  ForumMessagePtsUpForumMessage,
  ForumMessagePtsUpForumMessagePts,
];
const ServiceAlertsUpStepList: Step[] = [
  // Service alerts up (server_pc_pts, service_store_eso, service_system_account)
  ForumMessagePtsUpLiveServices,
  ForumMessagePtsUpForumMessage,
  ForumMessagePtsUpForumMessagePts,
  FirstServiceAlertsUpServiceAlerts,
  // Same
  ServiceAlertsUpLiveServices,
  ServiceAlertsUpForumMessage,
  ServiceAlertsUpForumMessagePts,
  // Same
  ServiceAlertsUpLiveServices,
  ServiceAlertsUpForumMessage,
  ServiceAlertsUpForumMessagePts,
  // Same
  ServiceAlertsUpLiveServices,
  ServiceAlertsUpForumMessage,
  ServiceAlertsUpForumMessagePts,
  ServiceAlertsUpServiceAlerts,
  // Same
  ServiceAlertsUpLiveServices,
  ServiceAlertsUpForumMessage,
  ServiceAlertsUpForumMessagePts,
  // Same
  ServiceAlertsUpLiveServices,
  ServiceAlertsUpForumMessage,
  ServiceAlertsUpForumMessagePts,
  // Same
  ServiceAlertsUpLiveServices,
  ServiceAlertsUpForumMessage,
  ServiceAlertsUpForumMessagePts,
  ServiceAlertsUpServiceAlerts,
  // Same
  ServiceAlertsUpLiveServices,
  ServiceAlertsUpForumMessage,
  ServiceAlertsUpForumMessagePts,
  // Same
  ServiceAlertsUpLiveServices,
  ServiceAlertsUpForumMessage,
  ServiceAlertsUpForumMessagePts,
];

export const classicMaintenance: Scenario = {
  initial,
  steps: [
    // Initial state
    ...InitialStatesStepList,
    // Forum message planned (service_store_eso, service_system_account)
    ...ForumMessagePlannedStepList,
    // Forum message pts planned (server_pc_pts)
    ...ForumMessagePtsPlannedStepList,
    // Live services down (server_pc_pts)
    ...LiveServicesDownStepList,
    // Forum message down (service_store_eso, service_system_account)
    ...ForumMessageDownStepList,
    // Forum message pts down (server_pc_pts)
    ...ForumMessagePtsDownStepList,
    // Service alerts down (server_pc_pts, service_store_eso, service_system_account)
    ...ServiceAlertsDownStepList,
    // Live services up (server_pc_pts)
    ...LiveServicesUpStepList,
    // Forum message up (service_store_eso, service_system_account)
    ...ForumMessageUpStepList,
    // Forum message pts up (server_pc_pts)
    ...ForumMessagePtsUpStepList,
    // Service alerts up (server_pc_pts, service_store_eso, service_system_account)
    ...ServiceAlertsUpStepList,
  ],
};
