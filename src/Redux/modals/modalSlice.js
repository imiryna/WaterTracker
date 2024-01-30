import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  addWaterShowing: false,
  settingShowing: false,
  myDailyNormaShowing: false,
};

const modalSlice = createSlice({
  name: 'modal',

  initialState: INITIAL_STATE,

  reducers: {
    toggleAddWateVisibility(state) {
      state.addWaterShowing = !state.addWaterShowing;
    },
    toggleSettingsVisibility(state) {
      state.settingShowing = !state.settingShowing;
    },
    toggleMyDailyNormaVisibility(state) {
      state.myDailyNormaShowing = !state.myDailyNormaShowing;
    },
  },
});

export const {
  toggleAddWateVisibility,
  toggleSettingsVisibility,
  toggleMyDailyNormaVisibility,
} = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
