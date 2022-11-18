import { configureStore } from '@reduxjs/toolkit';
import NEW_Reduser from './NEW/NEW-slice';
import { authReducer } from './auth';
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
import { friendsApi } from './friends/rtkFriends';

const NEW_PersistConfig = {
  key: 'NEW',
  storage,
  whitelist: ['token'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    NEW: persistReducer(NEW_PersistConfig, NEW_Reduser),
    loader: loaderReduser,
    [friendsApi.reducerPath]: friendsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(
      {
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      },
      friendsApi.middleware
    ).concat(friendsApi.middleware),
  ],

  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
