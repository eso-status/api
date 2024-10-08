import * as fs from 'node:fs';

import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';

import { AppModule } from './app.module';
import { WinstonService } from './service/winston/winston.service';

config();

export async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule, {
    logger: new WinstonService(),
    httpsOptions: {
      key: fs.readFileSync('private.key'),
      cert: fs.readFileSync('certificate.crt'),
      ca: fs.readFileSync('ca_bundle.crt'),
    },
  });

  app.setGlobalPrefix(process.env.APP_PREFIX);

  app.enableShutdownHooks();

  await app.listen(process.env.APP_PORT);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
