import { Slug } from '@eso-status/types';
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

  async findBySlug(slug: Slug): Promise<Service> {
    return this.serviceRepository.findOne({
      relations: ['slug', 'status', 'type', 'zone', 'support'],
      where: {
        slug: {
          slug,
        },
      },
    });
  }

  async updateStatus(id: number, statusId: number): Promise<void> {
    await this.serviceRepository.update(id, { statusId });
  }
}
