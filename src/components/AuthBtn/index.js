import React from 'react'
import styles from './AuthBtn.module.scss'

export const AuthBtn = ({ children, onClick, type }) => {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.authBtn} onClick={onClick} type={type}>{children}</button>
    </div>
  )
}
