import { configureStore } from '@reduxjs/toolkit';
import noticesReduser from './notices/notices-slice';
import { authReducer } from './auth';
import friendsReduser from './friends/friends-slice';
import { petsReducer } from './pets';

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
import newsReduser from './news/news-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const noticesPersistConfig = {
  key: 'notices',
  storage,
  whitelist: ['token'],
};
const friendsPersistConfig = {
  key: 'friends',
  storage,
  whitelist: ['token'],
};

const petsPersistConfig = {
  key: 'userPets',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    friends: persistReducer(friendsPersistConfig, friendsReduser),
    notices: persistReducer(noticesPersistConfig, noticesReduser),
    auth: persistReducer(authPersistConfig, authReducer),
    news: newsReduser,
    loader: loaderReduser,
    userPets: persistReducer(petsPersistConfig, petsReducer),
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
