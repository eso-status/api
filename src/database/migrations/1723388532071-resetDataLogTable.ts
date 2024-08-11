import { MigrationInterface, QueryRunner, Repository } from 'typeorm';

import { dataSource } from '../../config/typeorm.config';
import { Log } from '../../resource/log/entities/log.entity';

export class ResetDataLogTable1723388532071 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const repository: Repository<Log> = dataSource.getRepository(Log);
    await repository.clear();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await this.up(queryRunner);
  }
}
