import { BicycleStatisticsType } from '@admin/types/bicycle.statistics.type';
import { Bicycle, PartialBicycle } from '@admin/types/bicycle.types';
import { ReturnType } from '@common/types/return.type';
import { api } from '@core/api/api';

export const bicycleRepository = api.injectEndpoints({
  endpoints: (build) => ({
    getBicycles: build.query<Bicycle[], void>({
      query: () => '/bicycles',
      providesTags: ['Bicycles'],
    }),
    getStatistics: build.query<BicycleStatisticsType, void>({
      query: () => '/bicycles/statistics',
      providesTags: ['Bicycles'],
    }),
    deleteBicycle: build.mutation<ReturnType, string>({
      query: (id) => ({
        url: `/bicycles/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Bicycles'],
    }),
    addBicycle: build.mutation<ReturnType, Bicycle>({
      query: (data) => ({
        url: `/bicycles`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Bicycles'],
    }),
    updateBicycle: build.mutation<
      ReturnType,
      { id: string; data: PartialBicycle }
    >({
      query: ({ id, data }) => ({
        url: `/bicycles/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Bicycles'],
    }),
  }),
});

export const {
  useGetBicyclesQuery,
  useGetStatisticsQuery,
  useDeleteBicycleMutation,
  useAddBicycleMutation,
  useUpdateBicycleMutation,
} = bicycleRepository;
