import { validate } from '@common/middlewares/validation.middleware';
import { PartialBicycleSchema } from '@bicycles/types/bicycle.types';

export const validateBicycleUpdate = validate(PartialBicycleSchema);
