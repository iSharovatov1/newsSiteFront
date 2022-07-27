import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { CircularProgress } from '@mui/material';

import styles from './UserProfile.module.scss';

const noAvatar = '/assets/images/defaultAvatar.png';

function UserProfile({ user, error, isLoding }) {
  return (
    <div className={styles.profile}>
      { !error && !isLoding
          && (
          <>
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
          </>
          )}
      { error && <div>{error}</div>}
      { isLoding && (
        <div className={styles.userLoading}>
          <CircularProgress size={460} />
        </div>
      )}
    </div>
  );
}

UserProfile.defaultProps = {
  error: '',
  isLoding: false,
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  error: PropTypes.string,
  isLoding: PropTypes.bool,
};

export default memo(UserProfile);
