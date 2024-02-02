import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMonthStat } from 'services/api.js';

export const getMonthStat = createAsyncThunk(
  'monthStat/getMonthStat',
  async ({ month, year }, thunkApi) => {
    try {
      const monthStat = await fetchMonthStat(month, year);
      return monthStat;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
