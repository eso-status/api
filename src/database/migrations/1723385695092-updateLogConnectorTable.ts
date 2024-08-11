import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateLogConnectorTable1723385695092
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'log',
      'connector',
      new TableColumn({
        name: 'connector',
        type: 'varchar',
        length: '15',
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'log',
      'connector',
      new TableColumn({
        name: 'connector',
        type: 'varchar',
        length: '13',
        isNullable: false,
      }),
    );
  }
}
