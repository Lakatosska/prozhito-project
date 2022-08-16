import { FC, useEffect, useState } from "react";
import styles from "./news-item.module.css";
import { formatDate } from "../../utils/dateHelper";
import { INewsItem } from "../../services/types/news";
import { MOBYLE_MEDIA_QUERY } from "../../constants";
import { matchesMediaQuery } from "../../utils/functions";

export type TNewsItemProps = Omit<INewsItem, "id">;

const NewsItem: FC<TNewsItemProps> = ({
  date,
  tag,
  image,
  imageMobile,
  text,
}) => {
  const [imageSrc, setImageSrc] = useState(image);
  useEffect(() => {
    function changeImageSrc() {
      const displayMobile = matchesMediaQuery(MOBYLE_MEDIA_QUERY);
      displayMobile ? setImageSrc(imageMobile) : setImageSrc(image);
    }
    changeImageSrc();
    window.addEventListener("resize", changeImageSrc);
    return () => window.removeEventListener("resize", changeImageSrc);
  }, [image, imageMobile]);
  return (
    <article className={styles.newsItem}>
      <div className={styles.newsItem__titleContainer}>
        {
          date && (
            <time dateTime={date} className={styles.newsItem__date}>
              {formatDate(date, "short")}
            </time>
          )
        }
        <h3 className={styles.newsItem__title}>{tag}</h3>
      </div>
      <img
        width={212}
        height={223}
        src={require(`../../images/${imageSrc}`)}
        alt={tag ?? "Картинка к новости"}
        className={styles.newsItem__image}
      />
      <p className={styles.newsItem__text}>{text}</p>
    </article>
  );
};

export default NewsItem;
