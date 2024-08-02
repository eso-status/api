import { config } from 'dotenv';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { Table } from 'typeorm/schema-builder/table/Table';

import { runSeeder } from 'typeorm-extension';

import { dataSource } from '../../config/typeorm.config';
import { ZoneSeeder } from '../seeds/zone.seeder';

config();

export class CreateZoneTable1721301922356 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'zone',
        columns: [
          {
            name: 'id',
            type: 'integer',
            length: '1',
            isPrimary: true,
            isGenerated: false,
          },
          {
            name: 'zone',
            type: 'varchar',
            length: '7',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    if (process.env.NODE_ENV !== 'test') {
      await runSeeder(dataSource, ZoneSeeder);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('zone');
  }
}
