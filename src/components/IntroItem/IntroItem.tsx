import { FC } from "react";
import introStyles from "../Intro/Intro.module.css";

export const IntroItem: FC = () => {

  return(
    <li className={introStyles.intro__card}>
      <h3 className={introStyles.intro__cardTitle}>Передать документы</h3>
      <p className={introStyles.intro__cardSubtitle}>
        Передайте в «Прожито» копии документов из семейного архива,
        чтобы сделать их доступнее исследователям и читателям
      </p>
      <div className={introStyles.intro__linkContainer}>
        <p className={introStyles.intro__aboutLink}>Подробнее</p>
        <a href="typical.html" className="button button_size-intro">
          <img
            src="images/Arrow_right_intro.svg"
            alt="Стрелка влево"
            className="arrow arrow_intro"
          />
        </a>
      </div>
    </li>
  )
}

/*
<li className={introStyles.intro__card}>
              <h3 className={introStyles.intro__cardTitle}>Передать документы</h3>
              <p className={introStyles.intro__cardSubtitle}>
                Передайте в «Прожито» копии документов из семейного архива,
                чтобы сделать их доступнее исследователям и читателям
              </p>
              <div className={introStyles.intro__linkContainer}>
                <p className={introStyles.intro__aboutLink}>Подробнее</p>
                <a href="typical.html" className="button button_size-intro">
                  <img
                    src="images/Arrow_right_intro.svg"
                    alt="Стрелка влево"
                    className="arrow arrow_intro"
                  />
                </a>
              </div>
            </li>
            <li className={introStyles.intro__card}>
              <h3 className={introStyles.intro__cardTitle}>Стать волонтёром</h3>
              <p className={introStyles.intro__cardSubtitle}>
                Вы можете помочь нашему делу — для работы с документами
                нужен компьютер и несколько свободных часов в неделю
              </p>
              <div className={introStyles.intro__linkContainer}>
                <p className={introStyles.intro__aboutLink}>Узнать больше</p>
                <a href="typical.html" className="button button_size-intro">
                  <img
                    src="images/Arrow_right_intro.svg"
                    alt="Стрелка влево"
                    className="arrow arrow_intro"
                  />
                </a>
              </div>
            </li>
            <li className={introStyles.intro__card}>
              <h3 className={introStyles.intro__cardTitle}>Дневники и воспоминания</h3>
              <p className={introStyles.intro__cardSubtitle}>
                Мы собрали тексты опубликованных дневников и воспоминаний
                и сделали по ним  расширенный поиск
              </p>
              <div className={introStyles.intro__linkContainer}>
                <p className={introStyles.intro__aboutLink}>Ознакомиться</p>
                <a href="typical.html" className="button button_size-intro">
                  <img
                    src="images/Arrow_right_intro.svg"
                    alt="Стрелка влево"
                    className="arrow arrow_intro"
                  />
                </a>
              </div>
            </li>
            <li className={introStyles.intro__card}>
              <h3 className={introStyles.intro__cardTitle}>Работа с архивом</h3>
              <p className={introStyles.intro__cardSubtitle}>
                Как устроен наш архив и поиск по сохранённым документам
              </p>
              <div className={introStyles.intro__linkContainer}>
                <p className={introStyles.intro__aboutLink}>Перейти к архиву</p>
                <a href="typical.html" className="button button_size-intro">
                  <img
                    src="images/Arrow_right_intro.svg"
                    alt="Стрелка влево"
                    className="arrow arrow_intro"
                  />
                </a>
              </div>
            </li>
*/
