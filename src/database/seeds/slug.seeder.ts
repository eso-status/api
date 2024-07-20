import { DataSource, InsertResult, Repository } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

import { Slug } from '../../resource/slug/entities/slug.entity';
import { slugData } from '../data/slug.data';

export class SlugSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    dataSource.getRepository(Slug);
    const repository: Repository<Slug> = dataSource.getRepository(Slug);
    await Promise.all(
      slugData.map((slug: Slug): Promise<InsertResult> => {
        return repository.insert(slug);
      }),
    );
  }
}
