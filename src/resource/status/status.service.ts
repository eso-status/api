import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Status } from './entities/status.entity';
import { Status as EsoStatusStatus } from '@eso-status/types';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status)
    private readonly statusRepository: Repository<Status>,
  ) {}

  async findByStatus(status: EsoStatusStatus): Promise<Status> {
    return await this.statusRepository.findOne({
      where: {
        status: status,
      },
    });
  }
}
