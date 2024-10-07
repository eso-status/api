import { EsoStatusMaintenance, EsoStatusRawData } from '@eso-status/types';

import { Initial } from '../interface/initial.interface';
import { Scenario } from '../interface/scenario.interface';
import { Step } from '../interface/step.interface';

// Initial ForumMessage
const ForumMessageServerPsNaInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '· [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_ps_na',
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'up',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: ['2024-09-18T10:00:00.000Z', '2024-09-18T16:00:00.000Z'],
  rawStatus: '[COMPLETE]',
};

const ForumMessageServerXboxEuInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '· [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_xbox_eu',
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'up',
  rawSlug: 'Xbox: NA and EU megaservers for',
  rawDate: 'September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: ['2024-09-18T10:00:00.000Z', '2024-09-18T16:00:00.000Z'],
  rawStatus: '[COMPLETE]',
};

const ForumMessageServerPsEuInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '· [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_ps_eu',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'up',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: ['2024-09-18T10:00:00.000Z', '2024-09-18T16:00:00.000Z'],
  rawStatus: '[COMPLETE]',
};

const ForumMessageServerXboxNaInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '· [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_xbox_na',
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'up',
  rawSlug: 'Xbox: NA and EU megaservers for',
  rawDate: 'September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: ['2024-09-18T10:00:00.000Z', '2024-09-18T16:00:00.000Z'],
  rawStatus: '[COMPLETE]',
};

const ForumMessageServerPcEuInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• [COMPLETE] PC/Mac: NA and EU megaservers for patch maintenance – September 16, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
  slug: 'server_pc_eu',
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'up',
  rawSlug: 'PC/Mac: NA and EU megaservers for',
  rawDate: 'September 16, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
  dates: ['2024-09-16T08:00:00.000Z', '2024-09-16T13:00:00.000Z'],
  rawStatus: '[COMPLETE]',
};

const ForumMessageServerPcNaInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• [COMPLETE] PC/Mac: NA and EU megaservers for patch maintenance – September 16, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
  slug: 'server_pc_na',
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'up',
  rawSlug: 'PC/Mac: NA and EU megaservers for',
  rawDate: 'September 16, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
  dates: ['2024-09-16T08:00:00.000Z', '2024-09-16T13:00:00.000Z'],
  rawStatus: '[COMPLETE]',
};

// Initial ForumMessagePts
const ForumMessagePtsServerPcPtsInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: 'The maintenance is complete, and the PTS is now back online and patch 10.2.1 is available.',
  slug: 'server_pc_pts',
  type: 'server',
  support: 'pc',
  zone: 'pts',
  status: 'up',
  rawSlug: 'PTS',
  rawStatus: 'complete',
};

const ForumMessagePtsServerPsNaInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '· [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_ps_na',
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'up',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: ['2024-09-18T10:00:00.000Z', '2024-09-18T16:00:00.000Z'],
  rawStatus: '[COMPLETE]',
};
const ForumMessagePtsServerXboxNaInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '· [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_xbox_na',
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'up',
  rawSlug: 'Xbox: NA and EU megaservers for',
  rawDate: 'September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: ['2024-09-18T10:00:00.000Z', '2024-09-18T16:00:00.000Z'],
  rawStatus: '[COMPLETE]',
};
const ForumMessagePtsServerPsEuInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '· [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_ps_eu',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'up',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: ['2024-09-18T10:00:00.000Z', '2024-09-18T16:00:00.000Z'],
  rawStatus: '[COMPLETE]',
};
const ForumMessagePtsServerXboxEuInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '· [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_xbox_eu',
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'up',
  rawSlug: 'Xbox: NA and EU megaservers for',
  rawDate: 'September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: ['2024-09-18T10:00:00.000Z', '2024-09-18T16:00:00.000Z'],
  rawStatus: '[COMPLETE]',
};
const ForumMessagePtsServerPcEuInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• [COMPLETE] PC/Mac: NA and EU megaservers for patch maintenance – September 16, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
  slug: 'server_pc_eu',
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'up',
  rawSlug: 'PC/Mac: NA and EU megaservers for',
  rawDate: 'September 16, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
  dates: ['2024-09-16T08:00:00.000Z', '2024-09-16T13:00:00.000Z'],
  rawStatus: '[COMPLETE]',
};
const ForumMessagePtsServerPcNaInitialRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• [COMPLETE] PC/Mac: NA and EU megaservers for patch maintenance – September 16, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
  slug: 'server_pc_na',
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'up',
  rawSlug: 'PC/Mac: NA and EU megaservers for',
  rawDate: 'September 16, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
  dates: ['2024-09-16T08:00:00.000Z', '2024-09-16T13:00:00.000Z'],
  rawStatus: '[COMPLETE]',
};

