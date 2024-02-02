import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUserThunk } from './currentUserThunk';
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
  isLoading: true
}

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      .addCase(getCurrentUserThunk.pending, state => {
        state.error = null;
        state.isLoading = true;
      }).addCase(getCurrentUserThunk.fulfilled, (state, action) => {
        state.user = {
          name: action.payload.user.name,
          email: action.payload.user.email,
          gender: action.payload.user.gender,
          dailyNorm: action.payload.user.dailyNorm,
          avatarUrl: action.payload.user.avatarUrl,
        };
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getCurrentUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }).addCase(logOutThunk.fulfilled, () => {
        return INITIAL_STATE;
      })
  },
});

export const currentUserReducer = currentUserSlice.reducer;
