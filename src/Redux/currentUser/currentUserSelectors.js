export const selectUser = state => state.currentUserSlice.user;
export const selectIsLoading = state => state.currentUserSlice.isLoading;
export const selectError = state => state.currentUserSlice.error;