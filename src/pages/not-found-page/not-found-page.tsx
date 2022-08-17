import React, {FC} from "react"
import styles from "./not-found-page.module.css"
import {Link} from "react-router-dom";
import {LinkButton} from "../../components/link-button/link-button";
import errorImg from "../../images/404page.svg";

const NotFoundPage: FC = () => {
  return (
    <article className={styles.container}>
      <img className={styles.img} src={errorImg} alt='ошибка 404'/>
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


