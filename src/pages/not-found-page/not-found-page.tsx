import React, {FC} from "react"
import styles from "./not-found-page.module.css"
import {Link} from "react-router-dom";
import {LinkButton} from "../../components/link-button/link-button";

const NotFoundPage: FC = () => {
  return (
    <article className={styles.container}>
      <p className={`text text_type_digits-large text_color_inactive ${styles.text404}`}>404</p>
      <h1 className="text text_type_main-large">
        Страница не найдена
      </h1>
      <Link className={styles.link} to="/">
        <LinkButton to={`/`} arrow={false}>На главную</LinkButton>
      </Link>
    </article>
  );
}

export default NotFoundPage
