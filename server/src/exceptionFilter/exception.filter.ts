import { NextFunction, Request, Response } from 'express';

import { LoggerService } from '@/logger/logger.service';
import { IExceptionFilter } from './exception.filter.interface';
import { HTTPError } from '@common/errors/http.error';

export class ExceptionFilter implements IExceptionFilter {
  constructor(private readonly logger: LoggerService) {}
  catch(
    err: Error | HTTPError,
    req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    if (err instanceof HTTPError) {
      this.logger.error(
        `[${err.context}] Error ${err.statusCode} : ${err.message}`,
      );
      res.status(err.statusCode).send({ err: err.message });
    } else {
      this.logger.error(`${err.message}`);
      res.status(500).send({ err: err.message });
    }
  }
}
