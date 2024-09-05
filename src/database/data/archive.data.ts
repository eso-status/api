import { EsoStatusRawData } from '@eso-status/types';
import * as moment from 'moment';

import { Archive } from '../../resource/archive/entities/archive.entity';

export const archiveData: Archive[] = [
  {
    id: 1,
    connector: 'ForumMessage',
    serviceId: 1,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/',
      raw: '• [IN PROGRESS] Xbox: NA megaserver for maintenance – August 3, 5:00PM EDT (21:00 UTC) - 7:00PM EDT (23:00 UTC)',
      slug: 'server_xbox_na',
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
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (XBox - US) UP',
      rawSlug: 'The Elder Scrolls Online (XBox - US)',
      rawStatus: 'UP',
      slug: 'server_xbox_na',
      support: 'xbox',
      zone: 'na',
      status: 'up',
    }),
  },
  {
    id: 3,
    connector: 'ServiceAlerts',
    serviceId: 1,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: ' />\n  <p>2024.07.24 - 15:35 UTC (11:35 EDT)</p>\n<p>The North American Xbox megaserver is currently available.</p>\n<p>The European Xbox megaserver is currently available.</p>\n<p>The North American PlayStation® megaserver is currently available.</p>\n<p>The European PlayStation® megaserver is currently available.</p>\n',
      rawDate: ' />  2024.07.24 - 15:35 UTC (11:35 EDT)',
      slug: 'server_xbox_na',
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
    }),
  },
  {
    id: 4,
    connector: 'ForumMessage',
    serviceId: 2,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/',
      raw: '• [IN PROGRESS] Xbox: EU megaserver for maintenance – February 16 , 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
      slug: 'server_xbox_eu',
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
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (XBox - EU) UP',
      rawSlug: 'The Elder Scrolls Online (XBox - EU)',
      rawStatus: 'UP',
      slug: 'server_xbox_eu',
      support: 'xbox',
      zone: 'eu',
      status: 'up',
    }),
  },
  {
    id: 6,
    connector: 'ServiceAlerts',
    serviceId: 2,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: ' />\n  <p>2024.07.24 - 15:35 UTC (11:35 EDT)</p>\n<p>The North American Xbox megaserver is currently available.</p>\n<p>The European Xbox megaserver is currently available.</p>\n<p>The North American PlayStation® megaserver is currently available.</p>\n<p>The European PlayStation® megaserver is currently available.</p>\n',
      rawDate: ' />  2024.07.24 - 15:35 UTC (11:35 EDT)',
      slug: 'server_xbox_eu',
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
    }),
  },
  {
    id: 7,
    connector: 'ForumMessage',
    serviceId: 3,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/',
      raw: '• [IN PROGRESS] PlayStation®: NA megaserver for maintenance – January 19, 2:00AM EST (7:00 UTC) – 12:00PM EST (17:00 UTC)',
      slug: 'server_ps_na',
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
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (PS4 - US) UP',
      rawSlug: 'The Elder Scrolls Online (PS4 - US)',
      rawStatus: 'UP',
      slug: 'server_ps_na',
      support: 'ps',
      zone: 'na',
      status: 'up',
    }),
  },
  {
    id: 9,
    connector: 'ServiceAlerts',
    serviceId: 3,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: ' />\n  <p>2024.07.24 - 15:35 UTC (11:35 EDT)</p>\n<p>The North American Xbox megaserver is currently available.</p>\n<p>The European Xbox megaserver is currently available.</p>\n<p>The North American PlayStation® megaserver is currently available.</p>\n<p>The European PlayStation® megaserver is currently available.</p>\n',
      rawDate: ' />  2024.07.24 - 15:35 UTC (11:35 EDT)',
      slug: 'server_ps_na',
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
    }),
  },
  {
    id: 10,
    connector: 'ForumMessage',
    serviceId: 4,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/',
      raw: '• [IN PROGRESS] PlayStation®: EU megaserver for maintenance – January 19, 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
      slug: 'server_ps_eu',
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
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (PS4 - EU) UP',
      rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
      rawStatus: 'UP',
      slug: 'server_ps_eu',
      support: 'ps',
      zone: 'eu',
      status: 'up',
    }),
  },
  {
    id: 12,
    connector: 'ServiceAlerts',
    serviceId: 4,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: ' />\n  <p>2024.07.24 - 15:35 UTC (11:35 EDT)</p>\n<p>The North American Xbox megaserver is currently available.</p>\n<p>The European Xbox megaserver is currently available.</p>\n<p>The North American PlayStation® megaserver is currently available.</p>\n<p>The European PlayStation® megaserver is currently available.</p>\n',
      rawDate: ' />  2024.07.24 - 15:35 UTC (11:35 EDT)',
      slug: 'server_ps_eu',
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
    }),
  },
  {
    id: 13,
    connector: 'ForumMessage',
    serviceId: 5,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/',
      raw: '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
      slug: 'server_pc_na',
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
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (NA) UP',
      rawSlug: 'The Elder Scrolls Online (NA)',
      rawStatus: 'UP',
      slug: 'server_pc_na',
      support: 'pc',
      zone: 'na',
      status: 'up',
    }),
  },
  {
    id: 15,
    connector: 'ServiceAlerts',
    serviceId: 5,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: ' />\n<p>2024.07.22 - 12:10 UTC (8:10 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
      rawDate: ' />2024.07.22 - 12:10 UTC (8:10 EDT)',
      slug: 'server_pc_na',
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
    }),
  },
  {
    id: 16,
    connector: 'ForumMessage',
    serviceId: 6,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/',
      raw: '• [IN PROGRESS] PC/Mac: EU megaserver for maintenance – September 14, 3:00AM EDT (7:00 UTC) – 10:00AM EDT (14:00 UTC)',
      slug: 'server_pc_eu',
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
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (EU) UP',
      rawSlug: 'The Elder Scrolls Online (EU)',
      rawStatus: 'UP',
      slug: 'server_pc_eu',
      support: 'pc',
      zone: 'eu',
      status: 'up',
    }),
  },
  {
    id: 18,
    connector: 'ServiceAlerts',
    serviceId: 6,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: ' />\n<p>2024.07.22 - 12:10 UTC (8:10 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
      rawDate: ' />2024.07.22 - 12:10 UTC (8:10 EDT)',
      slug: 'server_pc_eu',
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
    }),
  },
  {
    id: 19,
    connector: 'ForumMessage',
    serviceId: 7,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/',
      raw: 'The PTS is now offline for the patch 7.1.1 maintenance and is currently unavailable. ',
      slug: 'server_pc_pts',
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
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (PTS) UP',
      rawSlug: 'The Elder Scrolls Online (PTS)',
      rawStatus: 'UP',
      slug: 'server_pc_pts',
      support: 'pc',
      zone: 'pts',
      status: 'up',
    }),
  },
  {
    id: 21,
    connector: 'ServiceAlerts',
    serviceId: 7,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\n<p>2024.07.29 - 18:00 UTC (14:00 EDT)</p>\n\n<p>The PTS is currently available.</p>\n\n',
      rawDate: '2024.07.29 - 18:00 UTC (14:00 EDT)',
      slug: 'server_pc_pts',
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
    }),
  },
  {
    id: 22,
    connector: 'ForumMessage',
    serviceId: 8,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/',
      raw: '• [IN PROGRESS] ESO Website for maintenance – December 8, 7:00AM EST (12:00 UTC) - 3:00PM EST (20:00 UTC)',
      slug: 'service_web_site',
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
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: ' />\n<p>2021.01.14 - 14:45 UTC (9:45 EST)</p>\n\n<p>The ESO Website is currently online.</p>\n\n',
      rawDate: ' />2021.01.14 - 14:45 UTC (9:45 EST)',
      slug: 'service_web_site',
      dates: [
        moment()
          .utc()
          .set('years', 2021)
          .set('months', 1)
          .set('date', 14)
          .set('hours', 14)
          .set('minutes', 45)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'service',
      support: 'web',
      zone: 'site',
      status: 'up',
    }),
  },
  {
    id: 24,
    connector: 'ServiceAlerts',
    serviceId: 9,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: ' />\n<p>2021.01.03 - 23:00 UTC (18:00 EST)</p>\n\n<p>The ESO Forums are currently available.</p>\n\n',
      rawDate: ' />2021.01.03 - 23:00 UTC (18:00 EST)',
      slug: 'service_web_forum',
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
      status: 'up',
    }),
  },
  {
    id: 25,
    connector: 'ServiceAlerts',
    serviceId: 10,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: ' />\n<p>2021.01.03 - 23:00 UTC (18:00 EST)</p>\n\n<p>The Crown Store is currently available.</p>\n\n',
      rawDate: ' />2021.01.03 - 23:00 UTC (18:00 EST)',
      slug: 'service_store_crown',
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
      status: 'up',
    }),
  },
  {
    id: 26,
    connector: 'ForumMessage',
    serviceId: 11,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/',
      raw: '• [IN PROGRESS] ESO Store for maintenance – January 27, 2:30PM EST (19:30 UTC) – 3:30PM EST (20:30 UTC)',
      slug: 'service_store_eso',
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
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: ' />\n<p>2024.07.01 - 12:00 UTC (08:00 EDT)</p>\n\n<p>The North American megaservers are currently available.</p>\n\n<p>The ESO store and account system are currently available.</p>\n\n',
      rawDate: ' />2024.07.01 - 12:00 UTC (08:00 EDT)',
      slug: 'service_store_eso',
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
    }),
  },
  {
    id: 28,
    connector: 'ForumMessage',
    serviceId: 12,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/',
      raw: '• [IN PROGRESS] ESO Store and Account System for maintenance – July 23, 8:00AM EDT (12:00 UTC) – 12:00PM EDT (16:00 UTC)',
      slug: 'service_system_account',
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
    statusId: 1,

    rawData: JSON.stringify(<EsoStatusRawData>{
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: ' />\n<p>2024.07.01 - 12:00 UTC (08:00 EDT)</p>\n\n<p>The North American megaservers are currently available.</p>\n\n<p>The ESO store and account system are currently available.</p>\n\n',
      rawDate: ' />2024.07.01 - 12:00 UTC (08:00 EDT)',
      slug: 'service_system_account',
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
    }),
  },
  {
    id: 30,
    connector: 'ForumMessagePts',
    serviceId: 1,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/en/categories/pts',
      raw: '• [IN PROGRESS] Xbox: NA megaserver for maintenance – August 3, 5:00PM EDT (21:00 UTC) - 7:00PM EDT (23:00 UTC)',
      slug: 'server_xbox_na',
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
    id: 31,
    connector: 'ForumMessagePts',
    serviceId: 2,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/en/categories/pts',
      raw: '• [IN PROGRESS] Xbox: EU megaserver for maintenance – February 16 , 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
      slug: 'server_xbox_eu',
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
    id: 32,
    connector: 'ForumMessagePts',
    serviceId: 3,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/en/categories/pts',
      raw: '• [IN PROGRESS] PlayStation®: NA megaserver for maintenance – January 19, 2:00AM EST (7:00 UTC) – 12:00PM EST (17:00 UTC)',
      slug: 'server_ps_na',
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
    id: 33,
    connector: 'ForumMessagePts',
    serviceId: 4,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/en/categories/pts',
      raw: '• [IN PROGRESS] PlayStation®: EU megaserver for maintenance – January 19, 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
      slug: 'server_ps_eu',
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
    id: 34,
    connector: 'ForumMessagePts',
    serviceId: 5,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/en/categories/pts',
      raw: '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
      slug: 'server_pc_na',
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
    id: 35,
    connector: 'ForumMessagePts',
    serviceId: 6,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/en/categories/pts',
      raw: '• [IN PROGRESS] PC/Mac: EU megaserver for maintenance – September 14, 3:00AM EDT (7:00 UTC) – 10:00AM EDT (14:00 UTC)',
      slug: 'server_pc_eu',
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
    id: 36,
    connector: 'ForumMessagePts',
    serviceId: 7,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/en/categories/pts',
      raw: 'The PTS is now offline for the patch 7.1.1 maintenance and is currently unavailable. ',
      slug: 'server_pc_pts',
      rawDate: '',
      dates: [],
      type: 'server',
      support: 'pc',
      zone: 'pts',
      status: 'down',
    }),
  },
  {
    id: 37,
    connector: 'ForumMessagePts',
    serviceId: 8,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/en/categories/pts',
      raw: '• [IN PROGRESS] ESO Website for maintenance – December 8, 7:00AM EST (12:00 UTC) - 3:00PM EST (20:00 UTC)',
      slug: 'service_web_site',
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
    id: 38,
    connector: 'ForumMessagePts',
    serviceId: 11,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/en/categories/pts',
      raw: '• [IN PROGRESS] ESO Store for maintenance – January 27, 2:30PM EST (19:30 UTC) – 3:30PM EST (20:30 UTC)',
      slug: 'service_store_eso',
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
    id: 39,
    connector: 'ForumMessagePts',
    serviceId: 12,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/en/categories/pts',
      raw: '• [IN PROGRESS] ESO Store and Account System for maintenance – July 23, 8:00AM EDT (12:00 UTC) – 12:00PM EDT (16:00 UTC)',
      slug: 'service_system_account',
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
];
