import { CreateProductDto, ImageRdo, ProductRdo, UpdateProductDto } from '@project/core';
import { ApiRoute } from '@project/shared-types';
import { api } from './api';

const productApi = api.injectEndpoints({  
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `${ApiRoute.Product}`,
      providesTags: ['Products']
    }),
    getProduct: builder.query({
      query: (id: string) => `${ApiRoute.Product}/${id}`,
      transformResponse: (response: ProductRdo) => response,
    }),
    addNewProduct: builder.mutation({
      query: (product: CreateProductDto) => ({
        url: `${ApiRoute.Product}`,
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
        url: `${ApiRoute.Product}/${ApiRoute.UploadImage}`,
        method: 'POST',
        body: image,        
      }),
      transformResponse: (response: ImageRdo) => response.image,
    }),
  })
})

export const {
  useAddImageMutation,
  useAddNewProductMutation,
  useDeleteProductMutation,
  useGetProductQuery,
  useGetProductsQuery,
  useUpdateProductMutation,
} = productApi;