import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCurrentUserThunk } from './currentUserThunk';
import {
  logOutThunk} from 'Store/auth/authOperations';

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
    gender: null,
    dailyNorm: null,
    avatarUrl: null,
  },
  error: null,
  isLoading: false,
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      .addCase(logOutThunk.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(getCurrentUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCurrentUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUserThunk.fulfilled, (state, action) => {
        state.user = {
          name: action.payload.name,
          email: action.payload.email,
          gender: action.payload.gender,
          dailyNorm: action.payload.dailyNorm,
          avatarUrl: action.payload.avatar,
        };
        state.error = null;
        state.isLoading = false;
      })
  },
});

export const currentUserReducer = currentUserSlice.reducer;
