import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCurrentUserThunk } from './currentUserThunk';
import {
  logOutThunk,
  loginThunk,
  refreshUserThunk,
} from 'Store/auth/authOperations';

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
    gender: null,
    dailyNorm: null,
    avatarUrl: null,
  },
  error: null,
  isLoading: true,
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = {
          avatarUrl: action.payload.avatar,
          dailyNorm: action.payload.dailyNorm,
          email: action.payload.email,
          gender: action.payload.gender,
          name: action.payload.name,
        };
      })
      .addCase(logOutThunk.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = {
          avatarUrl: action.payload.avatar,
          dailyNorm: action.payload.dailyNorm,
          email: action.payload.email,
          gender: action.payload.gender,
          name: action.payload.name,
        };
      })
      .addCase(getCurrentUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // .addCase(getCurrentUserThunk.fulfilled, (state, action) => {
      //   state.user = {
      //     name: action.payload.name,
      //     email: action.payload.email,
      //     gender: action.payload.gender,
      //     dailyNorm: action.payload.dailyNorm,
      //     avatarUrl: action.payload.avatar,
      //   };
      //   state.error = null;
      //   state.isLoading = false;
      // })
      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          getCurrentUserThunk.pending,
          logOutThunk.pending
        ),
        state => {
          state.error = null;
          state.isLoading = true;
        }
      );
  },
});

export const currentUserReducer = currentUserSlice.reducer;
