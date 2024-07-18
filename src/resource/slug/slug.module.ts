import { Module } from '@nestjs/common';
import { SlugService } from './slug.service';
import { SlugController } from './slug.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Slug } from './entities/slug.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Slug])],
  controllers: [SlugController],
  providers: [SlugService],
  exports: [SlugService],
})
export class SlugModule {}
