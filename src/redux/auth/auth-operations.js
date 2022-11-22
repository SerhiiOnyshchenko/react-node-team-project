import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.baseURL = 'https://team-project-backend.onrender.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/user/registration', credentials);
      token.set(data.token);
      const favorite = await axios.get('/user/favorite');
      return { ...data, favorite: favorite.data };
    } catch (error) {
      const errorData = error.response.data;
      let errorMessage = '';
      if (errorData.name) {
        errorMessage = `Email already exists in database`;
      } else {
        errorMessage = errorData.message;
      }
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue();
    }
  }
);

const logIn = createAsyncThunk('auth/logIn', async credentials => {
  try {
    const { data } = await axios.post('/user/login', credentials);
    token.set(data.token);
    const favorite = await axios.get('/user/favorite');
    return { ...data, favorite: favorite.data };
  } catch (error) {
    console.log(error);
  }
});

const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await axios.post('/user/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/user/current');
      const favorite = await axios.get('/user/favorite');
      return { ...data, favorite: favorite.data };
    } catch (error) {
      console.log(error);
    }
  }
);

const searchCity = createAsyncThunk('auth/searchCity', async q => {
  try {
    const { data } = await axios.get(`/cities/search?q=${q}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const getFavorite = createAsyncThunk('auth/getFavorite', async () => {
  try {
    const { data } = await axios.get('/user/favorite');
    return data;
  } catch (error) {
    console.log(error);
  }
});

const addToFavorite = createAsyncThunk('auth/addToFavorite', async petId => {
  try {
    await axios.post(`/user/favorite/${petId}`);
    const { data } = await axios.get('/user/favorite');
    return data;
  } catch (error) {
    console.log(error);
  }
});

const deleteFromFavorite = createAsyncThunk(
  'auth/deleteFromFavorite',
  async petId => {
    try {
      await axios.delete(`/user/favorite/${petId}`);
      const { data } = await axios.get('/user/favorite');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
  searchCity,
  addToFavorite,
  deleteFromFavorite,
  getFavorite,
};
export default operations;
