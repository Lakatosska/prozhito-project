import { FC } from "react";
import styles from "./news-item.module.css";
import { formatDate } from "../../utils/dateHelper";
import { INewsItem } from "../../services/types/news";

type TNewsItemProps = Omit<INewsItem, "id">;

const NewsItem: FC<TNewsItemProps> = ({ date, tag, image, text }) => {
  return (
    <li>
      <article className={styles.newsItem}>
        <div className={styles.newsItem__titleContainer}>
          <time dateTime={date} className={styles.newsItem__date}>
            {formatDate(date, "short")}
          </time>
          <h3 className={styles.newsItem__title}>{tag}</h3>
        </div>
        <img
          width={212}
          height={223}
          src={require(`../../images/${image}`)}
          alt={tag ?? "Картинка к новости"}
          className={styles.newsItem__image}
        />
        <p className={styles.newsItem__text}>{text}</p>
      </article>
    </li>
  );
};

export default NewsItem;
