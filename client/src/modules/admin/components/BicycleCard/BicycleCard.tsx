import clsx from 'clsx';
import { FC } from 'react';

enum Statuses {
  Available = 'Available',
  Busy = 'Busy',
  Unavailable = 'Unavailable',
}

interface BicycleCardProps {
  id: string;
  name: string;
  type: string;
  status: keyof typeof Statuses;
  price: number;
}

export const BicycleCard: FC<BicycleCardProps> = ({
  id,
  name,
  type,
  status,
  price,
}) => {
  const classes = clsx('rounded-[10px] bg-special border-2 h-[83px] w-full', {
    'border-available': status === Statuses.Available,
    'border-busy': status === Statuses.Busy,
    'border-unavailable opacity-50 cursor-not-allowed':
      status === Statuses.Unavailable,
  });
  return (
    <div className={classes}>
      {id} {price} {name} {type}
    </div>
  );
};
