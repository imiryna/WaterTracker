import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  registerThunk,
  logOutThunk,
  refreshUserThunk,
} from './authOperations';

const INITIAL_STATE = {
  token: null,
  authenticated: false,
  error: null,
  isLoading: false,
  isRefreshing: false,
  name: null,

};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder

    // Login

    .addCase(loginThunk.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(loginThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.authenticated = true;
      state.token = action.payload.token;
      state.name = action.payload.name;
    })
    .addCase(loginThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(action.payload);
    })

    // Register
    
    .addCase(registerThunk.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(registerThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
    })
    .addCase(registerThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // LogOut

    .addCase(logOutThunk.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(logOutThunk.fulfilled, (state, action) => {
      return INITIAL_STATE;
    })
    .addCase(logOutThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // Refresh

    .addCase(refreshUserThunk.pending, (state, action) => {
      state.isRefreshing = true;
      state.error = null;
    })
    .addCase(refreshUserThunk.fulfilled, (state, action) => {
      state.isRefreshing = false;
      if(state.token){
        state.authenticated = true;
      }
    })
    .addCase(refreshUserThunk.rejected, (state, action) => {
      state.isRefreshing = false;
      state.error = action.payload;
    })
});

// export default authSlice.reducer;
export const authReducer = authSlice.reducer;
