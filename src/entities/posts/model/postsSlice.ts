import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFilters } from '../../../shared/interfaces';
import { PAGE_SIZE } from '../../../shared/constants/constants';
import { IPosts } from '..';

interface State {
  posts: IPosts[];
  filters: IFilters;
  currentPosts: IPosts | null;
}

const initialState: State = {
  posts: [],
  currentPosts: null,
  filters: {
    _page: 1,
    _limit: PAGE_SIZE,
  },
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<IPosts[]>) => {
      state.posts = action.payload;
    },
    setCurrentPosts: (state, action: PayloadAction<IPosts | null>) => {
      state.currentPosts = action.payload;
    },
    setFilters: (
      state,
      action: PayloadAction<{ key: string; value: string | null | number }>,
    ) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const { setPosts, setFilters, setCurrentPosts } = postsSlice.actions;

export default postsSlice.reducer;
