import { config } from 'dotenv';
import * as winston from 'winston';
import { Logger } from 'winston';
import * as WinstonCloudWatch from 'winston-cloudwatch';

config();

const winstonLogger: Logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'MM/DD/YYYY, hh:mm:ss A',
    }),
    winston.format.printf(
      ({ level, message, timestamp, context }): string =>
        `[32m[${process.env.APP_NAME}] ${process.pid}  - [39m${timestamp}[32m     ${level.toUpperCase()} [${context}] : ${message}[39m`,
    ),
  ),
  transports: [
    new winston.transports.Console(),
    new WinstonCloudWatch({
      logGroupName: process.env.CLOUDWATCH_GROUP_NAME,
      logStreamName: process.env.CLOUDWATCH_STREAM_NAME,
      awsRegion: process.env.AWS_REGION,
      awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
      awsSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
      jsonMessage: true,
      silent: process.env.NODE_ENV === 'test',
    }),
  ],
});

export { winstonLogger };
