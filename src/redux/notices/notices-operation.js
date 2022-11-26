import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const getNoticesCategories = createAsyncThunk(
  'notices/getNoticesCategories',
  async category => {
    try {
      const { data } = await axios.get(`/notices?category=${category}`);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
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
      toast.error(error.response.data.message);
    }
  }
);

export const deleteUserNotices = createAsyncThunk(
  'notices/deleteUserNotices',
  async petId => {
    try {
      await axios.delete(`/notices/${petId}`);
      const { data } = await axios.get('/notices/user');
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);
