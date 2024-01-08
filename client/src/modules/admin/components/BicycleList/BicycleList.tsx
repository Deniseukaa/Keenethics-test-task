import {
  useDeleteBicycleMutation,
  useGetBicyclesQuery,
  useUpdateBicycleMutation,
} from '@admin/repository/bicycle.repository';
import { PartialBicycle } from '@admin/types/bicycle.types';
import { Spinner } from '@components/spinner/Spinner';
import { FC, useCallback } from 'react';
import { BicycleCard } from '../BicycleCard/BicycleCard';

interface BicycleListProps {}

export const BicycleList: FC<BicycleListProps> = () => {
  const { data, isLoading, isError } = useGetBicyclesQuery();
  const [deleteBicycle] = useDeleteBicycleMutation();
  const [updateBicycle] = useUpdateBicycleMutation();

  const onDelete = useCallback((id: string) => {
    deleteBicycle(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUpdate = useCallback((id: string, data: PartialBicycle) => {
    updateBicycle({ id, data });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <main className="flex flex-col gap-3">
      {data ? (
        data.map((bicycle, index) => (
          <BicycleCard
            id={bicycle.id}
            name={bicycle.name}
            price={bicycle.price}
            status={bicycle.status}
            type={bicycle.type}
            color={bicycle.color}
            onDelete={onDelete}
            onUpdate={onUpdate}
            key={index}
          />
        ))
      ) : (
        <div className="flex w-full justify-center">
          <p>Bicycle list is empty😮</p>
        </div>
      )}
    </main>
  );
};
