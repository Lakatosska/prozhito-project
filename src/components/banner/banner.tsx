import { FC } from "react";
import { IBanner } from "../../services/types/banner";
import bannerStyles from "./banner.module.css";
import { LinkButton } from "../link-button/link-button";

// to={`/sample/${data.sample}}`}

interface IBannerProps {
  data: IBanner;
}
const Banner: FC<IBannerProps> = ({ data }) => {
  return (
    <article className={bannerStyles.banner}>
      <img
        className={bannerStyles.banner__image}
        src={require(`../../images/${data.photo}`)}
        alt={"Картинка баннер"}
      />
      <h2 className={bannerStyles.banner__title}>{data.title}</h2>
      <p className={bannerStyles.banner__text}>{data.text}</p>
      <div className={bannerStyles.banner__buttonsWrapper}>
        <LinkButton to={`/sample/banner`} color={false}>
          Перейти к материалу
        </LinkButton>
        <LinkButton to={`/sample/banner`}>Оставить заявку</LinkButton>
      </div>
    </article>
  );
};
export default Banner;
