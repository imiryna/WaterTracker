import axios from 'axios';

export const waterTrackerInstance = axios.create({
  baseURL: 'https://.com/' /* впишіть базовий url*/,
});
