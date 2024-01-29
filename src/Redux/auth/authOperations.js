import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "services/api";

export const loginThunk = createAsyncThunk(
    'users/login',
    async (userData, thunkAPI) => {
        try {
            const response = await userLogin(userData);
            
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const registerThunk = createAsyncThunk(
    'user/register',
    async (userData, thunkAPI) => {
        try {
            const authData = await userRegister(userData);
            
            return authData;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


