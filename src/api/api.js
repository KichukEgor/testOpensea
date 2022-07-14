import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.opensea.io/api',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
