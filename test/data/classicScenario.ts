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
  logs: InitialStateLiveServices.logs,
  archives: InitialStateLiveServices.archives,
  services: InitialStateLiveServices.services,
  maintenances: InitialStateLiveServices.maintenances,
  serviceControllerReturn: InitialStateLiveServices.serviceControllerReturn,
};
const InitialStateForumMessagePts: Step = {
  connector: 'ForumMessagePts',
  connectorData: [],
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: InitialStateLiveServices.logs,
  archives: InitialStateLiveServices.archives,
  services: InitialStateLiveServices.services,
  maintenances: InitialStateLiveServices.maintenances,
  serviceControllerReturn: InitialStateLiveServices.serviceControllerReturn,
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
  logs: InitialStateLiveServices.logs,
  archives: InitialStateLiveServices.archives,
  services: InitialStateLiveServices.services,
  maintenances: InitialStateLiveServices.maintenances,
  serviceControllerReturn: InitialStateLiveServices.serviceControllerReturn,
};

// Forum message planned (service_store_eso, service_system_account)
const FirstForumMessagePlannedForumMessage: Step = {
  connector: 'ForumMessage',
  connectorData: [
    ForumMessageServiceStoreEsoPlannedRaw,
    ForumMessageServiceSystemAccountPlannedRaw,
  ],
  statusUpdateList: [],
  maintenancePlannedList: [
    ForumMessageServiceStoreEsoPlanned,
    ForumMessageServiceSystemAccountPlanned,
  ],
  maintenanceRemovedList: [],
  logs: [
    ...InitialStateLiveServices.logs,
    {
      connector: 'ForumMessage',
      serviceId: 11,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServiceStoreEsoPlannedRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 12,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServiceSystemAccountPlannedRaw),
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
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServiceStoreEsoPlannedRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 12,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServiceSystemAccountPlannedRaw),
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
      maintenance: {
        raw: ForumMessageServiceStoreEsoPlannedRawStringDate,
        slug: ForumMessageServiceStoreEsoPlannedRawStringDate.slugs[0],
        beginnerAt: ForumMessageServiceStoreEsoPlannedRawStringDate.dates[0],
        endingAt: ForumMessageServiceStoreEsoPlannedRawStringDate.dates[1],
      },
    },
    {
      slug: 'service_system_account',
      status: 'up',
      type: 'service',
      support: 'system',
      zone: 'account',
      raw: ServiceAlertsServiceSystemAccountUpRawStringDate,
      maintenance: {
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
  connector: 'ForumMessage',
  connectorData: [
    ForumMessageServiceStoreEsoPlannedRaw,
    ForumMessageServiceSystemAccountPlannedRaw,
  ],
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
  connector: 'ForumMessagePts',
  connectorData: [],
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
  logs: FirstForumMessagePlannedForumMessage.logs,
  archives: FirstForumMessagePlannedForumMessage.archives,
  services: FirstForumMessagePlannedForumMessage.services,
  maintenances: FirstForumMessagePlannedForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessagePlannedForumMessage.serviceControllerReturn,
};
const ForumMessagePlannedServiceAlerts: Step = {
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
  logs: FirstForumMessagePlannedForumMessage.logs,
  archives: FirstForumMessagePlannedForumMessage.archives,
  services: FirstForumMessagePlannedForumMessage.services,
  maintenances: FirstForumMessagePlannedForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessagePlannedForumMessage.serviceControllerReturn,
};

// Forum message pts planned (server_pc_pts)
const FirstForumMessagePtsPlannedForumMessagePts: Step = {
  connector: 'ForumMessagePts',
  connectorData: [ForumMessagePtsServerPcPtsPlannedRaw],
  statusUpdateList: [],
  maintenancePlannedList: [ForumMessagePtsServerPcPtsPlanned],
  maintenanceRemovedList: [],
  logs: [
    ...FirstForumMessagePlannedForumMessage.logs,
    {
      connector: 'ForumMessagePts',
      serviceId: 7,
      statusId: 4,
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsPlannedRaw),
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
      statusId: 4,
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsPlannedRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 11,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServiceStoreEsoPlannedRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 12,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServiceSystemAccountPlannedRaw),
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
  maintenances: [
    {
      serviceId: 7,
      beginnerAt: new Date(ForumMessagePtsServerPcPtsPlanned.beginnerAt),
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsPlannedRaw),
    },
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
      maintenance: {
        raw: ForumMessagePtsServerPcPtsPlannedRawStringDate,
        slug: ForumMessagePtsServerPcPtsPlannedRawStringDate.slugs[0],
        beginnerAt: ForumMessagePtsServerPcPtsPlannedRawStringDate.dates[0],
        endingAt: ForumMessagePtsServerPcPtsPlannedRawStringDate.dates[1],
      },
    },
    {
      slug: 'service_store_eso',
      status: 'up',
      type: 'service',
      support: 'store',
      zone: 'eso',
      raw: ServiceAlertsServiceStoreEsoUpRawStringDate,
      maintenance: {
        raw: ForumMessageServiceStoreEsoPlannedRawStringDate,
        slug: ForumMessageServiceStoreEsoPlannedRawStringDate.slugs[0],
        beginnerAt: ForumMessageServiceStoreEsoPlannedRawStringDate.dates[0],
        endingAt: ForumMessageServiceStoreEsoPlannedRawStringDate.dates[1],
      },
    },
    {
      slug: 'service_system_account',
      status: 'up',
      type: 'service',
      support: 'system',
      zone: 'account',
      raw: ServiceAlertsServiceSystemAccountUpRawStringDate,
      maintenance: {
        raw: ForumMessageServiceSystemAccountPlannedRawStringDate,
        slug: ForumMessageServiceSystemAccountPlannedRawStringDate.slugs[0],
        beginnerAt:
          ForumMessageServiceSystemAccountPlannedRawStringDate.dates[0],
        endingAt: ForumMessageServiceSystemAccountPlannedRawStringDate.dates[1],
      },
    },
  ],
};
const ForumMessagePtsPlannedForumMessagePts: Step = {
  connector: 'ForumMessagePts',
  connectorData: [ForumMessagePtsServerPcPtsPlannedRaw],
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
  logs: FirstForumMessagePtsPlannedForumMessagePts.logs,
  archives: FirstForumMessagePtsPlannedForumMessagePts.archives,
  services: FirstForumMessagePtsPlannedForumMessagePts.services,
  maintenances: FirstForumMessagePtsPlannedForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn,
};
const ForumMessagePtsPlannedForumMessage: Step = {
  connector: 'ForumMessage',
  connectorData: [
    ForumMessageServiceStoreEsoPlannedRaw,
    ForumMessageServiceSystemAccountPlannedRaw,
  ],
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
  logs: FirstForumMessagePtsPlannedForumMessagePts.logs,
  archives: FirstForumMessagePtsPlannedForumMessagePts.archives,
  services: FirstForumMessagePtsPlannedForumMessagePts.services,
  maintenances: FirstForumMessagePtsPlannedForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn,
};

