import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'team-project-backend.onrender.com/api';

const noticesCategories = createAsyncThunk('/notices', async category => {
  try {
    const { data } = await axios.get('/notices', { category });
    return data;
  } catch (error) {
    console.log(error);
  }
});

export default noticesCategories;
