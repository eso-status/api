import { DataSource, InsertResult, Repository } from 'typeorm';
import { Seeder } from 'typeorm-extension';

import { Support } from '../../resource/support/entities/support.entity';
import { supportData } from '../data/support.data';

export class SupportSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository: Repository<Support> = dataSource.getRepository(Support);
    await Promise.all(
      supportData.map((support: Support): Promise<InsertResult> => {
        return repository.insert(support);
      }),
    );
  }
}
