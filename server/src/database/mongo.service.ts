import { connect, disconnect } from 'mongoose';

import { ConfigService } from '@/config/config.service';
import { LoggerService } from '@/logger/logger.service';
import { IMongoService } from './mongo.service.interface';

export class MongoService implements IMongoService {
  constructor(
    private readonly configService: ConfigService,
    private readonly logger: LoggerService,
  ) {}

  public async connect(): Promise<void> {
    try {
      await connect(this.configService.get('MONGODB_CONNECTION_LINK'));
      this.logger.log('Successfully connected to db');
    } catch (error) {
      if (error instanceof Error) {
        this.logger.error(error.message);
      }
    }
  }

  public async disconnect(): Promise<void> {
    try {
      await disconnect();
      this.logger.log('Successfully disconnected from db');
    } catch (error) {
      if (error instanceof Error) {
        this.logger.error(error.message);
      }
    }
  }
}
