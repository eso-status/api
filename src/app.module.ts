import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { SlugModule } from './resource/slug/slug.module';
import { TypeModule } from './resource/type/type.module';
import { ZoneModule } from './resource/zone/zone.module';
import { SupportModule } from './resource/support/support.module';
import { StatusModule } from './resource/status/status.module';
import { ServiceModule } from './resource/service/service.module';
import { ScheduleModule } from '@nestjs/schedule';
import { UpdateService } from './service/update/update.service';
import { ForumMessageService } from './service/forum-message/forum-message.service';
import { LiveServicesService } from './service/live-services/live-services.service';
import { ServiceAlertsService } from './service/service-alerts/service-alerts.service';
import { WebsocketService } from './service/websocket/websocket.service';
import { WinstonService } from './service/winston/winston.service';

@Module({
  imports: [
    DatabaseModule,
    SlugModule,
    TypeModule,
    ZoneModule,
    SupportModule,
    StatusModule,
    ServiceModule,
    ScheduleModule.forRoot(),
    UpdateService,
  ],
  controllers: [AppController],
  providers: [
    ForumMessageService,
    LiveServicesService,
    ServiceAlertsService,
    WebsocketService,
    WinstonService,
  ],
  exports: [
    UpdateService,
    ForumMessageService,
    LiveServicesService,
    ServiceAlertsService,
    WebsocketService,
    WinstonService,
  ],
})
export class AppModule {}
