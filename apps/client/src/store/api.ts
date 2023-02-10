import { CreateProductDto } from '@project/core';
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3333/api"
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/product',
    }),
    addNewProduct: builder.mutation({
      query: (product: CreateProductDto) => ({
        url: '/product',
        method: 'POST',
        body: product,
      }),
    }),
  })
});

export const {useAddNewProductMutation, useGetProductsQuery} = api;