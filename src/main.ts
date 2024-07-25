import * as fs from 'node:fs';

import { INestApplication } from '@nestjs/common';
import { NestApplicationOptions } from '@nestjs/common/interfaces/nest-application-options.interface';
import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';

import { runSeeders } from 'typeorm-extension';

import { AppModule } from './app.module';
import { dataSource } from './config/typeorm.config';
import { WinstonService } from './service/winston/winston.service';

config();

async function bootstrap() {
  if (process.env.NODE_ENV === 'development') {
    await dataSource.initialize();
    await dataSource.dropDatabase();
    await dataSource.runMigrations();
    await runSeeders(dataSource);
  }

  const options: NestApplicationOptions = {
    logger: new WinstonService(),
  };

  if (process.env.APP_PROTOCOL === 'https') {
    options.httpsOptions = {
      key: fs.readFileSync('private.key'),
      cert: fs.readFileSync('certificate.crt'),
      ca: fs.readFileSync('ca_bundle.crt'),
    };
  }

  const app: INestApplication = await NestFactory.create(AppModule, options);

  await app.listen(process.env.APP_PORT);
}
bootstrap()
  .then()
  .catch((error: Error): void => {
    throw error;
  });
