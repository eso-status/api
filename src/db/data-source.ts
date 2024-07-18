import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import * as process from 'node:process';
import { Slug } from '../resource/slug/entities/slug.entity';
import { TypeSeeder } from './seeders/type.seeder';
import { Type } from '../resource/type/entities/type.entity';
import { Zone } from '../resource/zone/entities/zone.entity';
import { Support } from '../resource/support/entities/support.entity';
import { ZoneSeeder } from './seeders/zone.seeder';
import { SupportSeeder } from './seeders/support.seeder';
import { SlugSeeder } from './seeders/slug.seeder';

config();

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: <'sqlite' | 'mysql'>process.env.DB_TYPE,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [Type, Zone, Support, Slug],
  migrations: ['dist/db/migrations/*.js'],
  seeds: [TypeSeeder, ZoneSeeder, SupportSeeder, SlugSeeder],
  factories: [],
  migrationsRun: false,
  logging: process.env.APP_ENV === 'development',
  dropSchema: false,
};

export const dataSource: DataSource = new DataSource(dataSourceOptions);
