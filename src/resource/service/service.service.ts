import { EsoStatus, EsoStatusRawData, Slug } from '@eso-status/types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment';
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
      statusSince: moment(0),
    };

    if (service.maintenance) {
      formatedEsoStatus.maintenance = {
        rawDataList: <EsoStatusRawData[]>[
          <EsoStatusRawData>JSON.parse(service.maintenance.rawData),
        ],
        beginnerAt: moment(service.maintenance.beginnerAt.toISOString()),
      };

      if (
        service.maintenance.endingAt &&
        isValidDate(service.maintenance.endingAt)
      ) {
        formatedEsoStatus.maintenance.endingAt = moment(
          service.maintenance.endingAt.toISOString(),
        );
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
