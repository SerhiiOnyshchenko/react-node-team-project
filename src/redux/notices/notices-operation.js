import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'team-project-backend.onrender.com/api';

export const getNoticesCategories = createAsyncThunk(
  'notices/getNoticesCategories',
  async category => {
    try {
      const { data } = await axios.get(`/notices?category=${category}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getUserNotices = createAsyncThunk(
  'notices/getUserNotices',
  async () => {
    try {
      const { data } = await axios.get(`/notices/user`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
