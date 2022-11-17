import { createSlice } from '@reduxjs/toolkit';
import { fetchNEW } from './NEWS-operations';

const initialState = {
  NEW: [],
  isLoading: false,
  isRefreshing: false,
};

const NEW_Slice = createSlice({
  name: 'NEW',
  initialState,
  extraReducers: {
    [fetchNEW.pending](state) {
      state.isRefreshing = true;
    },
  },
});

export default NEW_Slice.reducer;
