import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import * as process from 'node:process';
import { Slug } from '../resource/slug/entities/slug.entity';
import { Type } from '../resource/type/entities/type.entity';
import { Zone } from '../resource/zone/entities/zone.entity';
import { Support } from '../resource/support/entities/support.entity';
import { TypeSeeder } from '../database/seeds/type.seeder';
import { ZoneSeeder } from '../database/seeds/zone.seeder';
import { SupportSeeder } from '../database/seeds/support.seeder';
import { SlugSeeder } from '../database/seeds/slug.seeder';

config();

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: <'sqlite' | 'mysql'>process.env.DB_TYPE,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [Type, Zone, Support, Slug],
  migrations: ['dist/database/migrations/*.js'],
  seeds: [TypeSeeder, ZoneSeeder, SupportSeeder, SlugSeeder],
  factories: [],
  migrationsRun: false,
  logging: process.env.APP_ENV === 'development',
  dropSchema: false,
};

export const dataSource: DataSource = new DataSource(dataSourceOptions);