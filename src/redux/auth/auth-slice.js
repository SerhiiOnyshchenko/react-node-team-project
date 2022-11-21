import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  cities: [],
  favorite: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(authOperations.register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.favorite = action.payload.user.favorite;
    });
    builder.addCase(authOperations.logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.favorite = action.payload.user.favorite;
    });
    builder.addCase(authOperations.logOut.fulfilled, (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.favorite = [];
    });
    builder.addCase(
      authOperations.fetchCurrentUser.fulfilled,
      (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.favorite = action.payload.favorite;
      }
    );
    builder.addCase(authOperations.searchCity.fulfilled, (state, action) => {
      state.cities = action.payload;
    });
    builder.addCase(authOperations.addToFavorite.fulfilled, (state, action) => {
      state.favorite = action.payload
    });
    builder.addCase(authOperations.deleteFromFavorite.fulfilled, (state, action) => {
      state.favorite = action.payload
    });
  },
});

export default authSlice.reducer;