// Live services down (server_pc_pts)
const FirstLiveServicesDownLiveServices: Step = {
  connector: 'LiveServices',
  connectorData: [
    LiveServicesServerPcEuUpRaw,
    LiveServicesServerPcNaUpRaw,
    LiveServicesServerPsEuUpRaw,
    LiveServicesServerPsNaUpRaw,
    LiveServicesServerPcPtsDownRaw,
    LiveServicesServerXboxEuUpRaw,
    LiveServicesServerXboxNaUpRaw,
  ],
  statusUpdateList: [LiveServicesServerPcPtsDown],
  maintenancePlannedList: [],
  maintenanceRemovedList: ['server_pc_pts'],
  logs: [
    ...FirstForumMessagePtsPlannedForumMessagePts.logs,
    {
      connector: 'LiveServices',
      serviceId: 7,
      statusId: 2,
      rawData: JSON.stringify(LiveServicesServerPcPtsDownRaw),
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
      statusId: 2,
      rawData: JSON.stringify(LiveServicesServerPcPtsDownRaw),
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
      statusId: 4,
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsPlannedRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 11,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServiceStoreEsoPlannedRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 12,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServiceSystemAccountPlannedRaw),
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
      statusId: 2,
      typeId: 1,
      supportId: 4,
      zoneId: 3,
      rawData: JSON.stringify(LiveServicesServerPcPtsDownRaw),
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
      status: 'down',
      type: 'server',
      support: 'pc',
      zone: 'pts',
      raw: LiveServicesServerPcPtsDownRawStringDate,
    },
    {
      slug: 'service_store_eso',
      status: 'up',
      type: 'service',
      support: 'store',
      zone: 'eso',
      raw: ServiceAlertsServiceStoreEsoUpRawStringDate,
      maintenance: {
        raw: ForumMessageServiceStoreEsoPlannedRawStringDate,
        slug: ForumMessageServiceStoreEsoPlannedRawStringDate.slugs[0],
        beginnerAt: ForumMessageServiceStoreEsoPlannedRawStringDate.dates[0],
        endingAt: ForumMessageServiceStoreEsoPlannedRawStringDate.dates[1],
      },
    },
    {
      slug: 'service_system_account',
      status: 'up',
      type: 'service',
      support: 'system',
      zone: 'account',
      raw: ServiceAlertsServiceSystemAccountUpRawStringDate,
      maintenance: {
        raw: ForumMessageServiceSystemAccountPlannedRawStringDate,
        slug: ForumMessageServiceSystemAccountPlannedRawStringDate.slugs[0],
        beginnerAt:
          ForumMessageServiceSystemAccountPlannedRawStringDate.dates[0],
        endingAt: ForumMessageServiceSystemAccountPlannedRawStringDate.dates[1],
      },
    },
  ],
};
const LiveServicesDownLiveServices: Step = {
  connector: 'LiveServices',
  connectorData: [
    LiveServicesServerPcEuUpRaw,
    LiveServicesServerPcNaUpRaw,
    LiveServicesServerPsEuUpRaw,
    LiveServicesServerPsNaUpRaw,
    LiveServicesServerPcPtsDownRaw,
    LiveServicesServerXboxEuUpRaw,
    LiveServicesServerXboxNaUpRaw,
  ],
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
  connector: 'ForumMessage',
  connectorData: [
    ForumMessageServiceStoreEsoPlannedRaw,
    ForumMessageServiceSystemAccountPlannedRaw,
  ],
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
  connector: 'ForumMessagePts',
  connectorData: [ForumMessagePtsServerPcPtsPlannedRaw],
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
  logs: FirstLiveServicesDownLiveServices.logs,
  archives: FirstLiveServicesDownLiveServices.archives,
  services: FirstLiveServicesDownLiveServices.services,
  maintenances: FirstLiveServicesDownLiveServices.maintenances,
  serviceControllerReturn:
    FirstLiveServicesDownLiveServices.serviceControllerReturn,
};

