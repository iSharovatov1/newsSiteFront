import axios from 'axios';

axios.interceptors.response.use((response) => {
  console.log('interceptors', response);
  return response;
}, (error) => {
  if (error.status === 401) {
    localStorage.removeItem('token');
    window.location.pathname = '/login';
  }
  return Promise.reject(error);
});

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

export const registration = async (data) => {
  const resp = await axios(
    {
      method: 'post',
      url: 'http://localhost:8080/user/signup',
      data: {
        username: data.email,
        password: data.password,
      },
      headers,
    },
  );
  if (resp.status === 201) {
    localStorage.setItem('token', resp.data.token);
    window.location.pathname = '/news';
  }
};

export const login = async (data) => {
  const resp = await axios(
    {
      method: 'post',
      url: 'http://localhost:8080/user/signin',
      data: {
        username: data.username,
        password: data.password,
      },
      headers,
    },
  );

  if (resp.status === 200) {
    localStorage.setItem('token', resp.data.token);
    window.location.pathname = '/news';
  }
};

export const getAllnews = async () => {
  const resp = await axios(
    {
      method: 'get',
      url: 'http://localhost:8080/news',
      headers: {
        ...headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  );

  return resp.data;
};
