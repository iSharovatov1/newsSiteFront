import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../store/actions';
import styles from './News.module.scss';

export const News = () => {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news);

  useEffect(() => {
    dispatch(getNews(5));
  }, []);

  return (
    <div className={styles.newsContainer}>
      {news?.map(item => 
        <div className={styles.news}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.text}>{item.text}</div>
        </div>
      )}
    </div>
  )
}
