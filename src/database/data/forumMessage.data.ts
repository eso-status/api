import { EsoStatus, RawEsoStatus } from '@eso-status/types';
import * as moment from 'moment';

export const rawForumMessageEsoStatusList: RawEsoStatus[] = [
  {
    sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
    raw: [
      'We will be performing maintenance for patch 10.1.2 on the PTS on Monday at 8:00AM EDT (12:00 UTC). ',
    ],
    slugs: ['server_pc_pts'],
    rawDate: 'Monday at 8:00AM EDT (12:00 UTC). ',
    dates: [
      moment()
        .utc()
        .set('years', 2024)
        .set('months', 7)
        .set('date', 22)
        .set('hours', 12)
        .set('minutes', 0)
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
    ],
    type: 'server',
    support: 'pc',
    zone: 'pts',
    status: 'planned',
  },
];

export const forumMessageEsoStatusList: EsoStatus[] = [
  {
    slug: 'server_pc_pts',
    status: 'planned',
    type: 'server',
    support: 'pc',
    zone: 'pts',
    raw: {
      sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
      raw: [
        'We will be performing maintenance for patch 10.1.2 on the PTS on Monday at 8:00AM EDT (12:00 UTC). ',
      ],
      slugs: ['server_pc_pts'],
      rawDate: 'Monday at 8:00AM EDT (12:00 UTC). ',
      dates: [
        moment()
          .utc()
          .set('years', 2024)
          .set('months', 7)
          .set('date', 22)
          .set('hours', 12)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
      type: 'server',
      support: 'pc',
      zone: 'pts',
      status: 'planned',
    },
  },
];
