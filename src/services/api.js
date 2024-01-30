import { waterTrackerInstance } from './baseURL';

// Set and clear token
export const setToken = token => {
  waterTrackerInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  waterTrackerInstance.defaults.headers.common.Authorization = '';
};

// User apis
export const getCurrentUser = async (token) => {
  setToken(token)
  const data = await waterTrackerInstance.get(`/user/current`);
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

export const userLogOut = async userData => {
  const { data } = await waterTrackerInstance.post('/user/logout', userData);
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

export const getWaterServings = async (token) => {
  setToken(token);
  const {data} = await waterTrackerInstance.get('/water/today');
  return data;
}

export const getWaterServingById = async(servingId, token) => {
  setToken(token);
  return await waterTrackerInstance.get(`/water/today/${servingId}`)
}

export const addWaterServing = async(data, token) => {
  setToken(token);
  return await waterTrackerInstance.post('/water', data);
}

export const removeWaterServing = async(servingId, token) => {
  setToken(token);
  return await waterTrackerInstance.delete(`/water/${servingId}`)
}

export const editWaterServing = async(servingId, data, token) => {
  setToken(token);
  const water = await getWaterServingById(servingId);
  const updatedWater = {...water, ...data}
}

// // Daily norma apis

export const getDailyNorma = async() => {
  setToken(token);
  return await waterTrackerInstance.get('/water')
}

export const updateDailyNorma = async(data, token) => {
  setToken(token);
  return await waterTrackerInstance.patch('/user/upDateWaterRate', data)
}

// // Month info

export const fetchMonthStat = async (month, year, token) => {
  setToken(token);
  return await waterTrackerInstance.get(`/monthStat/${month}`);
};
