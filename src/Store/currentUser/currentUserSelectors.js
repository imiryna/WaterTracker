export const selectUserData = state => state.currentUser.user;
export const selectIsLoading = state => state.currentUser.isLoading;
export const selectError = state => state.currentUser.error;
export const selectDailyNorm = state => state.currentUser.user.dailyNorm;
export const selectRegisterDate = state => state.currentUser.user.registerDate;