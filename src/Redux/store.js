import { configureStore } from '@reduxjs/toolkit';
// Import slices
import { authReducer } from './auth/authSlice';
// import { usersReducer } from './users/usersSlice';
//!Persist block *********************
import storage from 'redux-persist/lib/storage';
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
import { waterReducer } from './water/waterReducer';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
//! ****************************

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    todayWater: waterReducer,
    // auth: authReducer,
    // user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
