import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeLoader } from './loader-actions';

const loader = false;

const loaderPatron = createReducer(loader, {
  [changeLoader]: (state, { payload }) => (state = payload),
});

export default combineReducers({
  loaderPatron,
});
