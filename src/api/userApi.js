import instance from './instance';

export const getUser = async (id) => {
  const { data } = await instance.get(`/user/${id}`);
  return data;
};

export const getUserNews = async (id) => {
  const { data } = await instance.get(`/news/user/${id}`);
  return data;
};
