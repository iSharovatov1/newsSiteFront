import React from 'react';
import PropTypes from 'prop-types';

import styles from './AuthBtn.module.scss';

function AuthBtn({ children, onClick }) {
  AuthBtn.propTypes = {
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  return (
    <div className={styles.btnContainer}>
      <button className={styles.authBtn} onClick={onClick} type="submit">{children}</button>
    </div>
  );
}

export default AuthBtn;
