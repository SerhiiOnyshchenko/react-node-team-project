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
    [noticesCategories.fulfilled](state, action) {
      state.notices = action.payload;
    },
  },
});

export default noticesSlice.reducer;
