import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Scraper } from './class/scraper/scraper';
import { DatabaseModule } from './database/database.module';
import { ServiceModule } from './resource/service/service.module';
import { Slug } from './resource/slug/entities/slug.entity';
import { StatusModule } from './resource/status/status.module';
import { Support } from './resource/support/entities/support.entity';
import { Type } from './resource/type/entities/type.entity';
import { Zone } from './resource/zone/entities/zone.entity';
import { ForumMessageService } from './service/forum-message/forum-message.service';
import { LiveServicesService } from './service/live-services/live-services.service';
import { ServiceAlertsService } from './service/service-alerts/service-alerts.service';
import { UpdateService } from './service/update/update.service';
import { WebsocketService } from './service/websocket/websocket.service';
import { WinstonService } from './service/winston/winston.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Zone, Type, Support, Slug]),
    StatusModule,
    DatabaseModule,
    ServiceModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [
    ForumMessageService,
    LiveServicesService,
    ServiceAlertsService,
    WebsocketService,
    WinstonService,
    Scraper,
    UpdateService,
  ],
  exports: [
    Scraper,
    UpdateService,
    ForumMessageService,
    LiveServicesService,
    ServiceAlertsService,
    WebsocketService,
    WinstonService,
  ],
})
export class AppModule {}
