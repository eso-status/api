import { config } from 'dotenv';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { Table } from 'typeorm/schema-builder/table/Table';

import { runSeeder } from 'typeorm-extension';

import { dataSource } from '../../config/typeorm.config';
import { SupportSeeder } from '../seeds/support.seeder';

config();

export class CreateSupportTable1721301846590 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'support',
        columns: [
          {
            name: 'id',
            type: 'integer',
            length: '1',
            isPrimary: true,
            isGenerated: false,
          },
          {
            name: 'support',
            type: 'varchar',
            length: '6',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    if (process.env.NODE_ENV !== 'test') {
      await runSeeder(dataSource, SupportSeeder);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('support');
  }
}
