import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

import { ArchiveSeeder } from '../database/seeds/archive.seeder';
import { ServiceSeeder } from '../database/seeds/service.seeder';
import { SlugSeeder } from '../database/seeds/slug.seeder';
import { StatusSeeder } from '../database/seeds/status.seeder';
import { SupportSeeder } from '../database/seeds/support.seeder';
import { TypeSeeder } from '../database/seeds/type.seeder';
import { ZoneSeeder } from '../database/seeds/zone.seeder';
import { Archive } from '../resource/archive/entities/archive.entity';
import { Log } from '../resource/log/entities/log.entity';
import { Maintenance } from '../resource/maintenance/entities/maintenance.entity';
import { Service } from '../resource/service/entities/service.entity';
import { Slug } from '../resource/slug/entities/slug.entity';
import { Status } from '../resource/status/entities/status.entity';
import { Support } from '../resource/support/entities/support.entity';
import { Type } from '../resource/type/entities/type.entity';
import { Zone } from '../resource/zone/entities/zone.entity';

config();

// eslint-disable-next-line unused-imports/no-unused-vars
const sqliteDataSourceOptions: DataSourceOptions & SeederOptions = {
  type: <'sqlite'>process.env.DB_TYPE,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [
    Type,
    Zone,
    Support,
    Slug,
    Status,
    Service,
    Archive,
    Maintenance,
    Log,
  ],
  migrations: ['dist/database/migrations/*.js'],
  seeds: [
    TypeSeeder,
    ZoneSeeder,
    SupportSeeder,
    StatusSeeder,
    SlugSeeder,
    ServiceSeeder,
    ArchiveSeeder,
  ],
  factories: [],
  migrationsRun: false,
  logging: process.env.DB_DEBUG === 'true',
  dropSchema: false,
};

// eslint-disable-next-line unused-imports/no-unused-vars
const mysqlDataSourceOptions: DataSourceOptions & SeederOptions = {
  type: <'mysql'>process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [
    Type,
    Zone,
    Support,
    Slug,
    Status,
    Service,
    Archive,
    Maintenance,
    Log,
  ],
  migrations: ['dist/database/migrations/*.js'],
  seeds: [
    TypeSeeder,
    ZoneSeeder,
    SupportSeeder,
    StatusSeeder,
    SlugSeeder,
    ServiceSeeder,
    ArchiveSeeder,
  ],
  factories: [],
  migrationsRun: false,
  logging: process.env.DB_DEBUG === 'true',
  dropSchema: false,
};

// eslint-disable-next-line no-eval,@typescript-eslint/no-unsafe-assignment
export const dataSourceOptions: DataSourceOptions & SeederOptions = eval(
  `${process.env.DB_TYPE}DataSourceOptions`,
);

export const dataSource: DataSource = new DataSource(dataSourceOptions);
