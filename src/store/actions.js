import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { getAllnews } from '../axiosRequests';

export const getNews = createAsyncThunk(
  'GET_NEWS',
  async () => {
    const resp = await getAllnews();
    return resp;
  },
);

export const changeCount = createAction('COUNT_FETCH_REQUESTED');
