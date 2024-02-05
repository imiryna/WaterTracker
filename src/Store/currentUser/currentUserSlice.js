import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getCurrentUserThunk,
  updateCurrentUserThunk,
  uploadUserAvatarThunk,
  changeDailyNormaThunk,
} from './currentUserThunk';

import {
  logOutThunk,
  loginThunk,
  refreshUserThunk,
} from 'Store/auth/authOperations';

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
    gender: null,
    dailyNorm: null,
    avatarUrl: null,
  },
  error: null,
  isLoading: true,
};

// Added ZooBeeN
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
// ! ************************

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = {
          avatarUrl: action.payload.avatar,
          dailyNorm: action.payload.dailyNorm,
          email: action.payload.email,
          gender: action.payload.gender,
          name: action.payload.name,
        };
      })
      .addCase(logOutThunk.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = {
          avatarUrl: action.payload.avatar,
          dailyNorm: action.payload.dailyNorm,
          email: action.payload.email,
          gender: action.payload.gender,
          name: action.payload.name,
        };
      })

      // ! Added ZooBeeN ********************

      .addCase(getCurrentUserThunk.pending, state => {
        // handlePending(state);
        console.log('GetUser-Pending');
      })
      .addCase(getCurrentUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        console.log('GetUser-Fulfield');
        state.user = payload.user;
      })
      .addCase(getCurrentUserThunk.rejected, (state, { payload }) => {
        console.log('GetUser-Rejected!!!');
        handleRejected(state, payload);
      })

      .addCase(updateCurrentUserThunk.pending, state => {
        // handlePending(state);
        console.log('UpdateUser-Pending');
      })
      .addCase(updateCurrentUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        console.log('UpdateUser-Fulfield');
        state.user = payload.user;
      })
      .addCase(updateCurrentUserThunk.rejected, (state, { payload }) => {
        console.log('UpdateUser-Rejected!!!');
        handleRejected(state, payload);
      })

      .addCase(uploadUserAvatarThunk.pending, state => {
        // handlePending(state);
        console.log('UpdateUserAvatar-Pending');
      })
      .addCase(uploadUserAvatarThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        console.log('UpdateUserAvatar-Fulfield');
        state.user.avatarUrl = payload.avatarURL;
      })
      .addCase(uploadUserAvatarThunk.rejected, (state, { payload }) => {
        console.log('UpdateUserAvatar-Rejected!!!');
        handleRejected(state, payload);
      })
      // ! **************************
      //?CHANGE DALY NORMA
      .addCase(changeDailyNormaThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(changeDailyNormaThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.dailyNorm = action.payload.dailyNorm;
      })
      .addCase(changeDailyNormaThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(
        isAnyOf(
          getCurrentUserThunk.pending,
          updateCurrentUserThunk.pending,
          uploadUserAvatarThunk.pending,
          loginThunk.pending,
          logOutThunk.pending
        ),
        state => {
          state.error = null;
          state.isLoading = true;
        }
      );
  },
});

export const currentUserReducer = currentUserSlice.reducer;
