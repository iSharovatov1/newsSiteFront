import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { CircularProgress } from '@mui/material';

import NewsComponent from '../../components/NewsComponent';
import { getNews } from '../../store/action/newsActions';

import styles from './News.module.scss';

function NewsPage() {
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
      {loading && <CircularProgress />}
      {error && `${error}`}
      {news?.lenght === 0
        ? (
          <div>
            {!loading && !error && 'Нет новостей'}
          </div>
        )
        : (
          <div>
            {news?.map((item) => (
              <NewsComponent
                title={item.title}
                text={item.text}
                img={item.img}
                tags={item.tags}
                key={item.id}
                onClick={() => redirectToUser(item.userId)}
              />
            ))}
          </div>
        )}
    </div>
  );
}

export default React.memo(NewsPage);
