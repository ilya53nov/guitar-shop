import { CreateUserDto, LoggedUserRdo, LoginUserDto, UserRdo } from '@project/core';
import { ApiRoute, Cart } from '@project/shared-types';
import { api } from './api';

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user: CreateUserDto) => ({
        url: `${ApiRoute.User}/${ApiRoute.Register}`,
        method: 'POST',
        body: user,        
      }) ,
      transformResponse: (response: UserRdo) => response,
      invalidatesTags: ['User'],
    }),
    login: builder.mutation({
      query: (loginUserDto: LoginUserDto) => ({
        url: `${ApiRoute.User}/${ApiRoute.Login}`,
        method: 'POST',
        body: loginUserDto,    
        
      }) ,
      transformResponse: (response: LoggedUserRdo) => response,
      invalidatesTags: ['User'],
    }),
    getMe: builder.query({
      query: () => ({
        url: `${ApiRoute.User}/${'me'}`,
        method: 'GET',
      }),
      transformResponse: (response: UserRdo ) => response,
      providesTags: ['User'],
    }),
    addProductToCart: builder.mutation({
      query: (productId: string) => ({
        url: `${ApiRoute.User}/${'cart'}`,
        method: 'POST',
        body: {productId}
      }),
      transformResponse: (response: UserRdo ) => response,     
      invalidatesTags: ['Products', 'User']
    }),
    deleteProductFromCart: builder.mutation({
      query: (productId: string) => ({
        url: `${'cart'}/product/${productId}`,
        method: 'DELETE',   
    }),
    invalidatesTags: ['Products', 'User'],
    }),
    incrementProductCount: builder.mutation({
      query: (productId: string) => ({
        url: `${'cart'}/product/increment/${productId}`,
        method: 'PATCH',   
    }),
    transformResponse: (response: Cart ) => response.count,  
    //invalidatesTags: ['Products', 'User'],
    }),
    decrementProductCount: builder.mutation({
      query: (productId: string) => ({
        url: `${'cart'}/product/decrement/${productId}`,
        method: 'PATCH',   
    }),
    transformResponse: (response: Cart ) => response.count,  
    //invalidatesTags: ['Products', 'User'],
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