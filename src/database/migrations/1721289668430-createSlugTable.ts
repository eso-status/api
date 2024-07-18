import { MigrationInterface, QueryRunner } from 'typeorm';
import { Table } from 'typeorm/schema-builder/table/Table';

export class CreateSlugTable1721289668430 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'slug',
        columns: [
          {
            name: 'id',
            type: 'integer',
            length: '2',
            isPrimary: true,
            isGenerated: false,
          },
          {
            name: 'slug',
            type: 'varchar',
            length: '22',
            isNullable: false,
          },
          {
            name: 'typeId',
            type: 'integer',
            length: '1',
            isNullable: false,
          },
          {
            name: 'supportId',
            type: 'integer',
            length: '1',
            isNullable: false,
          },
          {
            name: 'zoneId',
            type: 'integer',
            length: '1',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            name: 'FK_Type',
            columnNames: ['typeId'],
            referencedTableName: 'type',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FK_Support',
            columnNames: ['supportId'],
            referencedTableName: 'support',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FK_Zone',
            columnNames: ['zoneId'],
            referencedTableName: 'zone',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('slug');
  }
}
