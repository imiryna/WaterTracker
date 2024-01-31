import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin, userRegister, userLogOut, forgotPassword, updatePassword } from "services/api";

export const loginThunk = createAsyncThunk(
    'user/login',
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

export const logOutThunk = createAsyncThunk(
    'user/logout',
    async (_, thunkAPI) => {
      try {
        await userLogOut();
  
        return; 
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const forgotPasswordThunk = createAsyncThunk(
    'user/forgotpassword',
    async (_, thunkAPI) => {
        try {
            await forgotPassword();

            return;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const updatePasswordThunk = createAsyncThunk(
    'user/updatepassword',
    async (_, thunkAPI) => {
        try {
            await updatePassword();

            return;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