// 2024-09-27T19:58:29 => ForumMessage Xbox/PS/Pc Planned
const ForumMessageServerXboxNaPlannedRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_xbox_na',
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'planned',
  rawSlug: 'Xbox: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
};
const ForumMessageServerXboxNaPlanned: EsoStatusMaintenance = {
  rawDataList: [ForumMessageServerXboxNaPlannedRaw],
  beginnerAt: '2024-10-02T10:00:00.000Z',
  endingAt: '2024-10-02T16:00:00.000Z',
  plannedSince: '1970-01-01T00:00:00.000Z',
};

const ForumMessageServerPcNaPlannedRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
  slug: 'server_pc_na',
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'planned',
  rawSlug: 'PC/Mac: NA and EU megaservers for',
  rawDate: 'September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
  dates: ['2024-09-30T08:00:00.000Z', '2024-09-30T12:00:00.000Z'],
};
const ForumMessageServerPcNaPlanned: EsoStatusMaintenance = {
  rawDataList: [ForumMessageServerPcNaPlannedRaw],
  beginnerAt: '2024-09-30T08:00:00.000Z',
  endingAt: '2024-09-30T12:00:00.000Z',
  plannedSince: '1970-01-01T00:00:00.000Z',
};

const ForumMessageServerXboxEuPlannedRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_xbox_eu',
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'planned',
  rawSlug: 'Xbox: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
};
const ForumMessageServerXboxEuPlanned: EsoStatusMaintenance = {
  rawDataList: [ForumMessageServerXboxEuPlannedRaw],
  beginnerAt: '2024-10-02T10:00:00.000Z',
  endingAt: '2024-10-02T16:00:00.000Z',
  plannedSince: '1970-01-01T00:00:00.000Z',
};

const ForumMessageServerPsEuPlannedRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_ps_eu',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'planned',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
};
const ForumMessageServerPsEuPlanned: EsoStatusMaintenance = {
  rawDataList: [ForumMessageServerPsEuPlannedRaw],
  beginnerAt: '2024-10-02T10:00:00.000Z',
  endingAt: '2024-10-02T16:00:00.000Z',
  plannedSince: '1970-01-01T00:00:00.000Z',
};

const ForumMessageServerPcEuPlannedRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
  slug: 'server_pc_eu',
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'planned',
  rawSlug: 'PC/Mac: NA and EU megaservers for',
  rawDate: 'September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
  dates: ['2024-09-30T08:00:00.000Z', '2024-09-30T12:00:00.000Z'],
};
const ForumMessageServerPcEuPlanned: EsoStatusMaintenance = {
  rawDataList: [ForumMessageServerPcEuPlannedRaw],
  beginnerAt: '2024-09-30T08:00:00.000Z',
  endingAt: '2024-09-30T12:00:00.000Z',
  plannedSince: '1970-01-01T00:00:00.000Z',
};

const ForumMessageServerPsNaPlannedRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com',
  raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_ps_na',
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'planned',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
};
const ForumMessageServerPsNaPlanned: EsoStatusMaintenance = {
  rawDataList: [ForumMessageServerPsNaPlannedRaw],
  beginnerAt: '2024-10-02T10:00:00.000Z',
  endingAt: '2024-10-02T16:00:00.000Z',
  plannedSince: '1970-01-01T00:00:00.000Z',
};

