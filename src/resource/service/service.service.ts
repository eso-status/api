import { EsoStatus, RawEsoStatus, Slug } from '@eso-status/types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Service } from './entities/service.entity';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}

  format(service: Service): EsoStatus {
    const formatedEsoStatus: EsoStatus = {
      slug: service.slug.slug,
      status: service.status.status,
      type: service.type.type,
      support: service.support.support,
      zone: service.zone.zone,
      raw: <RawEsoStatus>JSON.parse(service.rawData),
    };

    if (service.maintenance) {
      formatedEsoStatus.maintenance = {
        raw: <RawEsoStatus>JSON.parse(service.maintenance.rawData),
        slug: service.slug.slug,
        beginnerAt: service.maintenance.beginnerAt.toISOString(),
        endingAt: service.maintenance.endingAt?.toISOString(),
      };
    }

    return formatedEsoStatus;
  }

  async findAll(): Promise<Service[]> {
    return this.serviceRepository.find({
      relations: ['slug', 'status', 'type', 'zone', 'support', 'maintenance'],
    });
  }

  async findBySlug(slug: Slug): Promise<Service> {
    return this.serviceRepository.findOne({
      relations: ['slug', 'status', 'type', 'zone', 'support', 'maintenance'],
      where: {
        slug: {
          slug,
        },
      },
    });
  }

  async update(id: number, statusId: number, raw: RawEsoStatus): Promise<void> {
    await this.serviceRepository.update(id, {
      statusId,
      rawData: JSON.stringify(raw),
    });
  }
}
