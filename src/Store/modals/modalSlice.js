import { createSlice } from '@reduxjs/toolkit';
import { logOutThunk } from 'Store/auth/authOperations';

const INITIAL_STATE = {
  addWaterShowing: false,
  editWaterShowing: false,
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
    toggleEditWateVisibility(state) {
      state.editWaterShowing = !state.editWaterShowing;
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
  extraReducers: build => {
    build.addCase(logOutThunk.fulfilled, () => {
      return INITIAL_STATE
    })
  }
});

export const {
  toggleAddWateVisibility,
  toggleEditWateVisibility,
  toggleSettingsVisibility,
  toggleMyDailyNormaVisibility,
  toggleDropdownVisibility,
  toggleLogoutVisibility,
} = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
