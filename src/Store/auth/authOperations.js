import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentUserThunk } from 'Store/currentUser/currentUserThunk';
import {
  userLogin,
  userRegister,
  userLogOut,
  updatePassword,
  forgotPassword,
  getCurrentUser
} from 'services/api';

export const loginThunk = createAsyncThunk(
  'user/login',
  async (userData, thunkAPI) => {
    try {
      const response = await userLogin(userData);
      await thunkAPI.dispatch(getCurrentUserThunk());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  'user/register',
  async (userData, thunkAPI) => {
    try {
      const authData = await userRegister(userData);

      return authData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      await userLogOut(token);
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  '/auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if(token){
      try {
        const res = await getCurrentUser();
        return res;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
    return thunkAPI.rejectWithValue();

  
  }
);

export default createAsyncThunk(
  'user/forgotpassword',
  async (userData, thunkAPI) => {
    try {
      const res = await forgotPassword(userData);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePasswordThunk = createAsyncThunk(
  'user/updatepassword',
  async (userData, thunkAPI) => {
    try {
      const res = await updatePassword(userData);

      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
