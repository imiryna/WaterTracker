import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentUser } from 'services/api';

export const refreshUserThunk = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if(token === null){
      return thunkAPI.rejectWithValue('Please login')
    }
    try {
      const res = await getCurrentUser(token);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
