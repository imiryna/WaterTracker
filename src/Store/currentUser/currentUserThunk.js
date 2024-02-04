import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentUser } from 'services/api';

export const getCurrentUserThunk = createAsyncThunk(
  'user/getCurrent',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (token) {
      try {
        const res = await getCurrentUser(token);
        return res;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      } 
    }
    return
  }
);
