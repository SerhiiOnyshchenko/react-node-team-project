import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://team-project-backend.onrender.com/api';

export const getNews = createAsyncThunk('news/getNews', async query => {
  try {
    if (query === undefined || query === '') {
      const { data } = await axios.get('/news');
      return data;
    }
    if (query) {
      const { data } = await axios.get(`/news?query=${query}`);
      return data;
    }
  } catch (error) {
    console.log('fetch-news-error', error);
  }
});
export default getNews;
