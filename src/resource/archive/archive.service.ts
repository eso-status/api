import { EsoStatus, RawEsoStatus, Slug } from '@eso-status/types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Service } from '../service/entities/service.entity';

import { Archive } from './entities/archive.entity';

@Injectable()
export class ArchiveService {
  constructor(
    @InjectRepository(Archive)
    private readonly archiveRepository: Repository<Archive>,
  ) {}

  format(service: Service): EsoStatus {
    return {
      slug: service.slug.slug,
      status: service.status.status,
      type: service.type.type,
      support: service.support.support,
      zone: service.zone.zone,
      raw: <RawEsoStatus>JSON.parse(service.rawData),
    };
  }

  async add(service: Service): Promise<Archive> {
    const newArchive = this.archiveRepository.create({
      slugId: service.slugId,
      serviceId: service.id,
      statusId: service.statusId,
      typeId: service.typeId,
      supportId: service.supportId,
      zoneId: service.zoneId,
      rawData: service.rawData,
    });
    return this.archiveRepository.save(newArchive);
  }

  async findAll(): Promise<Archive[]> {
    return this.archiveRepository.find({
      relations: ['slug', 'status', 'type', 'zone', 'support'],
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findBySlug(slug: Slug): Promise<Archive> {
    return this.archiveRepository.findOneOrFail({
      relations: ['slug', 'status', 'type', 'zone', 'support'],
      where: {
        slug: {
          slug,
        },
      },
      order: {
        createdAt: 'DESC',
      },
    });
  }
}
