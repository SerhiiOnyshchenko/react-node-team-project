import { createSlice } from '@reduxjs/toolkit';
import noticesCategories from './notices-operation';

const initialState = {
  notices: [],
  isLoading: false,
  isRefreshing: false,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: {
    [noticesCategories.pending](state) {
      state.isRefreshing = true;
    },
  },
});

export default noticesSlice.reducer;
