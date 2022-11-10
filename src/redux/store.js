import { configureStore } from '@reduxjs/toolkit';
import NEW_Reduser from './NEW/NEW-slice';
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

const NEW_PersistConfig = {
  key: 'NEW',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    NEW: persistReducer(NEW_PersistConfig, NEW_Reduser),
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
