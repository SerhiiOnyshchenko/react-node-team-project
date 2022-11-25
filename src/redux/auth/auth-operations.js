import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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

const logIn = createAsyncThunk('auth/logIn', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/user/login', credentials);
    token.set(data.token);
    const favorite = await axios.get('/user/favorite');
    return { ...data, favorite: favorite.data };
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue();
  }
});

const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await axios.post('/user/logout');
    token.unset();
  } catch (error) {
    toast.error(error.response.data.message);
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
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue();
    }
  }
);

const patchUserInfo = createAsyncThunk(
  'auth/patchUserInfo',
  async ({ type, value, token }) => {
    try {
      const config = {
        [type]: value,
      };
      const header = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };
      const { data } = await axios.patch('/user/update', config, header);
      return data;
    } catch (error) {
      const { message } = error.response.data.message;
      toast.error(message);
    }
  }
);

const searchCity = createAsyncThunk('auth/searchCity', async q => {
  try {
    const { data } = await axios.get(`/cities/search?q=${q}`);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
});

const getFavorite = createAsyncThunk('auth/getFavorite', async () => {
  try {
    const { data } = await axios.get('/user/favorite');
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
});

const addToFavorite = createAsyncThunk('auth/addToFavorite', async petId => {
  try {
    await axios.post(`/user/favorite/${petId}`);
    const { data } = await axios.get('/user/favorite');
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
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
      toast.error(error.response.data.message);
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
  patchUserInfo,
};
export default operations;
