import {FC, useEffect, useState} from "react";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {Navigation, Scrollbar} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import {LinkButton} from "../link-button/link-button";

import styles from "./cards-slider.module.css";
import {matchesMediaQuery} from "../../utils/functions";
import {MOBYLE_MEDIA_QUERY} from "../../constants";

interface ICardsSliderProps {
  to: string;
  title: string;
  textLink: string;
  cards: readonly JSX.Element[];
  sliderTitle: string;
}

const NavBtn: FC<{ direction: "left" | "right"; disabled: boolean }> = ({
  direction,
  disabled,
}) => {
  const swiper = useSwiper();
  const directionSlide = direction === "left" ? "slidePrev" : "slideNext";

  return (
    <LinkButton
      type="button"
      round
      size="medium"
      color={false}
      border
      direction={direction}
      disabled={disabled}
      onClick={() => swiper[directionSlide]()}
    />
  );
};

/**
 *
 * @arr Массив элементов для слайдера
 */
const Slider: FC<{ arr: readonly JSX.Element[]; title: string }> = ({ arr, title }) => {
  const [disabledPrevBtn, setDisabledPrevBtn] = useState(true);
  const [disabledNextBtn, setDisabledNextBtn] = useState(false);
  return (
    <Swiper
      wrapperTag="ul"
      modules={[Navigation, Scrollbar]}
      scrollbar={{
        draggable: true,
        dragSize: 355,
        horizontalClass: `${styles.swiper__scrollbar}`,
      }}
      spaceBetween={20}
      slidesPerView={2.78}
      className={styles.swiper}
      onSlideChange={(e) => {
        !e.isBeginning ? setDisabledPrevBtn(false) : setDisabledPrevBtn(true);
        !e.isEnd && setDisabledNextBtn(false);
      }}
      onReachEnd={() => setDisabledNextBtn(true)}
    >
      <div className={styles.swiper__navContainer}>
        <h2
          className={`${styles.cardsSlider__title} ${styles.cardsSlider__sliderTitle}`}
        >
          {title}
        </h2>
        <div className={styles.swiper__btnContainer}>
          <NavBtn direction="left" disabled={disabledPrevBtn} />
          <NavBtn direction="right" disabled={disabledNextBtn} />
        </div>
      </div>
      {arr.map((item: JSX.Element) => (
        <SwiperSlide key={item.key} tag="li" className={styles.swiper__slide}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const CardsSlider: FC<ICardsSliderProps> = ({
  to,
  title,
  textLink,
  cards,
  sliderTitle,
}: ICardsSliderProps) => {
  const [isMobile, setIsMobile] = useState(
    matchesMediaQuery(MOBYLE_MEDIA_QUERY)
  );

  const desktopAndTablet = (
    <div className={styles.cardsSlider}>
      <div className={styles.cardsSlider__bgSection}>
        <h2
          className={`${styles.cardsSlider__title} ${styles.cardsSlider__bgTitle}`}
        >
          {title}
        </h2>
        <div className={styles.cardsSlider__linkButtonContainer}>
          <p className={styles.cardsSlider__textLink}>{textLink}</p>
          <LinkButton size="large" round to={to} />
        </div>
      </div>
      <div className={styles.cardsSlider__sliderContainer}>
        <Slider arr={cards} title={sliderTitle} />
      </div>
    </div>
  );

  const mobile = (
    <div className={styles.sliderMobile}>
      <div className={styles.title__container}>
      <h2 className={`${styles.sliderMobile__title}`}>{title}</h2>
      <div className={styles.sliderMobile__linkButtonContainer}>
        <LinkButton size="small" color={false} border={false} to={to}>
          {textLink}
        </LinkButton>
      </div>
      </div>
      {cards.map((el, i) => {
        if (i < 3) return el;
        return null;
      })}
    </div>
  );

  useEffect(() => {
    function changeIsMobile() {
      const displayMobile = matchesMediaQuery(MOBYLE_MEDIA_QUERY);

      if (!isMobile && displayMobile) {
        setIsMobile(true);
      }
      if (isMobile && !displayMobile) {
        setIsMobile(false);
      }
    }

    window.addEventListener("resize", changeIsMobile);
    return () => window.removeEventListener("resize", changeIsMobile);
  }, [isMobile]);

  return isMobile ? mobile : desktopAndTablet;
};

export default CardsSlider;
