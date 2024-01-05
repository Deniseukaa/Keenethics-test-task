import express, { Express } from 'express';
import { Server } from 'http';

import { ExceptionFilter } from '@/exceptionFilter/exception.filter';
import { BicycleController } from '@bicycles/bicycle.controller';
import { MongoService } from '@/database/mongo.service';
import { LoggerService } from '@/logger/logger.service';

export class App {
  app: Express;
  port: number;
  server: Server;

  constructor(
    private readonly logger: LoggerService,
    private readonly bicycleController: BicycleController,
    private readonly exceptionFilter: ExceptionFilter,
    private readonly mongoService: MongoService,
  ) {
    this.app = express();
    this.port = 3000;
  }
  useRoutes(): void {
    this.app.use('/bicycles', this.bicycleController.router);
  }

  useMiddleWare(): void {
    this.app.use(express.json());
  }

  useExeptionFilters(): void {
    this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
  }

  public async init(): Promise<void> {
    this.useMiddleWare();
    this.useRoutes();
    this.useExeptionFilters();
    await this.mongoService.connect();
    this.server = this.app.listen(this.port);
    this.logger.log(`Server starts on http://localhost:${this.port}`);
  }

  public close(): void {
    this.server.close();
  }
}
