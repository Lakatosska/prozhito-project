import React, {FC} from 'react';
import styles from './app.module.css';
import NewsPage from "../../pages/news-page/news-page";
import { Intro } from '../Intro/Intro';

const App: FC = () => {
  return (
    <div className={styles.app}>
      <p>Prozhito</p>
      <Intro />
      <NewsPage />
    </div>
  );
}

export default App;
