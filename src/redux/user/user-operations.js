import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://{url}';

export const fetchUser = createAsyncThunk('user/fetch-user', async () => {
  try {
    const { data } = await axios.get('/user');
    return data;
  } catch (error) {
    console.log('fetch-user-error', error);
  }
});

export const deletePetFromList = createAsyncThunk(
  'pet/delete-pet-from-list',
  async userData => {
    try {
      await axios.delete(userData);
    } catch (error) {
      console.log('fetch-new-error', error);
    }
  }
);
