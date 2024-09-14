// import * as fs from 'node:fs';

import * as moment from 'moment';

import ScenarioClass from '../scenario/Scenario.class';
import Scenario from '../scenario/scenario.interface';

export const classicScenario: Scenario = new ScenarioClass(
  [
    {
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (XBox - US) UP',
      status: 'up',
      rawStatus: 'UP',
      slug: 'server_xbox_na',
      rawSlug: 'The Elder Scrolls Online (XBox - US)',
      type: 'server',
      support: 'xbox',
      zone: 'na',
    },
    {
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (XBox - EU) UP',
      status: 'up',
      rawStatus: 'UP',
      slug: 'server_xbox_eu',
      rawSlug: 'The Elder Scrolls Online (XBox - EU)',
      type: 'server',
      support: 'xbox',
      zone: 'eu',
    },
    {
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (PS4 - US) UP',
      status: 'up',
      rawStatus: 'UP',
      slug: 'server_ps_na',
      rawSlug: 'The Elder Scrolls Online (PS4 - US)',
      type: 'server',
      support: 'ps',
      zone: 'na',
    },
    {
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (PS4 - EU) UP',
      status: 'up',
      rawStatus: 'UP',
      slug: 'server_ps_eu',
      rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
      type: 'server',
      support: 'ps',
      zone: 'eu',
    },
    {
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (NA) UP',
      status: 'up',
      rawStatus: 'UP',
      slug: 'server_pc_na',
      rawSlug: 'The Elder Scrolls Online (NA)',
      type: 'server',
      support: 'pc',
      zone: 'na',
    },
    {
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (EU) UP',
      status: 'up',
      rawStatus: 'UP',
      slug: 'server_pc_eu',
      rawSlug: 'The Elder Scrolls Online (EU)',
      type: 'server',
      support: 'pc',
      zone: 'eu',
    },
    {
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (PTS) UP',
      status: 'up',
      rawStatus: 'UP',
      slug: 'server_pc_pts',
      rawSlug: 'The Elder Scrolls Online (PTS)',
      type: 'server',
      support: 'pc',
      zone: 'pts',
    },
  ],
  [
    {
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
      status: 'up',
      slug: 'server_xbox_na',
      rawSlug: '',
      type: 'server',
      support: 'xbox',
      zone: 'na',
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
      rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
    },
    {
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
      status: 'up',
      slug: 'server_xbox_eu',
      rawSlug: '',
      type: 'server',
      support: 'xbox',
      zone: 'eu',
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
      rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
    },
    {
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
      status: 'up',
      slug: 'server_ps_na',
      rawSlug: '',
      type: 'server',
      support: 'ps',
      zone: 'na',
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
      rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
    },
    {
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
      status: 'up',
      slug: 'server_ps_eu',
      rawSlug: '',
      type: 'server',
      support: 'ps',
      zone: 'eu',
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
      rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
    },
    {
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
      status: 'up',
      slug: 'server_pc_na',
      rawSlug: '',
      type: 'server',
      support: 'pc',
      zone: 'na',
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
      rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
    },
    {
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
      status: 'up',
      slug: 'server_pc_eu',
      rawSlug: '',
      type: 'server',
      support: 'pc',
      zone: 'eu',
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
      rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
    },
    {
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n<p>2024.08.05 - 18:00 UTC (14:00 EDT)</p>\\n\\n<p>The PTS is currently available.</p>\\n\\n',
      status: 'up',
      slug: 'server_pc_pts',
      rawSlug: '',
      type: 'server',
      support: 'pc',
      zone: 'pts',
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
      rawDate: '2024.08.05 - 18:00 UTC (14:00 EDT)',
    },
    {
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
      status: 'up',
      slug: 'service_store_eso',
      rawSlug: '',
      type: 'service',
      support: 'store',
      zone: 'eso',
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
      rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
    },
    {
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
      status: 'up',
      slug: 'service_system_account',
      rawSlug: '',
      type: 'service',
      support: 'system',
      zone: 'account',
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
      rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
    },
  ],
  [
    {
      source: 'https://forums.elderscrollsonline.com/en/categories/pts',
      raw: 'The maintenance is complete, and the PTS is now back online and patch 10.1.4 is available. ',
      status: 'up',
      slug: 'server_pc_pts',
      rawSlug: '',
      type: 'server',
      support: 'pc',
      zone: 'pts',
      dates: [],
      rawDate: '',
    },
  ],
  [
    {
      source: 'https://forums.elderscrollsonline.com/',
      raw: '· [COMPLETE] ESO Store and Account System for maintenance – August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
      status: 'up',
      slug: 'service_store_eso',
      rawSlug: '',
      type: 'service',
      support: 'store',
      zone: 'eso',
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
      rawDate: 'August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
    },
    {
      source: 'https://forums.elderscrollsonline.com/',
      raw: '· [COMPLETE] ESO Store and Account System for maintenance – August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
      status: 'up',
      slug: 'service_system_account',
      rawSlug: '',
      type: 'service',
      support: 'system',
      zone: 'account',
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
      rawDate: 'August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
    },
  ],
  [
    {
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (XBox - US) UP',
      status: 'up',
      rawStatus: 'UP',
      slug: 'server_xbox_na',
      rawSlug: 'The Elder Scrolls Online (XBox - US)',
      type: 'server',
      support: 'xbox',
      zone: 'na',
    },
    {
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (XBox - EU) UP',
      status: 'up',
      rawStatus: 'UP',
      slug: 'server_xbox_eu',
      rawSlug: 'The Elder Scrolls Online (XBox - EU)',
      type: 'server',
      support: 'xbox',
      zone: 'eu',
    },
    {
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (PS4 - US) UP',
      status: 'up',
      rawStatus: 'UP',
      slug: 'server_ps_na',
      rawSlug: 'The Elder Scrolls Online (PS4 - US)',
      type: 'server',
      support: 'ps',
      zone: 'na',
    },
    {
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (PS4 - EU) UP',
      status: 'up',
      rawStatus: 'UP',
      slug: 'server_ps_eu',
      rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
      type: 'server',
      support: 'ps',
      zone: 'eu',
    },
    {
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (NA) UP',
      status: 'up',
      rawStatus: 'UP',
      slug: 'server_pc_na',
      rawSlug: 'The Elder Scrolls Online (NA)',
      type: 'server',
      support: 'pc',
      zone: 'na',
    },
    {
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (EU) UP',
      status: 'up',
      rawStatus: 'UP',
      slug: 'server_pc_eu',
      rawSlug: 'The Elder Scrolls Online (EU)',
      type: 'server',
      support: 'pc',
      zone: 'eu',
    },
    {
      source: 'https://live-services.elderscrollsonline.com/status/realms',
      raw: 'The Elder Scrolls Online (PTS) UP',
      status: 'up',
      rawStatus: 'UP',
      slug: 'server_pc_pts',
      rawSlug: 'The Elder Scrolls Online (PTS)',
      type: 'server',
      support: 'pc',
      zone: 'pts',
    },
  ],
  [
    {
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
      status: 'up',
      slug: 'server_xbox_na',
      rawSlug: '',
      type: 'server',
      support: 'xbox',
      zone: 'na',
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
      rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
    },
    {
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
      status: 'up',
      slug: 'server_xbox_eu',
      rawSlug: '',
      type: 'server',
      support: 'xbox',
      zone: 'eu',
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
      rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
    },
    {
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
      status: 'up',
      slug: 'server_ps_na',
      rawSlug: '',
      type: 'server',
      support: 'ps',
      zone: 'na',
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
      rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
    },
    {
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
      status: 'up',
      slug: 'server_ps_eu',
      rawSlug: '',
      type: 'server',
      support: 'ps',
      zone: 'eu',
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
      rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
    },
    {
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
      status: 'up',
      slug: 'server_pc_na',
      rawSlug: '',
      type: 'server',
      support: 'pc',
      zone: 'na',
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
      rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
    },
    {
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
      status: 'up',
      slug: 'server_pc_eu',
      rawSlug: '',
      type: 'server',
      support: 'pc',
      zone: 'eu',
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
      rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
    },
    {
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n<p>2024.08.05 - 18:00 UTC (14:00 EDT)</p>\\n\\n<p>The PTS is currently available.</p>\\n\\n',
      status: 'up',
      slug: 'server_pc_pts',
      rawSlug: '',
      type: 'server',
      support: 'pc',
      zone: 'pts',
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
      rawDate: '2024.08.05 - 18:00 UTC (14:00 EDT)',
    },
    {
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
      status: 'up',
      slug: 'service_store_eso',
      rawSlug: '',
      type: 'service',
      support: 'store',
      zone: 'eso',
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
      rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
    },
    {
      source:
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
      status: 'up',
      slug: 'service_system_account',
      rawSlug: '',
      type: 'service',
      support: 'system',
      zone: 'account',
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
      rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
    },
  ],
  [],
  [],
  [
    {
      connector: 'LiveServices',
      connectorParams: {
        rawList: [
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (XBox - US) UP',
            status: 'up',
            rawStatus: 'UP',
            slug: 'server_xbox_na',
            rawSlug: 'The Elder Scrolls Online (XBox - US)',
            type: 'server',
            support: 'xbox',
            zone: 'na',
          },
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (XBox - EU) UP',
            status: 'up',
            rawStatus: 'UP',
            slug: 'server_xbox_eu',
            rawSlug: 'The Elder Scrolls Online (XBox - EU)',
            type: 'server',
            support: 'xbox',
            zone: 'eu',
          },
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (PS4 - US) UP',
            status: 'up',
            rawStatus: 'UP',
            slug: 'server_ps_na',
            rawSlug: 'The Elder Scrolls Online (PS4 - US)',
            type: 'server',
            support: 'ps',
            zone: 'na',
          },
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (PS4 - EU) UP',
            status: 'up',
            rawStatus: 'UP',
            slug: 'server_ps_eu',
            rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
            type: 'server',
            support: 'ps',
            zone: 'eu',
          },
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (NA) UP',
            status: 'up',
            rawStatus: 'UP',
            slug: 'server_pc_na',
            rawSlug: 'The Elder Scrolls Online (NA)',
            type: 'server',
            support: 'pc',
            zone: 'na',
          },
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (EU) UP',
            status: 'up',
            rawStatus: 'UP',
            slug: 'server_pc_eu',
            rawSlug: 'The Elder Scrolls Online (EU)',
            type: 'server',
            support: 'pc',
            zone: 'eu',
          },
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (PTS) UP',
            status: 'up',
            rawStatus: 'UP',
            slug: 'server_pc_pts',
            rawSlug: 'The Elder Scrolls Online (PTS)',
            type: 'server',
            support: 'pc',
            zone: 'pts',
          },
        ],
        statusUpdateList: [],
        maintenancePlannedList: [],
        maintenanceRemovedList: [],
        newLogs: [],
        changedArchives: [],
        changedServices: [],
        maintenances: [],
        changedControllerReturn: [],
      },
    }, // Initial state
    {
      connector: 'ForumMessage',
      connectorParams: {
        rawList: [
          {
            source: 'https://forums.elderscrollsonline.com/',
            raw: '· ESO Store and Account System for maintenance – August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC) - <a href="https://forums.elderscrollsonline.com/en/discussion/663391" rel="nofollow">https://forums.elderscrollsonline.com/en/discussion/663391</a>',
            status: 'planned',
            slug: 'service_store_eso',
            rawSlug: '',
            type: 'service',
            support: 'store',
            zone: 'eso',
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
            rawDate:
              'August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC) - <a href="https://forums.elderscrollsonline.com/en/discussion/663391" rel="nofollow">https://forums.elderscrollsonline.com/en/discussion/663391</a>',
          },
          {
            source: 'https://forums.elderscrollsonline.com/',
            raw: '· ESO Store and Account System for maintenance – August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC) - <a href="https://forums.elderscrollsonline.com/en/discussion/663391" rel="nofollow">https://forums.elderscrollsonline.com/en/discussion/663391</a>',
            status: 'planned',
            slug: 'service_system_account',
            rawSlug: '',
            type: 'service',
            support: 'system',
            zone: 'account',
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
            rawDate:
              'August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC) - <a href="https://forums.elderscrollsonline.com/en/discussion/663391" rel="nofollow">https://forums.elderscrollsonline.com/en/discussion/663391</a>',
          },
        ],
        statusUpdateList: [],
        maintenancePlannedList: ['service_store_eso', 'service_system_account'],
        maintenanceRemovedList: [],
        newLogs: ['service_store_eso', 'service_system_account'],
        changedArchives: ['service_store_eso', 'service_system_account'],
        changedServices: [],
        maintenances: ['service_store_eso', 'service_system_account'],
        changedControllerReturn: [
          {
            slug: 'service_store_eso',
          },
          {
            slug: 'service_system_account',
          },
        ],
      },
    }, // Forum message planned (service_store_eso, service_system_account)
    {
      connector: 'ForumMessagePts',
      connectorParams: {
        rawList: [
          {
            source: 'https://forums.elderscrollsonline.com/en/categories/pts',
            raw: 'We will be performing maintenance on the PTS on Wednesday at 4:00AM EDT (8:00 UTC). ',
            status: 'planned',
            slug: 'server_pc_pts',
            rawSlug: '',
            type: 'server',
            support: 'pc',
            zone: 'pts',
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
            rawDate: 'Wednesday at 4:00AM EDT (8:00 UTC). ',
          },
        ],
        statusUpdateList: [],
        maintenancePlannedList: ['server_pc_pts'],
        maintenanceRemovedList: [],
        newLogs: ['server_pc_pts'],
        changedArchives: ['server_pc_pts'],
        changedServices: [],
        maintenances: [
          'service_store_eso',
          'service_system_account',
          'server_pc_pts',
        ],
        changedControllerReturn: [
          {
            slug: 'server_pc_pts',
          },
        ],
      },
    }, // Forum message pts planned (server_pc_pts)
    {
      connector: 'LiveServices',
      connectorParams: {
        rawList: [
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (XBox - US) UP',
            status: 'up',
            rawStatus: 'UP',
            slug: 'server_xbox_na',
            rawSlug: 'The Elder Scrolls Online (XBox - US)',
            type: 'server',
            support: 'xbox',
            zone: 'na',
          },
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (XBox - EU) UP',
            status: 'up',
            rawStatus: 'UP',
            slug: 'server_xbox_eu',
            rawSlug: 'The Elder Scrolls Online (XBox - EU)',
            type: 'server',
            support: 'xbox',
            zone: 'eu',
          },
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (PS4 - US) UP',
            status: 'up',
            rawStatus: 'UP',
            slug: 'server_ps_na',
            rawSlug: 'The Elder Scrolls Online (PS4 - US)',
            type: 'server',
            support: 'ps',
            zone: 'na',
          },
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (PS4 - EU) UP',
            status: 'up',
            rawStatus: 'UP',
            slug: 'server_ps_eu',
            rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
            type: 'server',
            support: 'ps',
            zone: 'eu',
          },
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (NA) UP',
            status: 'up',
            rawStatus: 'UP',
            slug: 'server_pc_na',
            rawSlug: 'The Elder Scrolls Online (NA)',
            type: 'server',
            support: 'pc',
            zone: 'na',
          },
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (EU) UP',
            status: 'up',
            rawStatus: 'UP',
            slug: 'server_pc_eu',
            rawSlug: 'The Elder Scrolls Online (EU)',
            type: 'server',
            support: 'pc',
            zone: 'eu',
          },
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (PTS) DOWN',
            status: 'down',
            rawStatus: 'DOWN',
            slug: 'server_pc_pts',
            rawSlug: 'The Elder Scrolls Online (PTS)',
            type: 'server',
            support: 'pc',
            zone: 'pts',
          },
        ],
        statusUpdateList: ['server_pc_pts'],
        maintenancePlannedList: [],
        maintenanceRemovedList: ['server_pc_pts'],
        newLogs: ['server_pc_pts'],
        changedArchives: ['server_pc_pts'],
        changedServices: ['server_pc_pts'],
        maintenances: ['service_store_eso', 'service_system_account'],
        changedControllerReturn: [
          {
            slug: 'server_pc_pts',
            status: 'down',
          },
        ],
      },
    }, // Live services down (server_pc_pts)
    {
      connector: 'ForumMessage',
      connectorParams: {
        rawList: [
          {
            source: 'https://forums.elderscrollsonline.com/',
            raw: '· [IN PROGRESS] ESO Store and Account System for maintenance – August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
            status: 'down',
            slug: 'service_store_eso',
            rawSlug: '',
            type: 'service',
            support: 'store',
            zone: 'eso',
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
            rawDate:
              'August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
          },
          {
            source: 'https://forums.elderscrollsonline.com/',
            raw: '· [IN PROGRESS] ESO Store and Account System for maintenance – August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
            status: 'down',
            slug: 'service_system_account',
            rawSlug: '',
            type: 'service',
            support: 'system',
            zone: 'account',
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
            rawDate:
              'August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
          },
        ],
        statusUpdateList: ['service_store_eso', 'service_system_account'],
        maintenancePlannedList: [],
        maintenanceRemovedList: ['service_store_eso', 'service_system_account'],
        newLogs: ['service_store_eso', 'service_system_account'],
        changedArchives: ['service_store_eso', 'service_system_account'],
        changedServices: ['service_store_eso', 'service_system_account'],
        maintenances: [],
        changedControllerReturn: [
          {
            slug: 'service_store_eso',
            status: 'down',
          },
          {
            slug: 'service_system_account',
            status: 'down',
          },
        ],
      },
    }, // Forum message down (service_store_eso, service_system_account)
    {
      connector: 'ForumMessagePts',
      connectorParams: {
        rawList: [
          {
            source: 'https://forums.elderscrollsonline.com/en/categories/pts',
            raw: 'The PTS is now offline for maintenance, and is currently unavailable.',
            status: 'down',
            slug: 'server_pc_pts',
            rawSlug: '',
            type: 'server',
            support: 'pc',
            zone: 'pts',
            dates: [],
            rawDate: '',
          },
        ],
        statusUpdateList: [],
        maintenancePlannedList: [],
        maintenanceRemovedList: [],
        newLogs: ['server_pc_pts'],
        changedArchives: ['server_pc_pts'],
        changedServices: [],
        maintenances: [],
        changedControllerReturn: [],
      },
    }, // Forum message pts down (server_pc_pts)
    {
      connector: 'ServiceAlerts',
      connectorParams: {
        rawList: [
          {
            source:
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
            status: 'up',
            slug: 'server_xbox_na',
            rawSlug: '',
            type: 'server',
            support: 'xbox',
            zone: 'na',
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
            rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
          },
          {
            source:
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
            status: 'up',
            slug: 'server_xbox_eu',
            rawSlug: '',
            type: 'server',
            support: 'xbox',
            zone: 'eu',
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
            rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
          },
          {
            source:
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
            status: 'up',
            slug: 'server_ps_na',
            rawSlug: '',
            type: 'server',
            support: 'ps',
            zone: 'na',
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
            rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
          },
          {
            source:
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
            status: 'up',
            slug: 'server_ps_eu',
            rawSlug: '',
            type: 'server',
            support: 'ps',
            zone: 'eu',
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
            rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
          },
          {
            source:
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
            status: 'up',
            slug: 'server_pc_na',
            rawSlug: '',
            type: 'server',
            support: 'pc',
            zone: 'na',
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
            rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
          },
          {
            source:
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
            status: 'up',
            slug: 'server_pc_eu',
            rawSlug: '',
            type: 'server',
            support: 'pc',
            zone: 'eu',
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
            rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
          },
          {
            source:
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n<p>2024.08.05 - 14:00 UTC (10:00 EDT))</p>\\n\\n<p>The PTS is currently unavailable while we perform maintenance.</p>\\n\\n',
            status: 'down',
            slug: 'server_pc_pts',
            rawSlug: '',
            type: 'server',
            support: 'pc',
            zone: 'pts',
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
            rawDate: '2024.08.05 - 14:00 UTC (10:00 EDT))',
          },
          {
            source:
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 8:00 UTC (4:00 EDT)</p>\\n<p>The North American megaservers are currently unavailable while we perform maintenance.</p>\\n<p>The European megaservers are currently unavailable while we perform maintenance.</p>\\n<p>The PTS is currently unavailable while we perform maintenance.</p>\\n<p>The ESO store and account system are currently unavailable while we perform maintenance.</p>\\n',
            status: 'down',
            slug: 'service_store_eso',
            rawSlug: '',
            type: 'service',
            support: 'store',
            zone: 'eso',
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
            rawDate: '   2024.08.07 - 8:00 UTC (4:00 EDT)',
          },
          {
            source:
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 8:00 UTC (4:00 EDT)</p>\\n<p>The North American megaservers are currently unavailable while we perform maintenance.</p>\\n<p>The European megaservers are currently unavailable while we perform maintenance.</p>\\n<p>The PTS is currently unavailable while we perform maintenance.</p>\\n<p>The ESO store and account system are currently unavailable while we perform maintenance.</p>\\n',
            status: 'down',
            slug: 'service_system_account',
            rawSlug: '',
            type: 'service',
            support: 'system',
            zone: 'account',
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
            rawDate: '   2024.08.07 - 8:00 UTC (4:00 EDT)',
          },
        ],
        statusUpdateList: [],
        maintenancePlannedList: [],
        maintenanceRemovedList: [],
        newLogs: [
          'server_pc_pts',
          'service_store_eso',
          'service_system_account',
        ],
        changedArchives: [
          'server_pc_pts',
          'service_store_eso',
          'service_system_account',
        ],
        changedServices: [],
        maintenances: [],
        changedControllerReturn: [],
      },
    }, // Service alerts down (server_pc_pts, service_store_eso, service_system_account)
    {
      connector: 'LiveServices',
      connectorParams: {
        rawList: [
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (XBox - US) UP',
            status: 'up',
            rawStatus: 'UP',
            slug: 'server_xbox_na',
            rawSlug: 'The Elder Scrolls Online (XBox - US)',
            type: 'server',
            support: 'xbox',
            zone: 'na',
          },
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (XBox - EU) UP',
            status: 'up',
            rawStatus: 'UP',
            slug: 'server_xbox_eu',
            rawSlug: 'The Elder Scrolls Online (XBox - EU)',
            type: 'server',
            support: 'xbox',
            zone: 'eu',
          },
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (PS4 - US) UP',
            status: 'up',
            rawStatus: 'UP',
            slug: 'server_ps_na',
            rawSlug: 'The Elder Scrolls Online (PS4 - US)',
            type: 'server',
            support: 'ps',
            zone: 'na',
          },
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (PS4 - EU) UP',
            status: 'up',
            rawStatus: 'UP',
            slug: 'server_ps_eu',
            rawSlug: 'The Elder Scrolls Online (PS4 - EU)',
            type: 'server',
            support: 'ps',
            zone: 'eu',
          },
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (NA) UP',
            status: 'up',
            rawStatus: 'UP',
            slug: 'server_pc_na',
            rawSlug: 'The Elder Scrolls Online (NA)',
            type: 'server',
            support: 'pc',
            zone: 'na',
          },
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (EU) UP',
            status: 'up',
            rawStatus: 'UP',
            slug: 'server_pc_eu',
            rawSlug: 'The Elder Scrolls Online (EU)',
            type: 'server',
            support: 'pc',
            zone: 'eu',
          },
          {
            source:
              'https://live-services.elderscrollsonline.com/status/realms',
            raw: 'The Elder Scrolls Online (PTS) UP',
            status: 'up',
            rawStatus: 'UP',
            slug: 'server_pc_pts',
            rawSlug: 'The Elder Scrolls Online (PTS)',
            type: 'server',
            support: 'pc',
            zone: 'pts',
          },
        ],
        statusUpdateList: ['server_pc_pts'],
        maintenancePlannedList: [],
        maintenanceRemovedList: [],
        newLogs: ['server_pc_pts'],
        changedArchives: ['server_pc_pts'],
        changedServices: ['server_pc_pts'],
        maintenances: [],
        changedControllerReturn: [
          {
            slug: 'server_pc_pts',
            status: 'up',
          },
        ],
      },
    }, // Live services up (server_pc_pts)
    {
      connector: 'ForumMessage',
      connectorParams: {
        rawList: [
          {
            source: 'https://forums.elderscrollsonline.com/',
            raw: '· [COMPLETE] ESO Store and Account System for maintenance – August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
            status: 'up',
            slug: 'service_store_eso',
            rawSlug: '',
            type: 'service',
            support: 'store',
            zone: 'eso',
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
            rawDate:
              'August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
          },
          {
            source: 'https://forums.elderscrollsonline.com/',
            raw: '· [COMPLETE] ESO Store and Account System for maintenance – August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
            status: 'up',
            slug: 'service_system_account',
            rawSlug: '',
            type: 'service',
            support: 'system',
            zone: 'account',
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
            rawDate:
              'August 7, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
          },
        ],
        statusUpdateList: ['service_store_eso', 'service_system_account'],
        maintenancePlannedList: [],
        maintenanceRemovedList: [],
        newLogs: ['service_store_eso', 'service_system_account'],
        changedArchives: ['service_store_eso', 'service_system_account'],
        changedServices: ['service_store_eso', 'service_system_account'],
        maintenances: [],
        changedControllerReturn: [
          {
            slug: 'service_store_eso',
            status: 'up',
          },
          {
            slug: 'service_system_account',
            status: 'up',
          },
        ],
      },
    }, // Forum message up (service_store_eso, service_system_account)
    {
      connector: 'ForumMessagePts',
      connectorParams: {
        rawList: [
          {
            source: 'https://forums.elderscrollsonline.com/en/categories/pts',
            raw: 'The maintenance is complete, and the PTS is now back online and patch 10.1.4 is available. ',
            status: 'up',
            slug: 'server_pc_pts',
            rawSlug: '',
            type: 'server',
            support: 'pc',
            zone: 'pts',
            dates: [],
            rawDate: '',
          },
        ],
        statusUpdateList: [],
        maintenancePlannedList: [],
        maintenanceRemovedList: [],
        newLogs: ['server_pc_pts'],
        changedArchives: ['server_pc_pts'],
        changedServices: [],
        maintenances: [],
        changedControllerReturn: [],
      },
    }, // Forum message pts up (server_pc_pts)
    {
      connector: 'ServiceAlerts',
      connectorParams: {
        rawList: [
          {
            source:
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
            status: 'up',
            slug: 'server_xbox_na',
            rawSlug: '',
            type: 'server',
            support: 'xbox',
            zone: 'na',
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
            rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
          },
          {
            source:
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
            status: 'up',
            slug: 'server_xbox_eu',
            rawSlug: '',
            type: 'server',
            support: 'xbox',
            zone: 'eu',
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
            rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
          },
          {
            source:
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
            status: 'up',
            slug: 'server_ps_na',
            rawSlug: '',
            type: 'server',
            support: 'ps',
            zone: 'na',
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
            rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
          },
          {
            source:
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
            status: 'up',
            slug: 'server_ps_eu',
            rawSlug: '',
            type: 'server',
            support: 'ps',
            zone: 'eu',
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
            rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
          },
          {
            source:
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
            status: 'up',
            slug: 'server_pc_na',
            rawSlug: '',
            type: 'server',
            support: 'pc',
            zone: 'na',
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
            rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
          },
          {
            source:
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
            status: 'up',
            slug: 'server_pc_eu',
            rawSlug: '',
            type: 'server',
            support: 'pc',
            zone: 'eu',
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
            rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
          },
          {
            source:
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n<p>2024.08.05 - 18:00 UTC (14:00 EDT)</p>\\n\\n<p>The PTS is currently available.</p>\\n\\n',
            status: 'up',
            slug: 'server_pc_pts',
            rawSlug: '',
            type: 'server',
            support: 'pc',
            zone: 'pts',
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
            rawDate: '2024.08.05 - 18:00 UTC (14:00 EDT)',
          },
          {
            source:
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
            status: 'up',
            slug: 'service_store_eso',
            rawSlug: '',
            type: 'service',
            support: 'store',
            zone: 'eso',
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
            rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
          },
          {
            source:
              'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
            raw: '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\\n   <p>2024.08.07 - 15:45 UTC (11:45 EDT)</p>\\n<p>The North American megaservers are currently available.</p>\\n<p>The European megaservers are currently available.</p>\\n<p>The PTS is currently available.</p>\\n<p>The ESO store and account system are currently available.</p>\\n',
            status: 'up',
            slug: 'service_system_account',
            rawSlug: '',
            type: 'service',
            support: 'system',
            zone: 'account',
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
            rawDate: '   2024.08.07 - 15:45 UTC (11:45 EDT)',
          },
        ],
        statusUpdateList: [],
        maintenancePlannedList: [],
        maintenanceRemovedList: [],
        newLogs: [
          'server_pc_pts',
          'service_store_eso',
          'service_system_account',
        ],
        changedArchives: [
          'server_pc_pts',
          'service_store_eso',
          'service_system_account',
        ],
        changedServices: [],
        maintenances: [],
        changedControllerReturn: [],
      },
    }, // Service alerts up (server_pc_pts, service_store_eso, service_system_account)
  ],
).generate();

// fs.writeFile(
//   'classicScenarioTest.json',
//   JSON.stringify(classicScenarioTest, null, '\t'),
//   (error: any): void => {
//     console.log(error);
//   },
// );
