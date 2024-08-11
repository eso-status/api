import { config } from 'dotenv';
import { MigrationInterface, QueryRunner, Repository } from 'typeorm';

import { dataSource } from '../../config/typeorm.config';
import { Log } from '../../resource/log/entities/log.entity';

config();

export class ResetDataLogTable1723388532071 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const repository: Repository<Log> = dataSource.getRepository(Log);

    if (process.env.NODE_ENV !== 'test') {
      await repository.clear();
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await this.up(queryRunner);
  }
}
