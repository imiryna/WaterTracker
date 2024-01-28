import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin } from "services/api";

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (formData, thunkAPI) => {
        try {
            const response = await userLogin(formData);
            
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);



