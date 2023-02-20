import { EndPoint, ParametrKey } from '@project/shared-types';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export enum ApiTag {
  Products = 'Products',
  User = 'User',
  Api = 'api',
}

export enum ApiMethod {
  Post = 'POST',
  Get = 'GET',
  Delete = 'DELETE',
  Patch = "PATCH",
  Put = 'PUT',
}

export const api = createApi({
  reducerPath: ApiTag.Api,
  baseQuery: fetchBaseQuery({
    baseUrl: EndPoint.Backend,
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem(ParametrKey.Token)
      if (token) {
        headers.set(ParametrKey.Authorization, `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: [ApiTag.Products, ApiTag.User],
  endpoints: () => ({}),
});
