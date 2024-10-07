import EsoStatus, { Slug as EsoStatusSlug } from '@eso-status/types';
import { BadRequestException, Controller, Get, Param } from '@nestjs/common';

import { SlugService } from '../slug/slug.service';

import { Service } from './entities/service.entity';
import { ServiceService } from './service.service';

@Controller('service')
export class ServiceController {
  constructor(
    private readonly serviceService: ServiceService,
    private readonly slugService: SlugService,
  ) {}

  @Get()
  async findAll(): Promise<EsoStatus[]> {
    const services: Service[] = await this.serviceService.findAll();
    return services.map(
      (service: Service): EsoStatus => this.serviceService.format(service),
    );
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: EsoStatusSlug): Promise<EsoStatus> {
    if (await this.slugService.findOne(slug)) {
      return this.serviceService.format(
        await this.serviceService.findBySlug(slug),
      );
    }

    throw new BadRequestException('Invalid slug');
  }
}
