import { Slug, Status, Support, Type, Zone } from '@eso-status/types';

import { EsoStatusMaintenance as CustomEsoStatusMaintenance } from './esoStatusMaintenance.interface';
import { EsoStatusRawData as CustomEsoStatusRawData } from './esoStatusRawData.interface';

export interface EsoStatus {
  rawData: CustomEsoStatusRawData;
  status: Status;
  statusSince: string;
  slug: Slug;
  type: Type;
  support: Support;
  zone: Zone;
  maintenance?: CustomEsoStatusMaintenance;
}
