import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const getUserPet = createAsyncThunk('pet/getUserPet', async thunkAPI => {
  try {
    const { data } = await axios.get('/user/current');
    return data.user.pets;
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue();
  }
});

const addUserPet = createAsyncThunk(
  'pet/addUserPet',
  async ({ form, token }, thunkAPI) => {
    try {
      const header = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };

      await axios.post('/pet', form, header);
      const { data } = await axios.get('/user/current');
      toast.success('New pet added!');
      return data.user.pets;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue();
    }
  }
);

const deleteUserPet = createAsyncThunk(
  'pet/deleteUserPet',
  async (petId, thunkAPI) => {
    try {
      await axios.delete(`/pet/${petId}`);
      const { data } = await axios.get('/user/current');
      toast.success(`Contact was deleted!`);
      return data.user.pets;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue();
    }
  }
);

const operations = {
  getUserPet,
  addUserPet,
  deleteUserPet,
};
export default operations;
