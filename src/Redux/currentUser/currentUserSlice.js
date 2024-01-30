import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUserThunk } from './currentUserThunk';

const currentUserSlice = createSlice({
    name: 'currentUserSlice',
    initialState: {
        user: null,
        error: null,
        isLoading: true,
    },
    extraReducers: builder => {
        builder
        .addCase(getCurrentUserThunk.pending, state => {
            state.error = null;
            state.isLoading = true;
        })
        .addCase(getCurrentUserThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload.user;
            state.error = null;
        })
        .addCase(getCurrentUserThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export const currentUserReducer = currentUserSlice.reducer