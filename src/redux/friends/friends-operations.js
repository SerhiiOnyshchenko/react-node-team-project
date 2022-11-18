import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://team-project-backend.onrender.com/api';
export const fetchFriends = createAsyncThunk(
  'friends/fetch-friends',
  async () => {
    try {
      const { data } = await axios.get('/friends');
      return data;
    } catch (error) {
      console.log('fetch-friends-error', error);
    }
  }
);
