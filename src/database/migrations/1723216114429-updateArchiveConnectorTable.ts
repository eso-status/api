import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateArchiveConnectorTable1723216114429
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'archive',
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
      'archive',
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
