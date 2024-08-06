import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Slug } from '../slug/entities/slug.entity';

import { SlugService } from '../slug/slug.service';

import { Service } from './entities/service.entity';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';

@Module({
  imports: [TypeOrmModule.forFeature([Service, Slug])],
  controllers: [ServiceController],
  providers: [ServiceService, SlugService],
  exports: [ServiceService],
})
export class ServiceModule {}
