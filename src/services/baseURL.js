import axios from 'axios';

export const waterTrackerInstance = axios.create({
  baseURL:
    'https://water-tracker-backend-314i.onrender.com/api/' /* впишіть базовий url*/,
});
