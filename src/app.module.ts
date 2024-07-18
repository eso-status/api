import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SlugModule } from './resource/slug/slug.module';
import { TypeModule } from './resource/type/type.module';
import { ZoneModule } from './resource/zone/zone.module';
import { SupportModule } from './resource/support/support.module';

@Module({
  imports: [DatabaseModule, SlugModule, TypeModule, ZoneModule, SupportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
