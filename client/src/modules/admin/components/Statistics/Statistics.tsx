import { useGetStatisticsQuery } from '@admin/repository/bicycle.repository';
import { Spinner } from '@components/spinner/Spinner';
import { FC } from 'react';

interface StatisticsProps {}

export const Statistics: FC<StatisticsProps> = () => {
  const { data, isLoading, isError } = useGetStatisticsQuery();

  if (isLoading) {
    return (
      <div className="flex w-full justify-center">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex w-full justify-center">
        <p>Server error!!!😵‍💫</p>
      </div>
    );
  }

  return (
    <section className="flex flex-1 flex-col gap-[5px]">
      {data ? (
        <>
          <h2 className="text-lg font-bold">Statistics</h2>
          <p className="text-sm">
            Total bikes:&nbsp;
            <span className="text-sm font-bold">{data.total}</span>
          </p>
          <p className="text-sm">
            Available Bikes:&nbsp;
            <span className="text-sm font-bold">{data.available}</span>
          </p>
          <p className="text-sm">
            Booked Bikes:&nbsp;
            <span className="text-sm font-bold">{data.booked}</span>
          </p>
          <p className="text-sm">
            Average bike cost:&nbsp;
            <span className="text-sm font-bold">
              {data.averagePrice.toFixed(2)}
            </span>
            &nbsp;UAH/hr.
          </p>
        </>
      ) : (
        <p>Something went wrong😮</p>
      )}
    </section>
  );
};
