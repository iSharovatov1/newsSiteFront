import React from 'react';
import styles from './AuthContainer.module.scss';

export const AuthContainer = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={styles.authContainer}>{children}</form>
  )
}
