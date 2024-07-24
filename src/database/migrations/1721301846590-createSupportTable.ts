import { MigrationInterface, QueryRunner } from 'typeorm';
import { Table } from 'typeorm/schema-builder/table/Table';

import { dataSource } from '../../config/typeorm.config';
import { Support } from '../../resource/support/entities/support.entity';
import { supportData } from '../data/support.data';

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

    await dataSource.initialize();

    await Promise.all(
      supportData.map((support: Support): Promise<Support> => {
        return dataSource.getRepository(Support).save(
          dataSource.getRepository(Support).create({
            id: support.id,
            support: support.support,
          }),
        );
      }),
    );

    await dataSource.destroy();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('support');
  }
}
