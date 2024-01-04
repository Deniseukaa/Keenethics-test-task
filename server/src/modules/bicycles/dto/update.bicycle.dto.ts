import { PartialBicycleSchema } from '@bicycles/types/bicycle.types';
import { z } from 'zod';

export type UpdateBicycleDto = z.infer<typeof PartialBicycleSchema>;
