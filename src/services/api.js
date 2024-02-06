import { waterTrackerInstance } from './baseURL';

// Set and clear token
export const setToken = token => {
  waterTrackerInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  waterTrackerInstance.defaults.headers.common.Authorization = '';
};

// User apis
export const getCurrentUser = async token => {
  setToken(token);
  const { data } = await waterTrackerInstance.get(`/user/current`);
  return data;
};

export const userLogin = async userData => {
  const { data } = await waterTrackerInstance.post('/user/login', userData);
  setToken(data.token);
  return data;
};

export const userRegister = async userData => {
  const { data } = await waterTrackerInstance.post('/user/register', userData);
  setToken(data.token);
  localStorage.clear();
  return data;
};

export const userLogOut = async token => {
  setToken(token);
  const { data } = await waterTrackerInstance.post('/user/logout');
  clearToken();
  return data;
};

export const uploadUserAvatar = async userData => {
  const { data } = await waterTrackerInstance.patch('/user/avatars', userData);
  return data;
};

export const updateUser = async userData => {
  const { data } = await waterTrackerInstance.patch(
    '/user/updateUser',
    userData
  );
  return data;
};

export const forgotPassword = async userData => {
  const { data } = await waterTrackerInstance.post(
    '/user/forgot-password',
    userData
  );
  return data;
};

export const updatePassword = async (restoreToken, userData) => {
  const { data } = await waterTrackerInstance.patch(
    `/user/restore-password/${restoreToken}`,
    userData
  );
  return data;
};

// Today water portions apis

export const getWaterServings = async token => {
  setToken(token);
  const { data } = await waterTrackerInstance.get('/water/today');
  return data;
};

export const getWaterServingById = async (servingId, token) => {
  setToken(token);
  const { data } = await waterTrackerInstance.get(`/water/today/${servingId}`);
  return data;
};

export const addWaterServing = async (servingData, token) => {
  setToken(token);
  const { data } = await waterTrackerInstance.post('/water', servingData);
  return data;
};

export const removeWaterServing = async (servingId, token) => {
  setToken(token);
  const { data } = await waterTrackerInstance.delete(`/water/${servingId}`);
  return data;
};

export const editWaterServing = async (servingId, servingData, token) => {
  console.log(`Id:`, servingId);
  setToken(token);
  // const water = await getWaterServingById(servingId);
  // const updatedWater = { ...water, ...servingData };
  const { data } = await waterTrackerInstance.put(
    `/water/${servingId}`,
    servingData
  );
  return data;
};

// // Daily norma apis

export const getDailyNorma = async token => {
  setToken(token);
  const { data } = await waterTrackerInstance.get('/water');
  return data;
};

export const updateDailyNorma = async (dailyNorma, token) => {
  setToken(token);
  const { data } = await waterTrackerInstance.patch(
    '/user/updateWaterRate',
    dailyNorma
  );
  return data;
};

// // Month info

export const fetchMonthStat = async (month, year) => {
  const { data } = await waterTrackerInstance.get(
    `/water/month?date=${year}-${month}`
  );
  return data;
};
