import { z } from 'zod';
import { BicycleSchema, PartialBicycleSchema } from '../types/bicycle.types';

export type UpdateBicycleDto = z.infer<typeof PartialBicycleSchema>;
