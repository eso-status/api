import {
  EsoStatus,
  MaintenanceEsoStatus,
  RawEsoStatus,
  Slug,
} from '@eso-status/types';

import { EsoStatus as CustomEsoStatus } from 'src/interface/esoStatus.interface';
import { Archive } from 'src/resource/archive/entities/archive.entity';
import { Service } from 'src/resource/service/entities/service.entity';

import { Connector } from 'src/type/connector.type';

import { Log } from '../../src/resource/log/entities/log.entity';

export interface Step {
  connector: Connector;
  connectorData: RawEsoStatus[];
  statusUpdateList: EsoStatus[];
  maintenancePlannedList: MaintenanceEsoStatus[];
  maintenanceRemovedList: Slug[];
  logs: Log[];
  archives: Archive[];
  services: Service[];
  serviceControllerReturn: CustomEsoStatus[];
}
