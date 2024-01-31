import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  addWaterShowing: false,
  settingShowing: false,
  myDailyNormaShowing: false,
  dropdownShowing: false,
  confirmLogoutShowing: false,
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
    toggleDropdownVisibility(state) {
      state.dropdownShowing = !state.dropdownShowing;
    },
    toggleLogoutVisibility(state) {
      state.confirmLogoutShowing = !state.confirmLogoutShowing;
    },
  },
});

export const {
  toggleAddWateVisibility,
  toggleSettingsVisibility,
  toggleMyDailyNormaVisibility,
  toggleDropdownVisibility,
  toggleLogoutVisibility,
} = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
