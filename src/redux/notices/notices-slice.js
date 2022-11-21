import { createSlice } from '@reduxjs/toolkit';
import { noticesOperations } from 'redux/notices';

const initialState = {
  notices: [],
  userNotices: [],
  isLoading: false,
  isRefreshing: false,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: {
    [noticesOperations.getNoticesCategories.fulfilled](state, action) {
      state.notices = action.payload;
    },
    [noticesOperations.getUserNotices.fulfilled](state, action) {
      state.userNotices = action.payload;
    },
  },
});

export default noticesSlice.reducer;
