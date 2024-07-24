import { InsertResult, MigrationInterface, QueryRunner } from 'typeorm';
import { Table } from 'typeorm/schema-builder/table/Table';

import { dataSource } from '../../config/typeorm.config';
import { Service } from '../../resource/service/entities/service.entity';
import { serviceData } from '../data/service.data';

export class CreateServiceTable1721317393167 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'service',
        columns: [
          {
            name: 'id',
            type: 'integer',
            length: '2',
            isPrimary: true,
            isGenerated: false,
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
          {
            name: 'updatedAt',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
        foreignKeys: [
          {
            name: 'FK_ServiceSlug',
            columnNames: ['slugId'],
            referencedTableName: 'slug',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FK_ServiceStatus',
            columnNames: ['statusId'],
            referencedTableName: 'status',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FK_ServiceType',
            columnNames: ['typeId'],
            referencedTableName: 'type',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FK_ServiceSupport',
            columnNames: ['supportId'],
            referencedTableName: 'support',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FK_ServiceZone',
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
      serviceData.map((service: Service): Promise<InsertResult> => {
        return dataSource
          .createQueryBuilder()
          .insert()
          .into(Service)
          .values({
            id: service.id,
            slugId: service.slugId,
            typeId: service.typeId,
            supportId: service.supportId,
            zoneId: service.zoneId,
            statusId: service.statusId,
            rawData: service.rawData,
          })
          .execute();
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('slug');
  }
}