// 2024-09-27T20:00:08 => ForumMessagePts Xbox/PS/Pc + PTS Planned
const ForumMessagePtsServerPcNaPlannedRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
  slug: 'server_pc_na',
  type: 'server',
  support: 'pc',
  zone: 'na',
  status: 'planned',
  rawSlug: 'PC/Mac: NA and EU megaservers for',
  rawDate: 'September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
  dates: ['2024-09-30T08:00:00.000Z', '2024-09-30T12:00:00.000Z'],
};
const ForumMessagePtsServerPsEuPlannedRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_ps_eu',
  type: 'server',
  support: 'ps',
  zone: 'eu',
  status: 'planned',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
};
const ForumMessagePtsServerXboxEuPlannedRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_xbox_eu',
  type: 'server',
  support: 'xbox',
  zone: 'eu',
  status: 'planned',
  rawSlug: 'Xbox: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
};
const ForumMessagePtsServerPsNaPlannedRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_ps_na',
  type: 'server',
  support: 'ps',
  zone: 'na',
  status: 'planned',
  rawSlug: 'PlayStation®: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
};
const ForumMessagePtsServerPcEuPlannedRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
  slug: 'server_pc_eu',
  type: 'server',
  support: 'pc',
  zone: 'eu',
  status: 'planned',
  rawSlug: 'PC/Mac: NA and EU megaservers for',
  rawDate: 'September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
  dates: ['2024-09-30T08:00:00.000Z', '2024-09-30T12:00:00.000Z'],
};
const ForumMessagePtsServerXboxNaPlannedRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  slug: 'server_xbox_na',
  type: 'server',
  support: 'xbox',
  zone: 'na',
  status: 'planned',
  rawSlug: 'Xbox: NA and EU megaservers for',
  rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
  dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
};

const ForumMessagePtsServerPcPtsPlannedRaw: EsoStatusRawData = {
  source: 'https://forums.elderscrollsonline.com/en/categories/pts',
  raw: 'We will be performing maintenance for patch 10.2.2 on the PTS on Monday at 8:00AM EDT (12:00 UTC).',
  slug: 'server_pc_pts',
  type: 'server',
  support: 'pc',
  zone: 'pts',
  status: 'planned',
  rawSlug: 'PTS',
  rawDate: 'Monday at 8:00AM EDT (12:00 UTC)',
  dates: ['2024-09-30T12:00:00.000Z'],
  rawStatus: 'We will be performing maintenance',
};
const ForumMessagePtsServerPcPtsPlanned: EsoStatusMaintenance = {
  rawDataList: [ForumMessagePtsServerPcPtsPlannedRaw],
  beginnerAt: '2024-09-30T12:00:00.000Z',
  plannedSince: '1970-01-01T00:00:00.000Z',
};

