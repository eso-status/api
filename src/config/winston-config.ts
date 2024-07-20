import * as winston from 'winston';
import * as WinstonCloudWatch from 'winston-cloudwatch';
import { config } from 'dotenv';

config();

const cloudWatch: WinstonCloudWatch = new WinstonCloudWatch({
  logGroupName: process.env.CLOUDWATCH_GROUP_NAME,
  logStreamName: process.env.CLOUDWATCH_STREAM_NAME,
  awsRegion: process.env.AWS_REGION,
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
  awsSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
  jsonMessage: true, // Option pour formater les messages en JSON pour CloudWatch
});

const winstonLogger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'MM/DD/YYYY, hh:mm:ss A',
        }),
        winston.format.printf(({ level, message, timestamp, context }) => {
          return `[32m[${process.env.APP_NAME}] ${process.pid}  - [39m${timestamp}[32m     ${level.toUpperCase()} [${context}] : ${message}[39m`;
        }),
      ),
      silent: process.env.NODE_ENV !== 'development',
    }),
  ],
});

if (process.env.NODE_ENV === 'production') {
  winstonLogger.transports.push(cloudWatch);
}

export { winstonLogger };
