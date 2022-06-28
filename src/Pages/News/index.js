import styles from './News.module.scss';

import { NewsContainer } from '../../components/NewsContainer';

export const News = () => {

  const goOut = () => {
    localStorage.removeItem('token');
  }

  return (
    <div className={styles.news}>
      <div className={styles.title}>News</div>
      <button onClick={goOut}>Выйти</button>
      <NewsContainer/>
    </div>
  );
}
