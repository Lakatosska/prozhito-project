import { FC } from "react";
import newsCardStyles from "./news-card.module.css";
import { formatDate } from "../../utils/dateHelper";
import { INewsItem } from "../../services/types/news";

interface INewsCardProps {
  readonly item: INewsItem;
}

const NewsCard: FC<INewsCardProps> = ({ item }) => {
  return (
    <article className={newsCardStyles.newsItem}>
      <div className={newsCardStyles.titleContainer}>
        <time dateTime={item.date} className={newsCardStyles.date}>
          {formatDate(item.date, "short")}
        </time>
        <h3 className={newsCardStyles.title}>{item.tag}</h3>
      </div>
      <img
        src={require(`../../images/${item.image}`)}
        alt={item.tag ?? "Картинка к новости"}
        className={newsCardStyles.image}
      />
      <p className={newsCardStyles.text}>{item.text}</p>
    </article>
  );
};

export default NewsCard;