const initial: Initial = {
  logs: [
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
      rawData: JSON.stringify(ForumMessageServerXboxNaInitialRaw),
    },
    {
      id: 2,
      slugId: 2,
      statusId: 1,
      typeId: 1,
      supportId: 6,
      zoneId: 1,
      rawData: JSON.stringify(ForumMessageServerXboxEuInitialRaw),
    },
    {
      id: 3,
      slugId: 3,
      statusId: 1,
      typeId: 1,
      supportId: 5,
      zoneId: 2,
      rawData: JSON.stringify(ForumMessageServerPsNaInitialRaw),
    },
    {
      id: 4,
      slugId: 4,
      statusId: 1,
      typeId: 1,
      supportId: 5,
      zoneId: 1,
      rawData: JSON.stringify(ForumMessageServerPsEuInitialRaw),
    },
    {
      id: 5,
      slugId: 5,
      statusId: 1,
      typeId: 1,
      supportId: 4,
      zoneId: 2,
      rawData: JSON.stringify(ForumMessageServerPcNaInitialRaw),
    },
    {
      id: 6,
      slugId: 6,
      statusId: 1,
      typeId: 1,
      supportId: 4,
      zoneId: 1,
      rawData: JSON.stringify(ForumMessageServerPcEuInitialRaw),
    },
    {
      id: 7,
      slugId: 7,
      statusId: 1,
      typeId: 1,
      supportId: 4,
      zoneId: 3,
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsInitialRaw),
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
      rawData: ForumMessageServerXboxNaInitialRaw,
      statusSince: '1970-01-01T00:00:00.000Z',
    },
    {
      slug: 'server_xbox_eu',
      status: 'up',
      type: 'server',
      support: 'xbox',
      zone: 'eu',
      rawData: ForumMessageServerXboxEuInitialRaw,
      statusSince: '1970-01-01T00:00:00.000Z',
    },
    {
      slug: 'server_ps_na',
      status: 'up',
      type: 'server',
      support: 'ps',
      zone: 'na',
      rawData: ForumMessageServerPsNaInitialRaw,
      statusSince: '1970-01-01T00:00:00.000Z',
    },
    {
      slug: 'server_ps_eu',
      status: 'up',
      type: 'server',
      support: 'ps',
      zone: 'eu',
      rawData: ForumMessageServerPsEuInitialRaw,
      statusSince: '1970-01-01T00:00:00.000Z',
    },
    {
      slug: 'server_pc_na',
      status: 'up',
      type: 'server',
      support: 'pc',
      zone: 'na',
      rawData: ForumMessageServerPcNaInitialRaw,
      statusSince: '1970-01-01T00:00:00.000Z',
    },
    {
      slug: 'server_pc_eu',
      status: 'up',
      type: 'server',
      support: 'pc',
      zone: 'eu',
      rawData: ForumMessageServerPcEuInitialRaw,
      statusSince: '1970-01-01T00:00:00.000Z',
    },
    {
      slug: 'server_pc_pts',
      status: 'up',
      type: 'server',
      support: 'pc',
      zone: 'pts',
      rawData: ForumMessagePtsServerPcPtsInitialRaw,
      statusSince: '1970-01-01T00:00:00.000Z',
    },
  ],
};

