import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const fetchFriends = createAsyncThunk(
  'friends/fetch-friends',
  async () => {
    try {
      const { data } = await axios.get('/friends');
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);
