import { createSlice } from "@reduxjs/toolkit"

const paginationSlice = createSlice({
    name: monthStat,
    initialState: {
        month: new Date().getMonth,
        year: new Date().getFullYear,
    },
    reducers: {
        setMonth: (state, action) => {
            state.month = action.payload;
        },
        setYear: (state, action) => {
            state.year = action.payload;
        }
    }
})

export const {setMonth, setYear} = paginationSlice.actions;
export default paginationSlice.reducer;