import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const friendsApi = createApi({
  reducerPath: 'friends',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/',
    headers: { 'Access-Control-Allow-Origin': '*' },
  }),
  endpoints: builder => ({
    getFriend: builder.query({
      query: () => `friends`,
    }),
  }),
});

export const { useGetFriendQuery } = friendsApi;
