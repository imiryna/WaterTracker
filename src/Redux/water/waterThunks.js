import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addWaterServing,
  editWaterServing,
  removeWaterServing,
  updateDailyNorma,
} from 'services/api';
import { getUtcTime } from 'services/helpers/getUtcTime';

// DEL WATER
export const delWaterThunk = createAsyncThunk(
  'todayWater/delete',
  async (waterId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const removedWater = await removeWaterServing(waterId, token)
      return removedWater;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// CHANGE WATER
export const changeWaterThunk = createAsyncThunk(
  'todayWater/change',
  async ({ waterId, newQuantity, newTime }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      newQuantity = parseInt(newQuantity);
      if (newQuantity <= 0 || newQuantity > 5000 || Number.isNaN(newQuantity))
        throw new Error(
          'Water quantity must be more then 0ml, less then 5000ml and be a number'
        );
      const time = getUtcTime(newTime);
      const water = await editWaterServing(
        waterId,
        { amount: newQuantity, time },
        token
      );
      return water;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// ADD WATER
export const addWaterThunk = createAsyncThunk(
  'todayWater/add',
  async ({ quantity, time }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      quantity = parseInt(quantity);
      if (quantity <= 0 || quantity > 5000 || Number.isNaN(quantity))
        throw new Error(
          'Water quantity must be more then 0ml, less then 5000ml and be a number'
        );
      const utcTime = getUtcTime(time);
      const newUser = await addWaterServing(
        {
          amount: quantity,
          time: utcTime,
        },
        token
      );
      return newUser;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//CHANGE DALY NORMA
export const changeDailyNormaThunk = createAsyncThunk(
  'waterNorma/change',
  async (newNorma, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      newNorma = parseInt(newNorma);
      if (newNorma <= 0 || newNorma > 15000 || Number.isNaN(newNorma))
        throw new Error(
          'Water norma must be more then 0ml, less then 15000ml and be a number'
        );
      const updatedDaliyNorma = await updateDailyNorma(newNorma, token);

      return updatedDaliyNorma;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
