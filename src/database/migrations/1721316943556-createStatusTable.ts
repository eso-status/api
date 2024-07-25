import { MigrationInterface, QueryRunner } from 'typeorm';
import { Table } from 'typeorm/schema-builder/table/Table';

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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('status');
  }
}
