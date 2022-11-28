import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  isLoading: false,
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
  cities: [],
  breeds: [],
  favorite: [],
  disabledBtn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(authOperations.register.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(authOperations.register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.user.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.favorite = action.payload.favorite;
    });
    builder.addCase(authOperations.register.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(authOperations.logIn.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(authOperations.logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.favorite = action.payload.favorite;
    });
    builder.addCase(authOperations.logIn.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(authOperations.logOut.fulfilled, state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.favorite = [];
    });
    builder.addCase(authOperations.fetchCurrentUser.pending, state => {
      state.isRefreshing = true;
    });
    builder.addCase(
      authOperations.fetchCurrentUser.fulfilled,
      (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.favorite = action.payload.favorite;
      }
    );
    builder.addCase(authOperations.fetchCurrentUser.rejected, state => {
      state.isLoggedIn = false;
      state.isRefreshing = false;
    });
    builder.addCase(authOperations.patchUserInfo.pending, state => {
      state.disabledBtn = true;
    });
    builder.addCase(authOperations.patchUserInfo.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.disabledBtn = false;
    });
    builder.addCase(authOperations.patchUserInfo.rejected, state => {
      state.disabledBtn = false;
    });
    builder.addCase(authOperations.searchCity.pending, (state, action) => {
      state.cities = [];
    });
    builder.addCase(authOperations.searchCity.fulfilled, (state, action) => {
      state.cities = action.payload;
    });
    builder.addCase(authOperations.searchBreeds.pending, (state, action) => {
      state.breeds = [];
    });
    builder.addCase(authOperations.searchBreeds.fulfilled, (state, action) => {
      state.breeds = action.payload;
    });
    builder.addCase(authOperations.getFavorite.fulfilled, (state, action) => {
      state.favorite = action.payload;
    });
    builder.addCase(authOperations.addToFavorite.fulfilled, (state, action) => {
      state.favorite = action.payload;
    });
    builder.addCase(
      authOperations.deleteFromFavorite.fulfilled,
      (state, action) => {
        state.favorite = action.payload;
      }
    );
  },
});

export default authSlice.reducer;
