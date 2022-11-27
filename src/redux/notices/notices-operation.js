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
export const createNotices = createAsyncThunk(
  'notices/createNotices',
  async ({ values, token }, thunkAPI) => {
    try {
      const header = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };

      await axios.post(`/notices`, values, header);
      const { data } = await axios.get('notices/user');
      toast.success('New notice added!');
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const deleteUserNotices = createAsyncThunk(
  'notices/deleteUserNotices',
  async petId => {
    try {
      await axios.delete(`/notices/${petId}`);
      const { data } = await axios.get('notices/user');
      toast.success('Notice deleted!');
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);
