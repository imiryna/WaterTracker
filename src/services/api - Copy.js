// import { waterTrackerInstance } from './baseURL';
import axios from 'axios';
// Set and clear token
axios.defaults.baseURL = 'https://water-tracker-backend-314i.onrender.com/api/';

export const setToken = token => {
  // waterTrackerInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  console.log(
    'Set token: ',
    token,
    'Axios: ',
    axios.defaults.headers.common.Authorization
  );
};

export const clearToken = () => {
  // waterTrackerInstance.defaults.headers.common.Authorization = '';
  console.log('Token delete!');
  axios.defaults.headers.common.Authorization = '';
};

// User apis
export const getCurrentUser = async token => {
  console.log('Get user');
  // setToken(token);
  const { data } = await axios.get(`/user/current`);
  return data;
};

export const userLogin = async userData => {
  const { data } = await axios.post('/user/login', userData);
  console.log('Login: ', data);
  setToken(data.token);
  return data;
};

export const userRegister = async userData => {
  const { data } = await axios.post('/user/register', userData);
  setToken(data.token);
  localStorage.clear();
  return data;
};

export const userLogOut = async userData => {
  console.log('Log out');
  const { data } = await axios.post('/user/logout', userData);
  clearToken();
  return data;
};

export const uploadUserAvatar = async userData => {
  console.log('Avatar');
  const { data } = await axios.patch('/user/udateAvatar', userData);
  return data;
};

export const updateUser = async (userData, token) => {
  // setToken(token);
  console.log('User update');
  const { data } = await axios.patch('/user/updateUser', userData);
  return data;
};

export const forgotPassword = async userData => {
  console.log('Forgot pass');
  const { data } = await axios.post('/user/forgotpassword', userData);
  return data;
};

export const updatePassword = async userData => {
  console.log('Updatepass');
  const { data } = await axios.patch('/user/updatepassword', userData);
  setToken(data.token);
  return data;
};

// Today water portions apis

export const getWaterServings = async token => {
  console.log('Get WaterServ');
  // setToken(token);
  const { data } = await axios.get('/water/today');
  return data;
};

export const getWaterServingById = async (servingId, token) => {
  console.log('Get WaterServ-byID');
  // setToken(token);
  const { data } = await axios.get(`/water/today/${servingId}`);
  return data;
};

export const addWaterServing = async (servingData, token) => {
  console.log('Add Water');
  // setToken(token);
  const { data } = await axios.post('/water', servingData);
  return data;
};

export const removeWaterServing = async (servingId, token) => {
  console.log('RemoveWater');
  // setToken(token);
  const { data } = await axios.delete(`/water/${servingId}`);
  return data;
};

export const editWaterServing = async (servingId, servingData, token) => {
  console.log(`Id:`, servingId);
  // setToken(token);
  // const water = await getWaterServingById(servingId);
  // const updatedWater = { ...water, ...servingData };
  const { data } = await axios.put(`/water/${servingId}`, servingData);
  return data;
};

// // Daily norma apis

export const getDailyNorma = async token => {
  console.log('Daily Norma');
  // setToken(token);
  const { data } = await axios.get('/water');
  return data;
};

export const updateDailyNorma = async (dailyNorma, token) => {
  console.log('Update Daily norma');
  // setToken(token);
  const { data } = await axios.patch('/user/upDateWaterRate', dailyNorma);
  return data;
};

// // Month info

export const fetchMonthStat = async (month, year, token) => {
  console.log('Fetch Month');
  // setToken(token);
  const { data } = await axios.get(`/monthStat/${year}/${month}`);
  return data;
};
