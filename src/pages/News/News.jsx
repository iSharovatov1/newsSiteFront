import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import NewsList from '../../components/NewsList';
import { getNews } from '../../store/action/newsActions';

import styles from './News.module.scss';

function News() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  const redirectToUser = (userId) => {
    navigate({
      pathname: `/user/${userId}`,
    });
  };

  return (
    <div className={styles.newsContainer}>
      <div className={styles.title}>News</div>
      <NewsList
        news={news}
        loading={loading}
        error={error}
        onClickItem={redirectToUser}
      />
    </div>
  );
}

export default memo(News);
