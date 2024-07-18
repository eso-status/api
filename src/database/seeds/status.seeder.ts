import { DataSource, Repository } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Status } from '../../resource/status/entities/status.entity';
import { statusData } from '../data/status.data';

export class StatusSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    dataSource.getRepository(Status);
    const repository: Repository<Status> = dataSource.getRepository(Status);

    for (const status of statusData) {
      await repository.insert(status);
    }
  }
}
