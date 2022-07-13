import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getNews from './store/actions';
import News from './components/News';

import styles from './App.module.scss';

function App() {
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getNews);
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.title}>News</div>
      <News news={news} loading={loading} error={error} />
    </div>
  );
}

export default App;
