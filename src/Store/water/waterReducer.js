import { createSlice } from '@reduxjs/toolkit';
import { addWaterThunk,  changeWaterThunk, delWaterThunk, getDailyWaterThunk } from './waterThunks';

/*
  water card exemple:
  {
    _id: *id*,
    quantity: 0 < number <= 5000,
    time: *time obj*
  }
*/
const INITIAL_STATE = {
  waterArr:  [],
  isLoading: false,
  error: null,
  totalWaterAmmount: 0,
};


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
    //? GET WATER
    .addCase(getDailyWaterThunk.pending, state => {
      state.isLoading = true;
        state.error = null;
    })
    .addCase(getDailyWaterThunk.fulfilled, (state, action) => {
      state.waterArr = action.payload.dailyList
      state.totalWaterAmmount = recalculateTodayDrinkedWater(state.waterArr)
      state.isLoading = false
    })
    .addCase(getDailyWaterThunk.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
      //?DEL WATER
      .addCase(delWaterThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(delWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        // Searching for item to delete
        state.waterArr = state.waterArr.filter(
          item => item._id !== action.payload["Removed waterId"]
        );
        // Recalculating total today drinked water
        state.totalWaterAmmount = recalculateTodayDrinkedWater(state.waterArr);
      })
      .addCase(delWaterThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
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
          if (item._id === action.payload._id) {
            
            // Rewriting water card info
            item.amount = action.payload.amount || item.amount;
            item.time = action.payload.time || item.time;
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
        const newWater = { ...action.payload };
        state.waterArr.push(newWater);

        // Recalculating total today drinked water
        state.totalWaterAmmount = recalculateTodayDrinkedWater(state.waterArr);
      })
      .addCase(addWaterThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
     
});

const recalculateTodayDrinkedWater = waterArr => {
  let totalWaterAmmount = 0;
  waterArr.forEach(item => (totalWaterAmmount += item.amount));

  return totalWaterAmmount;
};

export const { setWater } = waterSlice.actions;
export const waterReducer = waterSlice.reducer;
