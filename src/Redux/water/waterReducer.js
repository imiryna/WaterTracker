import { createSlice } from '@reduxjs/toolkit';
import { addWaterThunk, changeDailyNormaThunk, changeWaterThunk, delWaterThunk } from './waterThunks';

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
  todayNorma: 1500,
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
      //?DEL WATER
      .addCase(delWaterThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(delWaterThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        // Searching for item to delete
        state.waterArr = state.waterArr.filter(
          item => item._id !== action.payload
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
      .addCase(changeDailyNormaThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(changeDailyNormaThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todayNorma = action.payload;
      }).addCase(changeDailyNormaThunk.rejected, (state, action) =>{
        state.isLoading = false
        state.error = action.payload
      }),
});

const recalculateTodayDrinkedWater = waterArr => {
  let totalWaterAmmount = 0;
  waterArr.forEach(item => (totalWaterAmmount += item.quantity));

  return totalWaterAmmount;
};

export const { setWater } = waterSlice.actions;
export const waterReducer = waterSlice.reducer;