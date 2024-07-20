import { DataSource, InsertResult, Repository } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

import { Zone } from '../../resource/zone/entities/zone.entity';
import { zoneData } from '../data/zone.data';

export class ZoneSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    dataSource.getRepository(Zone);
    const repository: Repository<Zone> = dataSource.getRepository(Zone);
    await Promise.all(
      zoneData.map((zone: Zone): Promise<InsertResult> => {
        return repository.insert(zone);
      }),
    );
  }
}
