import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  userLogin,
  userRegister,
  userLogOut,
  getCurrentUser,
  updatePassword,
  forgotPassword,
} from 'services/api.js';

export const loginThunk = createAsyncThunk(
  'user/login',
  async (userData, thunkAPI) => {
    try {
      const response = await userLogin(userData);
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
    console.log(token);
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
    if (!token) {
      return thunkAPI.rejectWithValue('Please Login');
    }

    try {
      const res = await getCurrentUser(token);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const forgotPasswordThunk = createAsyncThunk(
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
