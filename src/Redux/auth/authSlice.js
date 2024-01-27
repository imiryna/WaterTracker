import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginThunk, registerThunk } from './authThank';

const INITIAL_STATE = {
  user: {
    token: null,
    email: null,
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

 

  .addMatcher(
      isAnyOf(
        loginThunk.pending,
        registerThunk.pending
        
      ),
      state => {
        state.error = null;
      }
    )
    .addMatcher(isAnyOf(
      loginThunk.rejected,
      registerThunk.rejected

    ), (state, action) => {
      state.error = action.payload;
    }),
}
)

export default authSlice.reducer;
