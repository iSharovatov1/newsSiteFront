import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './NewsContainer.module.scss';

import { getNews } from '../../store/actions';

export const NewsContainer = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <div className={styles.newsContainer}>
      {news?.map((item, index) => (
        <div className={styles.news} key={index}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.text}>{item.text}</div>
        </div>
      )
      )}
    </div>
  )
}
