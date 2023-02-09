import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3333/api"
  }),
  tagTypes:['Product'],
  endpoints: (builder) => ({
    products: builder.query({
      query: () => '/product',
      providesTags: ['Product'],
    })
  })
});

export const {useProductsQuery} = api;