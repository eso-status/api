import { InsertResult, MigrationInterface, QueryRunner } from 'typeorm';
import { Table } from 'typeorm/schema-builder/table/Table';

import { dataSource } from '../../config/typeorm.config';
import { Status } from '../../resource/status/entities/status.entity';
import { statusData } from '../data/status.data';

export class CreateStatusTable1721316943556 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'status',
        columns: [
          {
            name: 'id',
            type: 'integer',
            length: '1',
            isPrimary: true,
            isGenerated: false,
          },
          {
            name: 'status',
            type: 'varchar',
            length: '7',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await Promise.all(
      statusData.map((status: Status): Promise<InsertResult> => {
        return dataSource
          .createQueryBuilder()
          .insert()
          .into(Status)
          .values({
            id: status.id,
            status: status.status,
          })
          .execute();
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('status');
  }
}
