import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMonthStat } from "services/api";

export const getMonthStat = createAsyncThunk('monthStat/getMonthStat', async (params, thunkApi) => {
    try {
        const monthStat = await fetchMonthStat(params);
        return monthStat.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})