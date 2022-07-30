import React, {FC} from 'react';
import styles from './app.module.css';
import NewsPage from "../../pages/news-page/news-page";
import MainPage from "../../pages/main-page/main-page";
import JournalPage from "../../pages/journal-page/journal-page";
import { Intro } from '../intro/intro';
import { Materials } from '../materials/materials';

const App: FC = () => {
  return (
    <div className={styles.app}>
      <p>Prozhito</p>
      <Intro />
      <Materials />
      <MainPage />
      <NewsPage />
      <JournalPage />
    </div>
  );
}

export default App;
