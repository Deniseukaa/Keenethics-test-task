import { z } from 'zod';

export enum BicycleStatusesEnum {
  Available,
  Busy,
  Unavailable,
}
export type BicycleStatusType = keyof typeof BicycleStatusesEnum;

export const BicycleSchema = z.object({
  id: z
    .string({
      required_error: 'Id is required',
    })
    .trim()
    .min(5, 'Min length 5 symbols'),
  name: z
    .string({
      required_error: 'name is required',
    })
    .trim()
    .min(5, 'Min length 5 symbols'),
  type: z
    .string({
      required_error: 'Type is required',
    })
    .trim()
    .min(5, 'Min length 5 symbols'),
  color: z
    .string({
      required_error: 'Color is required',
    })
    .trim()
    .min(5, 'Min length 5 symbols'),
  wheelSize: z.number({
    required_error: 'Wheel size is required',
  }),
  price: z.number({
    required_error: 'Wheel size is required',
  }),
  description: z
    .string({
      required_error: 'Description is required',
    })
    .trim()
    .min(5, 'Min length 5 symbols'),
  status: z
    .enum(['Available', 'Busy', 'Unavailable'], {
      errorMap: (issue, ctx) => {
        return { message: 'Invalid role' };
      },
    })
    .default('Available'),
});

export const PartialBicycleSchema = BicycleSchema.partial();
export type Bicycle = z.infer<typeof BicycleSchema>;
