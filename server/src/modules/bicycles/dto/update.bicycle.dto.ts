import { z } from 'zod';

import { PartialBicycleSchema } from '@bicycles/types/bicycle.types';

export type UpdateBicycleDto = z.infer<typeof PartialBicycleSchema>;
