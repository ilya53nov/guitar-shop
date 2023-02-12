import { CreateProductDto, ImageRdo, ProductRdo, UpdateProductDto } from '@project/core';
import { ApiRoute } from '@project/shared-types';
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3333/api"
  }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/product',
      providesTags: ['Products']
    }),
    getProduct: builder.query({
      query: (id: string) => `${ApiRoute.Product}/${id}`,
      transformResponse: (response: ProductRdo) => response,
    }),
    addNewProduct: builder.mutation({
      query: (product: CreateProductDto) => ({
        url: '/product',
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['Products'],
    }),
    updateProduct: builder.mutation({
      query: (product: {id: string, updateProductDto: UpdateProductDto}) => ({
        url: `${ApiRoute.Product}/${product.id}`,
        method: 'PATCH',
        body: product.updateProductDto,
      }),
      invalidatesTags: ['Products'],
    }),
    deleteProduct: builder.mutation({
      query: (id: string) => ({
        url: `${ApiRoute.Product}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),
    addImage: builder.mutation({
      query: (image: FormData) => ({
        url: `${ApiRoute.Product}${ApiRoute.UploadImage}`,
        method: 'POST',
        body: image,        
      }),
      transformResponse: (response: ImageRdo) => response.image,
    }),
  })
});

export const {
  useAddNewProductMutation,
  useGetProductsQuery,
  useAddImageMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetProductQuery,
} = api;