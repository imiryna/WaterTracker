import { createSlice } from "@reduxjs/toolkit"
import { getMonthStat } from "./monthStatThunk";

const monthStatSlice = createSlice({
    name: 'monthStat',
    initialState: {
        owner: '',
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
        monthStat: [],
        isLoading: false,
        error: null,
    },
    reducers:{
        setMonth: (state, action) => {
            state.month = action.payload;
        },
        setYear: (state, action) => {
            state.year = action.payload;
        }
    }, 
    extraReducers: (builder) => {
        builder.addCase(getMonthStat.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        }).addCase(getMonthStat.fulfilled, (state, action) => {
            state.isLoading = false;
            state.owner = action.payload.owner;
            state.month = action.payload.month;
            state.monthStat = action.payload.monthStat;
        }).addCase(getMonthStat.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})
export default monthStatSlice.reducer;
export const monthStatReducer = monthStatSlice.reducer;
export const{setMonth, setYear} = monthStatSlice.actions;