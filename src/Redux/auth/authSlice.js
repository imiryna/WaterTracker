import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginThunk, registerThunk, logOutThunk } from './authOperations';

const INITIAL_STATE = {
  token: null,
  user: {
    email: null,
    name: null,
    avatarUrl: null, 
    gender: null,
  },
  authenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',

  initialState: INITIAL_STATE,

  extraReducers: builder =>
    builder

  .addCase(loginThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.authenticated = true;
      state.token = action.payload.token;
     
  })

  .addCase(registerThunk.fulfilled, (state, action) => {
    state.user = action.payload.user;
    state.authenticated = true;
    state.token = action.payload.token;
    
})

  .addCase(logOutThunk.fulfilled, () => {
    return INITIAL_STATE;
  })

 

  .addMatcher(
      isAnyOf(
        loginThunk.pending,
        registerThunk.pending,
        logOutThunk.pending
        
      ),
      state => {
        state.error = null;
      }
    )
    .addMatcher(isAnyOf(
      loginThunk.rejected,
      registerThunk.rejected,
      logOutThunk.rejected

    ), (state, action) => {
      state.error = action.payload;
    }),
}
)

// export default authSlice.reducer;
export const authReducer = authSlice.reducer;
