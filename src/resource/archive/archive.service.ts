import { RawEsoStatus } from '@eso-status/types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Connector } from '../../type/connector.type';
import { Service } from '../service/entities/service.entity';

import { Archive } from './entities/archive.entity';

@Injectable()
export class ArchiveService {
  constructor(
    @InjectRepository(Archive)
    private readonly archiveRepository: Repository<Archive>,
  ) {}

  async findByServiceAndConnector(
    service: Service,
    connector: Connector,
  ): Promise<Archive> {
    return this.archiveRepository.findOne({
      relations: ['status'],
      where: {
        serviceId: service.id,
        connector,
      },
    });
  }

  async update(
    serviceId: number,
    rawData: RawEsoStatus,
    connector: Connector,
    statusId: number,
  ): Promise<void> {
    await this.archiveRepository.update(
      {
        serviceId,
        connector,
      },
      {
        rawData: JSON.stringify(rawData),
        statusId,
      },
    );
  }
}
