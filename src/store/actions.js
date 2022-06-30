import GET_ALL_NEWS from './constants';

const getAllNews = (payload) => ({ type: GET_ALL_NEWS.PENDING, payload });

export default getAllNews;
