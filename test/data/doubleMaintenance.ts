import {
  EsoStatus,
  EsoStatusMaintenance,
  EsoStatusRawData,
} from '@eso-status/types';

import * as moment from 'moment';

import { EsoStatusRawData as CustomEsoStatusRawData } from '../../src/interface/esoStatusRawData.interface';
import { Initial } from '../interface/initial.interface';
import { Scenario } from '../interface/scenario.interface';
import { Step } from '../interface/step.interface';

const LiveServicesServerPcEuUpRaw: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (EU) UP',
  rawSlug: 'The Elder Scrolls Online (EU)',
  rawStatus: 'UP',
  slug: 'server_pc_eu',
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'up',
};
const LiveServicesServerPcEuUpRawStringDate: CustomEsoStatusRawData = {
  source: LiveServicesServerPcEuUpRaw.source,
  raw: LiveServicesServerPcEuUpRaw.raw,
  rawSlug: LiveServicesServerPcEuUpRaw.rawSlug,
  rawStatus: LiveServicesServerPcEuUpRaw.rawStatus,
  slug: LiveServicesServerPcEuUpRaw.slug,
  type: LiveServicesServerPcEuUpRaw.type,
  support: LiveServicesServerPcEuUpRaw.support,
  zone: LiveServicesServerPcEuUpRaw.zone,
  status: LiveServicesServerPcEuUpRaw.status,
};

const LiveServicesServerPcNaUpRaw: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (NA) UP',
  rawSlug: 'The Elder Scrolls Online (NA)',
  rawStatus: 'UP',
  slug: 'server_pc_na',
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'up',
};
const LiveServicesServerPcNaUpRawStringDate: CustomEsoStatusRawData = {
  source: LiveServicesServerPcNaUpRaw.source,
  raw: LiveServicesServerPcNaUpRaw.raw,
  rawSlug: LiveServicesServerPcNaUpRaw.rawSlug,
  rawStatus: LiveServicesServerPcNaUpRaw.rawStatus,
  slug: LiveServicesServerPcNaUpRaw.slug,
  type: LiveServicesServerPcNaUpRaw.type,
  support: LiveServicesServerPcNaUpRaw.support,
  zone: LiveServicesServerPcNaUpRaw.zone,
  status: LiveServicesServerPcNaUpRaw.status,
};

const LiveServicesServerPsEuUpRaw: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (PS4 - EU) UP',
  rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
  rawStatus: 'UP',
  slug: 'server_ps_eu',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'up',
};
const LiveServicesServerPsEuUpRawStringDate: CustomEsoStatusRawData = {
  source: LiveServicesServerPsEuUpRaw.source,
  raw: LiveServicesServerPsEuUpRaw.raw,
  rawSlug: LiveServicesServerPsEuUpRaw.rawSlug,
  rawStatus: LiveServicesServerPsEuUpRaw.rawStatus,
  slug: LiveServicesServerPsEuUpRaw.slug,
  type: LiveServicesServerPsEuUpRaw.type,
  support: LiveServicesServerPsEuUpRaw.support,
  zone: LiveServicesServerPsEuUpRaw.zone,
  status: LiveServicesServerPsEuUpRaw.status,
};

const LiveServicesServerPsNaUpRaw: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (PS4 - US) UP',
  rawSlug: 'The Elder Scrolls Online (PS4 - US)',
  rawStatus: 'UP',
  slug: 'server_ps_na',
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'up',
};
const LiveServicesServerPsNaUpRawStringDate: CustomEsoStatusRawData = {
  source: LiveServicesServerPsNaUpRaw.source,
  raw: LiveServicesServerPsNaUpRaw.raw,
  rawSlug: LiveServicesServerPsNaUpRaw.rawSlug,
  rawStatus: LiveServicesServerPsNaUpRaw.rawStatus,
  slug: LiveServicesServerPsNaUpRaw.slug,
  type: LiveServicesServerPsNaUpRaw.type,
  support: LiveServicesServerPsNaUpRaw.support,
  zone: LiveServicesServerPsNaUpRaw.zone,
  status: LiveServicesServerPsNaUpRaw.status,
};

