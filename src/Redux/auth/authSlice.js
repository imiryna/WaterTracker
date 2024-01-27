import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginThunk } from './authThank';

const INITIAL_STATE = {
  user: {
    token: null,
    email: null,
    name: null,
  },
  authenticated: false,
  isLoading: false,
  error: null,
};


const authSlice = createSlice({
  name: 'auth', 

  initialState: INITIAL_STATE,

  extraReducers: builder =>
  builder

  .addCase(loginThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isLoading = false;
      state.authenticated = true;
      state.token = action.payload.token;
     
  })

 

  .addMatcher(
      isAnyOf(
        loginThunk.pending
        
      ),
      state => {
        state.isLoading = true;
        state.error = null;
      }
    )
    .addMatcher(isAnyOf(
      loginThunk.rejected,

    ), (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }),
}
)

export default authSlice.reducer;
