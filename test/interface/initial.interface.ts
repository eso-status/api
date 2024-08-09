import { Archive } from 'src/resource/archive/entities/archive.entity';
import { Maintenance } from 'src/resource/maintenance/entities/maintenance.entity';
import { Service } from 'src/resource/service/entities/service.entity';

import { EsoStatus as CustomEsoStatus } from '../../src/interface/esoStatus.interface';
import { Log } from '../../src/resource/log/entities/log.entity';

export interface Initial {
  logs: Log[];
  archives: Archive[];
  services: Service[];
  maintenances: Maintenance[];
  serviceControllerReturn: CustomEsoStatus[];
}
