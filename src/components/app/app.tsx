import React, {FC} from 'react';
import styles from './app.module.css';
import NewsPage from "../../pages/news-page/news-page";
git 
const App: FC = () => {
  return (
    <div className={styles.app}>
      <p>Prozhito</p>
      <NewsPage />
    </div>
  );
}

export default App;
