import { createAsyncThunk } from '@reduxjs/toolkit';

// todo -
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// export const fetchContacts = createAsyncThunk(
//   'user/fetchAll',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );
// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('/contacts', contact);
//       return response.data;
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );
// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (Id, { rejectWithValue }) => {
//     try {
//       const response = await axios.delete(`/contacts/${Id}`);
//       return response.data;
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );
