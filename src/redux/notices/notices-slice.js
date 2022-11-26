import { createSlice } from '@reduxjs/toolkit';
import { noticesOperations } from 'redux/notices';

const initialState = {
  notices: [],
  userNotices: [],
  isLoading: false,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: {
    [noticesOperations.getNoticesCategories.pending](state) {
      state.isLoading = true;
    },
    [noticesOperations.getNoticesCategories.fulfilled](state, action) {
      state.notices = action.payload.notices;
      state.isLoading = false;
    },
    [noticesOperations.getNoticesCategories.rejected](state) {
      state.isLoading = false;
    },
    [noticesOperations.getUserNotices.pending](state) {
      state.isLoading = true;
    },
    [noticesOperations.getUserNotices.fulfilled](state, action) {
      state.notices = action.payload;
      state.isLoading = false;
    },
    [noticesOperations.getUserNotices.rejected](state) {
      state.isLoading = false;
    },
    [noticesOperations.deleteUserNotices.pending](state) {
      state.isLoading = true;
    },
    [noticesOperations.deleteUserNotices.fulfilled](state, action) {
      state.notices = action.payload;
      state.isLoading = false;
    },
    [noticesOperations.deleteUserNotices.rejected](state) {
      state.isLoading = false;
    },
  },
});

export default noticesSlice.reducer;
