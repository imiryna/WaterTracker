import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginThunk,
  registerThunk,
  logOutThunk,
  refreshUserThunk,
  updatePasswordThunk,
  forgotPasswordThunk,
} from './authOperations';

const INITIAL_STATE = {
  token: null,
  authenticated: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',

  initialState: INITIAL_STATE,

  extraReducers: builder =>
    builder

      .addCase(loginThunk.fulfilled, (state, action) => {
        state.authenticated = true;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isRefreshing = false;
      })

      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isRefreshing = false;
      })

      .addCase(logOutThunk.fulfilled, state => {
        return INITIAL_STATE;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.token = action.payload.token;
        state.isRefreshing = false;
        state.authenticated = true;
      })
      .addCase(forgotPasswordThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(forgotPasswordThunk.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.error = null;
      })
      .addCase(forgotPasswordThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
      })
      .addCase(updatePasswordThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(updatePasswordThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updatePasswordThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })

      .addMatcher(
        isAnyOf(loginThunk.pending, registerThunk.pending, logOutThunk.pending),
        state => {
          state.error = null;
          state.isLoading = true;
          state.isRefreshing = true;
        }
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          registerThunk.rejected,
          logOutThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          state.isRefreshing = false;
        }
      ),
});

export const authReducer = authSlice.reducer;