// Forum message down (service_store_eso, service_system_account)
const FirstForumMessageDownForumMessage: Step = {
  connector: 'ForumMessage',
  connectorData: [
    ForumMessageServiceStoreEsoDownRaw,
    ForumMessageServiceSystemAccountDownRaw,
  ],
  statusUpdateList: [
    ForumMessageServiceStoreEsoDown,
    ForumMessageServiceSystemAccountDown,
  ],
  maintenancePlannedList: [],
  maintenanceRemovedList: ['service_store_eso', 'service_system_account'],
  logs: [
    ...FirstLiveServicesDownLiveServices.logs,
    {
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
      statusId: 2,
      rawData: JSON.stringify(LiveServicesServerPcPtsDownRaw),
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
      statusId: 4,
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsPlannedRaw),
    },
    {
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
      statusId: 2,
      typeId: 1,
      supportId: 4,
      zoneId: 3,
      rawData: JSON.stringify(LiveServicesServerPcPtsDownRaw),
    },
    {
      id: 11,
      slugId: 11,
      statusId: 2,
      typeId: 2,
      supportId: 2,
      zoneId: 6,
      rawData: JSON.stringify(ForumMessageServiceStoreEsoDownRaw),
    },
    {
      id: 12,
      slugId: 12,
      statusId: 2,
      typeId: 2,
      supportId: 3,
      zoneId: 8,
      rawData: JSON.stringify(ForumMessageServiceSystemAccountDownRaw),
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
      status: 'down',
      type: 'server',
      support: 'pc',
      zone: 'pts',
      raw: LiveServicesServerPcPtsDownRawStringDate,
    },
    {
      slug: 'service_store_eso',
      status: 'down',
      type: 'service',
      support: 'store',
      zone: 'eso',
      raw: ForumMessageServiceStoreEsoDownRawStringDate,
    },
    {
      slug: 'service_system_account',
      status: 'down',
      type: 'service',
      support: 'system',
      zone: 'account',
      raw: ForumMessageServiceSystemAccountDownRawStringDate,
    },
  ],
};
const ForumMessageDownForumMessage: Step = {
  connector: 'ForumMessage',
  connectorData: [
    ForumMessageServiceStoreEsoDownRaw,
    ForumMessageServiceSystemAccountDownRaw,
  ],
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
  connector: 'ForumMessagePts',
  connectorData: [ForumMessagePtsServerPcPtsPlannedRaw],
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
  connector: 'LiveServices',
  connectorData: [
    LiveServicesServerPcEuUpRaw,
    LiveServicesServerPcNaUpRaw,
    LiveServicesServerPsEuUpRaw,
    LiveServicesServerPsNaUpRaw,
    LiveServicesServerPcPtsDownRaw,
    LiveServicesServerXboxEuUpRaw,
    LiveServicesServerXboxNaUpRaw,
  ],
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
  logs: FirstForumMessageDownForumMessage.logs,
  archives: FirstForumMessageDownForumMessage.archives,
  services: FirstForumMessageDownForumMessage.services,
  maintenances: FirstForumMessageDownForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageDownForumMessage.serviceControllerReturn,
};

