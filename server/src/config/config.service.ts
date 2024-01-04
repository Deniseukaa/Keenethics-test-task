import { DotenvConfigOutput, DotenvParseOutput, config } from 'dotenv';
import { IConfigService } from './config.service.interface';
import { LoggerService } from '@/logger/logger.service';

export class ConfigService implements IConfigService {
  private config: DotenvParseOutput;

  constructor(private readonly logger: LoggerService) {
    const result: DotenvConfigOutput = config();
    if (result.error) {
      this.logger.error('Cant read .env file');
    } else {
      this.logger.log('Config .env was loaded');
      this.config = result.parsed as DotenvParseOutput;
    }
  }
  get(key: string): string {
    return this.config[key];
  }
}
