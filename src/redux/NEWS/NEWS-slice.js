import { createSlice } from '@reduxjs/toolkit';
import  newsOperations  from './news-operations';

const initialState = {
  news: [],
  isLoading: false,
  isRefreshing: false,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: {
    [newsOperations.pending](state) {
      state.isRefreshing = true;
    },
  },
});

export default newsSlice.reducer;
