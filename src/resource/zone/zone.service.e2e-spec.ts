import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource, dataSourceOptions } from '../../db/data-source';
import { INestApplication } from '@nestjs/common';
import { runSeeders } from 'typeorm-extension';
import { ZoneModule } from './zone.module';
import { Zone } from './entities/zone.entity';
import { ZoneService } from './zone.service';
import { zoneData } from '../../db/data/zone.data';

describe('ZoneService (e2e)', () => {
  let app: INestApplication;
  let zoneService: ZoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        TypeOrmModule.forFeature([Zone]),
        ZoneModule,
      ],
      providers: [ZoneService],
    }).compile();

    app = module.createNestApplication();
    zoneService = module.get<ZoneService>(ZoneService);
    await app.init();

    await dataSource.initialize();
    await dataSource.dropDatabase();
    await dataSource.runMigrations();
    await runSeeders(dataSource);
  });

  afterEach(async () => {
    await app.close();
  });

  it('should return an array of zones', async () => {
    const receivedZones: Zone[] = await zoneService.findAll();
    expect(receivedZones).toEqual(zoneData);
  });
});
