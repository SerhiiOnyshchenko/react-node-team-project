import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:8083/api';

export const getNews = createAsyncThunk('news/getNews', async ({query}) => {
  try {
    const { data } = await axios.get(`/news?query=${query}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log('fetch-news-error', error);
  }
});
export default getNews;