const FirstForumMessagePtsDownForumMessagePts: Step = {
  connector: 'ForumMessagePts',
  connectorData: [ForumMessagePtsServerPcPtsDownRaw],
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstForumMessageDownForumMessage.logs,
    {
      connector: 'ForumMessagePts',
      serviceId: 7,
      statusId: 2,
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsDownRaw),
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
      statusId: 2,
      rawData: JSON.stringify(LiveServicesServerPcPtsDownRaw),
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
      statusId: 2,
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsDownRaw),
    },
    {
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
      statusId: 2,
      typeId: 1,
      supportId: 4,
      zoneId: 3,
      rawData: JSON.stringify(LiveServicesServerPcPtsDownRaw),
    },
    {
      id: 11,
      slugId: 11,
      statusId: 2,
      typeId: 2,
      supportId: 2,
      zoneId: 6,
      rawData: JSON.stringify(ForumMessageServiceStoreEsoDownRaw),
    },
    {
      id: 12,
      slugId: 12,
      statusId: 2,
      typeId: 2,
      supportId: 3,
      zoneId: 8,
      rawData: JSON.stringify(ForumMessageServiceSystemAccountDownRaw),
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
      status: 'down',
      type: 'server',
      support: 'pc',
      zone: 'pts',
      raw: LiveServicesServerPcPtsDownRawStringDate,
    },
    {
      slug: 'service_store_eso',
      status: 'down',
      type: 'service',
      support: 'store',
      zone: 'eso',
      raw: ForumMessageServiceStoreEsoDownRawStringDate,
    },
    {
      slug: 'service_system_account',
      status: 'down',
      type: 'service',
      support: 'system',
      zone: 'account',
      raw: ForumMessageServiceSystemAccountDownRawStringDate,
    },
  ],
};
const ForumMessagePtsDownForumMessagePts: Step = {
  connector: 'ForumMessagePts',
  connectorData: [ForumMessagePtsServerPcPtsDownRaw],
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
  connector: 'ForumMessage',
  connectorData: [
    ForumMessageServiceStoreEsoDownRaw,
    ForumMessageServiceSystemAccountDownRaw,
  ],
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
  connector: 'LiveServices',
  connectorData: [
    LiveServicesServerPcEuUpRaw,
    LiveServicesServerPcNaUpRaw,
    LiveServicesServerPsEuUpRaw,
    LiveServicesServerPsNaUpRaw,
    LiveServicesServerPcPtsDownRaw,
    LiveServicesServerXboxEuUpRaw,
    LiveServicesServerXboxNaUpRaw,
  ],
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
  logs: FirstForumMessagePtsDownForumMessagePts.logs,
  archives: FirstForumMessagePtsDownForumMessagePts.archives,
  services: FirstForumMessagePtsDownForumMessagePts.services,
  maintenances: FirstForumMessagePtsDownForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn,
};

