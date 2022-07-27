import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './UserProfile.module.scss';

const noAvatar = '/assets/images/defaultAvatar.png';

function UserProfile({ user }) {
  return (
    <div className={styles.profile}>
      <img src={user.avatar || noAvatar} className={styles.img} alt="avatar" />
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
  );
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default memo(UserProfile);
