import { EsoStatus, EsoStatusRawData } from '@eso-status/types';
import * as moment from 'moment/moment';

import { EsoStatusMaintenance as CustomEsoStatusMaintenance } from '../../src/interface/esoStatusMaintenance.interface';
import { EsoStatusRawData as CustomEsoStatusRawData } from '../../src/interface/esoStatusRawData.interface';
import { Initial } from '../interface/initial.interface';
import { Scenario } from '../interface/scenario.interface';
import { Step } from '../interface/step.interface';

// Initial LiveServices
const LiveServicesServerPsNaInitialRaw: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (PS4 - US) : UP',
  rawSlug: 'The Elder Scrolls Online (PS4 - US)',
  rawStatus: 'UP',
  slug: 'server_ps_na',
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'up',
};
const LiveServicesServerPsNaInitialRawStringDate: CustomEsoStatusRawData = {
  source: LiveServicesServerPsNaInitialRaw.source,
  raw: LiveServicesServerPsNaInitialRaw.raw,
  rawSlug: LiveServicesServerPsNaInitialRaw.rawSlug,
  rawStatus: LiveServicesServerPsNaInitialRaw.rawStatus,
  slug: LiveServicesServerPsNaInitialRaw.slug,
  type: LiveServicesServerPsNaInitialRaw.type,
  support: LiveServicesServerPsNaInitialRaw.support,
  zone: LiveServicesServerPsNaInitialRaw.zone,
  status: LiveServicesServerPsNaInitialRaw.status,
};
const LiveServicesServerPsNaInitial: EsoStatus = {
  slug: 'server_ps_na',
  status: 'up',
  type: 'server',
  support: 'ps',
  zone: 'na',
  rawData: LiveServicesServerPsNaInitialRaw,
  statusSince: moment(0),
};

const LiveServicesServerPsEuInitialRaw: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (PS4 - EU) : UP',
  rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
  rawStatus: 'UP',
  slug: 'server_ps_eu',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'up',
};
const LiveServicesServerPsEuInitialRawStringDate: CustomEsoStatusRawData = {
  source: LiveServicesServerPsEuInitialRaw.source,
  raw: LiveServicesServerPsEuInitialRaw.raw,
  rawSlug: LiveServicesServerPsEuInitialRaw.rawSlug,
  rawStatus: LiveServicesServerPsEuInitialRaw.rawStatus,
  slug: LiveServicesServerPsEuInitialRaw.slug,
  type: LiveServicesServerPsEuInitialRaw.type,
  support: LiveServicesServerPsEuInitialRaw.support,
  zone: LiveServicesServerPsEuInitialRaw.zone,
  status: LiveServicesServerPsEuInitialRaw.status,
};
const LiveServicesServerPsEuInitial: EsoStatus = {
  slug: 'server_ps_eu',
  status: 'up',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  rawData: LiveServicesServerPsEuInitialRaw,
  statusSince: moment(0),
};

const LiveServicesServerXboxEuInitialRaw: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (XBox - EU) : UP',
  rawSlug: 'The Elder Scrolls Online (XBox - EU)',
  rawStatus: 'UP',
  slug: 'server_xbox_eu',
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'up',
};
const LiveServicesServerXboxEuInitialRawStringDate: CustomEsoStatusRawData = {
  source: LiveServicesServerXboxEuInitialRaw.source,
  raw: LiveServicesServerXboxEuInitialRaw.raw,
  rawSlug: LiveServicesServerXboxEuInitialRaw.rawSlug,
  rawStatus: LiveServicesServerXboxEuInitialRaw.rawStatus,
  slug: LiveServicesServerXboxEuInitialRaw.slug,
  type: LiveServicesServerXboxEuInitialRaw.type,
  support: LiveServicesServerXboxEuInitialRaw.support,
  zone: LiveServicesServerXboxEuInitialRaw.zone,
  status: LiveServicesServerXboxEuInitialRaw.status,
};
const LiveServicesServerXboxEuInitial: EsoStatus = {
  slug: 'server_xbox_eu',
  status: 'up',
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  rawData: LiveServicesServerXboxEuInitialRaw,
  statusSince: moment(0),
};

const LiveServicesServerXboxNaInitialRaw: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (XBox - US) : UP',
  rawSlug: 'The Elder Scrolls Online (XBox - US)',
  rawStatus: 'UP',
  slug: 'server_xbox_na',
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'up',
};
const LiveServicesServerXboxNaInitialRawStringDate: CustomEsoStatusRawData = {
  source: LiveServicesServerXboxNaInitialRaw.source,
  raw: LiveServicesServerXboxNaInitialRaw.raw,
  rawSlug: LiveServicesServerXboxNaInitialRaw.rawSlug,
  rawStatus: LiveServicesServerXboxNaInitialRaw.rawStatus,
  slug: LiveServicesServerXboxNaInitialRaw.slug,
  type: LiveServicesServerXboxNaInitialRaw.type,
  support: LiveServicesServerXboxNaInitialRaw.support,
  zone: LiveServicesServerXboxNaInitialRaw.zone,
  status: LiveServicesServerXboxNaInitialRaw.status,
};
const LiveServicesServerXboxNaInitial: EsoStatus = {
  slug: 'server_xbox_na',
  status: 'up',
  type: 'server',
  support: 'xbox',
  zone: 'na',
  rawData: LiveServicesServerXboxNaInitialRaw,
  statusSince: moment(0),
};

const LiveServicesServerPcEuInitialRaw: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (EU) : UP',
  rawSlug: 'The Elder Scrolls Online (EU)',
  rawStatus: 'UP',
  slug: 'server_pc_eu',
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'up',
};
const LiveServicesServerPcEuInitialRawStringDate: CustomEsoStatusRawData = {
  source: LiveServicesServerPcEuInitialRaw.source,
  raw: LiveServicesServerPcEuInitialRaw.raw,
  rawSlug: LiveServicesServerPcEuInitialRaw.rawSlug,
  rawStatus: LiveServicesServerPcEuInitialRaw.rawStatus,
  slug: LiveServicesServerPcEuInitialRaw.slug,
  type: LiveServicesServerPcEuInitialRaw.type,
  support: LiveServicesServerPcEuInitialRaw.support,
  zone: LiveServicesServerPcEuInitialRaw.zone,
  status: LiveServicesServerPcEuInitialRaw.status,
};

const LiveServicesServerPcNaInitialRaw: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (NA) : UP',
  rawSlug: 'The Elder Scrolls Online (NA)',
  rawStatus: 'UP',
  slug: 'server_pc_na',
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'up',
};
const LiveServicesServerPcNaInitialRawStringDate: CustomEsoStatusRawData = {
  source: LiveServicesServerPcNaInitialRaw.source,
  raw: LiveServicesServerPcNaInitialRaw.raw,
  rawSlug: LiveServicesServerPcNaInitialRaw.rawSlug,
  rawStatus: LiveServicesServerPcNaInitialRaw.rawStatus,
  slug: LiveServicesServerPcNaInitialRaw.slug,
  type: LiveServicesServerPcNaInitialRaw.type,
  support: LiveServicesServerPcNaInitialRaw.support,
  zone: LiveServicesServerPcNaInitialRaw.zone,
  status: LiveServicesServerPcNaInitialRaw.status,
};

const LiveServicesServerPcPtsInitialRaw: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (PTS) : UP',
  rawSlug: 'The Elder Scrolls Online (PTS)',
  rawStatus: 'UP',
  slug: 'server_pc_pts',
  type: 'server',
  support: 'pc',
  zone: 'pts',
  status: 'up',
};
const LiveServicesServerPcPtsInitialRawStringDate: CustomEsoStatusRawData = {
  source: LiveServicesServerPcPtsInitialRaw.source,
  raw: LiveServicesServerPcPtsInitialRaw.raw,
  rawSlug: LiveServicesServerPcPtsInitialRaw.rawSlug,
  rawStatus: LiveServicesServerPcPtsInitialRaw.rawStatus,
  slug: LiveServicesServerPcPtsInitialRaw.slug,
  type: LiveServicesServerPcPtsInitialRaw.type,
  support: LiveServicesServerPcPtsInitialRaw.support,
  zone: LiveServicesServerPcPtsInitialRaw.zone,
  status: LiveServicesServerPcPtsInitialRaw.status,
};

// Initial ForumMessage
const ForumMessageServerPsNaInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_ps_na',
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'planned',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};
const ForumMessageServerPsNaInitialRawStringDate: CustomEsoStatusRawData = {
  source: ForumMessageServerPsNaInitialRaw.source,
  raw: ForumMessageServerPsNaInitialRaw.raw,
  slug: ForumMessageServerPsNaInitialRaw.slug,
  type: ForumMessageServerPsNaInitialRaw.type,
  support: ForumMessageServerPsNaInitialRaw.support,
  zone: ForumMessageServerPsNaInitialRaw.zone,
  status: ForumMessageServerPsNaInitialRaw.status,
  rawSlug: ForumMessageServerPsNaInitialRaw.rawSlug,
  rawDate: ForumMessageServerPsNaInitialRaw.rawDate,
  dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
};
const ForumMessageServerPsNaInitialMaintenance: CustomEsoStatusMaintenance = {
  rawDataList: [ForumMessageServerPsNaInitialRawStringDate],
  beginnerAt: '2024-10-02T10:00:00.000Z',
  endingAt: '2024-10-02T16:00:00.000Z',
};

const ForumMessageServerPsEuInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  slug: 'server_ps_eu',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'planned',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};
const ForumMessageServerPsEuInitialRawStringDate: CustomEsoStatusRawData = {
  source: ForumMessageServerPsEuInitialRaw.source,
  raw: ForumMessageServerPsEuInitialRaw.raw,
  rawSlug: ForumMessageServerPsEuInitialRaw.rawSlug,
  slug: ForumMessageServerPsEuInitialRaw.slug,
  type: ForumMessageServerPsEuInitialRaw.type,
  support: ForumMessageServerPsEuInitialRaw.support,
  zone: ForumMessageServerPsEuInitialRaw.zone,
  status: ForumMessageServerPsEuInitialRaw.status,
  rawDate: ForumMessageServerPsEuInitialRaw.rawDate,
  dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
};
const ForumMessageServerPsEuInitialMaintenance: CustomEsoStatusMaintenance = {
  rawDataList: [ForumMessageServerPsEuInitialRawStringDate],
  beginnerAt: '2024-10-02T10:00:00.000Z',
  endingAt: '2024-10-02T16:00:00.000Z',
};

const ForumMessageServerPcNaInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• [COMPLETE] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
  slug: 'server_pc_na',
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'up',
  rawSlug: 'PC/Mac: NA and EU megaservers for',
  rawDate: 'September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 9 - 1)
      .set('date', 30)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 9 - 1)
      .set('date', 30)
      .set('hours', 14)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[COMPLETE]',
};
const ForumMessageServerPcEuInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• [COMPLETE] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
  slug: 'server_pc_eu',
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'up',
  rawSlug: 'PC/Mac: NA and EU megaservers for',
  rawDate: 'September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 9 - 1)
      .set('date', 30)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 9 - 1)
      .set('date', 30)
      .set('hours', 14)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[COMPLETE]',
};

const ForumMessageServerXboxNaInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_xbox_na',
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'planned',
  rawSlug: 'Xbox: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};
const ForumMessageServerXboxNaInitialRawStringDate: CustomEsoStatusRawData = {
  source: ForumMessageServerXboxNaInitialRaw.source,
  raw: ForumMessageServerXboxNaInitialRaw.raw,
  slug: ForumMessageServerXboxNaInitialRaw.slug,
  type: ForumMessageServerXboxNaInitialRaw.type,
  support: ForumMessageServerXboxNaInitialRaw.support,
  zone: ForumMessageServerXboxNaInitialRaw.zone,
  status: ForumMessageServerXboxNaInitialRaw.status,
  rawSlug: ForumMessageServerXboxNaInitialRaw.rawSlug,
  rawDate: ForumMessageServerXboxNaInitialRaw.rawDate,
  dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
};
const ForumMessageServerXboxNaInitialMaintenance: CustomEsoStatusMaintenance = {
  rawDataList: [ForumMessageServerXboxNaInitialRawStringDate],
  beginnerAt: '2024-10-02T10:00:00.000Z',
  endingAt: '2024-10-02T16:00:00.000Z',
};

const ForumMessageServerXboxEuInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_xbox_eu',
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'planned',
  rawSlug: 'Xbox: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};
const ForumMessageServerXboxEuInitialRawStringDate: CustomEsoStatusRawData = {
  source: ForumMessageServerXboxEuInitialRaw.source,
  raw: ForumMessageServerXboxEuInitialRaw.raw,
  slug: ForumMessageServerXboxEuInitialRaw.slug,
  type: ForumMessageServerXboxEuInitialRaw.type,
  support: ForumMessageServerXboxEuInitialRaw.support,
  zone: ForumMessageServerXboxEuInitialRaw.zone,
  status: ForumMessageServerXboxEuInitialRaw.status,
  rawSlug: ForumMessageServerXboxEuInitialRaw.rawSlug,
  rawDate: ForumMessageServerXboxEuInitialRaw.rawDate,
  dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
};
const ForumMessageServerXboxEuInitialRawMaintenance: CustomEsoStatusMaintenance =
  {
    rawDataList: [ForumMessageServerXboxEuInitialRawStringDate],
    beginnerAt: '2024-10-02T10:00:00.000Z',
    endingAt: '2024-10-02T16:00:00.000Z',
  };

// Initial ForumMessagePts
const ForumMessagePtsServerPsNaInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_ps_na',
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'planned',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};
const ForumMessagePtsServerPsEuInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_ps_eu',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'planned',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};
const ForumMessagePtsServerPcPtsInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: 'The maintenance is complete, and the PTS is now back online and patch 10.2.2 is available.',
  slug: 'server_pc_pts',
  type: 'server',
  support: 'pc',
  zone: 'pts',
  status: 'up',
  rawSlug: 'PTS',
  rawStatus: 'complete',
};
const ForumMessagePtsServerPcNaInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• [COMPLETE] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
  slug: 'server_pc_na',
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'up',
  rawSlug: 'PC/Mac: NA and EU megaservers for',
  rawDate: 'September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 9 - 1)
      .set('date', 30)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 9 - 1)
      .set('date', 30)
      .set('hours', 14)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[COMPLETE]',
};
const ForumMessagePtsServerPcEuInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• [COMPLETE] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
  slug: 'server_pc_eu',
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'up',
  rawSlug: 'PC/Mac: NA and EU megaservers for',
  rawDate: 'September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 9 - 1)
      .set('date', 30)
      .set('hours', 8)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 9 - 1)
      .set('date', 30)
      .set('hours', 14)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[COMPLETE]',
};
const ForumMessagePtsServerXboxNaInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_xbox_na',
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'planned',
  rawSlug: 'Xbox: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};
const ForumMessagePtsServerXboxEuInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_xbox_eu',
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'planned',
  rawSlug: 'Xbox: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};

// Initial ServiceAlerts
const ServiceAlertsServerPsNaInitialRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '2024.10.01 - 9:00 UTC (5:00 EDT) The PlayStation™ Network service interruption has been resolved.',
  slug: 'server_ps_na',
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'up',
  rawStatus: 'been resolved',
  rawSlug: 'PlayStation™ Network',
  rawDate: '2024.10.01 - 9:00 UTC (5:00 EDT)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 1)
      .set('hours', 9)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};
const ServiceAlertsServerPsEuInitialRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '2024.10.01 - 9:00 UTC (5:00 EDT) The PlayStation™ Network service interruption has been resolved.',
  slug: 'server_ps_eu',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'up',
  rawStatus: 'been resolved',
  rawSlug: 'PlayStation™ Network',
  rawDate: '2024.10.01 - 9:00 UTC (5:00 EDT)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 1)
      .set('hours', 9)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};
const ServiceAlertsServerPcPtsInitialRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '2024.09.30 - 21:00 UTC (17:00 EDT) The PTS is currently available.',
  slug: 'server_pc_pts',
  type: 'server',
  support: 'pc',
  zone: 'pts',
  status: 'up',
  rawStatus: 'currently available',
  rawSlug: 'PTS',
  rawDate: '2024.09.30 - 21:00 UTC (17:00 EDT)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 9 - 1)
      .set('date', 30)
      .set('hours', 21)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};
const ServiceAlertsServerPcEuInitialRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '2024.09.30 - 13:30 UTC (9:30 EDT) The North American PC/Mac megaserver is currently available. The European PC/Mac megaserver is currently available.',
  slug: 'server_pc_eu',
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'up',
  rawStatus: 'currently available',
  rawSlug: 'The European PC/Mac megaserver',
  rawDate: '2024.09.30 - 13:30 UTC (9:30 EDT)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 9 - 1)
      .set('date', 30)
      .set('hours', 13)
      .set('minutes', 30)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};
const ServiceAlertsServerPcNaInitialRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '2024.09.30 - 13:30 UTC (9:30 EDT) The North American PC/Mac megaserver is currently available. The European PC/Mac megaserver is currently available.',
  slug: 'server_pc_na',
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'up',
  rawStatus: 'currently available',
  rawSlug: 'The North American PC/Mac megaserver',
  rawDate: '2024.09.30 - 13:30 UTC (9:30 EDT)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 9 - 1)
      .set('date', 30)
      .set('hours', 13)
      .set('minutes', 30)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};
const ServiceAlertsServerXboxEuInitialRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '2024.09.18 - 16:00 UTC (12:00 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
  slug: 'server_xbox_eu',
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'up',
  rawStatus: 'currently available',
  rawSlug: 'The European Xbox megaserver',
  rawDate: '2024.09.18 - 16:00 UTC (12:00 EDT)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 9 - 1)
      .set('date', 18)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};
const ServiceAlertsServerXboxNaInitialRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '2024.09.18 - 16:00 UTC (12:00 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available. The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
  slug: 'server_xbox_na',
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'up',
  rawStatus: 'currently available',
  rawSlug: 'The North American Xbox megaserver',
  rawDate: '2024.09.18 - 16:00 UTC (12:00 EDT)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 9 - 1)
      .set('date', 18)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};

// 2024-10-02T09:59:54 => LiveServices Xbox/Ps Down
const LiveServicesServerPsNaDownRaw: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (PS4 - US) : DOWN',
  rawSlug: 'The Elder Scrolls Online (PS4 - US)',
  rawStatus: 'DOWN',
  slug: 'server_ps_na',
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'down',
};
const LiveServicesServerPsNaDownRawStringDate: CustomEsoStatusRawData = {
  source: LiveServicesServerPsNaDownRaw.source,
  raw: LiveServicesServerPsNaDownRaw.raw,
  rawSlug: LiveServicesServerPsNaDownRaw.rawSlug,
  rawStatus: LiveServicesServerPsNaDownRaw.rawStatus,
  slug: LiveServicesServerPsNaDownRaw.slug,
  type: LiveServicesServerPsNaDownRaw.type,
  support: LiveServicesServerPsNaDownRaw.support,
  zone: LiveServicesServerPsNaDownRaw.zone,
  status: LiveServicesServerPsNaDownRaw.status,
};
const LiveServicesServerPsNaDown: EsoStatus = {
  slug: 'server_ps_na',
  status: 'down',
  type: 'server',
  support: 'ps',
  zone: 'na',
  rawData: LiveServicesServerPsNaDownRaw,
  statusSince: moment(0),
};

const LiveServicesServerXboxNaDownRaw: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (XBox - US) : DOWN',
  rawSlug: 'The Elder Scrolls Online (XBox - US)',
  rawStatus: 'DOWN',
  slug: 'server_xbox_na',
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'down',
};
const LiveServicesServerXboxNaDownRawStringDate: CustomEsoStatusRawData = {
  source: LiveServicesServerXboxNaDownRaw.source,
  raw: LiveServicesServerXboxNaDownRaw.raw,
  rawSlug: LiveServicesServerXboxNaDownRaw.rawSlug,
  rawStatus: LiveServicesServerXboxNaDownRaw.rawStatus,
  slug: LiveServicesServerXboxNaDownRaw.slug,
  type: LiveServicesServerXboxNaDownRaw.type,
  support: LiveServicesServerXboxNaDownRaw.support,
  zone: LiveServicesServerXboxNaDownRaw.zone,
  status: LiveServicesServerXboxNaDownRaw.status,
};
const LiveServicesServerXboxNaDown: EsoStatus = {
  slug: 'server_xbox_na',
  status: 'down',
  type: 'server',
  support: 'xbox',
  zone: 'na',
  rawData: LiveServicesServerXboxNaDownRaw,
  statusSince: moment(0),
};

const LiveServicesServerXboxEuDownRaw: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (XBox - EU) : DOWN',
  rawSlug: 'The Elder Scrolls Online (XBox - EU)',
  rawStatus: 'DOWN',
  slug: 'server_xbox_eu',
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'down',
};
const LiveServicesServerXboxEuDownRawStringDate: CustomEsoStatusRawData = {
  source: LiveServicesServerXboxEuDownRaw.source,
  raw: LiveServicesServerXboxEuDownRaw.raw,
  rawSlug: LiveServicesServerXboxEuDownRaw.rawSlug,
  rawStatus: LiveServicesServerXboxEuDownRaw.rawStatus,
  slug: LiveServicesServerXboxEuDownRaw.slug,
  type: LiveServicesServerXboxEuDownRaw.type,
  support: LiveServicesServerXboxEuDownRaw.support,
  zone: LiveServicesServerXboxEuDownRaw.zone,
  status: LiveServicesServerXboxEuDownRaw.status,
};
const LiveServicesServerXboxEuDown: EsoStatus = {
  slug: 'server_xbox_eu',
  status: 'down',
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  rawData: LiveServicesServerXboxEuDownRaw,
  statusSince: moment(0),
};

const LiveServicesServerPsEuDownRaw: EsoStatusRawData = {
  source: 'https://live-services.elderscrollsonline.com/status/realms',
  raw: 'The Elder Scrolls Online (PS4 - EU) : DOWN',
  rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
  rawStatus: 'DOWN',
  slug: 'server_ps_eu',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'down',
};
const LiveServicesServerPsEuDownRawStringDate: CustomEsoStatusRawData = {
  source: LiveServicesServerPsEuDownRaw.source,
  raw: LiveServicesServerPsEuDownRaw.raw,
  rawSlug: LiveServicesServerPsEuDownRaw.rawSlug,
  rawStatus: LiveServicesServerPsEuDownRaw.rawStatus,
  slug: LiveServicesServerPsEuDownRaw.slug,
  type: LiveServicesServerPsEuDownRaw.type,
  support: LiveServicesServerPsEuDownRaw.support,
  zone: LiveServicesServerPsEuDownRaw.zone,
  status: LiveServicesServerPsEuDownRaw.status,
};
const LiveServicesServerPsEuDown: EsoStatus = {
  slug: 'server_ps_eu',
  status: 'down',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  rawData: LiveServicesServerPsEuDownRaw,
  statusSince: moment(0),
};

// 2024-10-02T10:06:03 => ServiceAlerts Xbox/Ps Down
const ServiceAlertsServerPsNaDownRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '2024.10.02 - 10:00 UTC (6:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
  rawSlug: 'North American PlayStation® megaserver',
  rawStatus: 'currently unavailable',
  slug: 'server_ps_na',
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'down',
  rawDate: '2024.10.02 - 10:00 UTC (6:00 EDT)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};
const ServiceAlertsServerXboxNaDownRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '2024.10.02 - 10:00 UTC (6:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
  rawSlug: 'The North American Xbox megaserver',
  rawStatus: 'currently unavailable',
  slug: 'server_xbox_na',
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'down',
  rawDate: '2024.10.02 - 10:00 UTC (6:00 EDT)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};
const ServiceAlertsServerXboxEuDownRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '2024.10.02 - 10:00 UTC (6:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
  slug: 'server_xbox_eu',
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'down',
  rawStatus: 'currently unavailable',
  rawSlug: 'The European Xbox megaserver',
  rawDate: '2024.10.02 - 10:00 UTC (6:00 EDT)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};
const ServiceAlertsServerPsEuDownRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '2024.10.02 - 10:00 UTC (6:00 EDT) The North American Xbox megaserver is currently unavailable while we perform maintenance. The European Xbox megaserver is currently unavailable while we perform maintenance. The North American PlayStation® megaserver is currently unavailable while we perform maintenance. The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
  slug: 'server_ps_eu',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'down',
  rawStatus: 'currently unavailable',
  rawSlug: 'The European PlayStation® megaserver',
  rawDate: '2024.10.02 - 10:00 UTC (6:00 EDT)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};

// 2024-10-02T10:06:47 => ForumMessage Xbox/Ps Down
const ForumMessageServerPsNaDownRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_ps_na',
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'down',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[IN PROGRESS]',
};
const ForumMessageServerXboxNaDownRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_xbox_na',
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'down',
  rawSlug: 'Xbox: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[IN PROGRESS]',
};
const ForumMessageServerPsEuDownRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_ps_eu',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'down',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[IN PROGRESS]',
};
const ForumMessageServerXboxEuDownRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_xbox_eu',
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'down',
  rawSlug: 'Xbox: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[IN PROGRESS]',
};

// 2024-10-02T10:07:07 => ForumMessagePts Xbox/Ps Down
const ForumMessagePtsServerXboxNaDownRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_xbox_na',
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'down',
  rawSlug: 'Xbox: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[IN PROGRESS]',
};
const ForumMessagePtsServerXboxEuDownRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_xbox_eu',
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'down',
  rawSlug: 'Xbox: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[IN PROGRESS]',
};
const ForumMessagePtsServerPsNaDownRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_ps_na',
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'down',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[IN PROGRESS]',
};
const ForumMessagePtsServerPsEuDownRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_ps_eu',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'down',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[IN PROGRESS]',
};

// 2024-10-02T16:02:40 => LiveServices Xbox Up
const LiveServicesServerXboxEuUpRaw: EsoStatusRawData =
  LiveServicesServerXboxEuInitialRaw;
const LiveServicesServerXboxEuUpRawStringDate: CustomEsoStatusRawData =
  LiveServicesServerXboxEuInitialRawStringDate;
const LiveServicesServerXboxEuUp: EsoStatus = LiveServicesServerXboxEuInitial;

const LiveServicesServerXboxNaUpRaw: EsoStatusRawData =
  LiveServicesServerXboxNaInitialRaw;
const LiveServicesServerXboxNaUpRawStringDate: CustomEsoStatusRawData =
  LiveServicesServerXboxNaInitialRawStringDate;
const LiveServicesServerXboxNaUp: EsoStatus = LiveServicesServerXboxNaInitial;

// 2024-10-02T16:07:38 => ForumMessage Xbox Up / Ps Extended
const ForumMessageServerXboxNaUpRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_xbox_na',
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'up',
  rawSlug: 'Xbox: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[COMPLETE]',
};
const ForumMessageServerPsEuExtendedRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• [EXTENDED] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
  slug: 'server_ps_eu',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'down',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 20)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[EXTENDED]',
};
const ForumMessageServerXboxEuUpRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_xbox_eu',
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'up',
  rawSlug: 'Xbox: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[COMPLETE]',
};
const ForumMessageServerPsNaExtendedRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• [EXTENDED] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
  slug: 'server_ps_na',
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'down',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 20)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[EXTENDED]',
};

// 2024-10-02T16:08:18 => ForumMessagePts Xbox Up / Ps Extended
const ForumMessagePtsServerXboxEuUpRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_xbox_eu',
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'up',
  rawSlug: 'Xbox: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[COMPLETE]',
};
const ForumMessagePtsServerPsNaExtendedRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• [EXTENDED] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
  slug: 'server_ps_na',
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'down',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 20)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[EXTENDED]',
};
const ForumMessagePtsServerXboxNaUpRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_xbox_na',
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'up',
  rawSlug: 'Xbox: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[COMPLETE]',
};
const ForumMessagePtsServerPsEuExtendedRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• [EXTENDED] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
  slug: 'server_ps_eu',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'down',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 20)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[EXTENDED]',
};

// 2024-10-02T16:13:36 => ServiceAlerts Xbox Up
const ServiceAlertsServerXboxEuUpRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '2024.10.02 - 16:00 UTC (12:00 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available.',
  slug: 'server_xbox_eu',
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'up',
  rawStatus: 'currently available',
  rawSlug: 'The European Xbox megaserver',
  rawDate: '2024.10.02 - 16:00 UTC (12:00 EDT)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};
const ServiceAlertsServerXboxNaUpRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '2024.10.02 - 16:00 UTC (12:00 EDT) The North American Xbox megaserver is currently available. The European Xbox megaserver is currently available.',
  slug: 'server_xbox_na',
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'up',
  rawStatus: 'currently available',
  rawSlug: 'The North American Xbox megaserver',
  rawDate: '2024.10.02 - 16:00 UTC (12:00 EDT)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};

// 2024-10-02T19:34:57 => LiveServices Ps Up
const LiveServicesServerPsEuUpRaw: EsoStatusRawData =
  LiveServicesServerPsEuInitialRaw;
const LiveServicesServerPsEuUp: EsoStatus = LiveServicesServerPsEuInitial;
const LiveServicesServerPsEuUpRawStringDate: CustomEsoStatusRawData =
  LiveServicesServerPsEuInitialRawStringDate;

const LiveServicesServerPsNaUpRaw: EsoStatusRawData =
  LiveServicesServerPsNaInitialRaw;
const LiveServicesServerPsNaUp: EsoStatus = LiveServicesServerPsNaInitial;
const LiveServicesServerPsNaUpRawStringDate: CustomEsoStatusRawData =
  LiveServicesServerPsNaInitialRawStringDate;

// 2024-10-02T19:38:13 => ForumMessage Ps Up
const ForumMessageServerPsEuUpRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_ps_eu',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'up',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[COMPLETE]',
};
const ForumMessageServerPsNaUpRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_ps_na',
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'up',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[COMPLETE]',
};

// 2024-10-02T19:38:50 => ForumMessage Ps Extended
const ForumMessageServerPsNaExtended1Raw: EsoStatusRawData =
  ForumMessageServerPsNaExtendedRaw;
const ForumMessageServerPsEuExtended1Raw: EsoStatusRawData =
  ForumMessageServerPsEuExtendedRaw;

// 2024-10-02T19:38:52 => ForumMessage Ps Up
const ForumMessageServerPsEuUp1Raw: EsoStatusRawData =
  ForumMessageServerPsEuUpRaw;
