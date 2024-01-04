import * as Joi from 'joi';
import { CreateBicycleDto } from './create.bicycle.dto';

export const UpdateBicycleDto = Joi.object(CreateBicycleDto).fork(
  Object.keys(CreateBicycleDto),
  (schema) => schema.optional(),
);
