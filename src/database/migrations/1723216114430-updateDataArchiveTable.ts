import { EsoStatusRawData } from '@eso-status/types';
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
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/en/categories/pts',
      raw: '• [IN PROGRESS] Xbox: NA megaserver for maintenance – August 3, 5:00PM EDT (21:00 UTC) - 7:00PM EDT (23:00 UTC)',
      slug: 'server_xbox_na',
      rawDate: 'August 3, 5:00PM EDT (21:00 UTC) - 7:00PM EDT (23:00 UTC)',
      dates: ['2024-08-03T21:00:00.000Z', '2024-08-03T23:00:00.000Z'],
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
      dates: ['2024-02-16T11:00:00.000Z', '2024-02-16T15:00:00.000Z'],
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
      dates: ['2024-01-19T07:00:00.000Z', '2024-01-19T17:00:00.000Z'],
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
      dates: ['2024-01-19T11:00:00.000Z', '2024-01-19T15:00:00.000Z'],
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
      dates: ['2024-07-26T08:00:00.000Z', '2024-07-26T12:00:00.000Z'],
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
      dates: ['2024-09-14T07:00:00.000Z', '2024-09-14T14:00:00.000Z'],
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
      dates: ['2023-12-08T12:00:00.000Z', '2023-12-08T20:00:00.000Z'],
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
      dates: ['2024-01-27T19:30:00.000Z', '2024-01-27T20:30:00.000Z'],
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
      dates: ['2024-07-23T12:00:00.000Z', '2024-07-23T16:00:00.000Z'],
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
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/',
      raw: '• [IN PROGRESS] Xbox: NA megaserver for maintenance – August 3, 5:00PM EDT (21:00 UTC) - 7:00PM EDT (23:00 UTC)',
      slug: 'server_xbox_na',
      rawDate: 'August 3, 5:00PM EDT (21:00 UTC) - 7:00PM EDT (23:00 UTC)',
      dates: ['2024-08-03T21:00:00.000Z', '2024-08-03T23:00:00.000Z'],
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
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/',
      raw: '• [IN PROGRESS] Xbox: EU megaserver for maintenance – February 16 , 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
      slug: 'server_xbox_eu',
      rawDate: 'February 16 , 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
      dates: ['2024-02-16T11:00:00.000Z', '2024-02-16T15:00:00.000Z'],
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
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/',
      raw: '• [IN PROGRESS] PlayStation®: NA megaserver for maintenance – January 19, 2:00AM EST (7:00 UTC) – 12:00PM EST (17:00 UTC)',
      slug: 'server_ps_na',
      rawDate: 'January 19, 2:00AM EST (7:00 UTC) – 12:00PM EST (17:00 UTC)',
      dates: ['2024-01-19T07:00:00.000Z', '2024-01-19T17:00:00.000Z'],
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
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/',
      raw: '• [IN PROGRESS] PlayStation®: EU megaserver for maintenance – January 19, 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
      slug: 'server_ps_eu',
      rawDate: 'January 19, 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
      dates: ['2024-01-19T11:00:00.000Z', '2024-01-19T15:00:00.000Z'],
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
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/',
      raw: '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
      slug: 'server_pc_na',
      rawDate: 'July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
      dates: ['2024-07-26T08:00:00.000Z', '2024-07-26T12:00:00.000Z'],
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
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/',
      raw: '• [IN PROGRESS] PC/Mac: EU megaserver for maintenance – September 14, 3:00AM EDT (7:00 UTC) – 10:00AM EDT (14:00 UTC)',
      slug: 'server_pc_eu',
      rawDate: 'September 14, 3:00AM EDT (7:00 UTC) – 10:00AM EDT (14:00 UTC)',
      dates: ['2024-09-14T07:00:00.000Z', '2024-09-14T14:00:00.000Z'],
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
    id: 22,
    connector: 'ForumMessage',
    serviceId: 8,
    statusId: 1,
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/',
      raw: '• [IN PROGRESS] ESO Website for maintenance – December 8, 7:00AM EST (12:00 UTC) - 3:00PM EST (20:00 UTC)',
      slug: 'service_web_site',
      rawDate: 'December 8, 7:00AM EST (12:00 UTC) - 3:00PM EST (20:00 UTC)',
      dates: ['2023-12-08T12:00:00.000Z', '2023-12-08T20:00:00.000Z'],
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
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/',
      raw: '• [IN PROGRESS] ESO Store for maintenance – January 27, 2:30PM EST (19:30 UTC) – 3:30PM EST (20:30 UTC)',
      slug: 'service_store_eso',
      rawDate: 'January 27, 2:30PM EST (19:30 UTC) – 3:30PM EST (20:30 UTC)',
      dates: ['2024-01-27T19:30:00.000Z', '2024-01-27T20:30:00.000Z'],
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
    rawData: JSON.stringify(<EsoStatusRawData>{
      source: 'https://forums.elderscrollsonline.com/',
      raw: '• [IN PROGRESS] ESO Store and Account System for maintenance – July 23, 8:00AM EDT (12:00 UTC) – 12:00PM EDT (16:00 UTC)',
      slug: 'service_system_account',
      rawDate: 'July 23, 8:00AM EDT (12:00 UTC) – 12:00PM EDT (16:00 UTC)',
      dates: ['2024-07-23T12:00:00.000Z', '2024-07-23T16:00:00.000Z'],
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
