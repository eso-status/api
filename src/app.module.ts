import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dataSourceOptions } from './config/typeorm.config';
import { ArchiveService } from './resource/archive/archive.service';
import { Archive } from './resource/archive/entities/archive.entity';
import { ServiceModule } from './resource/service/service.module';
import { Slug } from './resource/slug/entities/slug.entity';
import { StatusModule } from './resource/status/status.module';
import { Support } from './resource/support/entities/support.entity';
import { Type } from './resource/type/entities/type.entity';
import { Zone } from './resource/zone/entities/zone.entity';
import { QueueService } from './service/queue/queue.service';
import { ScrapingService } from './service/scraping/scraping.service';
import { WebsocketService } from './service/websocket/websocket.service';
import { WinstonService } from './service/winston/winston.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([Zone, Type, Support, Slug, Archive]),
    StatusModule,
    ServiceModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [
    ArchiveService,
    WebsocketService,
    WinstonService,
    ScrapingService,
    QueueService,
  ],
  exports: [
    ArchiveService,
    WebsocketService,
    WinstonService,
    QueueService,
    ScrapingService,
  ],
})
export class AppModule {}
