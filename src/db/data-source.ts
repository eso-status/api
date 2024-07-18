import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import * as process from 'node:process';
import { Slug } from '../resource/slug/entities/slug.entity';
import { SlugSeeder } from './seeders/slug.seeder';

config();

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: <'sqlite'>process.env.DB_TYPE || 'sqlite',
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [Slug],
  migrations: ['dist/db/migrations/*.js'],
  seeds: [SlugSeeder],
  factories: [],
  migrationsRun: false,
  logging: process.env.APP_ENV === 'development',
  dropSchema: false,
};

export const dataSource: DataSource = new DataSource(dataSourceOptions);
