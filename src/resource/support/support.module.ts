import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Support } from './entities/support.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Support])],
})
export class SupportModule {}
