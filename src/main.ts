import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';

import { AppModule } from './app.module';
import { WinstonService } from './service/winston/winston.service';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new WinstonService(),
  });
  await app.listen(process.env.APP_PORT);
}
bootstrap()
  .then()
  .catch((error: Error): void => {
    throw error;
  });
