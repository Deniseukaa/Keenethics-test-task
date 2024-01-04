import { z } from 'zod';
import { BicycleSchema } from '../types/bicycle.types';

export type CreateBicycleDto = z.infer<typeof BicycleSchema>;
