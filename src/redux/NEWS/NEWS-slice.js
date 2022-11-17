import { createSlice } from '@reduxjs/toolkit';
import  getNews  from './news-operations';

const initialState = {
  news: [],
  isLoading: false,
  // isRefreshing: false,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: builder => {
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.news = action.payload;
      // state.isLoggedIn = true;
    });
  },
  // extraReducers: {
  //   [newsOperations.pending](state) {
  //     state.isRefreshing = true;
  //   },
   },
);

export default newsSlice.reducer;
