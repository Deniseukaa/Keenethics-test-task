import { LoggerService } from '@/logger/logger.service';
import { CreateBicycleDto } from '@bicycles/dto/create.bicycle.dto';
import { Bicycle } from '@bicycles/types/bicycle.types';
import { Model } from 'mongoose';

export class BicycleService {
  constructor(
    private readonly logger: LoggerService,
    private readonly bicycleModel: Model<Bicycle>,
  ) {}

  public async createBicycle(
    createBicycleDto: CreateBicycleDto,
  ): Promise<Bicycle> {
    this.logger.log(createBicycleDto);
    return this.bicycleModel.create(createBicycleDto);
  }
}
