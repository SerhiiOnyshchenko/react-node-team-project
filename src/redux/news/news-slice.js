import { createSlice } from '@reduxjs/toolkit';
import getNews from './news-operations';

const initialState = {
  news: [],
  status: true,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: builder => {
    builder.addCase(getNews.pending, (state, _) => {
      state.status = true;
    });
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.news = action.payload;
      state.status = false;
    });
    builder.addCase(getNews.rejected, (state, _) => {
      state.status = false;
    });
  },
});

export default newsSlice.reducer;
