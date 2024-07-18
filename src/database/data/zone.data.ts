import { Zone } from '../../resource/zone/entities/zone.entity';

export const zoneData: Zone[] = [
  {
    id: 1,
    zone: 'eu',
    slugs: [
      {
        id: 2,
        slug: 'server_xbox_eu',
        typeId: 1,
        supportId: 6,
        zoneId: 1,
      },
      {
        id: 4,
        slug: 'server_ps_eu',
        typeId: 1,
        supportId: 5,
        zoneId: 1,
      },
      {
        id: 6,
        slug: 'server_pc_eu',
        typeId: 1,
        supportId: 4,
        zoneId: 1,
      },
    ],
  },
  {
    id: 2,
    zone: 'na',
    slugs: [
      {
        id: 1,
        slug: 'server_xbox_na',
        typeId: 1,
        supportId: 6,
        zoneId: 2,
      },
      {
        id: 3,
        slug: 'server_ps_na',
        typeId: 1,
        supportId: 5,
        zoneId: 2,
      },
      {
        id: 5,
        slug: 'server_pc_na',
        typeId: 1,
        supportId: 4,
        zoneId: 2,
      },
    ],
  },
  {
    id: 3,
    zone: 'pts',
    slugs: [
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
    id: 4,
    zone: 'site',
    slugs: [
      {
        id: 8,
        slug: 'service_web_site',
        typeId: 2,
        supportId: 1,
        zoneId: 4,
      },
    ],
  },
  {
    id: 5,
    zone: 'forum',
    slugs: [
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
    id: 6,
    zone: 'eso',
    slugs: [
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
    id: 7,
    zone: 'crown',
    slugs: [
      {
        id: 10,
        slug: 'service_store_crown',
        typeId: 2,
        supportId: 2,
        zoneId: 7,
      },
    ],
  },
  {
    id: 8,
    zone: 'account',
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
];
