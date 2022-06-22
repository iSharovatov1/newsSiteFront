import React from 'react';
import styles from './News.module.scss';

export let News = ({ news }) => {
  return (
    <div className={styles.newsContainer}>
      {news?.map((item, index) => 
        <div className={styles.news} key={index}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.text}>{item.text}</div>
        </div>
      )}
    </div>
  )
}

News = React.memo(News)
