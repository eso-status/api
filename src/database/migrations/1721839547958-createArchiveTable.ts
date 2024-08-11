import { config } from 'dotenv';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { Table } from 'typeorm/schema-builder/table/Table';

import { runSeeder } from 'typeorm-extension';

import { dataSource } from '../../config/typeorm.config';
import { ArchiveSeeder } from '../seeds/archive.seeder';

config();

export class CreateArchiveTable1721839547958 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'archive',
        columns: [
          {
            name: 'id',
            type: 'integer',
            length: '2',
            isPrimary: true,
            isGenerated: false,
          },
          {
            name: 'connector',
            type: 'varchar',
            length: '15',
            isNullable: false,
          },
          {
            name: 'serviceId',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'statusId',
            type: 'integer',
            length: '1',
            isNullable: false,
          },
          {
            name: 'rawData',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'updatedAt',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
        foreignKeys: [
          {
            name: 'FK_ArchiveService',
            columnNames: ['serviceId'],
            referencedTableName: 'service',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FK_ArchiveStatus',
            columnNames: ['statusId'],
            referencedTableName: 'status',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
      true,
    );

    if (process.env.NODE_ENV !== 'test') {
      await runSeeder(dataSource, ArchiveSeeder);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('archive');
  }
}
