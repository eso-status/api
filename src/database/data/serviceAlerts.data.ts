import { EsoStatus, RawEsoStatus } from '@eso-status/types';
import * as moment from 'moment';

export const rawServiceAlertEsoStatusList: RawEsoStatus[] = [
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
    ],
    raw: [
      '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\n  <p>2024.07.24 - 10:00 UTC (6:00 EDT)</p>\n<p>The North American Xbox megaserver is currently unavailable while we perform maintenance. </p>\n<p>The European Xbox megaserver is currently unavailable while we perform maintenance.</p>\n<p>The North American PlayStation® megaserver is currently unavailable while we perform maintenance. </p>\n<p>The European PlayStation® megaserver is currently unavailable while we perform maintenance.</p>\n',
    ],
    rawDate: '  2024.07.24 - 10:00 UTC (6:00 EDT)',
    rawData:
      'The North American Xbox megaserver is currently unavailable while we perform maintenance. ',
    slugs: ['server_xbox_na'],
    dates: [
      moment()
        .utc()
        .set('years', 2024)
        .set('months', 8)
        .set('date', 24)
        .set('hours', 10)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
    ],
    type: 'server',
    support: 'xbox',
    zone: 'na',
    status: 'down',
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
    ],
    raw: [
      '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\n  <p>2024.07.24 - 10:00 UTC (6:00 EDT)</p>\n<p>The North American Xbox megaserver is currently unavailable while we perform maintenance. </p>\n<p>The European Xbox megaserver is currently unavailable while we perform maintenance.</p>\n<p>The North American PlayStation® megaserver is currently unavailable while we perform maintenance. </p>\n<p>The European PlayStation® megaserver is currently unavailable while we perform maintenance.</p>\n',
    ],
    rawDate: '  2024.07.24 - 10:00 UTC (6:00 EDT)',
    rawData:
      'The European Xbox megaserver is currently unavailable while we perform maintenance.',
    slugs: ['server_xbox_eu'],
    dates: [
      moment()
        .utc()
        .set('years', 2024)
        .set('months', 8)
        .set('date', 24)
        .set('hours', 10)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
    ],
    type: 'server',
    support: 'xbox',
    zone: 'eu',
    status: 'down',
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
    ],
    raw: [
      ' />\n  <p>2024.07.15 - 21:00 UTC (17:00 EDT)</p>\n\n<p>The PTS is currently available.</p>\n\n',
    ],
    rawDate: ' />  2024.07.15 - 21:00 UTC (17:00 EDT)',
    rawData: 'The PTS is currently available.',
    slugs: ['server_pc_pts'],
    dates: [
      moment()
        .utc()
        .set('years', 2024)
        .set('months', 8)
        .set('date', 15)
        .set('hours', 21)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
    ],
    type: 'server',
    support: 'pc',
    zone: 'pts',
    status: 'up',
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
    ],
    raw: [
      '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\n  <p>2024.07.24 - 10:00 UTC (6:00 EDT)</p>\n<p>The North American Xbox megaserver is currently unavailable while we perform maintenance. </p>\n<p>The European Xbox megaserver is currently unavailable while we perform maintenance.</p>\n<p>The North American PlayStation® megaserver is currently unavailable while we perform maintenance. </p>\n<p>The European PlayStation® megaserver is currently unavailable while we perform maintenance.</p>\n',
    ],
    rawDate: '  2024.07.24 - 10:00 UTC (6:00 EDT)',
    rawData:
      'The North American PlayStation® megaserver is currently unavailable while we perform maintenance. ',
    slugs: ['server_ps_na'],
    dates: [
      moment()
        .utc()
        .set('years', 2024)
        .set('months', 8)
        .set('date', 24)
        .set('hours', 10)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
    ],
    type: 'server',
    support: 'ps',
    zone: 'na',
    status: 'down',
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
    ],
    raw: [
      '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\n  <p>2024.07.24 - 10:00 UTC (6:00 EDT)</p>\n<p>The North American Xbox megaserver is currently unavailable while we perform maintenance. </p>\n<p>The European Xbox megaserver is currently unavailable while we perform maintenance.</p>\n<p>The North American PlayStation® megaserver is currently unavailable while we perform maintenance. </p>\n<p>The European PlayStation® megaserver is currently unavailable while we perform maintenance.</p>\n',
    ],
    rawDate: '  2024.07.24 - 10:00 UTC (6:00 EDT)',
    rawData:
      'The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
    slugs: ['server_ps_eu'],
    dates: [
      moment()
        .utc()
        .set('years', 2024)
        .set('months', 8)
        .set('date', 24)
        .set('hours', 10)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
    ],
    type: 'server',
    support: 'ps',
    zone: 'eu',
    status: 'down',
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
    ],
    raw: [
      ' />\n  \n<p>2024.07.09 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
    ],
    rawDate: ' />  2024.07.09 - 12:15 UTC (08:15 EDT)',
    rawData: 'The North American PC/Mac megaserver is currently available.',
    slugs: ['server_pc_na'],
    dates: [
      moment()
        .utc()
        .set('years', 2024)
        .set('months', 8)
        .set('date', 9)
        .set('hours', 12)
        .set('minutes', 15)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
    ],
    type: 'server',
    support: 'pc',
    zone: 'na',
    status: 'up',
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
    ],
    raw: [
      ' />\n  \n<p>2024.07.09 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
    ],
    rawDate: ' />  2024.07.09 - 12:15 UTC (08:15 EDT)',
    rawData: 'The European PC/Mac megaserver is currently available.',
    slugs: ['server_pc_eu'],
    dates: [
      moment()
        .utc()
        .set('years', 2024)
        .set('months', 8)
        .set('date', 9)
        .set('hours', 12)
        .set('minutes', 15)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
    ],
    type: 'server',
    support: 'pc',
    zone: 'eu',
    status: 'up',
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
    ],
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
        .set('months', 8)
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
  },
  {
    sources: [
      'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
    ],
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
        .set('months', 8)
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
  },
];

