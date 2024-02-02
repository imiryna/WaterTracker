import { createSlice } from '@reduxjs/toolkit';
import { refreshUserThunk } from './currentUserThunk';
import { logOutThunk } from 'Store/auth/authOperations';

const INITIAL_STATE = {
  user: {
    name: '',
    email: '',
    gender: '',
    dailyNorm: '',
    avatarUrl: '',
  },
  error: null,
  token: null,
  isLoading: true,
  isRefreshing: false,
}

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      .addCase(refreshUserThunk.pending, state => {
        state.error = null;
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.user.avatarUrl = action.payload.avatar;
        state.user.gender = action.payload.gender;
        state.error = null;
        state.token = action.payload.token;
        state.isRefreshing = false;
      })
      .addCase(refreshUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isRefreshing = false;
      }).addCase(logOutThunk.fulfilled, () => {
        return INITIAL_STATE;
      })
  },
});

export const currentUserReducer = currentUserSlice.reducer;
