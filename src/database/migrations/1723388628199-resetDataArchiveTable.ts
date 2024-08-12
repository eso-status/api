import { config } from 'dotenv';
import { MigrationInterface, QueryRunner, Repository } from 'typeorm';

import { runSeeder } from 'typeorm-extension';

import { dataSource } from '../../config/typeorm.config';
import { Archive } from '../../resource/archive/entities/archive.entity';

import { ArchiveSeeder } from '../seeds/archive.seeder';

config();

export class ResetDataArchiveTable1723388628199 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const repository: Repository<Archive> = dataSource.getRepository(Archive);

    if (process.env.NODE_ENV !== 'test') {
      await repository.clear();
      await runSeeder(dataSource, ArchiveSeeder);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await this.up(queryRunner);
  }
}
