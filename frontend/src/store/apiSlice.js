import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: '/api',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getMarketData: builder.query({
      query: () => 'market'
    }),
    getPortfolio: builder.query({
      query: () => 'portfolio'
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials
      })
    })
  })
});

export const { 
  useGetMarketDataQuery, 
  useGetPortfolioQuery,
  useLoginMutation 
} = apiSlice;
