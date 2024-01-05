import { Model } from 'mongoose';

import { HTTPError } from '@/common/errors/http.error';
import { LoggerService } from '@/logger/logger.service';
import { CreateBicycleDto } from '@bicycles/dto/create.bicycle.dto';
import { Bicycle } from '@bicycles/types/bicycle.types';
import { UpdateBicycleDto } from './dto/update.bicycle.dto';
import { BicycleStatisticsType } from './types/bicycle.statistics.type';

export class BicycleService {
  constructor(
    private readonly logger: LoggerService,
    private readonly bicycleModel: Model<Bicycle>,
  ) {}

  public async createBicycle(
    createBicycleDto: CreateBicycleDto,
  ): Promise<Bicycle> {
    this.logger.log(createBicycleDto);
    const existingBicycle = await this.bicycleModel.findOne({
      id: createBicycleDto.id,
    });
    if (existingBicycle) {
      throw new HTTPError(409, 'Bicycle with given ID already exists');
    }
    const result = this.bicycleModel.create(createBicycleDto);
    return result;
  }

  public async getBicycles(): Promise<Bicycle[]> {
    const result = await this.bicycleModel.find();
    return result;
  }

  public async deleteBicycle(id: string): Promise<void> {
    const existingBicycle = await this.bicycleModel.findOne({
      id,
    });
    if (!existingBicycle) {
      throw new HTTPError(409, 'Bicycle with given ID doesn`t exists');
    }
    await this.bicycleModel.deleteOne({ id });
  }

  public async updateBicycle(
    id: string,
    updateBicycleDto: UpdateBicycleDto,
  ): Promise<void> {
    this.logger.log(id);
    this.logger.log(updateBicycleDto);
    const result = await this.bicycleModel.findOneAndUpdate(
      { id },
      updateBicycleDto,
    );
    if (!result) {
      throw new HTTPError(409, 'Wrong id');
    }
  }

  public async getStatistics(): Promise<BicycleStatisticsType> {
    const total = await this.bicycleModel.countDocuments();
    const available = await this.bicycleModel.countDocuments({
      status: 'Available',
    });
    const booked = await this.bicycleModel.countDocuments({ status: 'Busy' });
    const averagePrice = await this.bicycleModel.aggregate([
      {
        $group: {
          _id: null,
          averagePrice: { $avg: '$price' },
        },
      },
    ]);
    return {
      total,
      available,
      averagePrice: averagePrice[0].averagePrice,
      booked,
    };
  }
}
