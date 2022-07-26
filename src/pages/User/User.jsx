import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CircularProgress } from '@mui/material';

import NewsCard from '../../components/NewsCard';
import defaultAvatar from '../../assets/images/defaultAvatar.png';
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
        { userError
          ? <div>{userError}</div>
          : (
            <>
              { userLoading
                ? (
                  <div className={styles.userLoading}>
                    <CircularProgress size={460} />
                  </div>
                )
                : (
                  <>
                    <img src={user.img || defaultAvatar} className={styles.img} alt="avatar" />
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
            </>
          )}
      </div>
      { newsError
        ? <div>{newsError}</div>
        : (
          <>
            {news.map((item) => (
              <NewsCard news={item} isLoading={newsLoading} key={item.id} />
            ))}
          </>
        )}
    </div>
  );
}

export default User;
