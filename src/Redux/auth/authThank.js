import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "services/api";

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

export const registerThunk = createAsyncThunk(
    'auth/register',
    async (formData, thunkAPI) => {
        try {
            const authData = await userRegister(formData);
            
            return authData;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


