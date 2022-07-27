import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CircularProgress } from '@mui/material';

import NewsCard from '../../components/NewsCard';
import UserProfile from '../../components/UserProfile';
import { getUser, getUserNews } from '../../store/action/userActions';

import styles from './User.module.scss';

function User() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const {
    user,
    userNews,
    newsLoading,
    userLoading,
    newsError,
    userError,
  } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser(userId));
    dispatch(getUserNews(userId));
  }, []);

  return (
    <div>
      <div className={styles.user}>
        { !userError && !userLoading
          && <UserProfile user={user} />}
        { userError && <div>{userError}</div>}
        { userLoading && (
        <div className={styles.userLoading}>
          <CircularProgress size={460} />
        </div>
        )}
      </div>
      { !newsLoading && !newsError && userNews.lenght !== 0
       && (
       <div>
         {userNews?.map((item) => (
           <NewsCard
             news={item}
             key={item.id}
           />
         ))}
       </div>
       )}
      <div>
        {!newsLoading && !newsError && userNews.lenght === 0 && 'Нет новостей'}
      </div>
      {newsLoading && <CircularProgress />}
      {newsError && <div>{newsError}</div>}
    </div>
  );
}

export default User;
