import { Injectable, LoggerService } from '@nestjs/common';
import { winstonLogger } from '../../config/winston-config';

@Injectable()
export class WinstonService implements LoggerService {
  log(message: string, context?: string) {
    winstonLogger.info(message, { context });
  }

  fatal(message: string, trace: string, context?: string) {
    winstonLogger.error(message, { trace, context });
  }

  error(message: string, trace: string, context?: string) {
    winstonLogger.error(message, { trace, context });
  }

  warn(message: string, context?: string) {
    winstonLogger.warn(message, { context });
  }

  debug(message: string, context?: string) {
    winstonLogger.debug(message, { context });
  }

  verbose(message: string, context?: string) {
    winstonLogger.verbose(message, { context });
  }
}
