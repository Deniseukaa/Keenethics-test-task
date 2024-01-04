import { Schema, model } from 'mongoose';

export enum BicycleStatusesEnum {
  available = 'Available',
  busy = 'Busy',
  unavailable = 'Unavailable',
}
export type BicycleStatusType = `${BicycleStatusesEnum}`;

export interface IBicycle {
  id: string;
  name: string;
  type: string;
  color: string;
  wheelSize: number;
  price: number;
  description: string;
  status: BicycleStatusType;
}

export const bicycleSchema = new Schema<IBicycle>({
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

export const Bicycle = model<IBicycle>('Bicycle', bicycleSchema);
