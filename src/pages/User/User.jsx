import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import NewsComponent from '../../components/NewsComponent';
import { getUser, getUserNews } from '../../store/action/userActions';

import styles from './User.module.scss';

function User() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { user, news } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser(userId));
    dispatch(getUserNews(userId));
  }, []);

  return (
    <div>
      <div className={styles.user}>
        { user.img
          ? <img src={user.img} className={styles.img} />
          : <div className={styles.noImg}><span>No image</span></div>}
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
      </div>
      {news.map((item) => (
        <NewsComponent
          title={item.title}
          text={item.text}
          img={item.img}
          tags={item.tags}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default User;
