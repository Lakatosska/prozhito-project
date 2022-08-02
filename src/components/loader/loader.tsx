import { FC } from 'react';
import { Oval } from 'react-loader-spinner';
import styles from './loader.module.css';

<<<<<<< HEAD
const Loader: FC = () => {
  return (
    <>
=======
export const Loader: FC = () => {
  return (
    <>

>>>>>>> 6687a65d5302210b4b50efd948239b0642731c21
      <div className={styles.container}>
        <Oval
          ariaLabel="loading-indicator"
          height={220}
          width={220}
          strokeWidth={3}
<<<<<<< HEAD
          color="#E96A41"
          secondaryColor="#70bf5d"
=======
          color="#7A9F80"
          secondaryColor="#FBC90B"
>>>>>>> 6687a65d5302210b4b50efd948239b0642731c21
          />
      </div>
      <div className={styles.overlay}></div>
    </>
  );
};
<<<<<<< HEAD

export default Loader;
=======
>>>>>>> 6687a65d5302210b4b50efd948239b0642731c21
