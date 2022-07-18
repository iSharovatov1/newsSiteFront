import instance from './instance';

const getNews = async () => {
  const { data } = await instance.get('/api/news');
  return data;
};

export default { getNews };
