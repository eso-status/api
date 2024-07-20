import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './entities/service.entity';
import { Slug } from '@eso-status/types';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}

  async findBySlug(slug: Slug): Promise<Service> {
    return await this.serviceRepository.findOne({
      relations: ['slug', 'status', 'type', 'zone', 'support'],
      where: {
        slug: {
          slug: slug,
        },
      },
    });
  }

  async updateStatus(id: number, statusId: number): Promise<void> {
    await this.serviceRepository.update(id, { statusId: statusId });
  }
}
