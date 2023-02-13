import { CreateUserDto, LoginUserDto, UserRdo } from '@project/core';
import { ApiRoute } from '@project/shared-types';
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
      transformResponse: (response: UserRdo) => response,      
    })
  })  
})

export const {useRegisterUserMutation} = userApi;