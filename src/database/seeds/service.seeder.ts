import { DataSource, InsertResult, Repository } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

import { Service } from '../../resource/service/entities/service.entity';
import { serviceData } from '../data/service.data';

export class ServiceSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    dataSource.getRepository(Service);
    const repository: Repository<Service> = dataSource.getRepository(Service);
    await Promise.all(
      serviceData.map((service: Service): Promise<InsertResult> => {
        return repository.insert(service);
      }),
    );
  }
}
