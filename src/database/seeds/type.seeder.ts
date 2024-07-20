import { DataSource, InsertResult, Repository } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

import { Type } from '../../resource/type/entities/type.entity';
import { typeData } from '../data/type.data';

export class TypeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    dataSource.getRepository(Type);
    const repository: Repository<Type> = dataSource.getRepository(Type);
    await Promise.all(
      typeData.map((type: Type): Promise<InsertResult> => {
        return repository.insert(type);
      }),
    );
  }
}
