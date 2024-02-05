import { createSlice } from "@reduxjs/toolkit"
import { getMonthStat } from "./monthStatThunk";
import { logOutThunk } from "Store/auth/authOperations";

const INITIAL_STATE = {
    isLoading: false,
    statistic: [],
    error: null,
};

const monthStatSlice = createSlice({
    name: 'monthStat',
    initialState: INITIAL_STATE,
    extraReducers: (builder) => {
        builder.addCase(getMonthStat.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        }).addCase(getMonthStat.fulfilled, (state, action) => {
            state.isLoading = false;
            state.statistic = action.payload;
        }).addCase(getMonthStat.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(logOutThunk.fulfilled, (state) => {
            return INITIAL_STATE;
        })
    }
})
export default monthStatSlice.reducer;
export const monthStatReducer = monthStatSlice.reducer;
// export const{setMonth, setYear} = monthStatSlice.actions;