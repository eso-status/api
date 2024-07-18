import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SlugModule } from './resource/slug/slug.module';
import { TypeModule } from './resource/type/type.module';
import { ZoneModule } from './resource/zone/zone.module';
import { SupportModule } from './resource/support/support.module';
import { StatusModule } from './resource/status/status.module';
import { ServiceModule } from './resource/service/service.module';

@Module({
  imports: [
    DatabaseModule,
    SlugModule,
    TypeModule,
    ZoneModule,
    SupportModule,
    StatusModule,
    ServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
