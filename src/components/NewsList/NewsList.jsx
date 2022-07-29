import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { CircularProgress } from '@mui/material';

import NewsCard from '../NewsCard';

import styles from './NewsList.module.scss';

function NewsList({
  news,
  error,
  isLoading,
  onClickItem,
}) {
  if (isLoading) {
    return (
      <div className={styles.loading}>
        <CircularProgress size={100} />
      </div>
    );
  }
  if (error) {
    return (
      <div className={classNames(styles.text, styles.error)}>{error}</div>
    );
  }
  return (
    <div>
      {news.length !== 0 && (
        <div>
          {news.map((item) => (
            <NewsCard
              news={item}
              key={item.id}
              onClick={onClickItem}
            />
          ))}
        </div>
      )}
      <div className={styles.text}>
        {news.length === 0 && 'Нет новостей'}
      </div>
    </div>
  );
}
NewsList.defaultProps = {
  error: '',
  isLoading: false,
  onClickItem: () => {},
};

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  onClickItem: PropTypes.func,
};

export default memo(NewsList);
