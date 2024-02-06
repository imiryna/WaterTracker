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
    created: ' ',
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
          avatarUrl: action.payload.avatarUrl,
          dailyNorm: action.payload.dailyNorm,
          email: action.payload.email,
          gender: action.payload.gender,
          name: action.payload.name,
          created: action.payload.created,
        };
      })
      .addCase(logOutThunk.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = {
          avatarUrl: action.payload.avatarUrl,
          dailyNorm: action.payload.dailyNorm,
          email: action.payload.email,
          gender: action.payload.gender,
          name: action.payload.name,
          created: action.payload.created,
        };
      })
      .addCase(getCurrentUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // .addCase(getCurrentUserThunk.fulfilled, (state, action) => {
      //   state.user = {
      //     name: action.payload.name,
      //     email: action.payload.email,
      //     gender: action.payload.gender,
      //     dailyNorm: action.payload.dailyNorm,
      //     avatarUrl: action.payload.avatar,
      //   };
      //   state.error = null;
      //   state.isLoading = false;
      // })
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

      // ! Added ZooBeeN ********************
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
        handleRejected(state, payload);
      })
      // ! **************************
      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          getCurrentUserThunk.pending,
          logOutThunk.pending,
          updateCurrentUserThunk.pending,
          uploadUserAvatarThunk.pending
        ),
        state => {
          state.error = null;
          state.isLoading = true;
        }
      );
  },
});

export const currentUserReducer = currentUserSlice.reducer;