export const serviceAlertEsoStatusList: EsoStatus[] = [
  {
    slug: 'server_xbox_na',
    status: 'down',
    type: 'server',
    support: 'xbox',
    zone: 'na',
    raw: {
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
      raw: [
        '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\n  <p>2024.07.24 - 10:00 UTC (6:00 EDT)</p>\n<p>The North American Xbox megaserver is currently unavailable while we perform maintenance. </p>\n<p>The European Xbox megaserver is currently unavailable while we perform maintenance.</p>\n<p>The North American PlayStation® megaserver is currently unavailable while we perform maintenance. </p>\n<p>The European PlayStation® megaserver is currently unavailable while we perform maintenance.</p>\n',
      ],
      rawDate: '  2024.07.24 - 10:00 UTC (6:00 EDT)',
      rawData:
        'The North American Xbox megaserver is currently unavailable while we perform maintenance. ',
      slugs: ['server_xbox_na'],
      dates: [
        moment()
          .utc()
          .set('years', 2024)
          .set('months', 8)
          .set('date', 24)
          .set('hours', 10)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'server',
      support: 'xbox',
      zone: 'na',
      status: 'down',
    },
  },
  {
    slug: 'server_xbox_eu',
    status: 'down',
    type: 'server',
    support: 'xbox',
    zone: 'eu',
    raw: {
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
      raw: [
        '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\n  <p>2024.07.24 - 10:00 UTC (6:00 EDT)</p>\n<p>The North American Xbox megaserver is currently unavailable while we perform maintenance. </p>\n<p>The European Xbox megaserver is currently unavailable while we perform maintenance.</p>\n<p>The North American PlayStation® megaserver is currently unavailable while we perform maintenance. </p>\n<p>The European PlayStation® megaserver is currently unavailable while we perform maintenance.</p>\n',
      ],
      rawDate: '  2024.07.24 - 10:00 UTC (6:00 EDT)',
      rawData:
        'The European Xbox megaserver is currently unavailable while we perform maintenance.',
      slugs: ['server_xbox_eu'],
      dates: [
        moment()
          .utc()
          .set('years', 2024)
          .set('months', 8)
          .set('date', 24)
          .set('hours', 10)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'server',
      support: 'xbox',
      zone: 'eu',
      status: 'down',
    },
  },
  {
    slug: 'server_pc_pts',
    status: 'up',
    type: 'server',
    support: 'pc',
    zone: 'pts',
    raw: {
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
      raw: [
        ' />\n  <p>2024.07.15 - 21:00 UTC (17:00 EDT)</p>\n\n<p>The PTS is currently available.</p>\n\n',
      ],
      rawDate: ' />  2024.07.15 - 21:00 UTC (17:00 EDT)',
      rawData: 'The PTS is currently available.',
      slugs: ['server_pc_pts'],
      dates: [
        moment()
          .utc()
          .set('years', 2024)
          .set('months', 8)
          .set('date', 15)
          .set('hours', 21)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'server',
      support: 'pc',
      zone: 'pts',
      status: 'up',
    },
  },
  {
    slug: 'server_ps_na',
    status: 'down',
    type: 'server',
    support: 'ps',
    zone: 'na',
    raw: {
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
      raw: [
        '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\n  <p>2024.07.24 - 10:00 UTC (6:00 EDT)</p>\n<p>The North American Xbox megaserver is currently unavailable while we perform maintenance. </p>\n<p>The European Xbox megaserver is currently unavailable while we perform maintenance.</p>\n<p>The North American PlayStation® megaserver is currently unavailable while we perform maintenance. </p>\n<p>The European PlayStation® megaserver is currently unavailable while we perform maintenance.</p>\n',
      ],
      rawDate: '  2024.07.24 - 10:00 UTC (6:00 EDT)',
      rawData:
        'The North American PlayStation® megaserver is currently unavailable while we perform maintenance. ',
      slugs: ['server_ps_na'],
      dates: [
        moment()
          .utc()
          .set('years', 2024)
          .set('months', 8)
          .set('date', 24)
          .set('hours', 10)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'server',
      support: 'ps',
      zone: 'na',
      status: 'down',
    },
  },
  {
    slug: 'server_ps_eu',
    status: 'down',
    type: 'server',
    support: 'ps',
    zone: 'eu',
    raw: {
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
      raw: [
        '<div><!-- ENTER ESO SERVICE ALERTS BELOW THIS LINE -->\n  <p>2024.07.24 - 10:00 UTC (6:00 EDT)</p>\n<p>The North American Xbox megaserver is currently unavailable while we perform maintenance. </p>\n<p>The European Xbox megaserver is currently unavailable while we perform maintenance.</p>\n<p>The North American PlayStation® megaserver is currently unavailable while we perform maintenance. </p>\n<p>The European PlayStation® megaserver is currently unavailable while we perform maintenance.</p>\n',
      ],
      rawDate: '  2024.07.24 - 10:00 UTC (6:00 EDT)',
      rawData:
        'The European PlayStation® megaserver is currently unavailable while we perform maintenance.',
      slugs: ['server_ps_eu'],
      dates: [
        moment()
          .utc()
          .set('years', 2024)
          .set('months', 8)
          .set('date', 24)
          .set('hours', 10)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'server',
      support: 'ps',
      zone: 'eu',
      status: 'down',
    },
  },
  {
    slug: 'server_pc_na',
    status: 'up',
    type: 'server',
    support: 'pc',
    zone: 'na',
    raw: {
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
      raw: [
        ' />\n  \n<p>2024.07.09 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
      ],
      rawDate: ' />  2024.07.09 - 12:15 UTC (08:15 EDT)',
      rawData: 'The North American PC/Mac megaserver is currently available.',
      slugs: ['server_pc_na'],
      dates: [
        moment()
          .utc()
          .set('years', 2024)
          .set('months', 8)
          .set('date', 9)
          .set('hours', 12)
          .set('minutes', 15)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'server',
      support: 'pc',
      zone: 'na',
      status: 'up',
    },
  },
  {
    slug: 'server_pc_eu',
    status: 'up',
    type: 'server',
    support: 'pc',
    zone: 'eu',
    raw: {
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
      raw: [
        ' />\n  \n<p>2024.07.09 - 12:15 UTC (08:15 EDT)</p>\n<p>The North American PC/Mac megaserver is currently available.</p>\n<p>The European PC/Mac megaserver is currently available.</p>\n',
      ],
      rawDate: ' />  2024.07.09 - 12:15 UTC (08:15 EDT)',
      rawData: 'The European PC/Mac megaserver is currently available.',
      slugs: ['server_pc_eu'],
      dates: [
        moment()
          .utc()
          .set('years', 2024)
          .set('months', 8)
          .set('date', 9)
          .set('hours', 12)
          .set('minutes', 15)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'server',
      support: 'pc',
      zone: 'eu',
      status: 'up',
    },
  },
  {
    slug: 'service_store_eso',
    status: 'up',
    type: 'service',
    support: 'store',
    zone: 'eso',
    raw: {
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
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
          .set('months', 8)
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
    },
  },
  {
    slug: 'service_system_account',
    status: 'up',
    type: 'service',
    support: 'system',
    zone: 'account',
    raw: {
      sources: [
        'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
      ],
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
          .set('months', 8)
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
    },
  },
];
