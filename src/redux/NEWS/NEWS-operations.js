import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:8083/api';

export const newsOperations = createAsyncThunk('news/getNews', async () => {
  try {
    const { data } = await axios.get('/news');
    return data;
  } catch (error) {
    console.log('fetch-new-error', error);
  }
});
export default newsOperations;