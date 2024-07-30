import * as fs from 'node:fs';

import { INestApplication } from '@nestjs/common';
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

  const app: INestApplication = await NestFactory.create(AppModule, {
    logger: new WinstonService(),
    httpsOptions: {
      key: fs.readFileSync('private.key'),
      cert: fs.readFileSync('certificate.crt'),
      ca: fs.readFileSync('ca_bundle.crt'),
    },
  });

  app.setGlobalPrefix(process.env.APP_PREFIX);

  await app.listen(process.env.APP_PORT);
}
bootstrap()
  .then()
  .catch((error: Error): void => {
    throw error;
  });
