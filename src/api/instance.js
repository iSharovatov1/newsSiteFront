import { create } from 'axios';

const instance = create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

export default instance;
