import { createSlice } from '@reduxjs/toolkit';
import { fetchFriends } from './friends-operations';

const initialState = {
  friends: [],
};

const friends_Slice = createSlice({
  name: 'friends',
  initialState,
  extraReducers: {
    [fetchFriends.fulfilled](state, action) {
      state.friends = action.payload;
    },
  },
});

export default friends_Slice.reducer;
