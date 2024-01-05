import { validate } from '@common/middlewares/validation.middleware';
import { BicycleSchema } from '@bicycles/types/bicycle.types';

export const validateBicycleCreate = validate(BicycleSchema);
