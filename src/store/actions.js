import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNews = createAsyncThunk(
  'GET_NEWS',
  async () => {
    let data;
    await axios.get('http://localhost:8080/news/').then(res => data = res.data);
    return data;
  }
);
