import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addWaterServing,
  editWaterServing,
  getWaterServings,
  removeWaterServing,
} from 'services/api';
import { getUtcTime } from 'services/helpers/getUtcTime';

// GET WATER ARR
export const getDailyWaterThunk = createAsyncThunk(
  'todayWater/getArr',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const waterArr = await getWaterServings(token);
      return waterArr;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DEL WATER
export const delWaterThunk = createAsyncThunk(
  'todayWater/delete',
  async (waterId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const removedWater = await removeWaterServing(waterId, token);
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
      const token = thunkAPI.getState().auth.token;
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
      const token = thunkAPI.getState().auth.token;

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
      // const token = thunkAPI.getState().auth.token;
      newNorma = parseInt(newNorma);
      if (newNorma <= 0 || newNorma > 15000 || Number.isNaN(newNorma))
        throw new Error(
          'Water norma must be more then 0ml, less then 15000ml and be a number'
        );
      // ~ Наразі не доступно
      // const updatedDaliyNorma = await updateDailyNorma(newNorma, token);
      // ! Тимчасове рішення, поки не з'явиться можливість використати бекенд
      const updatedDaliyNorma = newNorma;
      return updatedDaliyNorma;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
