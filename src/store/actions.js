import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNews = createAsyncThunk(
  'GET_NEWS',
  async () => {
    const { data } = await axios({
      method: 'get',
      url: 'http://localhost:8080/news/'
    });
    return data;
  }
);
