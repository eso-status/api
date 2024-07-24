import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

import { Service } from '../resource/service/entities/service.entity';
import { Slug } from '../resource/slug/entities/slug.entity';
import { Status } from '../resource/status/entities/status.entity';
import { Support } from '../resource/support/entities/support.entity';
import { Type } from '../resource/type/entities/type.entity';
import { Zone } from '../resource/zone/entities/zone.entity';

config();

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: <'sqlite' | 'mysql'>process.env.DB_TYPE,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [Type, Zone, Support, Slug, Status, Service],
  migrations: ['dist/database/migrations/*.js'],
  seeds: [],
  factories: [],
  migrationsRun: false,
  logging: process.env.DB_DEBUG === 'true',
  dropSchema: false,
};

export const dataSource: DataSource = new DataSource(dataSourceOptions);
