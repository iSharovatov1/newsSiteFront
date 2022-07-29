import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './NewsCard.module.scss';

const noImage = '/assets/images/defaultImg.png';

function NewsCard({
  news,
  onClick,
}) {
  return (
    <div className={styles.news} onClick={() => onClick(news.userId)}>
      <img src={news.img || noImage} className={styles.img} alt="news" />
      <div className={styles.textContainer}>
        <span className={styles.title}>{news.title}</span>
        <span className={styles.text}>{news.text}</span>
        <div className={styles.footer}>
          <div className={styles.tagsContainer}>
            {news.tags.split(',').map((item) => (
              <div className={styles.tag} key={item}>{item}</div>
            ))}
          </div>
          {news.user && (
            <div>
              by {news.user.email}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

NewsCard.defaultProps = {
  onClick: () => {},
};

NewsCard.propTypes = {
  news: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
    }),
  }).isRequired,
  onClick: PropTypes.func,
};

export default memo(NewsCard);
