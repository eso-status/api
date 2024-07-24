import { InsertResult, MigrationInterface, QueryRunner } from 'typeorm';
import { Table } from 'typeorm/schema-builder/table/Table';

import { dataSource } from '../../config/typeorm.config';
import { Slug } from '../../resource/slug/entities/slug.entity';
import { slugData } from '../data/slug.data';

export class CreateSlugTable1721301961662 implements MigrationInterface {
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
            name: 'FK_SlugType',
            columnNames: ['typeId'],
            referencedTableName: 'type',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FK_SlugSupport',
            columnNames: ['supportId'],
            referencedTableName: 'support',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FK_SlugZone',
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

    await Promise.all(
      slugData.map((slug: Slug): Promise<InsertResult> => {
        return dataSource
          .createQueryBuilder()
          .insert()
          .into(Slug)
          .values({
            id: slug.id,
            slug: slug.slug,
            typeId: slug.typeId,
            supportId: slug.supportId,
            zoneId: slug.zoneId,
          })
          .execute();
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('slug');
  }
}
