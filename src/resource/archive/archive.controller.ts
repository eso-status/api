import { EsoStatus, Slug } from '@eso-status/types';
import { BadRequestException, Controller, Get, Param } from '@nestjs/common';

import { ArchiveService } from './archive.service';
import { Archive } from './entities/archive.entity';

@Controller('archive')
export class ArchiveController {
  constructor(private readonly archiveService: ArchiveService) {}

  @Get()
  async findAll(): Promise<EsoStatus[]> {
    const archives: Archive[] = await this.archiveService.findAll();
    return archives.map(
      (archive: Archive): EsoStatus => this.archiveService.format(archive),
    );
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: Slug): Promise<EsoStatus> {
    try {
      return this.archiveService.format(
        await this.archiveService.findBySlug(slug),
      );
    } catch (error) {
      throw new BadRequestException('No archive found for this slug');
    }
  }
}
