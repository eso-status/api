import EsoStatus from '@eso-status/types';

import { Archive } from '../../src/resource/archive/entities/archive.entity';
import { Log } from '../../src/resource/log/entities/log.entity';
import { Maintenance } from '../../src/resource/maintenance/entities/maintenance.entity';
import { Service } from '../../src/resource/service/entities/service.entity';

export interface Initial {
  logs: Log[];
  archives: Archive[];
  services: Service[];
  maintenances: Maintenance[];
  serviceControllerReturn: EsoStatus[];
}
