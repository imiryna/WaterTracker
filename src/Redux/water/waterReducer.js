import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import water from 'components/TodayWaterList/water.json';

const INITIAL_STATE = {
  waterArr: water || [],
  isLoading: false,
  error: null,
  totalWaterAmmount: 0,
  todayNorma: 1500,
};

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

// CHENGE WATER
export const changeWaterThunk = createAsyncThunk(
  'todayWater/change',
  async ({ waterId, newQuantity, newTime }, thunkAPI) => {
    try {
      newQuantity = parseInt(newQuantity);
      if (newQuantity <= 0 || Number.isNaN(newQuantity))
        throw new Error('Water quantity must be more then 0ml and be a number');
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
      if (quantity <= 0 || Number.isNaN(quantity))
        throw new Error('Water quantity must be more then 0ml and be a number');

      return { quantity, time };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//CHANGE DALY NORMA
export const changeDalyNormaThunk = createAsyncThunk(
  'waterNorma/change',
  async (newNorma, thunkAPI) => {
    try {
      return newNorma;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const waterSlice = createSlice({
  name: 'waterArr',
  initialState: INITIAL_STATE,
  reducers: {
    setWater: (state, action) => {
      state.waterArr = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      //?DEL WATER
      .addCase(delWaterThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(delWaterThunk.fulfilled, (state, action) => {
        console.log('hello');
        state.isLoading = false;

        // Searching for item to delete
        state.waterArr = state.waterArr.filter(
          item => item._id !== action.payload
        );
        // Recalculating total today drinked water
        state.totalWaterAmmount = recalculateTodayDrinkedWater(state.waterArr);
      })
      //?CHANGE WATER
      .addCase(changeWaterThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(changeWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        // Searching for water card to change
        state.waterArr = state.waterArr.map(item => {
          if (item._id === action.payload.waterId) {
            
            // Rewriting water card info
            item.quantity = action.payload.newQuantity || item.quantity;
            item.time = action.payload.newTime || item.time;
          }
          return item;
        });


        // Recalculating total today drinked water
        state.totalWaterAmmount = recalculateTodayDrinkedWater(state.waterArr);
      })
      .addCase(changeWaterThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //?ADD WATER
      .addCase(addWaterThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        // Generating new wter card (using Math.random qz we don`t have backend now)
        const newWater = { _id: Math.random() * 1000, ...action.payload };
        state.waterArr.push(newWater);

        // Recalculating total today drinked water
        state.totalWaterAmmount = recalculateTodayDrinkedWater(state.waterArr);
      })
      .addCase(addWaterThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //?CHANGE DALY NORMA
      .addCase(changeDalyNormaThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(changeDalyNormaThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todayNorma = action.payload;
      }),
});

const recalculateTodayDrinkedWater = waterArr => {
  let totalWaterAmmount = 0;
  waterArr.forEach(item => (totalWaterAmmount += item.quantity));
  console.log(`totalWaterAmmount:`, totalWaterAmmount);
  return totalWaterAmmount;
};

export const { setWater } = waterSlice.actions;
export const waterReducer = waterSlice.reducer;
