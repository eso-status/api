import { RawEsoStatus } from '@eso-status/types';
import * as moment from 'moment/moment';
import {
  MigrationInterface,
  QueryRunner,
  Repository,
  UpdateResult,
} from 'typeorm';

import { dataSource } from '../../config/typeorm.config';
import { Archive } from '../../resource/archive/entities/archive.entity';

const newArchive: Archive[] = [
  {
    id: 30,
    connector: 'ForumMessagePts',
    serviceId: 1,
    statusId: 1,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
      raw: [
        '• [IN PROGRESS] Xbox: NA megaserver for maintenance – August 3, 5:00PM EDT (21:00 UTC) - 7:00PM EDT (23:00 UTC)',
      ],
      slugs: ['server_xbox_na'],
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
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
      raw: [
        '• [IN PROGRESS] Xbox: EU megaserver for maintenance – February 16 , 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
      ],
      slugs: ['server_xbox_eu'],
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
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
      raw: [
        '• [IN PROGRESS] PlayStation®: NA megaserver for maintenance – January 19, 2:00AM EST (7:00 UTC) – 12:00PM EST (17:00 UTC)',
      ],
      slugs: ['server_ps_na'],
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
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
      raw: [
        '• [IN PROGRESS] PlayStation®: EU megaserver for maintenance – January 19, 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
      ],
      slugs: ['server_ps_eu'],
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
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
      raw: [
        '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
      ],
      slugs: ['server_pc_na', 'server_pc_eu'],
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
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
      raw: [
        '• [IN PROGRESS] PC/Mac: EU megaserver for maintenance – September 14, 3:00AM EDT (7:00 UTC) – 10:00AM EDT (14:00 UTC)',
      ],
      slugs: ['server_pc_eu'],
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
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
      raw: [
        'The PTS is now offline for the patch 7.1.1 maintenance and is currently unavailable. ',
      ],
      slugs: ['server_pc_pts'],
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
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
      raw: [
        '• [IN PROGRESS] ESO Website for maintenance – December 8, 7:00AM EST (12:00 UTC) - 3:00PM EST (20:00 UTC)',
      ],
      slugs: ['service_web_site'],
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
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
      raw: [
        '• [IN PROGRESS] ESO Store for maintenance – January 27, 2:30PM EST (19:30 UTC) – 3:30PM EST (20:30 UTC)',
      ],
      slugs: ['service_store_eso'],
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
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/en/categories/pts'],
      raw: [
        '• [IN PROGRESS] ESO Store and Account System for maintenance – July 23, 8:00AM EDT (12:00 UTC) – 12:00PM EDT (16:00 UTC)',
      ],
      slugs: ['service_store_eso', 'service_system_account'],
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

const updatedData: Archive[] = [
  {
    id: 1,
    connector: 'ForumMessage',
    serviceId: 1,
    statusId: 1,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/'],
      raw: [
        '• [IN PROGRESS] Xbox: NA megaserver for maintenance – August 3, 5:00PM EDT (21:00 UTC) - 7:00PM EDT (23:00 UTC)',
      ],
      slugs: ['server_xbox_na'],
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
    id: 4,
    connector: 'ForumMessage',
    serviceId: 2,
    statusId: 1,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/'],
      raw: [
        '• [IN PROGRESS] Xbox: EU megaserver for maintenance – February 16 , 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
      ],
      slugs: ['server_xbox_eu'],
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
    id: 7,
    connector: 'ForumMessage',
    serviceId: 3,
    statusId: 1,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/'],
      raw: [
        '• [IN PROGRESS] PlayStation®: NA megaserver for maintenance – January 19, 2:00AM EST (7:00 UTC) – 12:00PM EST (17:00 UTC)',
      ],
      slugs: ['server_ps_na'],
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
    id: 10,
    connector: 'ForumMessage',
    serviceId: 4,
    statusId: 1,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/'],
      raw: [
        '• [IN PROGRESS] PlayStation®: EU megaserver for maintenance – January 19, 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
      ],
      slugs: ['server_ps_eu'],
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
    id: 13,
    connector: 'ForumMessage',
    serviceId: 5,
    statusId: 1,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/'],
      raw: [
        '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
      ],
      slugs: ['server_pc_na', 'server_pc_eu'],
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
    id: 16,
    connector: 'ForumMessage',
    serviceId: 6,
    statusId: 1,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/'],
      raw: [
        '• [IN PROGRESS] PC/Mac: EU megaserver for maintenance – September 14, 3:00AM EDT (7:00 UTC) – 10:00AM EDT (14:00 UTC)',
      ],
      slugs: ['server_pc_eu'],
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
    id: 19,
    connector: 'ForumMessage',
    serviceId: 7,
    statusId: 1,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/'],
      raw: [
        'The PTS is now offline for the patch 7.1.1 maintenance and is currently unavailable. ',
      ],
      slugs: ['server_pc_pts'],
      rawDate: '',
      dates: [],
      type: 'server',
      support: 'pc',
      zone: 'pts',
      status: 'down',
    }),
  },
  {
    id: 22,
    connector: 'ForumMessage',
    serviceId: 8,
    statusId: 1,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/'],
      raw: [
        '• [IN PROGRESS] ESO Website for maintenance – December 8, 7:00AM EST (12:00 UTC) - 3:00PM EST (20:00 UTC)',
      ],
      slugs: ['service_web_site'],
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
    id: 26,
    connector: 'ForumMessage',
    serviceId: 11,
    statusId: 1,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/'],
      raw: [
        '• [IN PROGRESS] ESO Store for maintenance – January 27, 2:30PM EST (19:30 UTC) – 3:30PM EST (20:30 UTC)',
      ],
      slugs: ['service_store_eso'],
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
    id: 28,
    connector: 'ForumMessage',
    serviceId: 12,
    statusId: 1,
    rawData: JSON.stringify(<RawEsoStatus>{
      sources: ['https://forums.elderscrollsonline.com/'],
      raw: [
        '• [IN PROGRESS] ESO Store and Account System for maintenance – July 23, 8:00AM EDT (12:00 UTC) – 12:00PM EDT (16:00 UTC)',
      ],
      slugs: ['service_store_eso', 'service_system_account'],
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

export class UpdateDataArchiveTable1723216114430 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    if (process.env.NODE_ENV !== 'test') {
      const repository: Repository<Archive> = dataSource.getRepository(Archive);
      await Promise.all(
        updatedData.map((archive: Archive): Promise<UpdateResult> => {
          return repository.update(archive.id, archive);
        }),
      );

      await Promise.all(
        newArchive.map((archive: Archive): Promise<Archive> => {
          return repository.save(repository.create(archive));
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const repository: Repository<Archive> = dataSource.getRepository(Archive);
    await Promise.all(
      updatedData.map((archive: Archive): Promise<UpdateResult> => {
        return repository.update(archive.id, archive);
      }),
    );
  }
}
