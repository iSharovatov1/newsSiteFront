import React from 'react';
import PropTypes from 'prop-types';

import styles from './News.module.scss';

function News({ news, loading, error }) {
  return (
    <div className={styles.newsContainer}>
      {loading && <>loading</>}
      {error && <>error</>}
      {news.lenght
        ? (
          <div>
            {news?.map((item) => (
              <div className={styles.news} key={item.id}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.text}>{item.text}</div>
              </div>
            ))}
          </div>
        )
        : (
          <div>
            {!loading && !error
            && <>Нет новостей</>}
          </div>
        )}
    </div>
  );
}

News.propTypes = {
  news: PropTypes.arrayOf.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default React.memo(News);
