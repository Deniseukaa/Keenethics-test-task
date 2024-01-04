import * as Joi from 'joi';
import { BicycleStatusesEnum } from '../bicycle.model';

export const CreateBicycleDto = Joi.object({
  id: Joi.string().min(5).required(),
  name: Joi.string().min(5).required(),
  type: Joi.string().min(5).required(),
  color: Joi.string().min(5).required(),
  wheelSize: Joi.number().required(),
  price: Joi.number().required(),
  description: Joi.string().min(5).required(),
  status: Joi.string().valid(...Object.values(BicycleStatusesEnum)),
});