const FirstServiceAlertsDownServiceAlerts: Step = {
  connector: 'ServiceAlerts',
  connectorData: [
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
      connector: 'ServiceAlerts',
      serviceId: 7,
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServerPcPtsDownRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 11,
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServiceStoreEsoDownRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 12,
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServiceSystemAccountDownRaw),
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
      statusId: 2,
      rawData: JSON.stringify(LiveServicesServerPcPtsDownRaw),
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
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServerPcPtsDownRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 11,
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServiceStoreEsoDownRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 12,
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServiceSystemAccountDownRaw),
    },
    {
      connector: 'ForumMessagePts',
      serviceId: 7,
      statusId: 2,
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsDownRaw),
    },
    {
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
      statusId: 2,
      typeId: 1,
      supportId: 4,
      zoneId: 3,
      rawData: JSON.stringify(LiveServicesServerPcPtsDownRaw),
    },
    {
      id: 11,
      slugId: 11,
      statusId: 2,
      typeId: 2,
      supportId: 2,
      zoneId: 6,
      rawData: JSON.stringify(ForumMessageServiceStoreEsoDownRaw),
    },
    {
      id: 12,
      slugId: 12,
      statusId: 2,
      typeId: 2,
      supportId: 3,
      zoneId: 8,
      rawData: JSON.stringify(ForumMessageServiceSystemAccountDownRaw),
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
      status: 'down',
      type: 'server',
      support: 'pc',
      zone: 'pts',
      raw: LiveServicesServerPcPtsDownRawStringDate,
    },
    {
      slug: 'service_store_eso',
      status: 'down',
      type: 'service',
      support: 'store',
      zone: 'eso',
      raw: ForumMessageServiceStoreEsoDownRawStringDate,
    },
    {
      slug: 'service_system_account',
      status: 'down',
      type: 'service',
      support: 'system',
      zone: 'account',
      raw: ForumMessageServiceSystemAccountDownRawStringDate,
    },
  ],
};
const ServiceAlertsDownServiceAlerts: Step = {
  connector: 'ServiceAlerts',
  connectorData: [
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
  logs: FirstServiceAlertsDownServiceAlerts.logs,
  archives: FirstServiceAlertsDownServiceAlerts.archives,
  services: FirstServiceAlertsDownServiceAlerts.services,
  maintenances: FirstServiceAlertsDownServiceAlerts.maintenances,
  serviceControllerReturn:
    FirstServiceAlertsDownServiceAlerts.serviceControllerReturn,
};
const ServiceAlertsDownLiveServices: Step = {
  connector: 'LiveServices',
  connectorData: [
    LiveServicesServerPcEuUpRaw,
    LiveServicesServerPcNaUpRaw,
    LiveServicesServerPsEuUpRaw,
    LiveServicesServerPsNaUpRaw,
    LiveServicesServerPcPtsDownRaw,
    LiveServicesServerXboxEuUpRaw,
    LiveServicesServerXboxNaUpRaw,
  ],
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
  connector: 'ForumMessage',
  connectorData: [
    ForumMessageServiceStoreEsoDownRaw,
    ForumMessageServiceSystemAccountDownRaw,
  ],
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
  connector: 'ForumMessagePts',
  connectorData: [ForumMessagePtsServerPcPtsDownRaw],
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

const FirstLiveServicesUpLiveServices: Step = {
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
  statusUpdateList: [LiveServicesServerPcPtsUp],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstServiceAlertsDownServiceAlerts.logs,
    {
      connector: 'LiveServices',
      serviceId: 7,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPcPtsUpRaw),
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
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServerPcPtsDownRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 11,
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServiceStoreEsoDownRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 12,
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServiceSystemAccountDownRaw),
    },
    {
      connector: 'ForumMessagePts',
      serviceId: 7,
      statusId: 2,
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsDownRaw),
    },
    {
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
      statusId: 2,
      typeId: 2,
      supportId: 2,
      zoneId: 6,
      rawData: JSON.stringify(ForumMessageServiceStoreEsoDownRaw),
    },
    {
      id: 12,
      slugId: 12,
      statusId: 2,
      typeId: 2,
      supportId: 3,
      zoneId: 8,
      rawData: JSON.stringify(ForumMessageServiceSystemAccountDownRaw),
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
      status: 'down',
      type: 'service',
      support: 'store',
      zone: 'eso',
      raw: ForumMessageServiceStoreEsoDownRawStringDate,
    },
    {
      slug: 'service_system_account',
      status: 'down',
      type: 'service',
      support: 'system',
      zone: 'account',
      raw: ForumMessageServiceSystemAccountDownRawStringDate,
    },
  ],
};
const LiveServicesUpLiveServices: Step = {
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
  logs: FirstLiveServicesUpLiveServices.logs,
  archives: FirstLiveServicesUpLiveServices.archives,
  services: FirstLiveServicesUpLiveServices.services,
  maintenances: FirstLiveServicesUpLiveServices.maintenances,
  serviceControllerReturn:
    FirstLiveServicesUpLiveServices.serviceControllerReturn,
};
const LiveServicesUpForumMessage: Step = {
  connector: 'ForumMessage',
  connectorData: [
    ForumMessageServiceStoreEsoDownRaw,
    ForumMessageServiceSystemAccountDownRaw,
  ],
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
  connector: 'ForumMessagePts',
  connectorData: [ForumMessagePtsServerPcPtsDownRaw],
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
  connector: 'ServiceAlerts',
  connectorData: [
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
  logs: FirstLiveServicesUpLiveServices.logs,
  archives: FirstLiveServicesUpLiveServices.archives,
  services: FirstLiveServicesUpLiveServices.services,
  maintenances: FirstLiveServicesUpLiveServices.maintenances,
  serviceControllerReturn:
    FirstLiveServicesUpLiveServices.serviceControllerReturn,
};

const FirstForumMessageUpForumMessage: Step = {
  connector: 'ForumMessage',
  connectorData: [
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
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServerPcPtsDownRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 11,
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServiceStoreEsoDownRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 12,
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServiceSystemAccountDownRaw),
    },
    {
      connector: 'ForumMessagePts',
      serviceId: 7,
      statusId: 2,
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsDownRaw),
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
      rawData: JSON.stringify(ForumMessageServiceStoreEsoUpRaw),
    },
    {
      id: 12,
      slugId: 12,
      statusId: 1,
      typeId: 2,
      supportId: 3,
      zoneId: 8,
      rawData: JSON.stringify(ForumMessageServiceSystemAccountUpRaw),
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
      raw: ForumMessageServiceStoreEsoUpRawStringDate,
    },
    {
      slug: 'service_system_account',
      status: 'up',
      type: 'service',
      support: 'system',
      zone: 'account',
      raw: ForumMessageServiceSystemAccountUpRawStringDate,
    },
  ],
};
const ForumMessageUpForumMessage: Step = {
  connector: 'ForumMessage',
  connectorData: [
    ForumMessageServiceStoreEsoUpRaw,
    ForumMessageServiceSystemAccountUpRaw,
  ],
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
  logs: FirstForumMessageUpForumMessage.logs,
  archives: FirstForumMessageUpForumMessage.archives,
  services: FirstForumMessageUpForumMessage.services,
  maintenances: FirstForumMessageUpForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageUpForumMessage.serviceControllerReturn,
};
const ForumMessageUpForumMessagePts: Step = {
  connector: 'ForumMessagePts',
  connectorData: [ForumMessagePtsServerPcPtsDownRaw],
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
  connector: 'ServiceAlerts',
  connectorData: [
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
  logs: FirstForumMessageUpForumMessage.logs,
  archives: FirstForumMessageUpForumMessage.archives,
  services: FirstForumMessageUpForumMessage.services,
  maintenances: FirstForumMessageUpForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageUpForumMessage.serviceControllerReturn,
};

const FirstForumMessagePtsUpForumMessagePts: Step = {
  connector: 'ForumMessagePts',
  connectorData: [ForumMessagePtsServerPcPtsUpRaw],
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstForumMessageUpForumMessage.logs,
    {
      connector: 'ForumMessagePts',
      serviceId: 7,
      statusId: 1,
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsUpRaw),
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
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServerPcPtsDownRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 11,
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServiceStoreEsoDownRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 12,
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServiceSystemAccountDownRaw),
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
      rawData: JSON.stringify(ForumMessageServiceStoreEsoUpRaw),
    },
    {
      id: 12,
      slugId: 12,
      statusId: 1,
      typeId: 2,
      supportId: 3,
      zoneId: 8,
      rawData: JSON.stringify(ForumMessageServiceSystemAccountUpRaw),
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
      raw: ForumMessageServiceStoreEsoUpRawStringDate,
    },
    {
      slug: 'service_system_account',
      status: 'up',
      type: 'service',
      support: 'system',
      zone: 'account',
      raw: ForumMessageServiceSystemAccountUpRawStringDate,
    },
  ],
};
const ForumMessagePtsUpForumMessagePts: Step = {
  connector: 'ForumMessagePts',
  connectorData: [ForumMessagePtsServerPcPtsUpRaw],
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
  connector: 'ForumMessage',
  connectorData: [
    ForumMessageServiceStoreEsoUpRaw,
    ForumMessageServiceSystemAccountUpRaw,
  ],
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
  logs: FirstForumMessagePtsUpForumMessagePts.logs,
  archives: FirstForumMessagePtsUpForumMessagePts.archives,
  services: FirstForumMessagePtsUpForumMessagePts.services,
  maintenances: FirstForumMessagePtsUpForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsUpForumMessagePts.serviceControllerReturn,
};
const ForumMessagePtsUpServiceAlerts: Step = {
  connector: 'ServiceAlerts',
  connectorData: [
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
  logs: FirstForumMessagePtsUpForumMessagePts.logs,
  archives: FirstForumMessagePtsUpForumMessagePts.archives,
  services: FirstForumMessagePtsUpForumMessagePts.services,
  maintenances: FirstForumMessagePtsUpForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsUpForumMessagePts.serviceControllerReturn,
};

const FirstServiceAlertsUpServiceAlerts: Step = {
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
  logs: [
    ...FirstForumMessagePtsUpForumMessagePts.logs,
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
      rawData: JSON.stringify(ForumMessageServiceStoreEsoUpRaw),
    },
    {
      id: 12,
      slugId: 12,
      statusId: 1,
      typeId: 2,
      supportId: 3,
      zoneId: 8,
      rawData: JSON.stringify(ForumMessageServiceSystemAccountUpRaw),
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
      raw: ForumMessageServiceStoreEsoUpRawStringDate,
    },
    {
      slug: 'service_system_account',
      status: 'up',
      type: 'service',
      support: 'system',
      zone: 'account',
      raw: ForumMessageServiceSystemAccountUpRawStringDate,
    },
  ],
};
const ServiceAlertsUpServiceAlerts: Step = {
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
  logs: FirstServiceAlertsUpServiceAlerts.logs,
  archives: FirstServiceAlertsUpServiceAlerts.archives,
  services: FirstServiceAlertsUpServiceAlerts.services,
  maintenances: FirstServiceAlertsUpServiceAlerts.maintenances,
  serviceControllerReturn:
    FirstServiceAlertsUpServiceAlerts.serviceControllerReturn,
};
const ServiceAlertsUpLiveServices: Step = {
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
  logs: FirstServiceAlertsUpServiceAlerts.logs,
  archives: FirstServiceAlertsUpServiceAlerts.archives,
  services: FirstServiceAlertsUpServiceAlerts.services,
  maintenances: FirstServiceAlertsUpServiceAlerts.maintenances,
  serviceControllerReturn:
    FirstServiceAlertsUpServiceAlerts.serviceControllerReturn,
};
const ServiceAlertsUpForumMessage: Step = {
  connector: 'ForumMessage',
  connectorData: [
    ForumMessageServiceStoreEsoUpRaw,
    ForumMessageServiceSystemAccountUpRaw,
  ],
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
  connector: 'ForumMessagePts',
  connectorData: [ForumMessagePtsServerPcPtsUpRaw],
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
  // Forum message pts planned (server_pc_pts)
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
  // Forum message pts down (server_pc_pts)
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
  // Forum message pts planned (server_pc_pts)
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
