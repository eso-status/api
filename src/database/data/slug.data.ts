import { Slug } from '../../resource/slug/entities/slug.entity';

export const slugData: Slug[] = [
  {
    id: 1,
    slug: 'server_xbox_na',
    typeId: 1,
    supportId: 6,
    zoneId: 2,
    type: { id: 1, type: 'server' },
    support: { id: 6, support: 'xbox' },
    zone: { id: 2, zone: 'na' },
    service: {
      id: 1,
      slugId: 1,
      statusId: 2,
      typeId: 1,
      supportId: 6,
      zoneId: 2,
    },
  },
  {
    id: 2,
    slug: 'server_xbox_eu',
    typeId: 1,
    supportId: 6,
    zoneId: 1,
    type: { id: 1, type: 'server' },
    support: { id: 6, support: 'xbox' },
    zone: { id: 1, zone: 'eu' },
    service: {
      id: 2,
      slugId: 2,
      statusId: 2,
      typeId: 1,
      supportId: 6,
      zoneId: 1,
    },
  },
  {
    id: 3,
    slug: 'server_ps_na',
    typeId: 1,
    supportId: 5,
    zoneId: 2,
    type: { id: 1, type: 'server' },
    support: { id: 5, support: 'ps' },
    zone: { id: 2, zone: 'na' },
    service: {
      id: 3,
      slugId: 3,
      statusId: 2,
      typeId: 1,
      supportId: 5,
      zoneId: 2,
    },
  },
  {
    id: 4,
    slug: 'server_ps_eu',
    typeId: 1,
    supportId: 5,
    zoneId: 1,
    type: { id: 1, type: 'server' },
    support: { id: 5, support: 'ps' },
    zone: { id: 1, zone: 'eu' },
    service: {
      id: 4,
      slugId: 4,
      statusId: 2,
      typeId: 1,
      supportId: 5,
      zoneId: 1,
    },
  },
  {
    id: 5,
    slug: 'server_pc_na',
    typeId: 1,
    supportId: 4,
    zoneId: 2,
    type: { id: 1, type: 'server' },
    support: { id: 4, support: 'pc' },
    zone: { id: 2, zone: 'na' },
    service: {
      id: 5,
      slugId: 5,
      statusId: 2,
      typeId: 1,
      supportId: 4,
      zoneId: 2,
    },
  },
  {
    id: 6,
    slug: 'server_pc_eu',
    typeId: 1,
    supportId: 4,
    zoneId: 1,
    type: { id: 1, type: 'server' },
    support: { id: 4, support: 'pc' },
    zone: { id: 1, zone: 'eu' },
    service: {
      id: 6,
      slugId: 6,
      statusId: 2,
      typeId: 1,
      supportId: 4,
      zoneId: 1,
    },
  },
  {
    id: 7,
    slug: 'server_pc_pts',
    typeId: 1,
    supportId: 4,
    zoneId: 3,
    type: { id: 1, type: 'server' },
    support: { id: 4, support: 'pc' },
    zone: { id: 3, zone: 'pts' },
    service: {
      id: 7,
      slugId: 7,
      statusId: 2,
      typeId: 1,
      supportId: 4,
      zoneId: 3,
    },
  },
  {
    id: 8,
    slug: 'service_web_site',
    typeId: 2,
    supportId: 1,
    zoneId: 4,
    type: { id: 2, type: 'service' },
    support: { id: 1, support: 'web' },
    zone: { id: 4, zone: 'site' },
    service: {
      id: 8,
      slugId: 8,
      statusId: 2,
      typeId: 2,
      supportId: 1,
      zoneId: 4,
    },
  },
  {
    id: 9,
    slug: 'service_web_forum',
    typeId: 2,
    supportId: 1,
    zoneId: 5,
    type: { id: 2, type: 'service' },
    support: { id: 1, support: 'web' },
    zone: { id: 5, zone: 'forum' },
    service: {
      id: 9,
      slugId: 9,
      statusId: 2,
      typeId: 2,
      supportId: 1,
      zoneId: 5,
    },
  },
  {
    id: 10,
    slug: 'service_store_crown',
    typeId: 2,
    supportId: 2,
    zoneId: 7,
    type: { id: 2, type: 'service' },
    support: { id: 2, support: 'store' },
    zone: { id: 7, zone: 'crown' },
    service: {
      id: 10,
      slugId: 10,
      statusId: 2,
      typeId: 2,
      supportId: 2,
      zoneId: 7,
    },
  },
  {
    id: 11,
    slug: 'service_store_eso',
    typeId: 2,
    supportId: 2,
    zoneId: 6,
    type: { id: 2, type: 'service' },
    support: { id: 2, support: 'store' },
    zone: { id: 6, zone: 'eso' },
    service: {
      id: 11,
      slugId: 11,
      statusId: 2,
      typeId: 2,
      supportId: 2,
      zoneId: 6,
    },
  },
  {
    id: 12,
    slug: 'service_system_account',
    typeId: 2,
    supportId: 3,
    zoneId: 8,
    type: { id: 2, type: 'service' },
    support: { id: 3, support: 'system' },
    zone: { id: 8, zone: 'account' },
    service: {
      id: 12,
      slugId: 12,
      statusId: 2,
      typeId: 2,
      supportId: 3,
      zoneId: 8,
    },
  },
];
