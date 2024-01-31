export const selectUserSettings = state => {
  console.log(state.modal.settingShowing);
  return state.modal.settingShowing;
};
