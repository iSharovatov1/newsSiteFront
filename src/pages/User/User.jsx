import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CircularProgress } from '@mui/material';

import { ReactComponent as NoAvatar } from '../../images/svg/noAvatar.svg';
import NewsCard from '../../components/NewsCard';
import { getUser, getUserNews } from '../../store/action/userActions';

import styles from './User.module.scss';

function User() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const {
    user,
    news,
    newsLoading,
    userLoading,
  } = useSelector((state) => state.user);

  console.log(newsLoading, userLoading);

  useEffect(() => {
    dispatch(getUser(userId));
    dispatch(getUserNews(userId));
  }, []);

  return (
    <div>
      <div className={styles.user}>
        { userLoading
          ? (
            <div className={styles.userLoading}>
              <CircularProgress size={460} />
            </div>
          )
          : (
            <>
              { user.img
                ? <img src={user.img} className={styles.img} alt="avatar" />
                : <NoAvatar className={styles.noImg} />}
              <div className={styles.infoContainer}>
                <div className={styles.title}>Profile</div>
                <div className={styles.feildContainer}>
                  <div>First name:</div>
                  <div>{user.firstName}</div>
                </div>
                <div className={styles.feildContainer}>
                  <div>Last name:</div>
                  <div>{user.lastName}</div>
                </div>
                <div className={styles.feildContainer}>
                  <div>Email:</div>
                  <div>{user.email}</div>
                </div>
              </div>
            </>
          )}
      </div>
      {news.map((item) => (
        <NewsCard news={item} isLoading={newsLoading} />
      ))}
    </div>
  );
}

export default User;
