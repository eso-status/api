import { RawEsoStatus } from '@eso-status/types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { Maintenance } from './entities/maintenance.entity';

@Injectable()
export class MaintenanceService {
  constructor(
    @InjectRepository(Maintenance)
    private readonly maintenanceRepository: Repository<Maintenance>,
  ) {}

  async add(
    serviceId: number,
    rawEsoStatus: RawEsoStatus,
  ): Promise<Maintenance> {
    const newMaintenance: Maintenance = this.maintenanceRepository.create({
      serviceId,
      beginnerAt: new Date(rawEsoStatus.dates[0].toISOString()),
      endingAt:
        rawEsoStatus.dates.length > 1
          ? new Date(rawEsoStatus.dates[1].toISOString())
          : null,
      rawData: JSON.stringify(rawEsoStatus),
    });
    return this.maintenanceRepository.save(newMaintenance);
  }

  async delete(serviceId: number): Promise<DeleteResult> {
    return this.maintenanceRepository.delete({
      serviceId,
    });
  }
}
