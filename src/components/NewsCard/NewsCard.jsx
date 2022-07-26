import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { CircularProgress } from '@mui/material';

import styles from './NewsCard.module.scss';

function NewsCard({
  news,
  onClick,
  isLoading = false,
}) {
  const defaultImg = '/assets/images/defaultImg.png';
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
            <img src={news.img || defaultImg} className={styles.img} alt="news" />
            <div className={styles.textContainer}>
              <span className={styles.title}>{news.title}</span>
              <span className={styles.text}>{news.text}</span>
              <div className={styles.footer}>
                <div className={styles.tagsContainer}>
                  {news.tags.split(',').map((item) => (
                    <div className={styles.tag} key={item}>{item}</div>
                  ))}
                </div>
                {news.user && <div className={styles.autor}>by {`${news.user.firstName} ${news.user.lastName}`}</div>}
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

NewsCard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  news: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
};

export default memo(NewsCard);
