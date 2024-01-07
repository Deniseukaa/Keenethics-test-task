import { NextFunction, Request, Response, Router } from 'express';

import { LoggerService } from '@/logger/logger.service';
import { BicycleService } from '@bicycles/bicycle.service';
import { CreateBicycleDto } from '@bicycles/dto/create.bicycle.dto';
import { UpdateBicycleDto } from '@bicycles/dto/update.bicycle.dto';
import { validateBicycleCreate } from '@bicycles/validation/create.bicycle.validation';
import { validateBicycleUpdate } from '@bicycles/validation/update.bicycle.validation';

export class BicycleController {
  public router: Router;
  constructor(
    private readonly logger: LoggerService,
    private readonly bicycleService: BicycleService,
  ) {
    this.router = Router();
    this.bindRoutes();
  }

  public async updateBicycle(
    req: Request<{ id: string }, {}, UpdateBicycleDto>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const body: UpdateBicycleDto = req.body;
    const id = req.params.id;
    try {
      await this.bicycleService.updateBicycle(id, body);
      res.status(200).json({ message: 'Bicycle successfully updated' });
    } catch (error) {
      next(error);
    }
  }

  public async deleteBicycle(
    req: Request<{ id: string }, {}, {}>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const id = req.params.id;
    try {
      await this.bicycleService.deleteBicycle(id);
      res.status(200).json({ message: 'Bicycle successfully deleted' });
    } catch (error) {
      next(error);
    }
  }

  public async createBicycle(
    req: Request<{}, {}, CreateBicycleDto>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const body: CreateBicycleDto = req.body;
    try {
      await this.bicycleService.createBicycle(body);
      res.status(200).json({ message: 'Bicycle successfully created' });
    } catch (error) {
      next(error);
    }
  }

  public async getStatistics(
    req: Request<{}, {}, {}>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const result = await this.bicycleService.getStatistics();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  public async getBicycles(
    req: Request<{}, {}, {}>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const result = await this.bicycleService.getBicycles();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  private bindRoutes(): void {
    this.router.delete('/:id', this.deleteBicycle.bind(this));
    this.router.put(
      '/:id',
      validateBicycleUpdate,
      this.updateBicycle.bind(this),
    );
    this.router.post('/', validateBicycleCreate, this.createBicycle.bind(this));
    this.router.get('/statistics', this.getStatistics.bind(this));
    this.router.get('/', this.getBicycles.bind(this));
  }
}
