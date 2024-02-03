import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentUser, updateUser } from 'services/api.js';

export const getCurrentUserThunk = createAsyncThunk(
  'user/getCurrent',
  async (_, thunkAPI) => {
    console.log('GET CURRENT USER');
    const token = thunkAPI.getState().auth.token;
    if (token === null) {
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

export const updateCurrentUserThunk = createAsyncThunk(
  'user/updateUser',
  async (data, thunkAPI) => {
    console.log('UPDATE CURRENT USER');
    const token = thunkAPI.getState().auth.token;
    if (token === null) {
      return thunkAPI.rejectWithValue('Please Login');
    }
    try {
      console.log(data);
      const res = await updateUser(data, token);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
