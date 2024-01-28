import { createAsyncThunk } from "@reduxjs/toolkit";


// DEL WATER
export const delWaterThunk = createAsyncThunk(
    'todayWater/delete',
    async (waterId, thunkAPI) => {
      try {
        return waterId;
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
        newQuantity = parseInt(newQuantity);
        if (newQuantity <= 0 || newQuantity > 5000 || Number.isNaN(newQuantity))
          throw new Error('Water quantity must be more then 0ml, less then 5000ml and be a number');
        return { waterId, newQuantity, newTime };
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
        quantity = parseInt(quantity);
        console.log(`quantity:`, quantity);
        if (quantity <= 0 || quantity > 5000 || Number.isNaN(quantity))
          throw new Error('Water quantity must be more then 0ml, less then 5000ml and be a number');
  
        return { quantity, time };
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
        newNorma = parseInt(newNorma)
        if (newNorma <= 0 || newNorma > 15000 || Number.isNaN(newNorma))throw new Error('Water norma must be more then 0ml, less then 15000ml and be a number');
        return newNorma;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );