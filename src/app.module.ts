import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { SlugModule } from './resource/slug/slug.module';

@Module({
  imports: [DbModule, SlugModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
