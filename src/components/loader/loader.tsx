import { FC } from 'react';
import { Oval } from 'react-loader-spinner';
import styles from './loader.module.css';

export const Loader: FC = () => {
  return (
    <>

      <div className={styles.container}>
        <Oval
          ariaLabel="loading-indicator"
          height={220}
          width={220}
          strokeWidth={3}
          color="#7A9F80"
          secondaryColor="#FBC90B"
          />
      </div>
      <div className={styles.overlay}></div>
    </>
  );
};
