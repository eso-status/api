import { DataSource, Repository } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Support } from '../../resource/support/entities/support.entity';
import { supportData } from '../data/support.data';

export class SupportSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    dataSource.getRepository(Support);
    const repository: Repository<Support> = dataSource.getRepository(Support);

    for (const support of supportData) {
      await repository.insert(support);
    }
  }
}