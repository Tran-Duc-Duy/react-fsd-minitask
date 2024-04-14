import { ParamsType } from '@/shared/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPosts } from '..';
import { setPosts } from '../model/postsSlice';

const BASE_URL =
  import.meta.env.VITE_NEWS_BASE_API_URL ||
  'https://jsonplaceholder.typicode.com';
const API_KEY = import.meta.env.VITE_NEWS_API_KEY || '/posts';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPosts[], ParamsType>({
      keepUnusedDataFor: 0,
      query: (params) => {
        const { _page = 1, _limit = 10 } = params || {};
        return {
          url: API_KEY,
          params: {
            _page,
            _limit,
          },
        };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;
        dispatch(setPosts(data));
      },
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
