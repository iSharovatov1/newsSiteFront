import styles from './App.module.scss';

import { News } from './components/News'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.title}>News</div>
      <News/>
    </div>
  );
}

export default App;
