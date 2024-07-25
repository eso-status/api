import { MigrationInterface, QueryRunner } from 'typeorm';
import { Table } from 'typeorm/schema-builder/table/Table';

export class CreateTypeTable1721289668430 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'type',
        columns: [
          {
            name: 'id',
            type: 'integer',
            length: '1',
            isPrimary: true,
            isGenerated: false,
          },
          {
            name: 'type',
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
    await queryRunner.dropTable('type');
  }
}
