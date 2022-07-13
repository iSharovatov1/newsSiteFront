import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import News from './components/News/News';

import { getNews } from './store/action/newsActions';

function App() {
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<News news={news} loading={loading} error={error} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
