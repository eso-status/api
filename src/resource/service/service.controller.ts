import { EsoStatus, Slug } from '@eso-status/types';
import { Controller, Get, Param } from '@nestjs/common';

import { Service } from './entities/service.entity';
import { ServiceService } from './service.service';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get()
  async findAll(): Promise<EsoStatus[]> {
    const services: Service[] = await this.serviceService.findAll();
    return services.map(
      (service: Service): EsoStatus => this.serviceService.format(service),
    );
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: Slug): Promise<EsoStatus> {
    return this.serviceService.format(
      await this.serviceService.findBySlug(slug),
    );
  }
}
