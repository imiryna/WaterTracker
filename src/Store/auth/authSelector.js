import { createSelector } from '@reduxjs/toolkit';

const selectAuth = state => state.auth;

export const selectAuthError = createSelector(selectAuth, auth => auth.error);
export const selectAuthToken = createSelector(selectAuth, auth => auth.token);
export const selectAuthAuthenticated = state => state.auth.authenticated;
export const selectAuthenticated = state => state.auth.authenticated;
export const selectAuthIsLoading = createSelector(
  selectAuth,
  auth => auth.isLoading
);
export const selectIsRefreshing = state => state.currentUser.isRefreshing;
