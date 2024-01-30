import { createSlice } from '@reduxjs/toolkit';
// import {  } from './usersOperations';

const initialState = {
  isLoading: false,
  error: null,
};

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };
// const usersSlice = createSlice({
//   name: 'users',
//   initialState,

  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchContacts.pending, state => {
  //       handlePending(state);
  //     })
  //     .addCase(fetchContacts.fulfilled, (state, { payload }) => {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.items = payload;
  //     })
  //     .addCase(fetchContacts.rejected, (state, { payload }) => {
  //       handleRejected(state, payload);
  //     })
  //     .addCase(addContact.pending, state => {
  //       handlePending(state);
  //     })
  //     .addCase(addContact.fulfilled, (state, { payload }) => {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.items.push(payload);
  //     })
  //     .addCase(addContact.rejected, (state, { payload }) => {
  //       handleRejected(state, payload);
  //     })
  //     .addCase(deleteContact.pending, state => {
  //       handlePending(state);
  //     })
  //     .addCase(deleteContact.fulfilled, (state, { payload }) => {
  //       state.isLoading = false;
  //       state.error = null;
  //       const index = state.items.findIndex(
  //         contact => contact.id === payload.id
  //       );
  //       state.items.splice(index, 1);
  //     })
  //     .addCase(deleteContact.rejected, (state, { payload }) => {
  //       handleRejected(state, payload);
  //     });
  // },

  // reducers: {
  //   setFilter(state, { payload }) {
  //     state.filter = payload;
  //   },
  // },
});

// export const { setFilter } = usersSlice.actions;
// export const usersReducer = usersSlice.reducer;
