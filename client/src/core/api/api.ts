import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const serverHost = import.meta.env.VITE_BASE_URL;
console.log(serverHost);
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverHost}`,
  }),
  tagTypes: ['Bicycles'],
  endpoints: () => ({}),
});
