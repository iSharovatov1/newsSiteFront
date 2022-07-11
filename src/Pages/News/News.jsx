import React from 'react';

import styles from './News.module.scss';

import NewsContainer from '../../components/NewsContainer/NewsContainer';

function News() {
  const goOut = () => {
    localStorage.removeItem('token');
  };

  return (
    <div className={styles.news}>
      <div className={styles.title}>News</div>
      <button type="button" onClick={goOut}>Выйти</button>
      <NewsContainer />
    </div>
  );
}

export default News;
