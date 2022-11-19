import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://team-project-backend.onrender.com/api';
let result;

export const getNews = createAsyncThunk('news/getNews', async (query) => {
  try {
    if (query === undefined || query === '') {
      result = await axios.get('/news');
      console.log('query === undefined');
    }
    if (query) {
      result = await axios.get(`/news?query=${query}`);
    }
    return result.data.data;
  } catch (error) {
    console.log('fetch-news-error', error);
  }
});
export default getNews;