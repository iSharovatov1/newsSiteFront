import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewsComponent.module.scss';

function NewsComponent({
  title,
  text,
  img,
  tags,
  onClick,
}) {
  return (
    <div className={styles.news} onClick={onClick}>
      { img
        ? <img src={img} className={styles.img} />
        : <div className={styles.noImg}><span>No image</span></div>}
      <div className={styles.textContainer}>
        <span className={styles.title}>{title}</span>
        <span className={styles.text}>{text}</span>
        <div className={styles.tagsContainer}>
          {tags.split(',').map((item) => (
            <div className={styles.tag} key={item}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

NewsComponent.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default NewsComponent;
