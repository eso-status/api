import { MigrationInterface, QueryRunner } from 'typeorm';
import { Table } from 'typeorm/schema-builder/table/Table';

import { dataSource } from '../../config/typeorm.config';
import { Type } from '../../resource/type/entities/type.entity';
import { typeData } from '../data/type.data';

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

    await dataSource.initialize();

    await Promise.all(
      typeData.map((type: Type): Promise<Type> => {
        return dataSource.getRepository(Type).save(
          dataSource.getRepository(Type).create({
            id: type.id,
            type: type.type,
          }),
        );
      }),
    );

    await dataSource.destroy();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('type');
  }
}
