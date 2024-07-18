import { DataSource, Repository } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Slug } from '../../resource/slug/entities/slug.entity';

export class SlugSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    dataSource.getRepository(Slug);
    const repository: Repository<Slug> = dataSource.getRepository(Slug);

    const slugs: Slug[] = [
      { id: 1, slug: 'server_xbox_na' },
      { id: 2, slug: 'server_xbox_eu' },
      { id: 3, slug: 'server_ps_na' },
      { id: 4, slug: 'server_ps_eu' },
      { id: 5, slug: 'server_pc_na' },
      { id: 6, slug: 'server_pc_eu' },
      { id: 7, slug: 'server_pc_pts' },
      { id: 8, slug: 'service_web_site' },
      { id: 9, slug: 'service_web_forum' },
      { id: 10, slug: 'service_store_crown' },
      { id: 11, slug: 'service_store_eso' },
      { id: 12, slug: 'service_system_account' },
    ];

    for (const slug of slugs) {
      await repository.insert(slug);
    }
  }
}
