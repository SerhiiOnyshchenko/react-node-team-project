import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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
    toast.error(error.response.data.message);
  }
});
export default getNews;
