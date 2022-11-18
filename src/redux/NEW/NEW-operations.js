import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://{url}';

export const fetchNEW = createAsyncThunk('new/fetch-new', async () => {
  try {
    const { data } = await axios.get('/');
    return data;
  } catch (error) {
    console.log('fetch-new-error', error);
  }
});
