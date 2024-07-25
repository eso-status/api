import { MigrationInterface, QueryRunner } from 'typeorm';
import { Table } from 'typeorm/schema-builder/table/Table';

export class CreateArchiveTable1721839547958 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'archive',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'serviceId',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'slugId',
            type: 'integer',
            length: '2',
            isNullable: false,
          },
          {
            name: 'statusId',
            type: 'integer',
            length: '1',
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
          {
            name: 'rawData',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
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
            name: 'FK_ArchiveSlug',
            columnNames: ['slugId'],
            referencedTableName: 'slug',
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
          {
            name: 'FK_ArchiveType',
            columnNames: ['typeId'],
            referencedTableName: 'type',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FK_ArchiveSupport',
            columnNames: ['supportId'],
            referencedTableName: 'support',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FK_ArchiveZone',
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
    await queryRunner.dropTable('archive');
  }
}
