import { Slug, Status, Support, Type, Zone } from '@eso-status/types';

import { MaintenanceEsoStatus as CustomMaintenanceEsoStatus } from './maintenanceEsoStatus.interface';
import { RawEsoStatus as CustomRawEsoStatus } from './rawEsoStatus.interface';

export interface EsoStatus {
  /**
   * Slug of ESO server/service
   *
   * @type Slug
   */
  slug: Slug;
  /**
   * Status of ESO server/service
   *
   * @type Status
   */
  status: Status;
  /**
   * Data of next planned maintenance of ESO server/service
   *
   * @type CustomMaintenanceEsoStatus
   */
  maintenance?: CustomMaintenanceEsoStatus;
  /**
   * Type of ESO server/service
   *
   * @type Type
   */
  type: Type;
  /**
   * Support of ESO server/service
   *
   * @type Support
   */
  support: Support;
  /**
   * Zone of ESO server/service
   *
   * @type Zone
   */
  zone: Zone;
  /**
   * Raw data of ESO server/service
   *
   * @type CustomRawEsoStatus
   */
  raw: CustomRawEsoStatus;
}
