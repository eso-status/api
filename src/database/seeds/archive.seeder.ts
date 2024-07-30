import { DataSource, InsertResult, Repository } from 'typeorm';
import { Seeder } from 'typeorm-extension';

import { Archive } from '../../resource/archive/entities/archive.entity';
import { archiveData } from '../data/archive.data';

export class ArchiveSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository: Repository<Archive> = dataSource.getRepository(Archive);
    await Promise.all(
      archiveData.map((archive: Archive): Promise<InsertResult> => {
        return repository.insert(archive);
      }),
    );
  }
}
