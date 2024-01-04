import { Schema, model } from 'mongoose';
import { Bicycle } from './types/bicycle.types';

export const bicycleSchema = new Schema<Bicycle>({
  id: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, 'Min length 5 symbols'],
  },
  name: {
    type: String,
    required: true,
    minlength: [5, 'Min length 5 symbols'],
  },
  type: {
    type: String,
    required: true,
    minlength: [5, 'Min length 5 symbols'],
  },
  color: {
    type: String,
    required: true,
    minlength: [5, 'Min length 5 symbols'],
  },
  description: {
    type: String,
    required: true,
    minlength: [5, 'Min length 5 symbols'],
  },
  price: { type: Number, required: true },
  wheelSize: { type: Number, required: true },
  status: {
    type: String,
    required: true,
    enum: ['Available', 'Busy', 'Unavailable'],
    default: 'Available',
  },
});

export const BicycleModel = model<Bicycle>('Bicycle', bicycleSchema);
