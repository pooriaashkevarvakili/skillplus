import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiEndpoint = 'http://localhost:3000';

export const maharatNarm = createApi({
  reducerPath: 'maharatNarm',
  baseQuery: fetchBaseQuery({ baseUrl: apiEndpoint }),
  endpoints: (builder) => ({
    getMaharatNarm: builder.query({
      query: () => '/users/featuresMaharatNarm',
    }),
  }),
});

export const { useGetMaharatNarmQuery } = maharatNarm;