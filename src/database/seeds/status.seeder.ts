import { DataSource, InsertResult, Repository } from 'typeorm';
import { Seeder } from 'typeorm-extension';

import { Status } from '../../resource/status/entities/status.entity';
import { statusData } from '../data/status.data';

export class StatusSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository: Repository<Status> = dataSource.getRepository(Status);
    await Promise.all(
      statusData.map((status: Status): Promise<InsertResult> => {
        return repository.insert(status);
      }),
    );
  }
}
