import { FC } from 'react';

interface StatisticsProps {}

export const Statistics: FC<StatisticsProps> = () => {
  return (
    <section className="flex flex-1 flex-col gap-[5px] p-[10px]">
      <h2 className="text-lg font-bold">Statistics</h2>
      <p className="text-sm">
        Total bikes:&nbsp;
        <span className="text-sm font-bold">0</span>
      </p>
      <p className="text-sm">
        Available Bikes:&nbsp;
        <span className="text-sm font-bold">0</span>
      </p>
      <p className="text-sm">
        Booked Bikes:&nbsp;
        <span className="text-sm font-bold">0</span>
      </p>
      <p className="text-sm">
        Average bike cost:&nbsp;
        <span className="text-sm font-bold">0.00</span>
        &nbsp;UAH/hr.
      </p>
    </section>
  );
};
