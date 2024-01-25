import { waterTrackerInstance } from './baseURL';

/* your api routs here */
export const getContacts = async () => {
  const { data } = await phonebookInstance.get('/');
  return data;
};
