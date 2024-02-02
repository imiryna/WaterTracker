import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginThunk,
  registerThunk,
  logOutThunk,
  refreshUserThunk,
} from './authOperations';

const INITIAL_STATE = {
  token: null,
  user: {
    email: null,
    name: null,
    avatarUrl: null,
  },
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
        state.user = {
          email: action.payload.email,
          name: action.payload.name,
          avatarUrl: action.payload.avatar,
        };
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

      .addCase(logOutThunk.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.email = action.payload.email;
        state.user.avatarUrl = action.payload.avatar;
        state.error = null;
        state.token = action.payload.token;
        state.isRefreshing = false;
        state.authenticated = true;
      })

      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          registerThunk.pending,
          logOutThunk.pending,
        ),
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
          logOutThunk.rejected,
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          state.isRefreshing = false;
        }
      ),
});

// export default authSlice.reducer;
export const authReducer = authSlice.reducer;
