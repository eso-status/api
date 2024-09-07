import { EsoStatus, RawEsoStatus } from '@eso-status/types';

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
  connector: InitialStateLiveServices.connector,
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
  maintenanceRemovedList: [],
  logs: [
    ...InitialStateLiveServices.logs,
    {
      // created
      connector: 'LiveServices',
      serviceId: 7,
      statusId: 2,
      rawData: JSON.stringify(LiveServicesServerPcPtsDownRaw),
    },
  ],
  archives: [
    InitialStateLiveServices.archives[0],
    InitialStateLiveServices.archives[1],
    InitialStateLiveServices.archives[2],
    InitialStateLiveServices.archives[3],
    InitialStateLiveServices.archives[4],
    InitialStateLiveServices.archives[5],
    {
      connector: InitialStateLiveServices.archives[6].connector,
      serviceId: InitialStateLiveServices.archives[6].serviceId,
      statusId: 2, // Updated from 1
      rawData: JSON.stringify(LiveServicesServerPcPtsDownRaw), // Updated from LiveServicesServerPcPtsUpRaw
    },
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
    InitialStateLiveServices.archives[17],
    InitialStateLiveServices.archives[18],
  ],
  services: [
    InitialStateLiveServices.services[0],
    InitialStateLiveServices.services[1],
    InitialStateLiveServices.services[2],
    InitialStateLiveServices.services[3],
    InitialStateLiveServices.services[4],
    InitialStateLiveServices.services[5],
    {
      id: InitialStateLiveServices.services[6].id,
      slugId: InitialStateLiveServices.services[6].slugId,
      statusId: 2, // Updated from 1
      typeId: InitialStateLiveServices.services[6].typeId,
      supportId: InitialStateLiveServices.services[6].supportId,
      zoneId: InitialStateLiveServices.services[6].zoneId,
      rawData: JSON.stringify(LiveServicesServerPcPtsDownRaw), // Updated from LiveServicesServerPcPtsUpRaw
    },
    InitialStateLiveServices.services[7],
    InitialStateLiveServices.services[8],
  ],
  maintenances: [],
  serviceControllerReturn: [
    InitialStateLiveServices.serviceControllerReturn[0],
    InitialStateLiveServices.serviceControllerReturn[1],
    InitialStateLiveServices.serviceControllerReturn[2],
    InitialStateLiveServices.serviceControllerReturn[3],
    InitialStateLiveServices.serviceControllerReturn[4],
    InitialStateLiveServices.serviceControllerReturn[5],
    {
      slug: InitialStateLiveServices.serviceControllerReturn[6].slug,
      status: 'down', // Updated from up
      type: InitialStateLiveServices.serviceControllerReturn[6].type,
      support: InitialStateLiveServices.serviceControllerReturn[6].support,
      zone: InitialStateLiveServices.serviceControllerReturn[6].zone,
      raw: LiveServicesServerPcPtsDownRawStringDate, // Updated from LiveServicesServerPcPtsUpRawStringDate
    },
    InitialStateLiveServices.serviceControllerReturn[7],
    InitialStateLiveServices.serviceControllerReturn[8],
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

// Live services up (server_pc_pts)
// connectorData => changed
// statusUpdateList => emitted for server_pc_pts
// log => created for server_pc_pts
// archive => updated (statusId and rawData) for server_pc_pts
// service => updated (statusId and rawData) for server_pc_pts
// serviceControllerReturn => updated (statusId and raw) for server_pc_pts
const FirstLiveServicesUpLiveServices: Step = {
  connector: LiveServicesDownLiveServices.connector,
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
    ...LiveServicesDownLiveServices.logs,
    {
      // created
      connector: 'LiveServices',
      serviceId: 7,
      statusId: 1,
      rawData: JSON.stringify(LiveServicesServerPcPtsUpRaw),
    },
  ],
  archives: [
    LiveServicesDownLiveServices.archives[0],
    LiveServicesDownLiveServices.archives[1],
    LiveServicesDownLiveServices.archives[2],
    LiveServicesDownLiveServices.archives[3],
    LiveServicesDownLiveServices.archives[4],
    LiveServicesDownLiveServices.archives[5],
    {
      connector: LiveServicesDownLiveServices.archives[6].connector,
      serviceId: LiveServicesDownLiveServices.archives[6].serviceId,
      statusId: 1, // Updated from 2
      rawData: JSON.stringify(LiveServicesServerPcPtsUpRaw), // Updated from LiveServicesServerPcPtsDownRaw
    },
    LiveServicesDownLiveServices.archives[7],
    LiveServicesDownLiveServices.archives[8],
    LiveServicesDownLiveServices.archives[9],
    LiveServicesDownLiveServices.archives[10],
    LiveServicesDownLiveServices.archives[11],
    LiveServicesDownLiveServices.archives[12],
    LiveServicesDownLiveServices.archives[13],
    LiveServicesDownLiveServices.archives[14],
    LiveServicesDownLiveServices.archives[15],
    LiveServicesDownLiveServices.archives[16],
    LiveServicesDownLiveServices.archives[17],
    LiveServicesDownLiveServices.archives[18],
  ],
  services: [
    LiveServicesDownLiveServices.services[0],
    LiveServicesDownLiveServices.services[1],
    LiveServicesDownLiveServices.services[2],
    LiveServicesDownLiveServices.services[3],
    LiveServicesDownLiveServices.services[4],
    LiveServicesDownLiveServices.services[5],
    {
      id: LiveServicesDownLiveServices.services[6].id,
      slugId: LiveServicesDownLiveServices.services[6].slugId,
      statusId: 1, // Updated from 2
      typeId: LiveServicesDownLiveServices.services[6].typeId,
      supportId: LiveServicesDownLiveServices.services[6].supportId,
      zoneId: LiveServicesDownLiveServices.services[6].zoneId,
      rawData: JSON.stringify(LiveServicesServerPcPtsUpRaw), // Updated from LiveServicesServerPcPtsDownRaw
    },
    LiveServicesDownLiveServices.services[7],
    LiveServicesDownLiveServices.services[8],
  ],
  maintenances: LiveServicesDownLiveServices.maintenances,
  serviceControllerReturn: [
    LiveServicesDownLiveServices.serviceControllerReturn[0],
    LiveServicesDownLiveServices.serviceControllerReturn[1],
    LiveServicesDownLiveServices.serviceControllerReturn[2],
    LiveServicesDownLiveServices.serviceControllerReturn[3],
    LiveServicesDownLiveServices.serviceControllerReturn[4],
    LiveServicesDownLiveServices.serviceControllerReturn[5],
    {
      slug: LiveServicesDownLiveServices.serviceControllerReturn[6].slug,
      status: 'up', // Updated from down
      type: LiveServicesDownLiveServices.serviceControllerReturn[6].type,
      support: LiveServicesDownLiveServices.serviceControllerReturn[6].support,
      zone: LiveServicesDownLiveServices.serviceControllerReturn[6].zone,
      raw: LiveServicesServerPcPtsUpRawStringDate, // Updated from LiveServicesServerPcPtsDownRawStringDate
    },
    LiveServicesDownLiveServices.serviceControllerReturn[7],
    LiveServicesDownLiveServices.serviceControllerReturn[8],
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

const InitialStatesStepList: Step[] = [
  // Initial state
  InitialStateLiveServices,
  // Same
  InitialStateLiveServices,
  // Same
  InitialStateLiveServices,
  // Same
  InitialStateLiveServices,
];
const LiveServicesDownStepList: Step[] = [
  // Live services down (server_pc_pts)
  FirstLiveServicesDownLiveServices,
  // Same
  LiveServicesDownLiveServices,
  // Same
  LiveServicesDownLiveServices,
  // Same
  LiveServicesDownLiveServices,
];
const LiveServicesUpStepList: Step[] = [
  // Live services up (server_pc_pts)
  FirstLiveServicesUpLiveServices,
  // Same
  LiveServicesUpLiveServices,
  // Same
  LiveServicesUpLiveServices,
  // Same
  LiveServicesUpLiveServices,
];

export const classicScenario: Scenario = {
  initial,
  steps: [
    // Initial state
    ...InitialStatesStepList,
    // Live services down (server_pc_pts)
    ...LiveServicesDownStepList,
    // Live services up (server_pc_pts)
    ...LiveServicesUpStepList,
  ],
};
