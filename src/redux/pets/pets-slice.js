import { createSlice } from '@reduxjs/toolkit';
import petsOperations from './pets-operations';

const initialState = {
  pets: [],
  isLoading: false,
};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  extraReducers: {
    [petsOperations.getUserPet.pending](state) {
      state.isLoading = true;
    },
    [petsOperations.getUserPet.fulfilled](state, { payload }) {
      state.pets = payload;
      state.isLoading = false;
    },
    [petsOperations.getUserPet.rejected](state) {
      state.isLoading = false;
    },

    [petsOperations.addUserPet.pending](state) {
      state.isLoading = true;
    },
    [petsOperations.addUserPet.fulfilled](state, { payload }) {
      state.pets = payload;
      state.isLoading = false;
    },
    [petsOperations.addUserPet.rejected](state) {
      state.isLoading = false;
    },

    [petsOperations.deleteUserPet.pending](state) {
      state.isLoading = true;
    },
    [petsOperations.deleteUserPet.fulfilled](state, { payload }) {
      state.pets = payload;
      state.isLoading = false;
    },
    [petsOperations.deleteUserPet.rejected](state) {
      state.isLoading = false;
    },
  },
});

export default petsSlice.reducer;
