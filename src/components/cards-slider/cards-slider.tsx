import {
  FC,
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { LinkButton } from "../link-button/link-button";

import NewsItem from "../news-item/news-item";
import styles from "./cards-slider.module.css";

interface ICardsSliderProps {
  title: string;
  textLink: string;
  cards: readonly any[];
}

const NavBtn: FC<{ direction: "left" | "right" }> = ({ direction }) => {
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
      onClick={() => swiper[directionSlide]()}
    />
  );
};

/**
 *
 * @arr Подготовленный массив элементов для слайдера
 */
const Slider: FC<{ arr: readonly any[]; coef: number }> = ({ arr, coef }) => {
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
      slidesPerView={coef}
      className={styles.swiper}
    >
      <div className={styles.swiper__navContainer}>
        <h2
          className={`${styles.cardsSlider__title} ${styles.cardsSlider__sliderTitle}`}
        >
          Свежее
        </h2>
        <div className={styles.swiper__btnContainer}>
          <NavBtn direction="left" />
          <NavBtn direction="right" />
        </div>
      </div>
      {arr.map((item: any) => (
        <SwiperSlide key={item.id} tag="li" className={styles.swiper__slide}>
          <NewsItem
            date={item.date}
            tag={item.tag}
            text={item.text}
            image={item.image}
            key={item.id}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const CardsSlider: FC<ICardsSliderProps> = ({
  title,
  textLink,
  cards,
}: ICardsSliderProps) => {
  const testRef = useRef(null);

  const getWidth = () => window.innerWidth;
  const [width, setWidth] = useState(getWidth());
  const [sliderContainer, setSliderContainer] = useState(0);
  const getWidthEl = (a: any) => {
    const x = a.current.offsetWidth;
    return x / 328;
  };

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth());
      testRef.current && setSliderContainer(getWidthEl(testRef));
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  console.log(width, sliderContainer);

  return (
    <div className={styles.cardsSlider}>
      <div className={styles.cardsSlider__bgSection}>
        <h2
          className={`${styles.cardsSlider__title} ${styles.cardsSlider__bgTitle}`}
        >
          {title}
        </h2>
        <div className={styles.cardsSlider__linkButtonContainer}>
          <p className={styles.cardsSlider__textLink}>{textLink}</p>
          <LinkButton size="large" round />
        </div>
      </div>
      <div className={styles.cardsSlider__sliderContainer} ref={testRef}>
        <Slider arr={cards} coef={sliderContainer} />
      </div>
    </div>
  );
};

export default CardsSlider;
