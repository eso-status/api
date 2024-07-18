import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource, dataSourceOptions } from '../../db/data-source';
import { INestApplication } from '@nestjs/common';
import { runSeeders } from 'typeorm-extension';
import { TypeService } from './type.service';
import { Type } from './entities/type.entity';
import { TypeModule } from './type.module';
import { typeData } from '../../db/data/type.data';

describe('TypeService (e2e)', () => {
  let app: INestApplication;
  let typeService: TypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        TypeOrmModule.forFeature([Type]),
        TypeModule,
      ],
      providers: [TypeService],
    }).compile();

    app = module.createNestApplication();
    typeService = module.get<TypeService>(TypeService);
    await app.init();

    await dataSource.initialize();
    await dataSource.dropDatabase();
    await dataSource.runMigrations();
    await runSeeders(dataSource);
  });

  afterEach(async () => {
    await app.close();
  });

  it('should return an array of types', async () => {
    const receivedTypes: Type[] = await typeService.findAll();
    expect(receivedTypes).toEqual(typeData);
  });
});
