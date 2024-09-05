import { EsoStatusRawData } from './esoStatusRawData.interface';

export interface EsoStatusMaintenance {
  rawDataList: EsoStatusRawData[];
  beginnerAt: string;
  endingAt?: string;
}
