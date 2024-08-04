import { RawEsoStatus } from '@eso-status/types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Connector } from '../../type/connector.type';

import { Log } from './entities/log.entity';

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(Log)
    private readonly logRepository: Repository<Log>,
  ) {}

  async add(
    connector: Connector,
    serviceId: number,
    statusId: number,
    rawEsoStatus: RawEsoStatus,
  ): Promise<Log> {
    const newLog: Log = this.logRepository.create({
      connector,
      serviceId,
      statusId,
      rawData: JSON.stringify(rawEsoStatus),
    });
    return this.logRepository.save(newLog);
  }
}
