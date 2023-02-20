import { CreateProductDto, ImageRdo, ProductRdo, UpdateProductDto } from '@project/core';
import { ApiRoute } from '@project/shared-types';
import { api, ApiMethod, ApiTag } from './api';

const productApi = api.injectEndpoints({  
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `${ApiRoute.Product}`,
      providesTags: [ApiTag.Products]
    }),
    getProduct: builder.query({
      query: (id: string) => `${ApiRoute.Product}/${id}`,
      transformResponse: (response: ProductRdo) => response,
    }),
    addNewProduct: builder.mutation({
      query: (product: CreateProductDto) => ({
        url: `${ApiRoute.Product}`,
        method: ApiMethod.Post,
        body: product,
      }),
      invalidatesTags: [ApiTag.Products],
    }),
    updateProduct: builder.mutation({
      query: (product: {id: string, updateProductDto: UpdateProductDto}) => ({
        url: `${ApiRoute.Product}/${product.id}`,
        method: ApiMethod.Patch,
        body: product.updateProductDto,
      }),
      invalidatesTags: [ApiTag.Products],
    }),
    deleteProduct: builder.mutation({
      query: (id: string) => ({
        url: `${ApiRoute.Product}/${id}`,
        method: ApiMethod.Delete,
      }),
      invalidatesTags: [ApiTag.Products],
    }),
    addImage: builder.mutation({
      query: (image: FormData) => ({
        url: `${ApiRoute.Product}/${ApiRoute.UploadImage}`,
        method: ApiMethod.Post,
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