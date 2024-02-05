import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  updateUser,
  uploadUserAvatar,
  updateDailyNorma,
} from 'services/api';

export const getCurrentUserThunk = createAsyncThunk(
  'user/getCurrent',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (token === null) {
      return thunkAPI.rejectWithValue('Please Login');
    }
    try {
      const res = await getCurrentUser(token);
      console.log('Get User Thunk: ', res);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const uploadUserAvatarThunk = createAsyncThunk(
  'user/avatars',
  async (data, thunkAPI) => {
    console.log('UPDATE USER AVATAR');
    const token = thunkAPI.getState().auth.token;
    if (token === null) {
      return thunkAPI.rejectWithValue('Please Login');
    }
    try {
      const res = await uploadUserAvatar(data, token);
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

export const changeDailyNormaThunk = createAsyncThunk(
  'waterNorma/change',
  async (newNorma, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      newNorma = parseInt(newNorma);
      console.log(`newNorma:`, newNorma);
      if (newNorma <= 0 || newNorma > 15000 || Number.isNaN(newNorma))
        throw new Error(
          'Water norma must be more then 0ml, less then 15000ml and be a number'
        );
      const updatedDaliyNorma = await updateDailyNorma(
        { dailyNorm: newNorma },
        token
      );

      return updatedDaliyNorma;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
