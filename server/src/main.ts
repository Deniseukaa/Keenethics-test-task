import { App } from '@/app';
import { ConfigService } from '@/config/config.service';
import { MongoService } from '@/database/mongo.service';
import { ExceptionFilter } from '@/exceptionFilter/exception.filter';
import { LoggerService } from '@/logger/logger.service';
import { BicycleController } from '@bicycles/bicycle.controller';
import { BicycleModel } from '@bicycles/bicycle.model';
import { BicycleService } from '@bicycles/bicycle.service';

async function bootstrap(): Promise<App> {
  const logger = new LoggerService();
  const configService = new ConfigService(logger);
  const mongoService = new MongoService(configService, logger);
  const exceptionFilter = new ExceptionFilter(logger);

  const bicycleService = new BicycleService(logger, BicycleModel);
  const bicycleController = new BicycleController(logger, bicycleService);

  const app = new App(logger, bicycleController, exceptionFilter, mongoService);
  await app.init();
  return app;
}

export const boot = bootstrap();
