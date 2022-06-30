import React from 'react';
import PropTypes from 'prop-types';

import styles from './AuthContainer.module.scss';

function AuthContainer({ children, onSubmit }) {
  AuthContainer.propTypes = {
    children: PropTypes.element.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  return (
    <form onSubmit={onSubmit} className={styles.authContainer}>{children}</form>
  );
}

export default AuthContainer;
