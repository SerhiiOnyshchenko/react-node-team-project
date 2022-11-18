import { configureStore } from '@reduxjs/toolkit';
import noticesReduser from './notices/notices-slice';
import { authReducer } from './auth';
import { friendsReduser } from './friends';


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loaderReduser from './loader/loader-reduser';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const friendsPersistConfig = {
  key: 'friends',
  storage,
  whitelist: ['token'],
};

const noticesPersistConfig = {
  key: 'notices',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    notices: persistReducer(noticesPersistConfig, noticesReduser),
    friends: persistReducer(friendsPersistConfig, friendsReduser),
    auth: persistReducer(authPersistConfig, authReducer),
    loader: loaderReduser,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
