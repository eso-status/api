import { Controller, Get } from '@nestjs/common';
import { ZoneService } from './zone.service';

@Controller('zone')
export class ZoneController {
  constructor(private readonly zoneService: ZoneService) {}

  @Get()
  findAll() {
    return this.zoneService.findAll();
  }
}
