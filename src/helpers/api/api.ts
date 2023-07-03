import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

const $host = axios.create({
  baseURL: 'https://practikum.softex.uz/api',
});

const $authHost = axios.create({
  baseURL: 'https://practikum.softex.uz/api',
});

// $authHost.interceptors.request.use((config) => {
//   // eslint-disable-next-line no-param-reassign
//   (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${localStorage.getItem('token')}`;
//   return config;
// });

export { $authHost, $host };
