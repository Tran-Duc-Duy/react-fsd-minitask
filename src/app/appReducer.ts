import { postsApi } from '@/entities/posts/api/postsApi';
import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from '@/entities/posts/model/postsSlice';

export const rootReducer = combineReducers({
  posts: postsReducer,
  [postsApi.reducerPath]: postsApi.reducer,
});