const ForumMessageServerPsNaUp1Raw: EsoStatusRawData =
  ForumMessageServerPsNaUpRaw;

// 2024-10-02T19:39:47 => ForumMessagePts Ps Up
const ForumMessagePtsServerPsEuUpRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_ps_eu',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'up',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[COMPLETE]',
};
const ForumMessagePtsServerPsNaUpRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_ps_na',
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'up',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 10)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 16)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
  rawStatus: '[COMPLETE]',
};

// 2024-10-02T19:40:07 => ServiceAlerts Ps Up
const ServiceAlertsServerPsNaUpRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '2024.10.02 - 19:40 UTC (15:40 EDT) The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
  slug: 'server_ps_na',
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'up',
  rawStatus: 'currently available',
  rawSlug: 'North American PlayStation® megaserver',
  rawDate: '2024.10.02 - 19:40 UTC (15:40 EDT)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 19)
      .set('minutes', 40)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};
const ServiceAlertsServerPsEuUpRaw: EsoStatusRawData = {
  source: 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
  raw: '2024.10.02 - 19:40 UTC (15:40 EDT) The North American PlayStation® megaserver is currently available. The European PlayStation® megaserver is currently available.',
  slug: 'server_ps_eu',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'up',
  rawStatus: 'currently available',
  rawSlug: 'The European PlayStation® megaserver',
  rawDate: '2024.10.02 - 19:40 UTC (15:40 EDT)',
  dates: [
    moment()
      .utc()
      .set('years', 2024)
      .set('months', 10 - 1)
      .set('date', 2)
      .set('hours', 19)
      .set('minutes', 40)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0),
  ],
};

const initial: Initial = {
  logs: [
    {
      connector: 'LiveServices',
      serviceId: 1,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerXboxNaInitialRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 2,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerXboxEuInitialRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 3,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPsNaInitialRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 4,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPsEuInitialRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 5,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPcNaInitialRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 6,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPcEuInitialRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 7,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPcPtsInitialRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 1,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerXboxNaInitialRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 2,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerXboxEuInitialRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 3,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPsNaInitialRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 4,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPsEuInitialRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 5,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPcNaInitialRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 6,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPcEuInitialRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 7,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPcPtsInitialRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 1,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServerXboxNaInitialRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 2,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServerXboxEuInitialRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 3,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServerPsNaInitialRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 4,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServerPsEuInitialRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 5,
      statusId: 1,
      rawData: JSON.stringify(ForumMessageServerPcNaInitialRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 6,
      statusId: 1,
      rawData: JSON.stringify(ForumMessageServerPcEuInitialRaw),
    },
    {
      connector: 'ForumMessagePts',
      serviceId: 1,
      statusId: 4,
      rawData: JSON.stringify(ForumMessagePtsServerXboxNaInitialRaw),
    },
    {
      connector: 'ForumMessagePts',
      serviceId: 2,
      statusId: 4,
      rawData: JSON.stringify(ForumMessagePtsServerXboxEuInitialRaw),
    },
    {
      connector: 'ForumMessagePts',
      serviceId: 3,
      statusId: 4,
      rawData: JSON.stringify(ForumMessagePtsServerPsNaInitialRaw),
    },
    {
      connector: 'ForumMessagePts',
      serviceId: 4,
      statusId: 4,
      rawData: JSON.stringify(ForumMessagePtsServerPsEuInitialRaw),
    },
    {
      connector: 'ForumMessagePts',
      serviceId: 5,
      statusId: 1,
      rawData: JSON.stringify(ForumMessagePtsServerPcNaInitialRaw),
    },
    {
      connector: 'ForumMessagePts',
      serviceId: 6,
      statusId: 1,
      rawData: JSON.stringify(ForumMessagePtsServerPcEuInitialRaw),
    },
    {
      connector: 'ForumMessagePts',
      serviceId: 7,
      statusId: 1,
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsInitialRaw),
    },
  ],
  archives: [
    {
      connector: 'LiveServices',
      serviceId: 1,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerXboxNaInitialRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 2,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerXboxEuInitialRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 3,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPsNaInitialRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 4,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPsEuInitialRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 5,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPcNaInitialRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 6,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPcEuInitialRaw),
    },
    {
      connector: 'LiveServices',
      serviceId: 7,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPcPtsInitialRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 1,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerXboxNaInitialRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 2,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerXboxEuInitialRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 3,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPsNaInitialRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 4,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPsEuInitialRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 5,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPcNaInitialRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 6,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPcEuInitialRaw),
    },
    {
      connector: 'ServiceAlerts',
      serviceId: 7,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPcPtsInitialRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 1,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServerXboxNaInitialRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 2,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServerXboxEuInitialRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 3,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServerPsNaInitialRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 4,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServerPsEuInitialRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 5,
      statusId: 1,
      rawData: JSON.stringify(ForumMessageServerPcNaInitialRaw),
    },
    {
      connector: 'ForumMessage',
      serviceId: 6,
      statusId: 1,
      rawData: JSON.stringify(ForumMessageServerPcEuInitialRaw),
    },
    {
      connector: 'ForumMessagePts',
      serviceId: 1,
      statusId: 4,
      rawData: JSON.stringify(ForumMessagePtsServerXboxNaInitialRaw),
    },
    {
      connector: 'ForumMessagePts',
      serviceId: 2,
      statusId: 4,
      rawData: JSON.stringify(ForumMessagePtsServerXboxEuInitialRaw),
    },
    {
      connector: 'ForumMessagePts',
      serviceId: 3,
      statusId: 4,
      rawData: JSON.stringify(ForumMessagePtsServerPsNaInitialRaw),
    },
    {
      connector: 'ForumMessagePts',
      serviceId: 4,
      statusId: 4,
      rawData: JSON.stringify(ForumMessagePtsServerPsEuInitialRaw),
    },
    {
      connector: 'ForumMessagePts',
      serviceId: 5,
      statusId: 1,
      rawData: JSON.stringify(ForumMessagePtsServerPcNaInitialRaw),
    },
    {
      connector: 'ForumMessagePts',
      serviceId: 6,
      statusId: 1,
      rawData: JSON.stringify(ForumMessagePtsServerPcEuInitialRaw),
    },
    {
      connector: 'ForumMessagePts',
      serviceId: 7,
      statusId: 1,
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsInitialRaw),
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
      rawData: JSON.stringify(LiveServicesServerXboxNaInitialRaw),
    },
    {
      id: 2,
      slugId: 2,
      statusId: 1,
      typeId: 1,
      supportId: 6,
      zoneId: 1,
      rawData: JSON.stringify(LiveServicesServerXboxEuInitialRaw),
    },
    {
      id: 3,
      slugId: 3,
      statusId: 1,
      typeId: 1,
      supportId: 5,
      zoneId: 2,
      rawData: JSON.stringify(LiveServicesServerPsNaInitialRaw),
    },
    {
      id: 4,
      slugId: 4,
      statusId: 1,
      typeId: 1,
      supportId: 5,
      zoneId: 1,
      rawData: JSON.stringify(LiveServicesServerPsEuInitialRaw),
    },
    {
      id: 5,
      slugId: 5,
      statusId: 1,
      typeId: 1,
      supportId: 4,
      zoneId: 2,
      rawData: JSON.stringify(LiveServicesServerPcNaInitialRaw),
    },
    {
      id: 6,
      slugId: 6,
      statusId: 1,
      typeId: 1,
      supportId: 4,
      zoneId: 1,
      rawData: JSON.stringify(LiveServicesServerPcEuInitialRaw),
    },
    {
      id: 7,
      slugId: 7,
      statusId: 1,
      typeId: 1,
      supportId: 4,
      zoneId: 3,
      rawData: JSON.stringify(LiveServicesServerPcPtsInitialRaw),
    },
  ],
  maintenances: [
    {
      serviceId: 1,
      beginnerAt: new Date(
        ForumMessageServerXboxNaInitialMaintenance.beginnerAt,
      ),
      endingAt: new Date(ForumMessageServerXboxNaInitialMaintenance.endingAt),
      rawData: JSON.stringify(ForumMessageServerXboxNaInitialRaw),
    },
    {
      serviceId: 2,
      beginnerAt: new Date(
        ForumMessageServerXboxEuInitialRawMaintenance.beginnerAt,
      ),
      endingAt: new Date(
        ForumMessageServerXboxEuInitialRawMaintenance.endingAt,
      ),
      rawData: JSON.stringify(ForumMessageServerXboxEuInitialRaw),
    },
    {
      serviceId: 3,
      beginnerAt: new Date(ForumMessageServerPsNaInitialMaintenance.beginnerAt),
      endingAt: new Date(ForumMessageServerPsNaInitialMaintenance.endingAt),
      rawData: JSON.stringify(ForumMessageServerPsNaInitialRaw),
    },
    {
      serviceId: 4,
      beginnerAt: new Date(ForumMessageServerPsEuInitialMaintenance.beginnerAt),
      endingAt: new Date(ForumMessageServerPsEuInitialMaintenance.endingAt),
      rawData: JSON.stringify(ForumMessageServerPsEuInitialRaw),
    },
  ],
  serviceControllerReturn: [
    {
      slug: 'server_xbox_na',
      status: 'up',
      type: 'server',
      support: 'xbox',
      zone: 'na',
      rawData: LiveServicesServerXboxNaInitialRawStringDate,
      statusSince: moment(0).toISOString(),
      maintenance: {
        rawDataList: [ForumMessageServerXboxNaInitialRawStringDate],
        beginnerAt: ForumMessageServerXboxNaInitialRawStringDate.dates[0],
        endingAt: ForumMessageServerXboxNaInitialRawStringDate.dates[1],
      },
    },
    {
      slug: 'server_xbox_eu',
      status: 'up',
      type: 'server',
      support: 'xbox',
      zone: 'eu',
      rawData: LiveServicesServerXboxEuInitialRawStringDate,
      statusSince: moment(0).toISOString(),
      maintenance: {
        rawDataList: [ForumMessageServerXboxEuInitialRawStringDate],
        beginnerAt: ForumMessageServerXboxEuInitialRawStringDate.dates[0],
        endingAt: ForumMessageServerXboxEuInitialRawStringDate.dates[1],
      },
    },
    {
      slug: 'server_ps_na',
      status: 'up',
      type: 'server',
      support: 'ps',
      zone: 'na',
      rawData: LiveServicesServerPsNaInitialRawStringDate,
      statusSince: moment(0).toISOString(),
      maintenance: {
        rawDataList: [ForumMessageServerPsNaInitialRawStringDate],
        beginnerAt: ForumMessageServerPsNaInitialRawStringDate.dates[0],
        endingAt: ForumMessageServerPsNaInitialRawStringDate.dates[1],
      },
    },
    {
      slug: 'server_ps_eu',
      status: 'up',
      type: 'server',
      support: 'ps',
      zone: 'eu',
      rawData: LiveServicesServerPsEuInitialRawStringDate,
      statusSince: moment(0).toISOString(),
      maintenance: {
        rawDataList: [ForumMessageServerPsEuInitialRawStringDate],
        beginnerAt: ForumMessageServerPsEuInitialRawStringDate.dates[0],
        endingAt: ForumMessageServerPsEuInitialRawStringDate.dates[1],
      },
    },
    {
      slug: 'server_pc_na',
      status: 'up',
      type: 'server',
      support: 'pc',
      zone: 'na',
      rawData: LiveServicesServerPcNaInitialRawStringDate,
      statusSince: moment(0).toISOString(),
    },
    {
      slug: 'server_pc_eu',
      status: 'up',
      type: 'server',
      support: 'pc',
      zone: 'eu',
      rawData: LiveServicesServerPcEuInitialRawStringDate,
      statusSince: moment(0).toISOString(),
    },
    {
      slug: 'server_pc_pts',
      status: 'up',
      type: 'server',
      support: 'pc',
      zone: 'pts',
      rawData: LiveServicesServerPcPtsInitialRawStringDate,
      statusSince: moment(0).toISOString(),
    },
  ],
};

