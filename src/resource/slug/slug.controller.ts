import { Controller, Get } from '@nestjs/common';
import { SlugService } from './slug.service';

@Controller('slug')
export class SlugController {
  constructor(private readonly slugService: SlugService) {}

  @Get()
  async findAll() {
    return await this.slugService.findAll();
  }
}
