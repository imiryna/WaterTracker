import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getCurrentUserThunk,
  updateCurrentUserThunk,
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

      // ! Added ZooBeeN ********************
      .addCase(updateCurrentUserThunk.pending, state => {
        // handlePending(state);
        console.log('UpdateUser-Pending');
      })
      .addCase(updateCurrentUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        console.log('UpdateUser-Fulfield - Payload-slice: ', payload);
        // state.user = newUser;
      })
      .addCase(updateCurrentUserThunk.rejected, (state, { payload }) => {
        console.log('UpdateUser-Rejected!!!');
        handleRejected(state, payload);
      })
      // ! **************************
      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          getCurrentUserThunk.pending,
          logOutThunk.pending,
          updateCurrentUserThunk.pending
        ),
        state => {
          state.error = null;
          state.isLoading = true;
        }
      );
  },
});

export const currentUserReducer = currentUserSlice.reducer;
