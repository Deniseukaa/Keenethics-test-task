import {
  Bicycle,
  BicycleStatusesEnum,
  PartialBicycle,
} from '@admin/types/bicycle.types';
import clsx from 'clsx';
import React, { FC, memo, useState } from 'react';

type BicycleCardProps = {
  onDelete: (id: string) => void;
  onUpdate: (id: string, data: PartialBicycle) => void;
} & Omit<Bicycle, 'wheelSize' | 'description'>;

export const BicycleCard: FC<BicycleCardProps> = memo(
  ({ id, name, type, status, price, color, onDelete, onUpdate }) => {
    const classes = clsx(
      'rounded-[10px] bg-special border-2 w-full p-3 flex justify-between',
      {
        'border-available': status === BicycleStatusesEnum.Available,
        'border-busy': status === BicycleStatusesEnum.Busy,
        'border-unavailable opacity-50 cursor-not-allowed':
          status === BicycleStatusesEnum.Unavailable,
      },
    );
    const [selectedOption, setSelectedOption] =
      useState<keyof typeof BicycleStatusesEnum>(status);

    const handleSelectChange = (
      event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
      event.preventDefault();
      const selectedValue = event.target.value as BicycleStatusesEnum;
      setSelectedOption(selectedValue);
      onUpdate(id, { status: selectedValue });
    };
    return (
      <div className={classes}>
        <div>
          <p className="text-sm  text-cardTextFont">
            <span className="text-sm font-bold text-cardTextFont">{name}</span>{' '}
            - {type} ({color})
          </p>
          <p className="text-[8px] leading-normal text-cardIdFont">ID: {id}</p>

          <span className="mr-[18px] text-sm text-cardTextFont">STATUS:</span>
          <select
            className="bg-transparent text-sm"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            {Object.keys(BicycleStatusesEnum).map((status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-end justify-between">
          <button
            type="button"
            className="h-[10px] w-[10px] cursor-pointer"
            onClick={() => onDelete(id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[10px] w-[10px]"
              viewBox="0 0 10 10"
            >
              <path d="M9 9L1 1M9 1L1 9" className="stroke-black stroke-2" />
            </svg>
          </button>

          <p className="text-sm text-cardTextFont sm:text-xl lg:text-2xl ">
            {price} UAH/hr.
          </p>
        </div>
      </div>
    );
  },
);
