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
      return response;
    } catch (error) {
      console.log(error)
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
    if(token){
      try {
        await userLogOut();
        return;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
    return;
    
  }
);

export const refreshUserThunk = createAsyncThunk(
  '/user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if(token){
      try {
        const res = await getCurrentUser(token);
        await thunkAPI.dispatch(getCurrentUserThunk())
        return res;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
    return thunkAPI.rejectWithValue();

  
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
