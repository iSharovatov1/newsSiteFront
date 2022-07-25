import { create } from 'axios';

const instance = create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default instance;
