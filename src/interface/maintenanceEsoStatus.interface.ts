import { Slug } from '@eso-status/types';

import { RawEsoStatus } from './rawEsoStatus.interface';

export interface MaintenanceEsoStatus {
  /**
   * Raw data of ESO server/service maintenance
   *
   * @type RawEsoStatus
   */
  raw: RawEsoStatus;
  /**
   * Slug of ESO server/service maintenance
   *
   * @type Slug
   */
  slug: Slug;
  /**
   * Beginning date of ESO server/service maintenance
   *
   * @type string
   */
  beginnerAt: string;
  /**
   * Ending date of ESO server/service maintenance
   *
   * @type string
   */
  endingAt?: string;
}
