import { MigrationInterface, QueryRunner } from 'typeorm';
import { Table } from 'typeorm/schema-builder/table/Table';

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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('support');
  }
}
