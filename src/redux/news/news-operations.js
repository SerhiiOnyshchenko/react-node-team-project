import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const getNews = createAsyncThunk('news/getNews', async query => {
  try {
    if (query === undefined || query === '') {
      const { data } = await axios.get('/news');
      if (data.data) {
        data.data.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
      }
      return data;
    }
    if (query) {
      const { data } = await axios.get(`/news?query=${query}`);
      if (data.data) {
        data.data.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
      }
      return data;
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
});
export default getNews;
