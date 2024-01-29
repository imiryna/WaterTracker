import { waterTrackerInstance } from './baseURL';

// Set and clear token
const setToken = token => {
  waterTrackerInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  waterTrackerInstance.defaults.headers.common.Authorization = '';
};

// User apis
export const getCurrentUser = async () => {
  const data = await waterTrackerInstance.get(`/user/current`);
  return data;
};

export const userLogin = async userData => {
  const { data } = await waterTrackerInstance.post('/users/login', userData);
  setToken(data.token);
  return data;
};

export const userRegister = async userData => {
  const { data } = await waterTrackerInstance.post('/users/register', userData);
  setToken(data.token);
  localStorage.clear();
  return data;
};

export const userLogOut = async userData => {
  const { data } = await waterTrackerInstance.post('/users/logout', userData);
  clearToken();
  return data;
};

export const uploadUserAvatar = async userData => {
  const { data } = await waterTrackerInstance.patch(
    '/users/udateAvatar',
    userData
  );
  return data;
};

export const updateUser = async userData => {
  const { data } = await waterTrackerInstance.patch(
    '/users/updateUser',
    userData
  );
  return data;
};
// Today water portions apis

// export const getTodayWater = async () => {
//   const {data} = await waterTrackerInstance.get('/');
//   return data;
// }

// export const getTodayWaterById = async(waterId) => {
//   return await waterTrackerInstance.get(`/${waterId}`)
// }

// export const addTodayWater = async(data) => {
//   return await waterTrackerInstance.post('/');
// }

// export const removeTodayWater = async(waterId) => {
//   return await waterTrackerInstance.delete(`/${waterId}`)
// }

// export const editTodayWater = async(waterId, value) => {
//   const water = await getTodayWaterById(waterId);
//   const updatedWater = {...water, ...value}
// }

// // Daily norma apis

// export const getDailyNorma = async() => {
//   return await waterTrackerInstance.get('/dailyNorma')
// }

// export const createDailyNorma = async(data) => {
// return await waterTrackerInstance.post('/dailyNorma', data)
// }

// // Month info

export const fetchMonthStat = async month => {
  setToken();
  return await waterTrackerInstance.get(`/monthStat/${month}`);
};
