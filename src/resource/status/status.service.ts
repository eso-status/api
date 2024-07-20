import { Status as EsoStatusStatus } from '@eso-status/types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Status } from './entities/status.entity';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status)
    private readonly statusRepository: Repository<Status>,
  ) {}

  async findByStatus(status: EsoStatusStatus): Promise<Status> {
    return this.statusRepository.findOne({
      where: {
        status,
      },
    });
  }
}
