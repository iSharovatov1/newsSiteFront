import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from './store/actions';
import { News } from './components/News';
import styles from './App.module.scss';

function App() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.title}>News</div>
      <News news={news}/>
    </div>
  );
}

export default App;
