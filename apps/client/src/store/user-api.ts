import { CreateUserDto, LoggedUserRdo, LoginUserDto, UserRdo } from '@project/core';
import { ApiRoute, Cart } from '@project/shared-types';
import { api, ApiMethod, ApiTag } from './api';

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user: CreateUserDto) => ({
        url: `${ApiRoute.User}/${ApiRoute.Register}`,
        method: ApiMethod.Post,
        body: user,        
      }) ,
      transformResponse: (response: UserRdo) => response,
      invalidatesTags: [ApiTag.User],
    }),
    login: builder.mutation({
      query: (loginUserDto: LoginUserDto) => ({
        url: `${ApiRoute.User}/${ApiRoute.Login}`,
        method: ApiMethod.Post,
        body: loginUserDto,    
        
      }) ,
      transformResponse: (response: LoggedUserRdo) => response,
      invalidatesTags: [ApiTag.User],
    }),
    getMe: builder.query({
      query: () => ({
        url: `${ApiRoute.User}/${ApiRoute.Me}`,
        method: ApiMethod.Get,
      }),
      transformResponse: (response: UserRdo ) => response,
      providesTags: [ApiTag.User],
    }),
    addProductToCart: builder.mutation({
      query: (productId: string) => ({
        url: `${ApiRoute.User}/${ApiRoute.Cart}`,
        method: ApiMethod.Post,
        body: {productId}
      }),
      transformResponse: (response: UserRdo ) => response,     
      invalidatesTags: [ApiTag.Products, ApiTag.User]
    }),
    deleteProductFromCart: builder.mutation({
      query: (productId: string) => ({
        url: `${ApiRoute.Cart}/${ApiRoute.Product}/${productId}`,
        method: ApiMethod.Delete,   
    }),
    invalidatesTags: [ApiTag.Products, ApiTag.User],
    }),
    incrementProductCount: builder.mutation({
      query: (productId: string) => ({
        url: `${ApiRoute.Cart}/${ApiRoute.Product}/${ApiRoute.Increment}/${productId}`,
        method: ApiMethod.Patch,   
    }),
    transformResponse: (response: Cart ) => response.count,  
    }),
    decrementProductCount: builder.mutation({
      query: (productId: string) => ({
        url: `${ApiRoute.Cart}/${ApiRoute.Product}/${ApiRoute.Decrement}/${productId}`,
        method: ApiMethod.Patch,   
    }),
    transformResponse: (response: Cart ) => response.count,  
    }),
  }),
})

export const {
  useRegisterUserMutation,
  useLoginMutation,
  useGetMeQuery,
  useAddProductToCartMutation,
  useDeleteProductFromCartMutation,
  useIncrementProductCountMutation,
  useDecrementProductCountMutation
} = userApi;