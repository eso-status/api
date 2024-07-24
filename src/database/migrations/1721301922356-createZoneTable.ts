import { InsertResult, MigrationInterface, QueryRunner } from 'typeorm';
import { Table } from 'typeorm/schema-builder/table/Table';

import { dataSource } from '../../config/typeorm.config';
import { Zone } from '../../resource/zone/entities/zone.entity';
import { zoneData } from '../data/zone.data';

export class CreateZoneTable1721301922356 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'zone',
        columns: [
          {
            name: 'id',
            type: 'integer',
            length: '1',
            isPrimary: true,
            isGenerated: false,
          },
          {
            name: 'zone',
            type: 'varchar',
            length: '7',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await Promise.all(
      zoneData.map((zone: Zone): Promise<InsertResult> => {
        return dataSource
          .createQueryBuilder()
          .insert()
          .into(Zone)
          .values({
            id: zone.id,
            zone: zone.zone,
          })
          .execute();
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('zone');
  }
}
