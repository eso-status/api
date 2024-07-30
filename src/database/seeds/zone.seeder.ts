import { DataSource, InsertResult, Repository } from 'typeorm';
import { Seeder } from 'typeorm-extension';

import { Zone } from '../../resource/zone/entities/zone.entity';
import { zoneData } from '../data/zone.data';

export class ZoneSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository: Repository<Zone> = dataSource.getRepository(Zone);
    await Promise.all(
      zoneData.map((zone: Zone): Promise<InsertResult> => {
        return repository.insert(zone);
      }),
    );
  }
}
