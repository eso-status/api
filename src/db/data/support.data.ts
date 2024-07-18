import { Support } from '../../resource/support/entities/support.entity';

export const supportData: Support[] = [
  {
    id: 1,
    support: 'web',
    slugs: [
      {
        id: 8,
        slug: 'service_web_site',
        typeId: 2,
        supportId: 1,
        zoneId: 4,
      },
      {
        id: 9,
        slug: 'service_web_forum',
        typeId: 2,
        supportId: 1,
        zoneId: 5,
      },
    ],
  },
  {
    id: 2,
    support: 'store',
    slugs: [
      {
        id: 10,
        slug: 'service_store_crown',
        typeId: 2,
        supportId: 2,
        zoneId: 7,
      },
      {
        id: 11,
        slug: 'service_store_eso',
        typeId: 2,
        supportId: 2,
        zoneId: 6,
      },
    ],
  },
  {
    id: 3,
    support: 'system',
    slugs: [
      {
        id: 12,
        slug: 'service_system_account',
        typeId: 2,
        supportId: 3,
        zoneId: 8,
      },
    ],
  },
  {
    id: 4,
    support: 'pc',
    slugs: [
      {
        id: 5,
        slug: 'server_pc_na',
        typeId: 1,
        supportId: 4,
        zoneId: 2,
      },
      {
        id: 6,
        slug: 'server_pc_eu',
        typeId: 1,
        supportId: 4,
        zoneId: 1,
      },
      {
        id: 7,
        slug: 'server_pc_pts',
        typeId: 1,
        supportId: 4,
        zoneId: 3,
      },
    ],
  },
  {
    id: 5,
    support: 'ps',
    slugs: [
      {
        id: 3,
        slug: 'server_ps_na',
        typeId: 1,
        supportId: 5,
        zoneId: 2,
      },
      {
        id: 4,
        slug: 'server_ps_eu',
        typeId: 1,
        supportId: 5,
        zoneId: 1,
      },
    ],
  },
  {
    id: 6,
    support: 'xbox',
    slugs: [
      {
        id: 1,
        slug: 'server_xbox_na',
        typeId: 1,
        supportId: 6,
        zoneId: 2,
      },
      {
        id: 2,
        slug: 'server_xbox_eu',
        typeId: 1,
        supportId: 6,
        zoneId: 1,
      },
    ],
  },
];
