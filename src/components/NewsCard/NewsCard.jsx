import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { CircularProgress } from '@mui/material';

import styles from './NewsCard.module.scss';

function NewsCard({
  news,
  onClick,
  isLoading = false,
}) {
  return (
    <div>
      { isLoading
        ? (
          <div className={styles.loading}>
            <CircularProgress size={100} />
          </div>
        )
        : (
          <div className={styles.news} onClick={onClick}>
            { news.img
              ? <img src={news.img} className={styles.img} />
              : <div className={styles.noImg}><span>No image</span></div>}
            <div className={styles.textContainer}>
              <span className={styles.title}>{news.title}</span>
              <span className={styles.text}>{news.text}</span>
              <div className={styles.tagsContainer}>
                {news.tags.split(',').map((item) => (
                  <div className={styles.tag} key={item}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

NewsCard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  news: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default memo(NewsCard);
