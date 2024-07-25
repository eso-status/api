import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ArchiveService } from './archive.service';
import { Archive } from './entities/archive.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Archive])],
  providers: [ArchiveService],
  exports: [ArchiveService],
})
export class ArchiveModule {}
