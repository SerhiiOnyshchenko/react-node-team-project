import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://{url}';

export const newsOperations = createAsyncThunk('news', async () => {
  try {
    const { data } = await axios.get('/');
    return data;
  } catch (error) {
    console.log('fetch-new-error', error);
  }
});
export default newsOperations;