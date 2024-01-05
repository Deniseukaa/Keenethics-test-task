import { z } from 'zod';

import { BicycleSchema } from '@bicycles/types/bicycle.types';

export type CreateBicycleDto = z.infer<typeof BicycleSchema>;
