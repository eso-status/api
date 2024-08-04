import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dataSourceOptions } from './config/typeorm.config';
import { ArchiveService } from './resource/archive/archive.service';
import { Archive } from './resource/archive/entities/archive.entity';
import { Log } from './resource/log/entities/log.entity';
import { LogService } from './resource/log/log.service';
import { Maintenance } from './resource/maintenance/entities/maintenance.entity';
import { MaintenanceService } from './resource/maintenance/maintenance.service';
import { ServiceModule } from './resource/service/service.module';
import { Slug } from './resource/slug/entities/slug.entity';
import { Status } from './resource/status/entities/status.entity';
import { StatusService } from './resource/status/status.service';
import { Support } from './resource/support/entities/support.entity';
import { Type } from './resource/type/entities/type.entity';
import { Zone } from './resource/zone/entities/zone.entity';
import { ScrapingService } from './service/scraping/scraping.service';
import { WebsocketService } from './service/websocket/websocket.service';
import { WinstonService } from './service/winston/winston.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([
      Zone,
      Type,
      Support,
      Slug,
      Status,
      Archive,
      Maintenance,
      Log,
    ]),
    ServiceModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [
    StatusService,
    ArchiveService,
    MaintenanceService,
    LogService,
    WebsocketService,
    WinstonService,
    ScrapingService,
  ],
  exports: [
    StatusService,
    ArchiveService,
    MaintenanceService,
    LogService,
    WebsocketService,
    WinstonService,
    ScrapingService,
  ],
})
export class AppModule {}
