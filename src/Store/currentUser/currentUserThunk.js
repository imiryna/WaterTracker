import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentUser } from 'services/api';

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