// Initial state
const InitialStateLiveServices: Step = {
  connector: 'LiveServices',
  connectorData: [
    LiveServicesServerPcEuInitialRaw,
    LiveServicesServerPcNaInitialRaw,
    LiveServicesServerPsEuInitialRaw,
    LiveServicesServerPsNaInitialRaw,
    LiveServicesServerPcPtsInitialRaw,
    LiveServicesServerXboxEuInitialRaw,
    LiveServicesServerXboxNaInitialRaw,
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
  connectorData: [
    ForumMessageServerPsNaInitialRaw,
    ForumMessageServerPsEuInitialRaw,
    ForumMessageServerPcNaInitialRaw,
    ForumMessageServerPcEuInitialRaw,
    ForumMessageServerXboxNaInitialRaw,
    ForumMessageServerXboxEuInitialRaw,
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
const InitialStateForumMessagePts: Step = {
  connector: 'ForumMessagePts',
  connectorData: [
    ForumMessagePtsServerPsNaInitialRaw,
    ForumMessagePtsServerPsEuInitialRaw,
    ForumMessagePtsServerPcNaInitialRaw,
    ForumMessagePtsServerPcEuInitialRaw,
    ForumMessagePtsServerXboxNaInitialRaw,
    ForumMessagePtsServerXboxEuInitialRaw,
    ForumMessagePtsServerPcPtsInitialRaw,
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
const InitialStateServiceAlerts: Step = {
  connector: 'ServiceAlerts',
  connectorData: [
    ServiceAlertsServerPsNaInitialRaw,
    ServiceAlertsServerPsEuInitialRaw,
    ServiceAlertsServerPcNaInitialRaw,
    ServiceAlertsServerPcEuInitialRaw,
    ServiceAlertsServerXboxNaInitialRaw,
    ServiceAlertsServerXboxEuInitialRaw,
    ServiceAlertsServerPcPtsInitialRaw,
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
const InitialStatesStepList: Step[] = [
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

// LiveServices down (server_xbox_na, server_xbox_eu, server_ps_na, server_ps_eu)
const FirstLiveServicesDownLiveServices: Step = {
  connector: InitialStateLiveServices.connector,
  connectorData: [
    LiveServicesServerPcEuInitialRaw,
    LiveServicesServerPcNaInitialRaw,
    LiveServicesServerPsEuDownRaw, // changed
    LiveServicesServerPsNaDownRaw, // changed
    LiveServicesServerPcPtsInitialRaw,
    LiveServicesServerXboxEuDownRaw, // changed
    LiveServicesServerXboxNaDownRaw, // changed
  ],
  statusUpdateList: [
    LiveServicesServerPsNaDown, // emitted
    LiveServicesServerPsEuDown, // emitted
    LiveServicesServerXboxNaDown, // emitted
    LiveServicesServerXboxEuDown, // emitted
  ],
  maintenancePlannedList: [],
  maintenanceRemovedList: [
    'server_ps_eu', // emitted
    'server_ps_na', // emitted
    'server_xbox_eu', // emitted
    'server_xbox_na', // emitted
  ],
  logs: [
    ...initial.logs,
    {
      // created
      connector: 'LiveServices',
      serviceId: 1,
      statusId: 2,
      rawData: JSON.stringify(LiveServicesServerXboxNaDownRaw),
    },
    {
      // created
      connector: 'LiveServices',
      serviceId: 2,
      statusId: 2,
      rawData: JSON.stringify(LiveServicesServerXboxEuDownRaw),
    },
    {
      // created
      connector: 'LiveServices',
      serviceId: 3,
      statusId: 2,
      rawData: JSON.stringify(LiveServicesServerPsNaDownRaw),
    },
    {
      // created
      connector: 'LiveServices',
      serviceId: 4,
      statusId: 2,
      rawData: JSON.stringify(LiveServicesServerPsEuDownRaw),
    },
  ],
  archives: [
    {
      connector: initial.archives[0].connector,
      serviceId: initial.archives[0].serviceId,
      statusId: 2, // Updated from 4
      rawData: JSON.stringify(LiveServicesServerXboxNaDownRaw), // Updated from LiveServicesServerXboxNaInitialRaw
    },
    {
      connector: initial.archives[1].connector,
      serviceId: initial.archives[1].serviceId,
      statusId: 2, // Updated from 4
      rawData: JSON.stringify(LiveServicesServerXboxEuDownRaw), // Updated from LiveServicesServerXboxEuInitialRaw
    },
    {
      connector: initial.archives[2].connector,
      serviceId: initial.archives[2].serviceId,
      statusId: 2, // Updated from 4
      rawData: JSON.stringify(LiveServicesServerPsNaDownRaw), // Updated from LiveServicesServerPsNaInitialRaw
    },
    {
      connector: initial.archives[3].connector,
      serviceId: initial.archives[3].serviceId,
      statusId: 2, // Updated from 4
      rawData: JSON.stringify(LiveServicesServerPsEuDownRaw), // Updated from LiveServicesServerPsEuInitialRaw
    },
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
    initial.archives[17],
    initial.archives[18],
    initial.archives[19],
    initial.archives[20],
    initial.archives[21],
    initial.archives[22],
    initial.archives[23],
    initial.archives[24],
    initial.archives[25],
    initial.archives[26],
  ],
  services: [
    {
      id: initial.services[0].id,
      slugId: initial.services[0].slugId,
      statusId: 2, // Updated from 1
      typeId: initial.services[0].typeId,
      supportId: initial.services[0].supportId,
      zoneId: initial.services[0].zoneId,
      rawData: JSON.stringify(LiveServicesServerXboxNaDownRaw), // Updated from LiveServicesServerXboxNaInitialRawStringDate
    },
    {
      id: initial.services[1].id,
      slugId: initial.services[1].slugId,
      statusId: 2, // Updated from 1
      typeId: initial.services[1].typeId,
      supportId: initial.services[1].supportId,
      zoneId: initial.services[1].zoneId,
      rawData: JSON.stringify(LiveServicesServerXboxEuDownRaw), // Updated from LiveServicesServerXboxEuInitialRawStringDate
    },
    {
      id: initial.services[2].id,
      slugId: initial.services[2].slugId,
      statusId: 2, // Updated from 1
      typeId: initial.services[2].typeId,
      supportId: initial.services[2].supportId,
      zoneId: initial.services[2].zoneId,
      rawData: JSON.stringify(LiveServicesServerPsNaDownRaw), // Updated from LiveServicesServerPsNaInitialRawStringDate
    },
    {
      id: initial.services[3].id,
      slugId: initial.services[3].slugId,
      statusId: 2, // Updated from 1
      typeId: initial.services[3].typeId,
      supportId: initial.services[3].supportId,
      zoneId: initial.services[3].zoneId,
      rawData: JSON.stringify(LiveServicesServerPsEuDownRaw), // Updated from LiveServicesServerPsEuInitialRawStringDate
    },
    initial.services[4],
    initial.services[5],
    initial.services[6],
  ],
  maintenances: [],
  serviceControllerReturn: [
    {
      slug: initial.serviceControllerReturn[0].slug,
      status: 'down', // Updated from up
      type: initial.serviceControllerReturn[0].type,
      support: initial.serviceControllerReturn[0].support,
      zone: initial.serviceControllerReturn[0].zone,
      rawData: LiveServicesServerXboxNaDownRawStringDate, // Updated from LiveServicesServerXboxNaInitialRawStringDate
      statusSince: moment(0).toISOString(),
    },
    {
      slug: initial.serviceControllerReturn[1].slug,
      status: 'down', // Updated from up
      type: initial.serviceControllerReturn[1].type,
      support: initial.serviceControllerReturn[1].support,
      zone: initial.serviceControllerReturn[1].zone,
      rawData: LiveServicesServerXboxEuDownRawStringDate, // Updated from LiveServicesServerXboxEuInitialRawStringDate
      statusSince: moment(0).toISOString(),
    },
    {
      slug: initial.serviceControllerReturn[2].slug,
      status: 'down', // Updated from up
      type: initial.serviceControllerReturn[2].type,
      support: initial.serviceControllerReturn[2].support,
      zone: initial.serviceControllerReturn[2].zone,
      rawData: LiveServicesServerPsNaDownRawStringDate, // Updated from LiveServicesServerPsNaInitialRawStringDate
      statusSince: moment(0).toISOString(),
    },
    {
      slug: initial.serviceControllerReturn[3].slug,
      status: 'down', // Updated from up
      type: initial.serviceControllerReturn[3].type,
      support: initial.serviceControllerReturn[3].support,
      zone: initial.serviceControllerReturn[3].zone,
      rawData: LiveServicesServerPsEuDownRawStringDate, // Updated from LiveServicesServerPsEuInitialRawStringDate
      statusSince: moment(0).toISOString(),
    },
    initial.serviceControllerReturn[4],
    initial.serviceControllerReturn[5],
    initial.serviceControllerReturn[6],
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
  connector: InitialStateForumMessage.connector,
  connectorData: InitialStateForumMessage.connectorData,
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
  connector: InitialStateForumMessagePts.connector,
  connectorData: InitialStateForumMessagePts.connectorData,
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
  connector: InitialStateServiceAlerts.connector,
  connectorData: InitialStateServiceAlerts.connectorData,
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
const LiveServicesDown: Step[] = [
  FirstLiveServicesDownLiveServices,
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

// ServiceAlerts down (server_xbox_na, server_xbox_eu, server_ps_na, server_ps_eu)
const FirstServiceAlertsDownServiceAlerts: Step = {
  connector: LiveServicesDownServiceAlerts.connector,
  connectorData: [
    ServiceAlertsServerPsNaDownRaw, // changed
    ServiceAlertsServerPsEuDownRaw, // changed
    ServiceAlertsServerPcNaInitialRaw,
    ServiceAlertsServerPcEuInitialRaw,
    ServiceAlertsServerXboxNaDownRaw, // changed
    ServiceAlertsServerXboxEuDownRaw, // changed
    ServiceAlertsServerPcPtsInitialRaw,
  ],
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstLiveServicesDownLiveServices.logs,
    {
      // created
      connector: 'ServiceAlerts',
      serviceId: 1,
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServerXboxNaDownRaw),
    },
    {
      // created
      connector: 'ServiceAlerts',
      serviceId: 2,
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServerXboxEuDownRaw),
    },
    {
      // created
      connector: 'ServiceAlerts',
      serviceId: 3,
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServerPsNaDownRaw),
    },
    {
      // created
      connector: 'ServiceAlerts',
      serviceId: 4,
      statusId: 2,
      rawData: JSON.stringify(ServiceAlertsServerPsEuDownRaw),
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
    {
      connector: FirstLiveServicesDownLiveServices.archives[7].connector,
      serviceId: FirstLiveServicesDownLiveServices.archives[7].serviceId,
      statusId: 2, // Updated from 1
      rawData: JSON.stringify(ServiceAlertsServerXboxNaDownRaw), // Updated from ServiceAlertsServerXboxNaInitialRaw
    },
    {
      connector: FirstLiveServicesDownLiveServices.archives[8].connector,
      serviceId: FirstLiveServicesDownLiveServices.archives[8].serviceId,
      statusId: 2, // Updated from 1
      rawData: JSON.stringify(ServiceAlertsServerXboxEuDownRaw), // Updated from ServiceAlertsServerXboxEuInitialRaw
    },
    {
      connector: FirstLiveServicesDownLiveServices.archives[9].connector,
      serviceId: FirstLiveServicesDownLiveServices.archives[9].serviceId,
      statusId: 2, // Updated from 1
      rawData: JSON.stringify(ServiceAlertsServerPsNaDownRaw), // Updated from ServiceAlertsServerPsNaInitialRaw
    },
    {
      connector: FirstLiveServicesDownLiveServices.archives[10].connector,
      serviceId: FirstLiveServicesDownLiveServices.archives[10].serviceId,
      statusId: 2, // Updated from 1
      rawData: JSON.stringify(ServiceAlertsServerPsEuDownRaw), // Updated from ServiceAlertsServerPsEuInitialRaw
    },
    FirstLiveServicesDownLiveServices.archives[11],
    FirstLiveServicesDownLiveServices.archives[12],
    FirstLiveServicesDownLiveServices.archives[13],
    FirstLiveServicesDownLiveServices.archives[14],
    FirstLiveServicesDownLiveServices.archives[15],
    FirstLiveServicesDownLiveServices.archives[16],
    FirstLiveServicesDownLiveServices.archives[17],
    FirstLiveServicesDownLiveServices.archives[18],
    FirstLiveServicesDownLiveServices.archives[19],
    FirstLiveServicesDownLiveServices.archives[20],
    FirstLiveServicesDownLiveServices.archives[21],
    FirstLiveServicesDownLiveServices.archives[22],
    FirstLiveServicesDownLiveServices.archives[23],
    FirstLiveServicesDownLiveServices.archives[24],
    FirstLiveServicesDownLiveServices.archives[25],
    FirstLiveServicesDownLiveServices.archives[26],
  ],
  services: FirstLiveServicesDownLiveServices.services,
  maintenances: FirstLiveServicesDownLiveServices.maintenances,
  serviceControllerReturn:
    FirstLiveServicesDownLiveServices.serviceControllerReturn,
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
  connector: LiveServicesDownLiveServices.connector,
  connectorData: LiveServicesDownLiveServices.connectorData,
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
  connector: LiveServicesDownForumMessage.connector,
  connectorData: LiveServicesDownForumMessage.connectorData,
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
  connector: LiveServicesDownForumMessagePts.connector,
  connectorData: LiveServicesDownForumMessagePts.connectorData,
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
const ServiceAlertsDown: Step[] = [
  LiveServicesDownLiveServices,
  LiveServicesDownForumMessage,
  LiveServicesDownForumMessagePts,
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

// ForumMessage down (server_xbox_na, server_xbox_eu, server_ps_na, server_ps_eu)
const FirstForumMessageDownForumMessage: Step = {
  connector: ServiceAlertsDownForumMessage.connector,
  connectorData: [
    ForumMessageServerPsNaDownRaw, // changed
    ForumMessageServerPsEuDownRaw, // changed
    ForumMessageServerPcNaInitialRaw,
    ForumMessageServerPcEuInitialRaw,
    ForumMessageServerXboxNaDownRaw, // changed
    ForumMessageServerXboxEuDownRaw, // changed
  ],
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstServiceAlertsDownServiceAlerts.logs,
    {
      // created
      connector: 'ForumMessage',
      serviceId: 1,
      statusId: 2,
      rawData: JSON.stringify(ForumMessageServerXboxNaDownRaw),
    },
    {
      // created
      connector: 'ForumMessage',
      serviceId: 2,
      statusId: 2,
      rawData: JSON.stringify(ForumMessageServerXboxEuDownRaw),
    },
    {
      // created
      connector: 'ForumMessage',
      serviceId: 3,
      statusId: 2,
      rawData: JSON.stringify(ForumMessageServerPsNaDownRaw),
    },
    {
      // created
      connector: 'ForumMessage',
      serviceId: 4,
      statusId: 2,
      rawData: JSON.stringify(ForumMessageServerPsEuDownRaw),
    },
  ],
  archives: [
    FirstServiceAlertsDownServiceAlerts.archives[0],
    FirstServiceAlertsDownServiceAlerts.archives[1],
    FirstServiceAlertsDownServiceAlerts.archives[2],
    FirstServiceAlertsDownServiceAlerts.archives[3],
    FirstServiceAlertsDownServiceAlerts.archives[4],
    FirstServiceAlertsDownServiceAlerts.archives[5],
    FirstServiceAlertsDownServiceAlerts.archives[6],
    FirstServiceAlertsDownServiceAlerts.archives[7],
    FirstServiceAlertsDownServiceAlerts.archives[8],
    FirstServiceAlertsDownServiceAlerts.archives[9],
    FirstServiceAlertsDownServiceAlerts.archives[10],
    FirstServiceAlertsDownServiceAlerts.archives[11],
    FirstServiceAlertsDownServiceAlerts.archives[12],
    FirstServiceAlertsDownServiceAlerts.archives[13],
    {
      connector: FirstServiceAlertsDownServiceAlerts.archives[14].connector,
      serviceId: FirstServiceAlertsDownServiceAlerts.archives[14].serviceId,
      statusId: 2, // Updated from 4
      rawData: JSON.stringify(ForumMessageServerXboxNaDownRaw), // Updated from ForumMessageServerXboxNaInitialRaw
    },
    {
      connector: FirstServiceAlertsDownServiceAlerts.archives[15].connector,
      serviceId: FirstServiceAlertsDownServiceAlerts.archives[15].serviceId,
      statusId: 2, // Updated from 4
      rawData: JSON.stringify(ForumMessageServerXboxEuDownRaw), // Updated from ForumMessageServerXboxEuInitialRaw
    },
    {
      connector: FirstServiceAlertsDownServiceAlerts.archives[16].connector,
      serviceId: FirstServiceAlertsDownServiceAlerts.archives[16].serviceId,
      statusId: 2, // Updated from 4
      rawData: JSON.stringify(ForumMessageServerPsNaDownRaw), // Updated from ForumMessageServerPsNaInitialRaw
    },
    {
      connector: FirstServiceAlertsDownServiceAlerts.archives[17].connector,
      serviceId: FirstServiceAlertsDownServiceAlerts.archives[17].serviceId,
      statusId: 2, // Updated from 4
      rawData: JSON.stringify(ForumMessageServerPsEuDownRaw), // Updated from ForumMessageServerPsEuInitialRaw
    },
    FirstServiceAlertsDownServiceAlerts.archives[18],
    FirstServiceAlertsDownServiceAlerts.archives[19],
    FirstServiceAlertsDownServiceAlerts.archives[20],
    FirstServiceAlertsDownServiceAlerts.archives[21],
    FirstServiceAlertsDownServiceAlerts.archives[22],
    FirstServiceAlertsDownServiceAlerts.archives[23],
    FirstServiceAlertsDownServiceAlerts.archives[24],
    FirstServiceAlertsDownServiceAlerts.archives[25],
    FirstServiceAlertsDownServiceAlerts.archives[26],
  ],
  services: FirstServiceAlertsDownServiceAlerts.services,
  maintenances: FirstServiceAlertsDownServiceAlerts.maintenances,
  serviceControllerReturn:
    FirstServiceAlertsDownServiceAlerts.serviceControllerReturn,
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
  connector: ServiceAlertsDownLiveServices.connector,
  connectorData: ServiceAlertsDownLiveServices.connectorData,
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
  connector: ServiceAlertsDownForumMessagePts.connector,
  connectorData: ServiceAlertsDownForumMessagePts.connectorData,
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
const ForumMessageDownForumServiceAlerts: Step = {
  connector: ServiceAlertsDownServiceAlerts.connector,
  connectorData: ServiceAlertsDownServiceAlerts.connectorData,
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
const ForumMessageDown: Step[] = [
  ServiceAlertsDownLiveServices,
  FirstForumMessageDownForumMessage,
  ForumMessageDownForumMessagePts,
  ForumMessageDownForumServiceAlerts,
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
  ForumMessageDownForumServiceAlerts,
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
  ForumMessageDownForumServiceAlerts,
  // Same
  ForumMessageDownLiveServices,
  ForumMessageDownForumMessage,
  ForumMessageDownForumMessagePts,
  // Same
  ForumMessageDownLiveServices,
  ForumMessageDownForumMessage,
  ForumMessageDownForumMessagePts,
];

// ForumMessagePts down (server_xbox_na, server_xbox_eu, server_ps_na, server_ps_eu)
const FirstForumMessagePtsDownForumMessagePts: Step = {
  connector: ForumMessageDownForumMessagePts.connector,
  connectorData: [
    ForumMessagePtsServerPsNaDownRaw, // changed
    ForumMessagePtsServerPsEuDownRaw, // changed
    ForumMessagePtsServerPcNaInitialRaw,
    ForumMessagePtsServerPcEuInitialRaw,
    ForumMessagePtsServerXboxNaDownRaw, // changed
    ForumMessagePtsServerXboxEuDownRaw, // changed
    ForumMessagePtsServerPcPtsInitialRaw,
  ],
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstForumMessageDownForumMessage.logs,
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 1,
      statusId: 2,
      rawData: JSON.stringify(ForumMessagePtsServerXboxNaDownRaw),
    },
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 2,
      statusId: 2,
      rawData: JSON.stringify(ForumMessagePtsServerXboxEuDownRaw),
    },
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 3,
      statusId: 2,
      rawData: JSON.stringify(ForumMessagePtsServerPsNaDownRaw),
    },
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 4,
      statusId: 2,
      rawData: JSON.stringify(ForumMessagePtsServerPsEuDownRaw),
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
    FirstForumMessageDownForumMessage.archives[16],
    FirstForumMessageDownForumMessage.archives[17],
    FirstForumMessageDownForumMessage.archives[18],
    FirstForumMessageDownForumMessage.archives[19],
    {
      connector: FirstForumMessageDownForumMessage.archives[20].connector,
      serviceId: FirstForumMessageDownForumMessage.archives[20].serviceId,
      statusId: 2, // Updated from 4
      rawData: JSON.stringify(ForumMessagePtsServerXboxNaDownRaw), // Updated from ForumMessagePtsServerXboxNaInitialRaw
    },
    {
      connector: FirstForumMessageDownForumMessage.archives[21].connector,
      serviceId: FirstForumMessageDownForumMessage.archives[21].serviceId,
      statusId: 2, // Updated from 4
      rawData: JSON.stringify(ForumMessagePtsServerXboxEuDownRaw), // Updated from ForumMessagePtsServerXboxEuInitialRaw
    },
    {
      connector: FirstForumMessageDownForumMessage.archives[22].connector,
      serviceId: FirstForumMessageDownForumMessage.archives[22].serviceId,
      statusId: 2, // Updated from 4
      rawData: JSON.stringify(ForumMessagePtsServerPsNaDownRaw), // Updated from ForumMessagePtsServerPsNaInitialRaw
    },
    {
      connector: FirstForumMessageDownForumMessage.archives[23].connector,
      serviceId: FirstForumMessageDownForumMessage.archives[23].serviceId,
      statusId: 2, // Updated from 4
      rawData: JSON.stringify(ForumMessagePtsServerPsEuDownRaw), // Updated from ForumMessagePtsServerPsEuInitialRaw
    },
    FirstForumMessageDownForumMessage.archives[24],
    FirstForumMessageDownForumMessage.archives[25],
    FirstForumMessageDownForumMessage.archives[26],
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
  connector: ForumMessageDownForumServiceAlerts.connector,
  connectorData: ForumMessageDownForumServiceAlerts.connectorData,
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
const ForumMessagePtsDown: Step[] = [
  ForumMessageDownLiveServices,
  ForumMessageDownForumMessage,
  FirstForumMessagePtsDownForumMessagePts,
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

// LiveServices up (server_xbox_na, server_xbox_eu)
const FirstLiveServicesUpLiveServices: Step = {
  connector: ForumMessagePtsDownLiveServices.connector,
  connectorData: [
    LiveServicesServerPcEuInitialRaw,
    LiveServicesServerPcNaInitialRaw,
    LiveServicesServerPsEuDownRaw,
    LiveServicesServerPsNaDownRaw,
    LiveServicesServerPcPtsInitialRaw,
    LiveServicesServerXboxEuUpRaw, // changed
    LiveServicesServerXboxNaUpRaw, // changed
  ],
  statusUpdateList: [
    // emitted
    LiveServicesServerXboxEuUp,
    LiveServicesServerXboxNaUp,
  ],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstForumMessagePtsDownForumMessagePts.logs,
    {
      // created
      connector: 'LiveServices',
      serviceId: 1,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerXboxNaUpRaw),
    },
    {
      // created
      connector: 'LiveServices',
      serviceId: 2,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerXboxEuUpRaw),
    },
  ],
  archives: [
    {
      connector: FirstForumMessagePtsDownForumMessagePts.archives[0].connector,
      serviceId: FirstForumMessagePtsDownForumMessagePts.archives[0].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(LiveServicesServerXboxNaUpRaw), // Updated from LiveServicesServerXboxNaDownRaw
    },
    {
      connector: FirstForumMessagePtsDownForumMessagePts.archives[1].connector,
      serviceId: FirstForumMessagePtsDownForumMessagePts.archives[1].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(LiveServicesServerXboxEuUpRaw), // Updated from LiveServicesServerXboxEuDownRaw
    },
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
    FirstForumMessagePtsDownForumMessagePts.archives[17],
    FirstForumMessagePtsDownForumMessagePts.archives[18],
    FirstForumMessagePtsDownForumMessagePts.archives[19],
    FirstForumMessagePtsDownForumMessagePts.archives[20],
    FirstForumMessagePtsDownForumMessagePts.archives[21],
    FirstForumMessagePtsDownForumMessagePts.archives[22],
    FirstForumMessagePtsDownForumMessagePts.archives[23],
    FirstForumMessagePtsDownForumMessagePts.archives[24],
    FirstForumMessagePtsDownForumMessagePts.archives[25],
    FirstForumMessagePtsDownForumMessagePts.archives[26],
  ],
  services: [
    {
      id: FirstForumMessagePtsDownForumMessagePts.services[0].id,
      slugId: FirstForumMessagePtsDownForumMessagePts.services[0].slugId,
      statusId: 1, // Updated from 2
      typeId: FirstForumMessagePtsDownForumMessagePts.services[0].typeId,
      supportId: FirstForumMessagePtsDownForumMessagePts.services[0].supportId,
      zoneId: FirstForumMessagePtsDownForumMessagePts.services[0].zoneId,
      rawData: JSON.stringify(LiveServicesServerXboxNaUpRaw), // Updated from LiveServicesServerXboxNaDownRaw
    },
    {
      id: FirstForumMessagePtsDownForumMessagePts.services[1].id,
      slugId: FirstForumMessagePtsDownForumMessagePts.services[1].slugId,
      statusId: 1, // Updated from 2
      typeId: FirstForumMessagePtsDownForumMessagePts.services[1].typeId,
      supportId: FirstForumMessagePtsDownForumMessagePts.services[1].supportId,
      zoneId: FirstForumMessagePtsDownForumMessagePts.services[1].zoneId,
      rawData: JSON.stringify(LiveServicesServerXboxEuUpRaw), // Updated from LiveServicesServerXboxEuDownRaw
    },
    FirstForumMessagePtsDownForumMessagePts.services[2],
    FirstForumMessagePtsDownForumMessagePts.services[3],
    FirstForumMessagePtsDownForumMessagePts.services[4],
    FirstForumMessagePtsDownForumMessagePts.services[5],
    FirstForumMessagePtsDownForumMessagePts.services[6],
  ],
  maintenances: FirstForumMessagePtsDownForumMessagePts.maintenances,
  serviceControllerReturn: [
    {
      slug: FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[0]
        .slug,
      status: 'up', // Updated from down
      type: FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[0]
        .type,
      support:
        FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[0]
          .support,
      zone: FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[0]
        .zone,
      rawData: LiveServicesServerXboxNaUpRawStringDate, // Updated from LiveServicesServerXboxNaInitialRawStringDate
      statusSince: moment(0).toISOString(),
    },
    {
      slug: FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[1]
        .slug,
      status: 'up', // Updated from down
      type: FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[1]
        .type,
      support:
        FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[1]
          .support,
      zone: FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[1]
        .zone,
      rawData: LiveServicesServerXboxEuUpRawStringDate, // Updated from LiveServicesServerXboxNaInitialRawStringDate
      statusSince: moment(0).toISOString(),
    },
    FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[2],
    FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[3],
    FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[4],
    FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[5],
    FirstForumMessagePtsDownForumMessagePts.serviceControllerReturn[6],
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
  connector: ForumMessagePtsDownForumMessage.connector,
  connectorData: ForumMessagePtsDownForumMessage.connectorData,
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
  connector: ForumMessagePtsDownForumMessagePts.connector,
  connectorData: ForumMessagePtsDownForumMessagePts.connectorData,
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
  connector: ForumMessagePtsDownServiceAlerts.connector,
  connectorData: ForumMessagePtsDownServiceAlerts.connectorData,
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
const LiveServicesUp: Step[] = [
  FirstLiveServicesUpLiveServices,
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

// ForumMessage up (server_xbox_na, server_xbox_eu)
const FirstForumMessageUpForumMessage: Step = {
  connector: LiveServicesUpForumMessage.connector,
  connectorData: [
    ForumMessageServerPsNaExtendedRaw, // changed
    ForumMessageServerPsEuExtendedRaw, // changed
    ForumMessageServerPcNaInitialRaw,
    ForumMessageServerPcEuInitialRaw,
    ForumMessageServerXboxNaUpRaw, // changed
    ForumMessageServerXboxEuUpRaw, // changed
  ],
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstLiveServicesUpLiveServices.logs,
    {
      // created
      connector: 'ForumMessage',
      serviceId: 1,
      statusId: 1,
      rawData: JSON.stringify(ForumMessageServerXboxNaUpRaw),
    },
    {
      // created
      connector: 'ForumMessage',
      serviceId: 2,
      statusId: 1,
      rawData: JSON.stringify(ForumMessageServerXboxEuUpRaw),
    },
    {
      // created
      connector: 'ForumMessage',
      serviceId: 3,
      statusId: 2,
      rawData: JSON.stringify(ForumMessageServerPsNaExtendedRaw),
    },
    {
      // created
      connector: 'ForumMessage',
      serviceId: 4,
      statusId: 2,
      rawData: JSON.stringify(ForumMessageServerPsEuExtendedRaw),
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
    {
      connector: FirstLiveServicesUpLiveServices.archives[14].connector,
      serviceId: FirstLiveServicesUpLiveServices.archives[14].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(ForumMessageServerXboxNaUpRaw), // Updated from ForumMessageServerXboxNaDownRaw
    },
    {
      connector: FirstLiveServicesUpLiveServices.archives[15].connector,
      serviceId: FirstLiveServicesUpLiveServices.archives[15].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(ForumMessageServerXboxEuUpRaw), // Updated from ForumMessageServerXboxEuDownRaw
    },
    {
      connector: FirstLiveServicesUpLiveServices.archives[16].connector,
      serviceId: FirstLiveServicesUpLiveServices.archives[16].serviceId,
      statusId: FirstLiveServicesUpLiveServices.archives[16].statusId,
      rawData: JSON.stringify(ForumMessageServerPsNaExtendedRaw), // Updated from ForumMessageServerPsNaDownRaw
    },
    {
      connector: FirstLiveServicesUpLiveServices.archives[17].connector,
      serviceId: FirstLiveServicesUpLiveServices.archives[17].serviceId,
      statusId: FirstLiveServicesUpLiveServices.archives[17].statusId,
      rawData: JSON.stringify(ForumMessageServerPsEuExtendedRaw), // Updated from ForumMessageServerPsEuDownRaw
    },
    FirstLiveServicesUpLiveServices.archives[18],
    FirstLiveServicesUpLiveServices.archives[19],
    FirstLiveServicesUpLiveServices.archives[20],
    FirstLiveServicesUpLiveServices.archives[21],
    FirstLiveServicesUpLiveServices.archives[22],
    FirstLiveServicesUpLiveServices.archives[23],
    FirstLiveServicesUpLiveServices.archives[24],
    FirstLiveServicesUpLiveServices.archives[25],
    FirstLiveServicesUpLiveServices.archives[26],
  ],
  services: FirstLiveServicesUpLiveServices.services,
  maintenances: FirstLiveServicesUpLiveServices.maintenances,
  serviceControllerReturn:
    FirstLiveServicesUpLiveServices.serviceControllerReturn,
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
const ForumMessageUp: Step[] = [
  LiveServicesUpLiveServices,
  FirstForumMessageUpForumMessage,
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

// ForumMessagePts up (server_xbox_na, server_xbox_eu)
const FirstForumMessagePtsUpForumMessagePts: Step = {
  connector: ForumMessageUpForumMessagePts.connector,
  connectorData: [
    ForumMessagePtsServerPsNaExtendedRaw, // changed
    ForumMessagePtsServerPsEuExtendedRaw, // changed
    ForumMessagePtsServerPcNaInitialRaw,
    ForumMessagePtsServerPcEuInitialRaw,
    ForumMessagePtsServerXboxNaUpRaw, // changed
    ForumMessagePtsServerXboxEuUpRaw, // changed
    ForumMessagePtsServerPcPtsInitialRaw,
  ],
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstForumMessageUpForumMessage.logs,
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 1,
      statusId: 1,
      rawData: JSON.stringify(ForumMessagePtsServerXboxNaUpRaw),
    },
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 2,
      statusId: 1,
      rawData: JSON.stringify(ForumMessagePtsServerXboxEuUpRaw),
    },
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 3,
      statusId: 2,
      rawData: JSON.stringify(ForumMessagePtsServerPsNaExtendedRaw),
    },
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 4,
      statusId: 2,
      rawData: JSON.stringify(ForumMessagePtsServerPsEuExtendedRaw),
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
    FirstForumMessageUpForumMessage.archives[16],
    FirstForumMessageUpForumMessage.archives[17],
    FirstForumMessageUpForumMessage.archives[18],
    FirstForumMessageUpForumMessage.archives[19],
    {
      connector: FirstForumMessageUpForumMessage.archives[20].connector,
      serviceId: FirstForumMessageUpForumMessage.archives[20].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(ForumMessagePtsServerXboxNaUpRaw), // Updated from ForumMessagePtsServerXboxNaDownRaw
    },
    {
      connector: FirstForumMessageUpForumMessage.archives[21].connector,
      serviceId: FirstForumMessageUpForumMessage.archives[21].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(ForumMessagePtsServerXboxEuUpRaw), // Updated from ForumMessagePtsServerXboxEuDownRaw
    },
    {
      connector: FirstForumMessageUpForumMessage.archives[22].connector,
      serviceId: FirstForumMessageUpForumMessage.archives[22].serviceId,
      statusId: FirstForumMessageUpForumMessage.archives[22].statusId,
      rawData: JSON.stringify(ForumMessagePtsServerPsNaExtendedRaw), // Updated from ForumMessagePtsServerPsNaInitialRaw
    },
    {
      connector: FirstForumMessageUpForumMessage.archives[23].connector,
      serviceId: FirstForumMessageUpForumMessage.archives[23].serviceId,
      statusId: FirstForumMessageUpForumMessage.archives[23].statusId,
      rawData: JSON.stringify(ForumMessagePtsServerPsEuExtendedRaw), // Updated from ForumMessagePtsServerPsEuInitialRaw
    },
    FirstForumMessageUpForumMessage.archives[24],
    FirstForumMessageUpForumMessage.archives[25],
    FirstForumMessageUpForumMessage.archives[26],
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
const ForumMessagePtsUp: Step[] = [
  ForumMessageUpLiveServices,
  ForumMessageUpForumMessage,
  FirstForumMessagePtsUpForumMessagePts,
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

// ServiceAlerts up (server_xbox_na, server_xbox_eu)
const FirstServiceAlertsUpServiceAlerts: Step = {
  connector: ForumMessagePtsUpServiceAlerts.connector,
  connectorData: [
    ServiceAlertsServerPsNaDownRaw,
    ServiceAlertsServerPsEuDownRaw,
    ServiceAlertsServerPcNaInitialRaw,
    ServiceAlertsServerPcEuInitialRaw,
    ServiceAlertsServerXboxNaUpRaw, // changed
    ServiceAlertsServerXboxEuUpRaw, // changed
    ServiceAlertsServerPcPtsInitialRaw,
  ],
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstForumMessagePtsUpForumMessagePts.logs,
    {
      // created
      connector: 'ServiceAlerts',
      serviceId: 1,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerXboxNaUpRaw),
    },
    {
      // created
      connector: 'ServiceAlerts',
      serviceId: 2,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerXboxEuUpRaw),
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
    {
      connector: FirstForumMessagePtsUpForumMessagePts.archives[7].connector,
      serviceId: FirstForumMessagePtsUpForumMessagePts.archives[7].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(ServiceAlertsServerXboxNaUpRaw), // Updated from ServiceAlertsServerXboxNaDownRaw
    },
    {
      connector: FirstForumMessagePtsUpForumMessagePts.archives[8].connector,
      serviceId: FirstForumMessagePtsUpForumMessagePts.archives[8].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(ServiceAlertsServerXboxEuUpRaw), // Updated from ServiceAlertsServerXboxEuDownRaw
    },
    FirstForumMessagePtsUpForumMessagePts.archives[9],
    FirstForumMessagePtsUpForumMessagePts.archives[10],
    FirstForumMessagePtsUpForumMessagePts.archives[11],
    FirstForumMessagePtsUpForumMessagePts.archives[12],
    FirstForumMessagePtsUpForumMessagePts.archives[13],
    FirstForumMessagePtsUpForumMessagePts.archives[14],
    FirstForumMessagePtsUpForumMessagePts.archives[15],
    FirstForumMessagePtsUpForumMessagePts.archives[16],
    FirstForumMessagePtsUpForumMessagePts.archives[17],
    FirstForumMessagePtsUpForumMessagePts.archives[18],
    FirstForumMessagePtsUpForumMessagePts.archives[19],
    FirstForumMessagePtsUpForumMessagePts.archives[20],
    FirstForumMessagePtsUpForumMessagePts.archives[21],
    FirstForumMessagePtsUpForumMessagePts.archives[22],
    FirstForumMessagePtsUpForumMessagePts.archives[23],
    FirstForumMessagePtsUpForumMessagePts.archives[24],
    FirstForumMessagePtsUpForumMessagePts.archives[25],
    FirstForumMessagePtsUpForumMessagePts.archives[26],
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
const ServiceAlertsUp: Step[] = [
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

// LiveServices up (server_ps_na, server_ps_eu)
const FirstLiveServicesUp1LiveServices: Step = {
  connector: ServiceAlertsUpLiveServices.connector,
  connectorData: [
    LiveServicesServerPcEuInitialRaw,
    LiveServicesServerPcNaInitialRaw,
    LiveServicesServerPsEuUpRaw, // changed
    LiveServicesServerPsNaUpRaw, // changed
    LiveServicesServerPcPtsInitialRaw,
    LiveServicesServerXboxEuUpRaw,
    LiveServicesServerXboxNaUpRaw,
  ],
  statusUpdateList: [
    // emitted
    LiveServicesServerPsEuUp,
    LiveServicesServerPsNaUp,
  ],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstServiceAlertsUpServiceAlerts.logs,
    {
      // created
      connector: 'LiveServices',
      serviceId: 3,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPsNaUpRaw),
    },
    {
      // created
      connector: 'LiveServices',
      serviceId: 4,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPsEuUpRaw),
    },
  ],
  archives: [
    FirstServiceAlertsUpServiceAlerts.archives[0],
    FirstServiceAlertsUpServiceAlerts.archives[1],
    {
      connector: FirstServiceAlertsUpServiceAlerts.archives[2].connector,
      serviceId: FirstServiceAlertsUpServiceAlerts.archives[2].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(LiveServicesServerPsNaUpRaw), // Updated from LiveServicesServerPsNaDownRaw
    },
    {
      connector: FirstServiceAlertsUpServiceAlerts.archives[3].connector,
      serviceId: FirstServiceAlertsUpServiceAlerts.archives[3].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(LiveServicesServerPsEuUpRaw), // Updated from LiveServicesServerPsEuDownRaw
    },
    FirstServiceAlertsUpServiceAlerts.archives[4],
    FirstServiceAlertsUpServiceAlerts.archives[5],
    FirstServiceAlertsUpServiceAlerts.archives[6],
    FirstServiceAlertsUpServiceAlerts.archives[7],
    FirstServiceAlertsUpServiceAlerts.archives[8],
    FirstServiceAlertsUpServiceAlerts.archives[9],
    FirstServiceAlertsUpServiceAlerts.archives[10],
    FirstServiceAlertsUpServiceAlerts.archives[11],
    FirstServiceAlertsUpServiceAlerts.archives[12],
    FirstServiceAlertsUpServiceAlerts.archives[13],
    FirstServiceAlertsUpServiceAlerts.archives[14],
    FirstServiceAlertsUpServiceAlerts.archives[15],
    FirstServiceAlertsUpServiceAlerts.archives[16],
    FirstServiceAlertsUpServiceAlerts.archives[17],
    FirstServiceAlertsUpServiceAlerts.archives[18],
    FirstServiceAlertsUpServiceAlerts.archives[19],
    FirstServiceAlertsUpServiceAlerts.archives[20],
    FirstServiceAlertsUpServiceAlerts.archives[21],
    FirstServiceAlertsUpServiceAlerts.archives[22],
    FirstServiceAlertsUpServiceAlerts.archives[23],
    FirstServiceAlertsUpServiceAlerts.archives[24],
    FirstServiceAlertsUpServiceAlerts.archives[25],
    FirstServiceAlertsUpServiceAlerts.archives[26],
  ],
  services: [
    FirstServiceAlertsUpServiceAlerts.services[0],
    FirstServiceAlertsUpServiceAlerts.services[1],
    {
      id: FirstServiceAlertsUpServiceAlerts.services[2].id,
      slugId: FirstServiceAlertsUpServiceAlerts.services[2].slugId,
      statusId: 1, // Updated from 2
      typeId: FirstServiceAlertsUpServiceAlerts.services[2].typeId,
      supportId: FirstServiceAlertsUpServiceAlerts.services[2].supportId,
      zoneId: FirstServiceAlertsUpServiceAlerts.services[2].zoneId,
      rawData: JSON.stringify(LiveServicesServerPsNaUpRaw), // Updated from LiveServicesServerPsNaDownRaw
    },
    {
      id: FirstServiceAlertsUpServiceAlerts.services[3].id,
      slugId: FirstServiceAlertsUpServiceAlerts.services[3].slugId,
      statusId: 1, // Updated from 2
      typeId: FirstServiceAlertsUpServiceAlerts.services[3].typeId,
      supportId: FirstServiceAlertsUpServiceAlerts.services[3].supportId,
      zoneId: FirstServiceAlertsUpServiceAlerts.services[3].zoneId,
      rawData: JSON.stringify(LiveServicesServerPsEuUpRaw), // Updated from LiveServicesServerPsEuDownRaw
    },
    FirstServiceAlertsUpServiceAlerts.services[4],
    FirstServiceAlertsUpServiceAlerts.services[5],
    FirstServiceAlertsUpServiceAlerts.services[6],
  ],
  maintenances: FirstServiceAlertsUpServiceAlerts.maintenances,
  serviceControllerReturn: [
    FirstServiceAlertsUpServiceAlerts.serviceControllerReturn[0],
    FirstServiceAlertsUpServiceAlerts.serviceControllerReturn[1],
    {
      slug: FirstServiceAlertsUpServiceAlerts.serviceControllerReturn[2].slug,
      status: 'up', // Updated from down
      type: FirstServiceAlertsUpServiceAlerts.serviceControllerReturn[2].type,
      support:
        FirstServiceAlertsUpServiceAlerts.serviceControllerReturn[2].support,
      zone: FirstServiceAlertsUpServiceAlerts.serviceControllerReturn[2].zone,
      rawData: LiveServicesServerPsNaUpRawStringDate, // Updated from LiveServicesServerPsNaDownRawStringDate
      statusSince: moment(0).toISOString(),
    },
    {
      slug: FirstServiceAlertsUpServiceAlerts.serviceControllerReturn[3].slug,
      status: 'up', // Updated from down
      type: FirstServiceAlertsUpServiceAlerts.serviceControllerReturn[3].type,
      support:
        FirstServiceAlertsUpServiceAlerts.serviceControllerReturn[3].support,
      zone: FirstServiceAlertsUpServiceAlerts.serviceControllerReturn[3].zone,
      rawData: LiveServicesServerPsEuUpRawStringDate, // Updated from LiveServicesServerPsEuDownRawStringDate
      statusSince: moment(0).toISOString(),
    },
    FirstServiceAlertsUpServiceAlerts.serviceControllerReturn[4],
    FirstServiceAlertsUpServiceAlerts.serviceControllerReturn[5],
    FirstServiceAlertsUpServiceAlerts.serviceControllerReturn[6],
  ],
};
const LiveServicesUp1LiveServices: Step = {
  connector: FirstLiveServicesUp1LiveServices.connector,
  connectorData: FirstLiveServicesUp1LiveServices.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstLiveServicesUp1LiveServices.logs,
  archives: FirstLiveServicesUp1LiveServices.archives,
  services: FirstLiveServicesUp1LiveServices.services,
  maintenances: FirstLiveServicesUp1LiveServices.maintenances,
  serviceControllerReturn:
    FirstLiveServicesUp1LiveServices.serviceControllerReturn,
};
const LiveServicesUp1ForumMessage: Step = {
  connector: ServiceAlertsUpForumMessage.connector,
  connectorData: ServiceAlertsUpForumMessage.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstLiveServicesUp1LiveServices.logs,
  archives: FirstLiveServicesUp1LiveServices.archives,
  services: FirstLiveServicesUp1LiveServices.services,
  maintenances: FirstLiveServicesUp1LiveServices.maintenances,
  serviceControllerReturn:
    FirstLiveServicesUp1LiveServices.serviceControllerReturn,
};
const LiveServicesUp1ForumMessagePts: Step = {
  connector: ServiceAlertsUpForumMessagePts.connector,
  connectorData: ServiceAlertsUpForumMessagePts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstLiveServicesUp1LiveServices.logs,
  archives: FirstLiveServicesUp1LiveServices.archives,
  services: FirstLiveServicesUp1LiveServices.services,
  maintenances: FirstLiveServicesUp1LiveServices.maintenances,
  serviceControllerReturn:
    FirstLiveServicesUp1LiveServices.serviceControllerReturn,
};
const LiveServicesUp1ServiceAlerts: Step = {
  connector: ServiceAlertsUpServiceAlerts.connector,
  connectorData: ServiceAlertsUpServiceAlerts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstLiveServicesUp1LiveServices.logs,
  archives: FirstLiveServicesUp1LiveServices.archives,
  services: FirstLiveServicesUp1LiveServices.services,
  maintenances: FirstLiveServicesUp1LiveServices.maintenances,
  serviceControllerReturn:
    FirstLiveServicesUp1LiveServices.serviceControllerReturn,
};
const LiveServicesUp1: Step[] = [
  FirstLiveServicesUp1LiveServices,
  LiveServicesUp1ForumMessage,
  LiveServicesUp1ForumMessagePts,
  LiveServicesUp1ServiceAlerts,
  // Same
  LiveServicesUp1LiveServices,
  LiveServicesUp1ForumMessage,
  LiveServicesUp1ForumMessagePts,
  // Same
  LiveServicesUp1LiveServices,
  LiveServicesUp1ForumMessage,
  LiveServicesUp1ForumMessagePts,
  // Same
  LiveServicesUp1LiveServices,
  LiveServicesUp1ForumMessage,
  LiveServicesUp1ForumMessagePts,
  LiveServicesUp1ServiceAlerts,
  // Same
  LiveServicesUp1LiveServices,
  LiveServicesUp1ForumMessage,
  LiveServicesUp1ForumMessagePts,
  // Same
  LiveServicesUp1LiveServices,
  LiveServicesUp1ForumMessage,
  LiveServicesUp1ForumMessagePts,
  // Same
  LiveServicesUp1LiveServices,
  LiveServicesUp1ForumMessage,
  LiveServicesUp1ForumMessagePts,
  LiveServicesUp1ServiceAlerts,
  // Same
  LiveServicesUp1LiveServices,
  LiveServicesUp1ForumMessage,
  LiveServicesUp1ForumMessagePts,
  // Same
  LiveServicesUp1LiveServices,
  LiveServicesUp1ForumMessage,
  LiveServicesUp1ForumMessagePts,
];

// ForumMessage up (server_ps_na, server_ps_eu)
const FirstForumMessageUp1ForumMessage: Step = {
  connector: LiveServicesUp1ForumMessage.connector,
  connectorData: [
    ForumMessageServerPsNaUpRaw, // changed
    ForumMessageServerPsEuUpRaw, // changed
    ForumMessageServerPcNaInitialRaw,
    ForumMessageServerPcEuInitialRaw,
    ForumMessageServerXboxNaUpRaw,
    ForumMessageServerXboxEuUpRaw,
  ],
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstLiveServicesUp1LiveServices.logs,
    {
      // created
      connector: 'ForumMessage',
      serviceId: 3,
      statusId: 1,
      rawData: JSON.stringify(ForumMessageServerPsNaUpRaw),
    },
    {
      // created
      connector: 'ForumMessage',
      serviceId: 4,
      statusId: 1,
      rawData: JSON.stringify(ForumMessageServerPsEuUpRaw),
    },
  ],
  archives: [
    FirstLiveServicesUp1LiveServices.archives[0],
    FirstLiveServicesUp1LiveServices.archives[1],
    FirstLiveServicesUp1LiveServices.archives[3],
    FirstLiveServicesUp1LiveServices.archives[4],
    FirstLiveServicesUp1LiveServices.archives[4],
    FirstLiveServicesUp1LiveServices.archives[5],
    FirstLiveServicesUp1LiveServices.archives[6],
    FirstLiveServicesUp1LiveServices.archives[7],
    FirstLiveServicesUp1LiveServices.archives[8],
    FirstLiveServicesUp1LiveServices.archives[9],
    FirstLiveServicesUp1LiveServices.archives[10],
    FirstLiveServicesUp1LiveServices.archives[11],
    FirstLiveServicesUp1LiveServices.archives[12],
    FirstLiveServicesUp1LiveServices.archives[13],
    FirstLiveServicesUp1LiveServices.archives[14],
    FirstLiveServicesUp1LiveServices.archives[15],
    {
      connector: FirstLiveServicesUp1LiveServices.archives[16].connector,
      serviceId: FirstLiveServicesUp1LiveServices.archives[16].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(ForumMessageServerPsNaUpRaw), // Updated from ForumMessageServerPsNaDownRaw
    },
    {
      connector: FirstLiveServicesUp1LiveServices.archives[17].connector,
      serviceId: FirstLiveServicesUp1LiveServices.archives[17].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(ForumMessageServerPsEuUpRaw), // Updated from ForumMessageServerPsEuDownRaw
    },
    FirstLiveServicesUp1LiveServices.archives[18],
    FirstLiveServicesUp1LiveServices.archives[19],
    FirstLiveServicesUp1LiveServices.archives[20],
    FirstLiveServicesUp1LiveServices.archives[21],
    FirstLiveServicesUp1LiveServices.archives[22],
    FirstLiveServicesUp1LiveServices.archives[23],
    FirstLiveServicesUp1LiveServices.archives[24],
    FirstLiveServicesUp1LiveServices.archives[25],
    FirstLiveServicesUp1LiveServices.archives[26],
  ],
  services: FirstLiveServicesUp1LiveServices.services,
  maintenances: FirstLiveServicesUp1LiveServices.maintenances,
  serviceControllerReturn:
    FirstLiveServicesUp1LiveServices.serviceControllerReturn,
};
const ForumMessageUp1ForumMessage: Step = {
  connector: FirstForumMessageUp1ForumMessage.connector,
  connectorData: FirstForumMessageUp1ForumMessage.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageUp1ForumMessage.logs,
  archives: FirstForumMessageUp1ForumMessage.archives,
  services: FirstForumMessageUp1ForumMessage.services,
  maintenances: FirstForumMessageUp1ForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageUp1ForumMessage.serviceControllerReturn,
};
const ForumMessageUp1LiveServices: Step = {
  connector: LiveServicesUp1LiveServices.connector,
  connectorData: LiveServicesUp1LiveServices.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageUp1ForumMessage.logs,
  archives: FirstForumMessageUp1ForumMessage.archives,
  services: FirstForumMessageUp1ForumMessage.services,
  maintenances: FirstForumMessageUp1ForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageUp1ForumMessage.serviceControllerReturn,
};
const ForumMessageUp1ForumMessagePts: Step = {
  connector: LiveServicesUp1ForumMessagePts.connector,
  connectorData: LiveServicesUp1ForumMessagePts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageUp1ForumMessage.logs,
  archives: FirstForumMessageUp1ForumMessage.archives,
  services: FirstForumMessageUp1ForumMessage.services,
  maintenances: FirstForumMessageUp1ForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageUp1ForumMessage.serviceControllerReturn,
};
const ForumMessageUp1ServiceAlerts: Step = {
  connector: LiveServicesUp1ServiceAlerts.connector,
  connectorData: LiveServicesUp1ServiceAlerts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageUp1ForumMessage.logs,
  archives: FirstForumMessageUp1ForumMessage.archives,
  services: FirstForumMessageUp1ForumMessage.services,
  maintenances: FirstForumMessageUp1ForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageUp1ForumMessage.serviceControllerReturn,
};
const ForumMessageUp1: Step[] = [
  LiveServicesUp1LiveServices,
  FirstForumMessageUp1ForumMessage,
  ForumMessageUp1ForumMessagePts,
  ForumMessageUp1ServiceAlerts,
  // Same
  ForumMessageUp1LiveServices,
  ForumMessageUp1ForumMessage,
  ForumMessageUp1ForumMessagePts,
  // Same
  ForumMessageUp1LiveServices,
  ForumMessageUp1ForumMessage,
  ForumMessageUp1ForumMessagePts,
  // Same
  ForumMessageUp1LiveServices,
  ForumMessageUp1ForumMessage,
  ForumMessageUp1ForumMessagePts,
  ForumMessageUp1ServiceAlerts,
  // Same
  ForumMessageUp1LiveServices,
  ForumMessageUp1ForumMessage,
  ForumMessageUp1ForumMessagePts,
  // Same
  ForumMessageUp1LiveServices,
  ForumMessageUp1ForumMessage,
  ForumMessageUp1ForumMessagePts,
  // Same
  ForumMessageUp1LiveServices,
  ForumMessageUp1ForumMessage,
  ForumMessageUp1ForumMessagePts,
  ForumMessageUp1ServiceAlerts,
  // Same
  ForumMessageUp1LiveServices,
  ForumMessageUp1ForumMessage,
  ForumMessageUp1ForumMessagePts,
  // Same
  ForumMessageUp1LiveServices,
  ForumMessageUp1ForumMessage,
  ForumMessageUp1ForumMessagePts,
];

// ForumMessage down (server_ps_na, server_ps_eu)
const FirstForumMessageDown1ForumMessage: Step = {
  connector: ForumMessageUp1ForumMessage.connector,
  connectorData: [
    ForumMessageServerPsNaExtended1Raw, // changed
    ForumMessageServerPsEuExtended1Raw, // changed
    ForumMessageServerPcNaInitialRaw,
    ForumMessageServerPcEuInitialRaw,
    ForumMessageServerXboxNaUpRaw,
    ForumMessageServerXboxEuUpRaw,
  ],
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageUp1ForumMessage.logs,
  archives: FirstForumMessageUp1ForumMessage.archives,
  services: FirstForumMessageUp1ForumMessage.services,
  maintenances: FirstForumMessageUp1ForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageUp1ForumMessage.serviceControllerReturn,
};
const ForumMessageDown1ForumMessage: Step = {
  connector: FirstForumMessageDown1ForumMessage.connector,
  connectorData: FirstForumMessageDown1ForumMessage.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageDown1ForumMessage.logs,
  archives: FirstForumMessageDown1ForumMessage.archives,
  services: FirstForumMessageDown1ForumMessage.services,
  maintenances: FirstForumMessageDown1ForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageDown1ForumMessage.serviceControllerReturn,
};
const ForumMessageDown1LiveServices: Step = {
  connector: ForumMessageUp1LiveServices.connector,
  connectorData: ForumMessageUp1LiveServices.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageDown1ForumMessage.logs,
  archives: FirstForumMessageDown1ForumMessage.archives,
  services: FirstForumMessageDown1ForumMessage.services,
  maintenances: FirstForumMessageDown1ForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageDown1ForumMessage.serviceControllerReturn,
};
const ForumMessageDown1ForumMessagePts: Step = {
  connector: ForumMessageUp1ForumMessagePts.connector,
  connectorData: ForumMessageUp1ForumMessagePts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageDown1ForumMessage.logs,
  archives: FirstForumMessageDown1ForumMessage.archives,
  services: FirstForumMessageDown1ForumMessage.services,
  maintenances: FirstForumMessageDown1ForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageDown1ForumMessage.serviceControllerReturn,
};
const ForumMessageDown1ServiceAlerts: Step = {
  connector: ForumMessageUp1ServiceAlerts.connector,
  connectorData: ForumMessageUp1ServiceAlerts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageDown1ForumMessage.logs,
  archives: FirstForumMessageDown1ForumMessage.archives,
  services: FirstForumMessageDown1ForumMessage.services,
  maintenances: FirstForumMessageDown1ForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageDown1ForumMessage.serviceControllerReturn,
};
const ForumMessageDown1: Step[] = [
  ForumMessageUp1LiveServices,
  FirstForumMessageDown1ForumMessage,
  ForumMessageDown1ForumMessagePts,
  ForumMessageDown1ServiceAlerts,
  // Same
  ForumMessageDown1LiveServices,
  ForumMessageDown1ForumMessage,
  ForumMessageDown1ForumMessagePts,
  // Same
  ForumMessageDown1LiveServices,
  ForumMessageDown1ForumMessage,
  ForumMessageDown1ForumMessagePts,
  // Same
  ForumMessageDown1LiveServices,
  ForumMessageDown1ForumMessage,
  ForumMessageDown1ForumMessagePts,
  ForumMessageDown1ServiceAlerts,
  // Same
  ForumMessageDown1LiveServices,
  ForumMessageDown1ForumMessage,
  ForumMessageDown1ForumMessagePts,
  // Same
  ForumMessageDown1LiveServices,
  ForumMessageDown1ForumMessage,
  ForumMessageDown1ForumMessagePts,
  // Same
  ForumMessageDown1LiveServices,
  ForumMessageDown1ForumMessage,
  ForumMessageDown1ForumMessagePts,
  ForumMessageDown1ServiceAlerts,
  // Same
  ForumMessageDown1LiveServices,
  ForumMessageDown1ForumMessage,
  ForumMessageDown1ForumMessagePts,
  // Same
  ForumMessageDown1LiveServices,
  ForumMessageDown1ForumMessage,
  ForumMessageDown1ForumMessagePts,
];

// ForumMessage up (server_ps_na, server_ps_eu)
const FirstForumMessageUp2ForumMessage: Step = {
  connector: ForumMessageDown1ForumMessage.connector,
  connectorData: [
    ForumMessageServerPsNaUp1Raw, // changed
    ForumMessageServerPsEuUp1Raw, // changed
    ForumMessageServerPcNaInitialRaw,
    ForumMessageServerPcEuInitialRaw,
    ForumMessageServerXboxNaUpRaw,
    ForumMessageServerXboxEuUpRaw,
  ],
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageDown1ForumMessage.logs,
  archives: FirstForumMessageDown1ForumMessage.archives,
  services: FirstForumMessageDown1ForumMessage.services,
  maintenances: FirstForumMessageDown1ForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageDown1ForumMessage.serviceControllerReturn,
};
const ForumMessageUp2ForumMessage: Step = {
  connector: FirstForumMessageUp2ForumMessage.connector,
  connectorData: FirstForumMessageUp2ForumMessage.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageUp2ForumMessage.logs,
  archives: FirstForumMessageUp2ForumMessage.archives,
  services: FirstForumMessageUp2ForumMessage.services,
  maintenances: FirstForumMessageUp2ForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageUp2ForumMessage.serviceControllerReturn,
};
const ForumMessageUp2LiveServices: Step = {
  connector: ForumMessageDown1LiveServices.connector,
  connectorData: ForumMessageDown1LiveServices.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageUp2ForumMessage.logs,
  archives: FirstForumMessageUp2ForumMessage.archives,
  services: FirstForumMessageUp2ForumMessage.services,
  maintenances: FirstForumMessageUp2ForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageUp2ForumMessage.serviceControllerReturn,
};
const ForumMessageUp2ForumMessagePts: Step = {
  connector: ForumMessageDown1ForumMessagePts.connector,
  connectorData: ForumMessageDown1ForumMessagePts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageUp2ForumMessage.logs,
  archives: FirstForumMessageUp2ForumMessage.archives,
  services: FirstForumMessageUp2ForumMessage.services,
  maintenances: FirstForumMessageUp2ForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageUp2ForumMessage.serviceControllerReturn,
};
const ForumMessageUp2ServiceAlerts: Step = {
  connector: ForumMessageDown1ServiceAlerts.connector,
  connectorData: ForumMessageDown1ServiceAlerts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessageUp2ForumMessage.logs,
  archives: FirstForumMessageUp2ForumMessage.archives,
  services: FirstForumMessageUp2ForumMessage.services,
  maintenances: FirstForumMessageUp2ForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageUp2ForumMessage.serviceControllerReturn,
};
const ForumMessageUp2: Step[] = [
  ForumMessageDown1LiveServices,
  FirstForumMessageUp2ForumMessage,
  ForumMessageUp2ForumMessagePts,
  ForumMessageUp2ServiceAlerts,
  // Same
  ForumMessageUp2LiveServices,
  ForumMessageUp2ForumMessage,
  ForumMessageUp2ForumMessagePts,
  // Same
  ForumMessageUp2LiveServices,
  ForumMessageUp2ForumMessage,
  ForumMessageUp2ForumMessagePts,
  // Same
  ForumMessageUp2LiveServices,
  ForumMessageUp2ForumMessage,
  ForumMessageUp2ForumMessagePts,
  ForumMessageUp2ServiceAlerts,
  // Same
  ForumMessageUp2LiveServices,
  ForumMessageUp2ForumMessage,
  ForumMessageUp2ForumMessagePts,
  // Same
  ForumMessageUp2LiveServices,
  ForumMessageUp2ForumMessage,
  ForumMessageUp2ForumMessagePts,
  // Same
  ForumMessageUp2LiveServices,
  ForumMessageUp2ForumMessage,
  ForumMessageUp2ForumMessagePts,
  ForumMessageUp2ServiceAlerts,
  // Same
  ForumMessageUp2LiveServices,
  ForumMessageUp2ForumMessage,
  ForumMessageUp2ForumMessagePts,
  // Same
  ForumMessageUp2LiveServices,
  ForumMessageUp2ForumMessage,
  ForumMessageUp2ForumMessagePts,
];

// ForumMessagePts up (server_ps_na, server_ps_eu)
const FirstForumMessagePtsUp1ForumMessagePts: Step = {
  connector: ForumMessageUp2ForumMessagePts.connector,
  connectorData: [
    ForumMessagePtsServerPsNaUpRaw, // changed
    ForumMessagePtsServerPsEuUpRaw, // changed
    ForumMessagePtsServerPcNaInitialRaw,
    ForumMessagePtsServerPcEuInitialRaw,
    ForumMessagePtsServerXboxNaUpRaw,
    ForumMessagePtsServerXboxEuUpRaw,
    ForumMessagePtsServerPcPtsInitialRaw,
  ],
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstForumMessageUp2ForumMessage.logs,
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 3,
      statusId: 1,
      rawData: JSON.stringify(ForumMessagePtsServerPsNaUpRaw),
    },
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 4,
      statusId: 1,
      rawData: JSON.stringify(ForumMessagePtsServerPsEuUpRaw),
    },
  ],
  archives: [
    FirstForumMessageUp2ForumMessage.archives[0],
    FirstForumMessageUp2ForumMessage.archives[1],
    FirstForumMessageUp2ForumMessage.archives[3],
    FirstForumMessageUp2ForumMessage.archives[4],
    FirstForumMessageUp2ForumMessage.archives[4],
    FirstForumMessageUp2ForumMessage.archives[5],
    FirstForumMessageUp2ForumMessage.archives[6],
    FirstForumMessageUp2ForumMessage.archives[7],
    FirstForumMessageUp2ForumMessage.archives[8],
    FirstForumMessageUp2ForumMessage.archives[9],
    FirstForumMessageUp2ForumMessage.archives[10],
    FirstForumMessageUp2ForumMessage.archives[11],
    FirstForumMessageUp2ForumMessage.archives[12],
    FirstForumMessageUp2ForumMessage.archives[13],
    FirstForumMessageUp2ForumMessage.archives[14],
    FirstForumMessageUp2ForumMessage.archives[15],
    FirstForumMessageUp2ForumMessage.archives[16],
    FirstForumMessageUp2ForumMessage.archives[17],
    FirstForumMessageUp2ForumMessage.archives[18],
    FirstForumMessageUp2ForumMessage.archives[19],
    FirstForumMessageUp2ForumMessage.archives[20],
    FirstForumMessageUp2ForumMessage.archives[21],
    {
      connector: FirstForumMessageUp2ForumMessage.archives[22].connector,
      serviceId: FirstForumMessageUp2ForumMessage.archives[22].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(ForumMessagePtsServerPsNaUpRaw), // Updated from ForumMessagePtsServerPsNaDownRaw
    },
    {
      connector: FirstForumMessageUp2ForumMessage.archives[23].connector,
      serviceId: FirstForumMessageUp2ForumMessage.archives[23].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(ForumMessagePtsServerPsEuUpRaw), // Updated from ForumMessagePtsServerPsEuDownRaw
    },
    FirstForumMessageUp2ForumMessage.archives[24],
    FirstForumMessageUp2ForumMessage.archives[25],
    FirstForumMessageUp2ForumMessage.archives[26],
  ],
  services: FirstForumMessageUp2ForumMessage.services,
  maintenances: FirstForumMessageUp2ForumMessage.maintenances,
  serviceControllerReturn:
    FirstForumMessageUp2ForumMessage.serviceControllerReturn,
};
const ForumMessagePtsUp1ForumMessagePts: Step = {
  connector: FirstForumMessagePtsUp1ForumMessagePts.connector,
  connectorData: FirstForumMessagePtsUp1ForumMessagePts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessagePtsUp1ForumMessagePts.logs,
  archives: FirstForumMessagePtsUp1ForumMessagePts.archives,
  services: FirstForumMessagePtsUp1ForumMessagePts.services,
  maintenances: FirstForumMessagePtsUp1ForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsUp1ForumMessagePts.serviceControllerReturn,
};
const ForumMessagePtsUp1LiveServices: Step = {
  connector: ForumMessageUp2LiveServices.connector,
  connectorData: ForumMessageUp2LiveServices.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessagePtsUp1ForumMessagePts.logs,
  archives: FirstForumMessagePtsUp1ForumMessagePts.archives,
  services: FirstForumMessagePtsUp1ForumMessagePts.services,
  maintenances: FirstForumMessagePtsUp1ForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsUp1ForumMessagePts.serviceControllerReturn,
};
const ForumMessagePtsUp1ForumMessage: Step = {
  connector: ForumMessageUp2ForumMessage.connector,
  connectorData: ForumMessageUp2ForumMessage.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessagePtsUp1ForumMessagePts.logs,
  archives: FirstForumMessagePtsUp1ForumMessagePts.archives,
  services: FirstForumMessagePtsUp1ForumMessagePts.services,
  maintenances: FirstForumMessagePtsUp1ForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsUp1ForumMessagePts.serviceControllerReturn,
};
const ForumMessagePtsUp1ServiceAlerts: Step = {
  connector: ForumMessageUp2ServiceAlerts.connector,
  connectorData: ForumMessageUp2ServiceAlerts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstForumMessagePtsUp1ForumMessagePts.logs,
  archives: FirstForumMessagePtsUp1ForumMessagePts.archives,
  services: FirstForumMessagePtsUp1ForumMessagePts.services,
  maintenances: FirstForumMessagePtsUp1ForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsUp1ForumMessagePts.serviceControllerReturn,
};
const ForumMessagePtsUp1: Step[] = [
  ForumMessageUp2LiveServices,
  ForumMessageUp2ForumMessage,
  ForumMessagePtsUp1ForumMessagePts,
  ForumMessagePtsUp1ServiceAlerts,
  // Same
  ForumMessagePtsUp1LiveServices,
  ForumMessagePtsUp1ForumMessage,
  ForumMessagePtsUp1ForumMessagePts,
  // Same
  ForumMessagePtsUp1LiveServices,
  ForumMessagePtsUp1ForumMessage,
  ForumMessagePtsUp1ForumMessagePts,
  // Same
  ForumMessagePtsUp1LiveServices,
  ForumMessagePtsUp1ForumMessage,
  ForumMessagePtsUp1ForumMessagePts,
  ForumMessagePtsUp1ServiceAlerts,
  // Same
  ForumMessagePtsUp1LiveServices,
  ForumMessagePtsUp1ForumMessage,
  ForumMessagePtsUp1ForumMessagePts,
  // Same
  ForumMessagePtsUp1LiveServices,
  ForumMessagePtsUp1ForumMessage,
  ForumMessagePtsUp1ForumMessagePts,
  // Same
  ForumMessagePtsUp1LiveServices,
  ForumMessagePtsUp1ForumMessage,
  ForumMessagePtsUp1ForumMessagePts,
  ForumMessagePtsUp1ServiceAlerts,
  // Same
  ForumMessagePtsUp1LiveServices,
  ForumMessagePtsUp1ForumMessage,
  ForumMessagePtsUp1ForumMessagePts,
  // Same
  ForumMessagePtsUp1LiveServices,
  ForumMessagePtsUp1ForumMessage,
  ForumMessagePtsUp1ForumMessagePts,
];

// ServiceAlerts up (server_ps_na, server_ps_eu)
const FirstServiceAlertsUp1ServiceAlerts: Step = {
  connector: ForumMessagePtsUp1ServiceAlerts.connector,
  connectorData: [
    ServiceAlertsServerPsNaUpRaw, // changed
    ServiceAlertsServerPsEuUpRaw, // changed
    ServiceAlertsServerPcNaInitialRaw,
    ServiceAlertsServerPcEuInitialRaw,
    ServiceAlertsServerXboxNaUpRaw,
    ServiceAlertsServerXboxEuUpRaw,
    ServiceAlertsServerPcPtsInitialRaw,
  ],
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: [
    ...FirstForumMessagePtsUp1ForumMessagePts.logs,
    {
      // created
      connector: 'ServiceAlerts',
      serviceId: 3,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPsNaUpRaw),
    },
    {
      // created
      connector: 'ServiceAlerts',
      serviceId: 4,
      statusId: 1,
      rawData: JSON.stringify(ServiceAlertsServerPsEuUpRaw),
    },
  ],
  archives: [
    FirstForumMessagePtsUp1ForumMessagePts.archives[0],
    FirstForumMessagePtsUp1ForumMessagePts.archives[1],
    FirstForumMessagePtsUp1ForumMessagePts.archives[3],
    FirstForumMessagePtsUp1ForumMessagePts.archives[4],
    FirstForumMessagePtsUp1ForumMessagePts.archives[4],
    FirstForumMessagePtsUp1ForumMessagePts.archives[5],
    FirstForumMessagePtsUp1ForumMessagePts.archives[6],
    FirstForumMessagePtsUp1ForumMessagePts.archives[7],
    FirstForumMessagePtsUp1ForumMessagePts.archives[8],
    {
      connector: FirstForumMessagePtsUp1ForumMessagePts.archives[9].connector,
      serviceId: FirstForumMessagePtsUp1ForumMessagePts.archives[9].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(ServiceAlertsServerPsNaUpRaw), // Updated from ServiceAlertsServerPsNaDownRaw
    },
    {
      connector: FirstForumMessagePtsUp1ForumMessagePts.archives[10].connector,
      serviceId: FirstForumMessagePtsUp1ForumMessagePts.archives[10].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(ServiceAlertsServerPsEuUpRaw), // Updated from ServiceAlertsServerPsEuDownRaw
    },
    FirstForumMessagePtsUp1ForumMessagePts.archives[11],
    FirstForumMessagePtsUp1ForumMessagePts.archives[12],
    FirstForumMessagePtsUp1ForumMessagePts.archives[13],
    FirstForumMessagePtsUp1ForumMessagePts.archives[14],
    FirstForumMessagePtsUp1ForumMessagePts.archives[15],
    FirstForumMessagePtsUp1ForumMessagePts.archives[16],
    FirstForumMessagePtsUp1ForumMessagePts.archives[17],
    FirstForumMessagePtsUp1ForumMessagePts.archives[18],
    FirstForumMessagePtsUp1ForumMessagePts.archives[19],
    FirstForumMessagePtsUp1ForumMessagePts.archives[20],
    FirstForumMessagePtsUp1ForumMessagePts.archives[21],
    FirstForumMessagePtsUp1ForumMessagePts.archives[22],
    FirstForumMessagePtsUp1ForumMessagePts.archives[24],
    FirstForumMessagePtsUp1ForumMessagePts.archives[24],
    FirstForumMessagePtsUp1ForumMessagePts.archives[25],
    FirstForumMessagePtsUp1ForumMessagePts.archives[26],
  ],
  services: FirstForumMessagePtsUp1ForumMessagePts.services,
  maintenances: FirstForumMessagePtsUp1ForumMessagePts.maintenances,
  serviceControllerReturn:
    FirstForumMessagePtsUp1ForumMessagePts.serviceControllerReturn,
};
const ServiceAlertsUp1ServiceAlerts: Step = {
  connector: FirstServiceAlertsUp1ServiceAlerts.connector,
  connectorData: FirstServiceAlertsUp1ServiceAlerts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstServiceAlertsUp1ServiceAlerts.logs,
  archives: FirstServiceAlertsUp1ServiceAlerts.archives,
  services: FirstServiceAlertsUp1ServiceAlerts.services,
  maintenances: FirstServiceAlertsUp1ServiceAlerts.maintenances,
  serviceControllerReturn:
    FirstServiceAlertsUp1ServiceAlerts.serviceControllerReturn,
};
const ServiceAlertsUp1LiveServices: Step = {
  connector: ForumMessagePtsUp1LiveServices.connector,
  connectorData: ForumMessagePtsUp1LiveServices.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstServiceAlertsUp1ServiceAlerts.logs,
  archives: FirstServiceAlertsUp1ServiceAlerts.archives,
  services: FirstServiceAlertsUp1ServiceAlerts.services,
  maintenances: FirstServiceAlertsUp1ServiceAlerts.maintenances,
  serviceControllerReturn:
    FirstServiceAlertsUp1ServiceAlerts.serviceControllerReturn,
};
const ServiceAlertsUp1ForumMessage: Step = {
  connector: ForumMessagePtsUp1ForumMessage.connector,
  connectorData: ForumMessagePtsUp1ForumMessage.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstServiceAlertsUp1ServiceAlerts.logs,
  archives: FirstServiceAlertsUp1ServiceAlerts.archives,
  services: FirstServiceAlertsUp1ServiceAlerts.services,
  maintenances: FirstServiceAlertsUp1ServiceAlerts.maintenances,
  serviceControllerReturn:
    FirstServiceAlertsUp1ServiceAlerts.serviceControllerReturn,
};
const ServiceAlertsUp1ForumMessagePts: Step = {
  connector: ForumMessagePtsUp1ForumMessagePts.connector,
  connectorData: ForumMessagePtsUp1ForumMessagePts.connectorData,
  statusUpdateList: [],
  maintenancePlannedList: [],
  maintenanceRemovedList: [],
  logs: FirstServiceAlertsUp1ServiceAlerts.logs,
  archives: FirstServiceAlertsUp1ServiceAlerts.archives,
  services: FirstServiceAlertsUp1ServiceAlerts.services,
  maintenances: FirstServiceAlertsUp1ServiceAlerts.maintenances,
  serviceControllerReturn:
    FirstServiceAlertsUp1ServiceAlerts.serviceControllerReturn,
};
const ServiceAlertsUp1: Step[] = [
  ForumMessagePtsUp1LiveServices,
  ForumMessagePtsUp1ForumMessage,
  ForumMessagePtsUp1ForumMessagePts,
  FirstServiceAlertsUp1ServiceAlerts,
  // Same
  ServiceAlertsUp1LiveServices,
  ServiceAlertsUp1ForumMessage,
  ServiceAlertsUp1ForumMessagePts,
  // Same
  ServiceAlertsUp1LiveServices,
  ServiceAlertsUp1ForumMessage,
  ServiceAlertsUp1ForumMessagePts,
  // Same
  ServiceAlertsUp1LiveServices,
  ServiceAlertsUp1ForumMessage,
  ServiceAlertsUp1ForumMessagePts,
  ServiceAlertsUp1ServiceAlerts,
  // Same
  ServiceAlertsUp1LiveServices,
  ServiceAlertsUp1ForumMessage,
  ServiceAlertsUp1ForumMessagePts,
  // Same
  ServiceAlertsUp1LiveServices,
  ServiceAlertsUp1ForumMessage,
  ServiceAlertsUp1ForumMessagePts,
  // Same
  ServiceAlertsUp1LiveServices,
  ServiceAlertsUp1ForumMessage,
  ServiceAlertsUp1ForumMessagePts,
  ServiceAlertsUp1ServiceAlerts,
  // Same
  ServiceAlertsUp1LiveServices,
  ServiceAlertsUp1ForumMessage,
  ServiceAlertsUp1ForumMessagePts,
  // Same
  ServiceAlertsUp1LiveServices,
  ServiceAlertsUp1ForumMessage,
  ServiceAlertsUp1ForumMessagePts,
];

export const constantSwitch: Scenario = {
  initial,
  steps: [
    // Initial state
    ...InitialStatesStepList,
    // LiveServices down (server_xbox_na, server_xbox_eu, server_ps_na, server_ps_eu)
    ...LiveServicesDown,
    // ServiceAlerts down (server_xbox_na, server_xbox_eu, server_ps_na, server_ps_eu)
    ...ServiceAlertsDown,
    // ForumMessage down (server_xbox_na, server_xbox_eu, server_ps_na, server_ps_eu)
    ...ForumMessageDown,
    // ForumMessagePts down (server_xbox_na, server_xbox_eu, server_ps_na, server_ps_eu)
    ...ForumMessagePtsDown,
    // LiveServices up (server_xbox_na, server_xbox_eu)
    ...LiveServicesUp,
    // ForumMessage up (server_xbox_na, server_xbox_eu)
    ...ForumMessageUp,
    // ForumMessagePts up (server_xbox_na, server_xbox_eu)
    ...ForumMessagePtsUp,
    // ServiceAlerts up (server_xbox_na, server_xbox_eu)
    ...ServiceAlertsUp,
    // LiveServices up (server_ps_na, server_ps_eu)
    ...LiveServicesUp1,
    // ForumMessage up (server_ps_na, server_ps_eu)
    ...ForumMessageUp1,
    // ForumMessage down (server_ps_na, server_ps_eu)
    ...ForumMessageDown1,
    // ForumMessage up (server_ps_na, server_ps_eu)
    ...ForumMessageUp2,
    // ForumMessagePts up (server_ps_na, server_ps_eu)
    ...ForumMessagePtsUp1,
    // ServiceAlerts up (server_ps_na, server_ps_eu)
    ...ServiceAlertsUp1,
  ],
};
