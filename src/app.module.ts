import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from './database/database.module';
import { ArchiveModule } from './resource/archive/archive.module';
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
    TypeOrmModule.forFeature([Zone, Type, Support, Slug]),
    StatusModule,
    DatabaseModule,
    ServiceModule,
    ArchiveModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [WebsocketService, WinstonService, ScrapingService, QueueService],
  exports: [WebsocketService, WinstonService, QueueService, ScrapingService],
})
export class AppModule {}
