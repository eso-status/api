import EsoStatus, { EsoStatusRawData, Slug } from '@eso-status/types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isValidDate } from 'rxjs/internal/util/isDate';
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
      rawData: <EsoStatusRawData>JSON.parse(service.rawData),
      statusSince: '1970-01-01T00:00:00.000Z',
    };

    if (service.maintenance) {
      if (
        service.maintenance.endingAt &&
        isValidDate(service.maintenance.endingAt)
      ) {
        formatedEsoStatus.maintenance = {
          rawDataList: <EsoStatusRawData[]>[
            <EsoStatusRawData>JSON.parse(service.maintenance.rawData),
          ],
          beginnerAt: service.maintenance.beginnerAt.toISOString(),
          endingAt: service.maintenance.endingAt.toISOString(),
          plannedSince: '1970-01-01T00:00:00.000Z',
        };
      } else {
        formatedEsoStatus.maintenance = {
          rawDataList: <EsoStatusRawData[]>[
            <EsoStatusRawData>JSON.parse(service.maintenance.rawData),
          ],
          beginnerAt: service.maintenance.beginnerAt.toISOString(),
          plannedSince: '1970-01-01T00:00:00.000Z',
        };
      }
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

  async update(
    id: number,
    statusId: number,
    raw: EsoStatusRawData,
  ): Promise<void> {
    await this.serviceRepository.update(id, {
      statusId,
      rawData: JSON.stringify(raw),
    });
  }
}
