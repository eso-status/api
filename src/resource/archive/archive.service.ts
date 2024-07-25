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
}
