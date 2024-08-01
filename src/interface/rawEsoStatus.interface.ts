import { Slug, Status, Support, Type, Zone } from '@eso-status/types';

export interface RawEsoStatus {
  /**
   * Sources list of ESO server/service
   *
   * @type string[]
   */
  sources: string[];
  /**
   * Raw data list of ESO server/service
   *
   * @type string[]
   */
  raw: string[];
  /**
   * Slugs list of ESO server/service
   *
   * @type Slug[]
   */
  slugs?: Slug[];
  /**
   * Raw date of ESO server/service
   *
   * @type string
   */
  rawDate?: string;
  /**
   * Raw data of ESO server/service
   *
   * @type string
   */
  rawData?: string;
  /**
   * Dates list of ESO server/service
   *
   * @type string[]
   */
  dates?: string[];
  /**
   * Type of ESO server/service
   *
   * @type Type
   */
  type?: Type;
  /**
   * Support of ESO server/service
   *
   * @type Support
   */
  support?: Support;
  /**
   * Zone of ESO server/service
   *
   * @type Zone
   */
  zone?: Zone;
  /**
   * Status of ESO server/service
   *
   * @type Status
   */
  status?: Status;
  /**
   * Raw slug of ESO server/service
   *
   * @type string
   */
  rawSlug?: string;
  /**
   * Raw status of ESO server/service
   *
   * @type string
   */
  rawStatus?: string;
}
