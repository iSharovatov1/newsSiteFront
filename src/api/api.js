import axios from 'axios';

const getNews = async () => {
  const { data } = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_URL_HOST}/news`,
  });
  return data;
};

export default getNews;
