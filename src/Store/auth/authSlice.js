import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginThunk,
  registerThunk,
  logOutThunk,
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
      })

      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })

      .addCase(logOutThunk.fulfilled, () => {
        return INITIAL_STATE;
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
        }
      ),
});

// export default authSlice.reducer;
export const authReducer = authSlice.reducer;
