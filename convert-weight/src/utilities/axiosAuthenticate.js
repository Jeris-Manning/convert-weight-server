import axios from 'axios';

export const axiosAuthenticate = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'http://localhost:6666/api/',
    headers: {
      Authorization: token
    }
  });
};