const LiveServicesServerPcPtsUpRaw: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (PTS) UP',
  rawSlug: 'The Elder Scrolls Online (PTS)',
  rawStatus: 'UP',
  slug: 'server_pc_pts',
  type: 'server',
  support: 'pc',
  zone: 'pts',
  status: 'up',
};
const LiveServicesServerPcPtsUpRawStringDate: CustomEsoStatusRawData = {
  source: LiveServicesServerPcPtsUpRaw.source,
  raw: LiveServicesServerPcPtsUpRaw.raw,
  rawSlug: LiveServicesServerPcPtsUpRaw.rawSlug,
  rawStatus: LiveServicesServerPcPtsUpRaw.rawStatus,
  slug: LiveServicesServerPcPtsUpRaw.slug,
  type: LiveServicesServerPcPtsUpRaw.type,
  support: LiveServicesServerPcPtsUpRaw.support,
  zone: LiveServicesServerPcPtsUpRaw.zone,
  status: LiveServicesServerPcPtsUpRaw.status,
};

const LiveServicesServerXboxEuUpRaw: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (XBox - EU) UP',
  rawSlug: 'The Elder Scrolls Online (XBox - EU)',
  rawStatus: 'UP',
  slug: 'server_xbox_eu',
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'up',
};
const LiveServicesServerXboxEuUpRawStringDate: CustomEsoStatusRawData = {
  source: LiveServicesServerXboxEuUpRaw.source,
  raw: LiveServicesServerXboxEuUpRaw.raw,
  rawSlug: LiveServicesServerXboxEuUpRaw.rawSlug,
  rawStatus: LiveServicesServerXboxEuUpRaw.rawStatus,
  slug: LiveServicesServerXboxEuUpRaw.slug,
  type: LiveServicesServerXboxEuUpRaw.type,
  support: LiveServicesServerXboxEuUpRaw.support,
  zone: LiveServicesServerXboxEuUpRaw.zone,
  status: LiveServicesServerXboxEuUpRaw.status,
};

const LiveServicesServerXboxNaUpRaw: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (XBox - US) UP',
  rawSlug: 'The Elder Scrolls Online (XBox - US)',
  rawStatus: 'UP',
  slug: 'server_xbox_na',
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'up',
};
const LiveServicesServerXboxNaUpRawStringDate: CustomEsoStatusRawData = {
  source: LiveServicesServerXboxNaUpRaw.source,
  raw: LiveServicesServerXboxNaUpRaw.raw,
  rawSlug: LiveServicesServerXboxNaUpRaw.rawSlug,
  rawStatus: LiveServicesServerXboxNaUpRaw.rawStatus,
  slug: LiveServicesServerXboxNaUpRaw.slug,
  type: LiveServicesServerXboxNaUpRaw.type,
  support: LiveServicesServerXboxNaUpRaw.support,
  zone: LiveServicesServerXboxNaUpRaw.zone,
  status: LiveServicesServerXboxNaUpRaw.status,
};

const ServiceAlertsServerXboxNaUpRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n<p>2024.08.08 - 15:30 UTC (11:30 EDT)</p>\\n<p>The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time. </p>\\n',
  rawDate: '2024.08.08 - 15:30 UTC (11:30 EDT)',
  slug: 'server_xbox_na',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 8)
      .set('hours', 15)
      .set('minutes', 30)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'up',
  rawSlug: '',
};

const ServiceAlertsServerXboxEuUpRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n<p>2024.08.08 - 15:30 UTC (11:30 EDT)</p>\\n<p>The issues related to logging in to the North American and European Xbox megaservers have been resolved at this time. </p>\\n',
  rawDate: '2024.08.08 - 15:30 UTC (11:30 EDT)',
  slug: 'server_xbox_eu',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 8)
      .set('hours', 15)
      .set('minutes', 30)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'up',
  rawSlug: '',
};

const ServiceAlertsServerPsNaUpRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
  rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
  slug: 'server_ps_na',
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
  rawSlug: '',
};

const ServiceAlertsServerPsEuUpRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
  rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
  slug: 'server_ps_eu',
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
  rawSlug: '',
};

const ServiceAlertsServerPcNaUpRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
  rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
  slug: 'server_pc_na',
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
  rawSlug: '',
};

const ServiceAlertsServerPcEuUpRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
  rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
  slug: 'server_pc_eu',
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
  rawSlug: '',
};

const ServiceAlertsServerPcPtsUpRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n<p>2024.08.05 - 18:00 UTC (14:00 EDT)</p>\\n\\n<p>The PTS is currently available.</p>\\n\\n',
  rawDate: '2024.08.05 - 18:00 UTC (14:00 EDT)',
  slug: 'server_pc_pts',
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
  rawSlug: '',
};

const ServiceAlertsServiceStoreEsoUpRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
  rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
  slug: 'service_store_eso',
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
  rawSlug: '',
};

const ServiceAlertsServiceSystemAccountUpRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
  rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
  slug: 'service_system_account',
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
  rawSlug: '',
};

const ForumMessageServiceWebSitePlannedRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/',
  raw: '• ESO Website for maintenance – August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
  slug: 'service_web_site',
  rawDate: 'August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 15)
      .set('hours', 20)
      .set('minutes', 30)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 15)
      .set('hours', 23)
      .set('minutes', 30)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'service',
  support: 'web',
  zone: 'site',
  status: 'planned',
  rawSlug: '',
};
const ForumMessageServiceWebSitePlannedRawStringDate: CustomEsoStatusRawData = {
  source: ForumMessageServiceWebSitePlannedRaw.source,
  raw: ForumMessageServiceWebSitePlannedRaw.raw,
  slug: ForumMessageServiceWebSitePlannedRaw.slug,
  rawDate: ForumMessageServiceWebSitePlannedRaw.rawDate,
  dates: ['2024-08-15T20:30:00.000Z', '2024-08-15T23:30:00.000Z'],
  type: ForumMessageServiceWebSitePlannedRaw.type,
  support: ForumMessageServiceWebSitePlannedRaw.support,
  zone: ForumMessageServiceWebSitePlannedRaw.zone,
  status: ForumMessageServiceWebSitePlannedRaw.status,
  rawSlug: ForumMessageServiceWebSitePlannedRaw.rawSlug,
};
const ForumMessageServiceWebSitePlanned: EsoStatusMaintenance = {
  rawDataList: [ForumMessageServiceWebSitePlannedRaw],
  beginnerAt: '2024-08-15T20:30:00.000Z',
  endingAt: '2024-08-15T23:30:00.000Z',
};

const ForumMessageServiceWebSiteDownRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/',
  raw: '• [IN PROGRESS] ESO Website for maintenance – August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
  slug: 'service_web_site',
  rawDate: 'August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 15)
      .set('hours', 20)
      .set('minutes', 30)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 15)
      .set('hours', 23)
      .set('minutes', 30)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'service',
  support: 'web',
  zone: 'site',
  status: 'down',
  rawSlug: '',
};
const ForumMessageServiceWebSiteDownRawStringDate: CustomEsoStatusRawData = {
  source: ForumMessageServiceWebSiteDownRaw.source,
  raw: ForumMessageServiceWebSiteDownRaw.raw,
  slug: ForumMessageServiceWebSiteDownRaw.slug,
  rawDate: ForumMessageServiceWebSiteDownRaw.rawDate,
  dates: ['2024-08-15T20:30:00.000Z', '2024-08-15T23:30:00.000Z'],
  type: ForumMessageServiceWebSiteDownRaw.type,
  support: ForumMessageServiceWebSiteDownRaw.support,
  zone: ForumMessageServiceWebSiteDownRaw.zone,
  status: ForumMessageServiceWebSiteDownRaw.status,
  rawSlug: ForumMessageServiceWebSiteDownRaw.rawSlug,
};
const ForumMessageServiceWebSiteDown: EsoStatus = {
  slug: 'service_web_site',
  status: 'down',
  type: 'service',
  support: 'web',
  zone: 'site',
  rawData: ForumMessageServiceWebSiteDownRaw,
  statusSince: moment(0),
};

const ForumMessageServiceWebSiteUpRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/',
  raw: '• [COMPLETE] ESO Website for maintenance – August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
  slug: 'service_web_site',
  rawDate: 'August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 15)
      .set('hours', 20)
      .set('minutes', 30)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 15)
      .set('hours', 23)
      .set('minutes', 30)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'service',
  support: 'web',
  zone: 'site',
  status: 'up',
  rawSlug: '',
};
const ForumMessageServiceWebSiteUpRawStringDate: CustomEsoStatusRawData = {
  source: ForumMessageServiceWebSiteUpRaw.source,
  raw: ForumMessageServiceWebSiteUpRaw.raw,
  slug: ForumMessageServiceWebSiteUpRaw.slug,
  rawDate: ForumMessageServiceWebSiteUpRaw.rawDate,
  dates: ['2024-08-15T20:30:00.000Z', '2024-08-15T23:30:00.000Z'],
  type: ForumMessageServiceWebSiteUpRaw.type,
  support: ForumMessageServiceWebSiteUpRaw.support,
  zone: ForumMessageServiceWebSiteUpRaw.zone,
  status: ForumMessageServiceWebSiteUpRaw.status,
  rawSlug: ForumMessageServiceWebSiteUpRaw.rawSlug,
};
const ForumMessageServiceWebSiteUp: EsoStatus = {
  slug: 'service_web_site',
  status: 'up',
  type: 'service',
  support: 'web',
  zone: 'site',
  rawData: ForumMessageServiceWebSiteUpRaw,
  statusSince: moment(0),
};

const ForumMessagePtsServiceWebSitePlannedRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• ESO Website for maintenance – August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
  slug: 'service_web_site',
  rawDate: 'August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 15)
      .set('hours', 20)
      .set('minutes', 30)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 15)
      .set('hours', 23)
      .set('minutes', 30)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'service',
  support: 'web',
  zone: 'site',
  status: 'planned',
  rawSlug: '',
};
const ForumMessagePtsServiceWebSiteDownRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• [IN PROGRESS] ESO Website for maintenance – August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
  slug: 'service_web_site',
  rawDate: 'August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 15)
      .set('hours', 20)
      .set('minutes', 30)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 15)
      .set('hours', 23)
      .set('minutes', 30)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'service',
  support: 'web',
  zone: 'site',
  status: 'down',
  rawSlug: '',
};
const ForumMessagePtsServiceWebSiteUpRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• [COMPLETE] ESO Website for maintenance – August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
  slug: 'service_web_site',
  rawDate: 'August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 15)
      .set('hours', 20)
      .set('minutes', 30)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 7)
      .set('date', 15)
      .set('hours', 23)
      .set('minutes', 30)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  type: 'service',
  support: 'web',
  zone: 'site',
  status: 'up',
  rawSlug: '',
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
      serviceId: 8,
      statusId: 1,
      rawData: JSON.stringify(ForumMessagePtsServiceWebSiteUpRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 8,
      statusId: 1,
      rawData: JSON.stringify(ForumMessageServiceWebSiteUpRaw),
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
      serviceId: 8,
      statusId: 1,
      rawData: JSON.stringify(ForumMessagePtsServiceWebSiteUpRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 8,
      statusId: 1,
      rawData: JSON.stringify(ForumMessageServiceWebSiteUpRaw),
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
      id: 8,
      slugId: 8,
      statusId: 1,
      typeId: 2,
      supportId: 1,
      zoneId: 4,
      rawData: JSON.stringify(ForumMessageServiceWebSiteUpRaw),
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
      rawData: LiveServicesServerXboxNaUpRawStringDate,
      statusSince: moment(0).toISOString(),
    },
    {
      slug: 'server_xbox_eu',
      status: 'up',
      type: 'server',
      support: 'xbox',
      zone: 'eu',
      rawData: LiveServicesServerXboxEuUpRawStringDate,
      statusSince: moment(0).toISOString(),
    },
    {
      slug: 'server_ps_na',
      status: 'up',
      type: 'server',
      support: 'ps',
      zone: 'na',
      rawData: LiveServicesServerPsNaUpRawStringDate,
      statusSince: moment(0).toISOString(),
    },
    {
      slug: 'server_ps_eu',
      status: 'up',
      type: 'server',
      support: 'ps',
      zone: 'eu',
      rawData: LiveServicesServerPsEuUpRawStringDate,
      statusSince: moment(0).toISOString(),
    },
    {
      slug: 'server_pc_na',
      status: 'up',
      type: 'server',
      support: 'pc',
      zone: 'na',
      rawData: LiveServicesServerPcNaUpRawStringDate,
      statusSince: moment(0).toISOString(),
    },
    {
      slug: 'server_pc_eu',
      status: 'up',
      type: 'server',
      support: 'pc',
      zone: 'eu',
      rawData: LiveServicesServerPcEuUpRawStringDate,
      statusSince: moment(0).toISOString(),
    },
    {
      slug: 'server_pc_pts',
      status: 'up',
      type: 'server',
      support: 'pc',
      zone: 'pts',
      rawData: LiveServicesServerPcPtsUpRawStringDate,
      statusSince: moment(0).toISOString(),
    },
    {
      slug: 'service_web_site',
      status: 'up',
      type: 'service',
      support: 'web',
      zone: 'site',
      rawData: ForumMessageServiceWebSiteUpRawStringDate,
      statusSince: moment(0).toISOString(),
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

// Forum message planned (service_web_site)
const FirstForumMessagePlannedForumMessage: Step = {
  connector: InitialStateForumMessage.connector,
  connectorData: [ForumMessageServiceWebSitePlannedRaw], // changed
  statusUpdateList: [],
  maintenancePlannedList: [ForumMessageServiceWebSitePlanned], // emitted
  maintenanceRemovedList: [],
  logs: [
    ...InitialStateLiveServices.logs,
    {
      // created
      connector: 'ForumMessage',
      serviceId: 8,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServiceWebSitePlannedRaw),
    },
  ],
  archives: [
    InitialStateLiveServices.archives[0],
    InitialStateLiveServices.archives[1],
    InitialStateLiveServices.archives[2],
    InitialStateLiveServices.archives[3],
    InitialStateLiveServices.archives[4],
    InitialStateLiveServices.archives[5],
    InitialStateLiveServices.archives[6],
    InitialStateLiveServices.archives[7],
    InitialStateLiveServices.archives[8],
    InitialStateLiveServices.archives[9],
    InitialStateLiveServices.archives[10],
    InitialStateLiveServices.archives[11],
    InitialStateLiveServices.archives[12],
    InitialStateLiveServices.archives[13],
    InitialStateLiveServices.archives[14],
    InitialStateLiveServices.archives[15],
    InitialStateLiveServices.archives[16],
    {
      connector: InitialStateLiveServices.archives[17].connector,
      serviceId: InitialStateLiveServices.archives[17].serviceId,
      statusId: 4, // Updated from 1
      rawData: JSON.stringify(ForumMessageServiceWebSitePlannedRaw), // Updated form ForumMessageServiceWebSiteUpRaw
    },
  ],
  services: InitialStateLiveServices.services,
  maintenances: [
    {
      // created
      serviceId: 8,
      beginnerAt: new Date(ForumMessageServiceWebSitePlanned.beginnerAt),
      rawData: JSON.stringify(ForumMessageServiceWebSitePlannedRaw),
    },
  ],
  serviceControllerReturn: [
    InitialStateLiveServices.serviceControllerReturn[0],
    InitialStateLiveServices.serviceControllerReturn[1],
    InitialStateLiveServices.serviceControllerReturn[2],
    InitialStateLiveServices.serviceControllerReturn[3],
    InitialStateLiveServices.serviceControllerReturn[4],
    InitialStateLiveServices.serviceControllerReturn[5],
    InitialStateLiveServices.serviceControllerReturn[6],
    {
      slug: InitialStateLiveServices.serviceControllerReturn[7].slug,
      status: InitialStateLiveServices.serviceControllerReturn[7].status,
      type: InitialStateLiveServices.serviceControllerReturn[7].type,
      support: InitialStateLiveServices.serviceControllerReturn[7].support,
      zone: InitialStateLiveServices.serviceControllerReturn[7].zone,
      rawData: InitialStateLiveServices.serviceControllerReturn[7].rawData,
      statusSince: moment(0).toISOString(),
      maintenance: {
        // created
        rawDataList: [ForumMessageServiceWebSitePlannedRawStringDate],
        beginnerAt: ForumMessageServiceWebSitePlannedRawStringDate.dates[0],
        endingAt: ForumMessageServiceWebSitePlannedRawStringDate.dates[1],
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

// Forum message pts planned (service_web_site)
const FirstForumMessagePtsPlannedForumMessagePts: Step = {
  connector: ForumMessagePlannedForumMessagePts.connector,
  connectorData: [ForumMessagePtsServiceWebSitePlannedRaw], // changed
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstForumMessagePlannedForumMessage.logs,
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 8,
      statusId: 4,
      rawData: JSON.stringify(ForumMessagePtsServiceWebSitePlannedRaw),
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
      rawData: JSON.stringify(ForumMessagePtsServiceWebSitePlannedRaw), // Updated form ForumMessagePtsServiceWebSiteUpRaw
    },
    FirstForumMessagePlannedForumMessage.archives[17],
  ],
  services: FirstForumMessagePlannedForumMessage.services,
  maintenances: FirstForumMessagePlannedForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessagePlannedForumMessage.serviceControllerReturn,
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

// Forum message down (service_web_site)
const FirstForumMessageDownForumMessage: Step = {
  connector: ForumMessagePtsPlannedForumMessage.connector,
  connectorData: [ForumMessageServiceWebSiteDownRaw], // changed
  statusUpdateList: [ForumMessageServiceWebSiteDown], // emitted
  maintenancePlannedList: [],
  maintenanceRemovedList: ['service_web_site'], // emitted
  logs: [
    ...FirstForumMessagePtsPlannedForumMessagePts.logs,
    {
      // created
      connector: 'ForumMessage',
      serviceId: 8,
      statusId: 2,
      rawData: JSON.stringify(ForumMessageServiceWebSiteDownRaw),
    },
  ],
  archives: [
    FirstForumMessagePtsPlannedForumMessagePts.archives[0],
    FirstForumMessagePtsPlannedForumMessagePts.archives[1],
    FirstForumMessagePtsPlannedForumMessagePts.archives[2],
    FirstForumMessagePtsPlannedForumMessagePts.archives[3],
    FirstForumMessagePtsPlannedForumMessagePts.archives[4],
    FirstForumMessagePtsPlannedForumMessagePts.archives[5],
    FirstForumMessagePtsPlannedForumMessagePts.archives[6],
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
    {
      connector:
        FirstForumMessagePtsPlannedForumMessagePts.archives[17].connector,
      serviceId:
        FirstForumMessagePtsPlannedForumMessagePts.archives[17].serviceId,
      statusId: 2, // Updated from 4
      rawData: JSON.stringify(ForumMessageServiceWebSiteDownRaw), // Updated form ForumMessageServiceWebSitePlannedRaw
    },
  ],
  services: [
    FirstForumMessagePtsPlannedForumMessagePts.services[0],
    FirstForumMessagePtsPlannedForumMessagePts.services[1],
    FirstForumMessagePtsPlannedForumMessagePts.services[2],
    FirstForumMessagePtsPlannedForumMessagePts.services[3],
    FirstForumMessagePtsPlannedForumMessagePts.services[4],
    FirstForumMessagePtsPlannedForumMessagePts.services[5],
    FirstForumMessagePtsPlannedForumMessagePts.services[6],
    {
      id: FirstForumMessagePtsPlannedForumMessagePts.services[7].id,
      slugId: FirstForumMessagePtsPlannedForumMessagePts.services[7].slugId,
      statusId: 2, // Update from 1
      typeId: FirstForumMessagePtsPlannedForumMessagePts.services[7].typeId,
      supportId:
        FirstForumMessagePtsPlannedForumMessagePts.services[7].supportId,
      zoneId: FirstForumMessagePtsPlannedForumMessagePts.services[7].zoneId,
      rawData: JSON.stringify(ForumMessageServiceWebSiteDownRaw), // Update from ForumMessageServiceWebSiteUpRaw
    },
  ],
  maintenances: [],
  serviceControllerReturn: [
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn[0],
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn[1],
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn[2],
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn[3],
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn[4],
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn[5],
    FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn[6],
    {
      slug: FirstForumMessagePtsPlannedForumMessagePts
        .serviceControllerReturn[7].slug,
      status: 'down', // Update from up
      type: FirstForumMessagePtsPlannedForumMessagePts
        .serviceControllerReturn[7].type,
      support:
        FirstForumMessagePtsPlannedForumMessagePts.serviceControllerReturn[7]
          .support,
      zone: FirstForumMessagePtsPlannedForumMessagePts
        .serviceControllerReturn[7].zone,
      rawData: ForumMessageServiceWebSiteDownRawStringDate, // Update from ForumMessageServiceWebSiteUpRawStringDate
      statusSince: moment(0).toISOString(),
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
const ForumMessageDownLiveServices: Step = {
  connector: ForumMessagePtsPlannedLiveServices.connector,
  connectorData: ForumMessagePtsPlannedLiveServices.connectorData,
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
  connector: ForumMessagePtsPlannedForumMessagePts.connector,
  connectorData: ForumMessagePtsPlannedForumMessagePts.connectorData,
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
  connector: ForumMessagePtsPlannedServiceAlerts.connector,
  connectorData: ForumMessagePtsPlannedServiceAlerts.connectorData,
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

// Forum message pts down (service_web_site)
const FirstForumMessagePtsDownForumMessagePts: Step = {
  connector: ForumMessageDownForumMessagePts.connector,
  connectorData: [ForumMessagePtsServiceWebSiteDownRaw], // changed
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstForumMessageDownForumMessage.logs,
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 8,
      statusId: 2,
      rawData: JSON.stringify(ForumMessagePtsServiceWebSiteDownRaw),
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
      rawData: JSON.stringify(ForumMessagePtsServiceWebSiteDownRaw), // Updated form ForumMessagePtsServiceWebSitePlannedRaw
    },
    FirstForumMessageDownForumMessage.archives[17],
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

// Forum message up (service_web_site)
const FirstForumMessageUpForumMessage: Step = {
  connector: ForumMessagePtsDownForumMessage.connector,
  connectorData: [ForumMessageServiceWebSiteUpRaw], // changed
  statusUpdateList: [ForumMessageServiceWebSiteUp], // emitted
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstForumMessagePtsDownForumMessagePts.logs,
    {
      // created
      connector: 'ForumMessage',
      serviceId: 8,
      statusId: 1,
      rawData: JSON.stringify(ForumMessageServiceWebSiteUpRaw),
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
    FirstForumMessagePtsDownForumMessagePts.archives[13],
    FirstForumMessagePtsDownForumMessagePts.archives[14],
    FirstForumMessagePtsDownForumMessagePts.archives[15],
    FirstForumMessagePtsDownForumMessagePts.archives[16],
    {
      connector: FirstForumMessagePtsDownForumMessagePts.archives[17].connector,
      serviceId: FirstForumMessagePtsDownForumMessagePts.archives[17].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(ForumMessageServiceWebSiteUpRaw), // Updated form ForumMessageServiceWebSiteDownRaw
    },
  ],
  services: [
    FirstForumMessagePtsDownForumMessagePts.services[0],
    FirstForumMessagePtsDownForumMessagePts.services[1],
    FirstForumMessagePtsDownForumMessagePts.services[2],
    FirstForumMessagePtsDownForumMessagePts.services[3],
    FirstForumMessagePtsDownForumMessagePts.services[4],
    FirstForumMessagePtsDownForumMessagePts.services[5],
    FirstForumMessagePtsDownForumMessagePts.services[6],
    {
      id: FirstForumMessagePtsDownForumMessagePts.services[7].id,
      slugId: FirstForumMessagePtsDownForumMessagePts.services[7].slugId,
      statusId: 1, // Update from 2
      typeId: FirstForumMessagePtsDownForumMessagePts.services[7].typeId,
      supportId: FirstForumMessagePtsDownForumMessagePts.services[7].supportId,
      zoneId: FirstForumMessagePtsDownForumMessagePts.services[7].zoneId,
      rawData: JSON.stringify(ForumMessageServiceWebSiteUpRaw), // Update from ForumMessageServiceWebSiteDownRaw
    },
  ],
  maintenances: FirstForumMessagePtsDownForumMessagePts.maintenances,
  serviceControllerReturn: [
    FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[0],
    FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[1],
    FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[2],
    FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[3],
    FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[4],
    FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[5],
    FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[6],
    {
      slug: FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[7]
        .slug,
      status: 'up', // Update from down
      type: FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[7]
        .type,
      support:
        FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[7]
          .support,
      zone: FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[7]
        .zone,
      rawData: ForumMessageServiceWebSiteUpRawStringDate, // Update from ForumMessageServiceWebSiteDownRawStringDate
      statusSince: moment(0).toISOString(),
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
  connector: ForumMessagePtsDownLiveServices.connector,
  connectorData: ForumMessagePtsDownLiveServices.connectorData,
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
  connector: ForumMessagePtsDownForumMessagePts.connector,
  connectorData: ForumMessagePtsDownForumMessagePts.connectorData,
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
  connector: ForumMessagePtsDownServiceAlerts.connector,
  connectorData: ForumMessagePtsDownServiceAlerts.connectorData,
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

// Forum message pts up (service_web_site)
const FirstForumMessagePtsUpForumMessagePts: Step = {
  connector: ForumMessageUpForumMessagePts.connector,
  connectorData: [ForumMessagePtsServiceWebSiteUpRaw], // changed
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstForumMessageUpForumMessage.logs,
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 8,
      statusId: 1,
      rawData: JSON.stringify(ForumMessagePtsServiceWebSiteUpRaw),
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
      rawData: JSON.stringify(ForumMessagePtsServiceWebSiteUpRaw), // Updated form ForumMessagePtsServiceWebSiteDownRaw
    },
    FirstForumMessageUpForumMessage.archives[17],
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
  // Forum message planned (service_web_site)
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
  // Forum message pts planned (service_web_site)
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
const ForumMessageDownStepList: Step[] = [
  // Forum message down (service_web_site)
  ForumMessagePtsPlannedLiveServices,
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
  // Forum message pts down (service_web_site)
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
const ForumMessageUpStepList: Step[] = [
  // Forum message up (service_web_site)
  ForumMessagePtsDownLiveServices,
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
  // Forum message pts up (service_web_site)
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

export const doubleMaintenance: Scenario = {
  initial,
  steps: [
    // Initial state
    ...InitialStatesStepList,
    // Forum message planned (service_web_site)
    ...ForumMessagePlannedStepList,
    // Forum message pts planned (service_web_site)
    ...ForumMessagePtsPlannedStepList,
    // Forum message down (service_web_site)
    ...ForumMessageDownStepList,
    // Forum message pts down (service_web_site)
    ...ForumMessagePtsDownStepList,
    // Forum message up (service_web_site)
    ...ForumMessageUpStepList,
    // Forum message pts up (service_web_site)
    ...ForumMessagePtsUpStepList,
  ],
};
