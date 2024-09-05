import { Slug, Status, Support, Type, Zone } from '@eso-status/types';

export interface EsoStatusRawData {
  source: string;
  raw: string;
  status: Status;
  rawStatus?: string;
  slug: Slug;
  rawSlug: string;
  type: Type;
  support: Support;
  zone: Zone;
  dates?: string[];
  rawDate?: string;
}