// Initial state
const InitialStateForumMessage: Step = {
  connector: 'ForumMessage',
  connectorData: [
    ForumMessageServerPsNaInitialRaw,
    ForumMessageServerPsEuInitialRaw,
    ForumMessageServerXboxNaInitialRaw,
    ForumMessageServerXboxEuInitialRaw,
    ForumMessageServerPcNaInitialRaw,
    ForumMessageServerPcEuInitialRaw,
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
    ForumMessagePtsServerXboxNaInitialRaw,
    ForumMessagePtsServerXboxEuInitialRaw,
    ForumMessagePtsServerPcNaInitialRaw,
    ForumMessagePtsServerPcEuInitialRaw,
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
const InitialStatesStepList: Step[] = [
  InitialStateForumMessage,
  InitialStateForumMessagePts,
  // Same
  InitialStateForumMessage,
  InitialStateForumMessagePts,
  // Same
  InitialStateForumMessage,
  InitialStateForumMessagePts,
];

// ForumMessage Planned (server_pc_eu, server_pc_na, server_ps_eu, server_ps_na, server_xbox_eu, server_xbox_na)
const FirstForumMessagePlannedForumMessage: Step = {
  connector: InitialStateForumMessage.connector,
  connectorData: [
    ForumMessageServerXboxNaPlannedRaw,
    ForumMessageServerXboxEuPlannedRaw,
    ForumMessageServerPsNaPlannedRaw,
    ForumMessageServerPsEuPlannedRaw,
    ForumMessageServerPcNaPlannedRaw,
    ForumMessageServerPcEuPlannedRaw,
  ],
  statusUpdateList: [],
  maintenancePlannedList: [
    ForumMessageServerXboxNaPlanned,
    ForumMessageServerXboxEuPlanned,
    ForumMessageServerPsNaPlanned,
    ForumMessageServerPsEuPlanned,
    ForumMessageServerPcNaPlanned,
    ForumMessageServerPcEuPlanned,
  ],
  maintenanceRemovedList: [],
  logs: [
    ...initial.logs,
    {
      // created
      connector: 'ForumMessage',
      serviceId: 1,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServerXboxNaPlannedRaw),
    },
    {
      // created
      connector: 'ForumMessage',
      serviceId: 2,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServerXboxEuPlannedRaw),
    },
    {
      // created
      connector: 'ForumMessage',
      serviceId: 3,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServerPsNaPlannedRaw),
    },
    {
      // created
      connector: 'ForumMessage',
      serviceId: 4,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServerPsEuPlannedRaw),
    },
    {
      // created
      connector: 'ForumMessage',
      serviceId: 5,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServerPcNaPlannedRaw),
    },
    {
      // created
      connector: 'ForumMessage',
      serviceId: 6,
      statusId: 4,
      rawData: JSON.stringify(ForumMessageServerPcEuPlannedRaw),
    },
  ],
  archives: [
    {
      connector: initial.archives[0].connector,
      serviceId: initial.archives[0].serviceId,
      statusId: 4, // Updated from 1
      rawData: JSON.stringify(ForumMessageServerXboxNaPlannedRaw), // Updated from ForumMessageServerXboxNaInitialRaw
    },
    {
      connector: initial.archives[1].connector,
      serviceId: initial.archives[1].serviceId,
      statusId: 4, // Updated from 1
      rawData: JSON.stringify(ForumMessageServerXboxEuPlannedRaw), // Updated from ForumMessageServerXboxEuInitialRaw
    },
    {
      connector: initial.archives[2].connector,
      serviceId: initial.archives[2].serviceId,
      statusId: 4, // Updated from 1
      rawData: JSON.stringify(ForumMessageServerPsNaPlannedRaw), // Updated from ForumMessageServerPsNaInitialRaw
    },
    {
      connector: initial.archives[3].connector,
      serviceId: initial.archives[3].serviceId,
      statusId: 4, // Updated from 1
      rawData: JSON.stringify(ForumMessageServerPsEuPlannedRaw), // Updated from ForumMessageServerPsEuInitialRaw
    },
    {
      connector: initial.archives[4].connector,
      serviceId: initial.archives[4].serviceId,
      statusId: 4, // Updated from 1
      rawData: JSON.stringify(ForumMessageServerPcNaPlannedRaw), // Updated from ForumMessageServerPcNaInitialRaw
    },
    {
      connector: initial.archives[5].connector,
      serviceId: initial.archives[5].serviceId,
      statusId: 4, // Updated from 1
      rawData: JSON.stringify(ForumMessageServerPcEuPlannedRaw), // Updated from ForumMessageServerPcEuInitialRaw
    },
    initial.archives[6],
    initial.archives[7],
    initial.archives[8],
    initial.archives[9],
    initial.archives[10],
    initial.archives[11],
    initial.archives[12],
  ],
  services: initial.services,
  maintenances: [
    {
      serviceId: 1,
      beginnerAt: new Date(ForumMessageServerXboxNaPlanned.beginnerAt),
      endingAt: new Date(ForumMessageServerXboxNaPlanned.endingAt),
      rawData: JSON.stringify(ForumMessageServerXboxNaPlannedRaw),
    },
    {
      serviceId: 2,
      beginnerAt: new Date(ForumMessageServerXboxEuPlanned.beginnerAt),
      endingAt: new Date(ForumMessageServerXboxEuPlanned.endingAt),
      rawData: JSON.stringify(ForumMessageServerXboxEuPlannedRaw),
    },
    {
      serviceId: 3,
      beginnerAt: new Date(ForumMessageServerPsNaPlanned.beginnerAt),
      endingAt: new Date(ForumMessageServerPsNaPlanned.endingAt),
      rawData: JSON.stringify(ForumMessageServerPsNaPlannedRaw),
    },
    {
      serviceId: 4,
      beginnerAt: new Date(ForumMessageServerPsEuPlanned.beginnerAt),
      endingAt: new Date(ForumMessageServerPsEuPlanned.endingAt),
      rawData: JSON.stringify(ForumMessageServerPsEuPlannedRaw),
    },
    {
      serviceId: 5,
      beginnerAt: new Date(ForumMessageServerPcNaPlanned.beginnerAt),
      endingAt: new Date(ForumMessageServerPcNaPlanned.endingAt),
      rawData: JSON.stringify(ForumMessageServerPcNaPlannedRaw),
    },
    {
      serviceId: 6,
      beginnerAt: new Date(ForumMessageServerPcEuPlanned.beginnerAt),
      endingAt: new Date(ForumMessageServerPcEuPlanned.endingAt),
      rawData: JSON.stringify(ForumMessageServerPcEuPlannedRaw),
    },
  ],
  serviceControllerReturn: [
    {
      slug: initial.serviceControllerReturn[0].slug,
      status: initial.serviceControllerReturn[0].status,
      type: initial.serviceControllerReturn[0].type,
      support: initial.serviceControllerReturn[0].support,
      zone: initial.serviceControllerReturn[0].zone,
      rawData: initial.serviceControllerReturn[0].rawData,
      statusSince: '1970-01-01T00:00:00.000Z',
      maintenance: {
        rawDataList: [ForumMessageServerXboxNaPlannedRaw],
        beginnerAt: ForumMessageServerXboxNaPlannedRaw.dates[0],
        endingAt: ForumMessageServerXboxNaPlannedRaw.dates[1],
        plannedSince: '1970-01-01T00:00:00.000Z',
      },
    },
    {
      slug: initial.serviceControllerReturn[1].slug,
      status: initial.serviceControllerReturn[1].status,
      type: initial.serviceControllerReturn[1].type,
      support: initial.serviceControllerReturn[1].support,
      zone: initial.serviceControllerReturn[1].zone,
      rawData: initial.serviceControllerReturn[1].rawData,
      statusSince: '1970-01-01T00:00:00.000Z',
      maintenance: {
        rawDataList: [ForumMessageServerXboxEuPlannedRaw],
        beginnerAt: ForumMessageServerXboxEuPlannedRaw.dates[0],
        endingAt: ForumMessageServerXboxEuPlannedRaw.dates[1],
        plannedSince: '1970-01-01T00:00:00.000Z',
      },
    },
    {
      slug: initial.serviceControllerReturn[2].slug,
      status: initial.serviceControllerReturn[2].status,
      type: initial.serviceControllerReturn[2].type,
      support: initial.serviceControllerReturn[2].support,
      zone: initial.serviceControllerReturn[2].zone,
      rawData: initial.serviceControllerReturn[2].rawData,
      statusSince: '1970-01-01T00:00:00.000Z',
      maintenance: {
        rawDataList: [ForumMessageServerPsNaPlannedRaw],
        beginnerAt: ForumMessageServerPsNaPlannedRaw.dates[0],
        endingAt: ForumMessageServerPsNaPlannedRaw.dates[1],
        plannedSince: '1970-01-01T00:00:00.000Z',
      },
    },
    {
      slug: initial.serviceControllerReturn[3].slug,
      status: initial.serviceControllerReturn[3].status,
      type: initial.serviceControllerReturn[3].type,
      support: initial.serviceControllerReturn[3].support,
      zone: initial.serviceControllerReturn[3].zone,
      rawData: initial.serviceControllerReturn[3].rawData,
      statusSince: '1970-01-01T00:00:00.000Z',
      maintenance: {
        rawDataList: [ForumMessageServerPsEuPlannedRaw],
        beginnerAt: ForumMessageServerPsEuPlannedRaw.dates[0],
        endingAt: ForumMessageServerPsEuPlannedRaw.dates[1],
        plannedSince: '1970-01-01T00:00:00.000Z',
      },
    },
    {
      slug: initial.serviceControllerReturn[4].slug,
      status: initial.serviceControllerReturn[4].status,
      type: initial.serviceControllerReturn[4].type,
      support: initial.serviceControllerReturn[4].support,
      zone: initial.serviceControllerReturn[4].zone,
      rawData: initial.serviceControllerReturn[4].rawData,
      statusSince: '1970-01-01T00:00:00.000Z',
      maintenance: {
        rawDataList: [ForumMessageServerPcNaPlannedRaw],
        beginnerAt: ForumMessageServerPcNaPlannedRaw.dates[0],
        endingAt: ForumMessageServerPcNaPlannedRaw.dates[1],
        plannedSince: '1970-01-01T00:00:00.000Z',
      },
    },
    {
      slug: initial.serviceControllerReturn[5].slug,
      status: initial.serviceControllerReturn[5].status,
      type: initial.serviceControllerReturn[5].type,
      support: initial.serviceControllerReturn[5].support,
      zone: initial.serviceControllerReturn[5].zone,
      rawData: initial.serviceControllerReturn[5].rawData,
      statusSince: '1970-01-01T00:00:00.000Z',
      maintenance: {
        rawDataList: [ForumMessageServerPcEuPlannedRaw],
        beginnerAt: ForumMessageServerPcEuPlannedRaw.dates[0],
        endingAt: ForumMessageServerPcEuPlannedRaw.dates[1],
        plannedSince: '1970-01-01T00:00:00.000Z',
      },
    },
    initial.serviceControllerReturn[6],
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
const ForumMessagePlanned: Step[] = [
  FirstForumMessagePlannedForumMessage,
  ForumMessagePlannedForumMessagePts,
  // Same
  ForumMessagePlannedForumMessage,
  ForumMessagePlannedForumMessagePts,
  // Same
  ForumMessagePlannedForumMessage,
  ForumMessagePlannedForumMessagePts,
];

// ForumMessagePts Planned (server_pc_eu, server_pc_na, server_pc_pts, server_ps_eu, server_ps_na, server_xbox_eu, server_xbox_na)
const FirstForumMessagePtsPlannedForumMessagePts: Step = {
  connector: ForumMessagePlannedForumMessagePts.connector,
  connectorData: [
    ForumMessagePtsServerXboxNaPlannedRaw,
    ForumMessagePtsServerXboxEuPlannedRaw,
    ForumMessagePtsServerPsNaPlannedRaw,
    ForumMessagePtsServerPsEuPlannedRaw,
    ForumMessagePtsServerPcNaPlannedRaw,
    ForumMessagePtsServerPcEuPlannedRaw,
    ForumMessagePtsServerPcPtsPlannedRaw,
  ],
  statusUpdateList: [],
  maintenancePlannedList: [ForumMessagePtsServerPcPtsPlanned],
  maintenanceRemovedList: [],
  logs: [
    ...FirstForumMessagePlannedForumMessage.logs,
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 1,
      statusId: 4,
      rawData: JSON.stringify(ForumMessagePtsServerXboxNaPlannedRaw),
    },
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 2,
      statusId: 4,
      rawData: JSON.stringify(ForumMessagePtsServerXboxEuPlannedRaw),
    },
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 3,
      statusId: 4,
      rawData: JSON.stringify(ForumMessagePtsServerPsNaPlannedRaw),
    },
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 4,
      statusId: 4,
      rawData: JSON.stringify(ForumMessagePtsServerPsEuPlannedRaw),
    },
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 5,
      statusId: 4,
      rawData: JSON.stringify(ForumMessagePtsServerPcNaPlannedRaw),
    },
    {
      // created
      connector: 'ForumMessagePts',
      serviceId: 6,
      statusId: 4,
      rawData: JSON.stringify(ForumMessagePtsServerPcEuPlannedRaw),
    },
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
    {
      connector: FirstForumMessagePlannedForumMessage.archives[6].connector,
      serviceId: FirstForumMessagePlannedForumMessage.archives[6].serviceId,
      statusId: 4, // Updated from 1
      rawData: JSON.stringify(ForumMessagePtsServerXboxNaPlannedRaw), // Updated from ForumMessagePtsServerXboxNaInitialRaw
    },
    {
      connector: FirstForumMessagePlannedForumMessage.archives[7].connector,
      serviceId: FirstForumMessagePlannedForumMessage.archives[7].serviceId,
      statusId: 4, // Updated from 1
      rawData: JSON.stringify(ForumMessagePtsServerXboxEuPlannedRaw), // Updated from ForumMessagePtsServerXboxEuInitialRaw
    },
    {
      connector: FirstForumMessagePlannedForumMessage.archives[8].connector,
      serviceId: FirstForumMessagePlannedForumMessage.archives[8].serviceId,
      statusId: 4, // Updated from 1
      rawData: JSON.stringify(ForumMessagePtsServerPsNaPlannedRaw), // Updated from ForumMessagePtsServerPsNaInitialRaw
    },
    {
      connector: FirstForumMessagePlannedForumMessage.archives[9].connector,
      serviceId: FirstForumMessagePlannedForumMessage.archives[9].serviceId,
      statusId: 4, // Updated from 1
      rawData: JSON.stringify(ForumMessagePtsServerPsEuPlannedRaw), // Updated from ForumMessagePtsServerPsEuInitialRaw
    },
    {
      connector: FirstForumMessagePlannedForumMessage.archives[10].connector,
      serviceId: FirstForumMessagePlannedForumMessage.archives[10].serviceId,
      statusId: 4, // Updated from 1
      rawData: JSON.stringify(ForumMessagePtsServerPcNaPlannedRaw), // Updated from ForumMessagePtsServerPcNaInitialRaw
    },
    {
      connector: FirstForumMessagePlannedForumMessage.archives[11].connector,
      serviceId: FirstForumMessagePlannedForumMessage.archives[11].serviceId,
      statusId: 4, // Updated from 1
      rawData: JSON.stringify(ForumMessagePtsServerPcEuPlannedRaw), // Updated from ForumMessagePtsServerPcEuInitialRaw
    },
    {
      connector: FirstForumMessagePlannedForumMessage.archives[12].connector,
      serviceId: FirstForumMessagePlannedForumMessage.archives[12].serviceId,
      statusId: 4, // Updated from 1
      rawData: JSON.stringify(ForumMessagePtsServerPcPtsPlannedRaw), // Updated from ForumMessagePtsServerPcPtsInitialRaw
    },
  ],
  services: FirstForumMessagePlannedForumMessage.services,
  maintenances: [
    ...FirstForumMessagePlannedForumMessage.maintenances,
    {
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
      rawData:
        FirstForumMessagePlannedForumMessage.serviceControllerReturn[6].rawData,
      statusSince: '1970-01-01T00:00:00.000Z',
      maintenance: {
        rawDataList: [ForumMessagePtsServerPcPtsPlannedRaw],
        beginnerAt: ForumMessagePtsServerPcPtsPlannedRaw.dates[0],
        plannedSince: '1970-01-01T00:00:00.000Z',
      },
    },
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
const ForumMessagePtsPlanned: Step[] = [
  ForumMessagePlannedForumMessage,
  FirstForumMessagePtsPlannedForumMessagePts,
  // Same
  ForumMessagePtsPlannedForumMessage,
  ForumMessagePtsPlannedForumMessagePts,
  // Same
  ForumMessagePtsPlannedForumMessage,
  ForumMessagePtsPlannedForumMessagePts,
];

export const maintenance: Scenario = {
  initial,
  steps: [
    // Initial state
    ...InitialStatesStepList,
    // ForumMessage Planned (server_pc_eu, server_pc_na, server_ps_eu, server_ps_na, server_xbox_eu, server_xbox_na)
    ...ForumMessagePlanned,
    // ForumMessagePts Planned (server_pc_eu, server_pc_na, server_pc_pts, server_ps_eu, server_ps_na, server_xbox_eu, server_xbox_na)
    ...ForumMessagePtsPlanned,
  ],
};
