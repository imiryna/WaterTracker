import { configureStore } from '@reduxjs/toolkit';
// Import slices
import { authReducer } from './auth/authSlice';
import { monthStatReducer } from './monthStat/monthStatSlice';
import { modalReducer } from './modals/modalSlice';
import { waterReducer } from './water/waterReducer';

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
import { currentUserReducer } from './currentUser/currentUserSlice';

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

//! ****************************

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    todayWater: waterReducer,
    monthStat: monthStatReducer,
    currentUser: currentUserReducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
