import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CircularProgress } from '@mui/material';

import { getNews } from '../../store/action/newsActions';

import styles from './News.module.scss';

function News() {
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <div className={styles.newsContainer}>
      <div className={styles.title}>News</div>
      {loading && <CircularProgress />}
      {error && `${error}`}
      {news.lenght === 0
        ? (
          <div>
            {news.map((item) => (
              <div className={styles.news} key={item.id}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.text}>{item.text}</div>
              </div>
            ))}
          </div>
        )
        : (
          <div>
            {!loading && !error && 'Нет новостей'}
          </div>
        )}
    </div>
  );
}

export default React.memo(News);
