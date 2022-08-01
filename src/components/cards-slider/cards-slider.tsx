import { FC, ReactNode } from "react";
import { LinkButton } from "../link-button/link-button";
import styles from "./cards-slider.module.css";

interface ICardsSliderProps {
  title: string;
  children: ReactNode;
  textLink: string;
}

const CardsSlider: FC<ICardsSliderProps> = ({ title, children, textLink }) => {
  return (
    <div className={styles.cardsSlider}>
      <div className={styles.cardsSlider__bgTitleSection}>
        <h2 className={styles.cardsSlider__title}>{title}</h2>
        <div className={styles.cardsSlider__linkButtonContainer}>
          <p className={styles.cardsSlider__textLink}>{textLink}</p>
          <LinkButton size="large" round />
        </div>
      </div>
      <div className={styles.cardsSlider__sliderContainer}>{children}</div>
    </div>
  );
};

export default CardsSlider;
