import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './NewsContainer.module.scss';

import getAllNews from '../../store/actions';

function NewsContainer() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getAllNews());
  }, []);

  return (
    <div className={styles.newsContainer}>
      {news?.map((item) => (
        <div className={styles.news} key={item.id}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.text}>{item.text}</div>
        </div>
      ))}
    </div>
  );
}

export default NewsContainer;
