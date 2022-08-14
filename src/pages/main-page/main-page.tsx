import { FC, useState } from "react";
import { dataAPI } from "../../services/api/data";
import pageStyles from "../css/page.module.css";
import { Intro } from "../../components/intro/intro";
import { Materials } from "../../components/materials/materials";
import Popup from "../../components/popup/popup";
import Project from "../../components/project/project";
import Banner from "../../components/banner/banner";
import CardsSlider from "../../components/cards-slider/cards-slider";

const MainPage: FC = () => {
  const { isLoading: isPopupLoading, data: popupData } =
    dataAPI.useGetPopupQuery();
  const { isLoading: isNewsLoading, data: newsData } =
    dataAPI.useGetMainNewsQuery();
  const { isLoading: isDiaryLoading, data: diaryData } =
    dataAPI.useGetDiariesQuery();
  const { isLoading: isBannerLoading, data: bannerData } =
    dataAPI.useGetBannerQuery();
  const { isLoading: isJournalLoading, data: journalData } =
    dataAPI.useGetMainJournalQuery();

  const [popupOpen, setPopupOpen] = useState(true);

  return (
    <main>
      {!isPopupLoading && popupData && popupOpen && (
        <Popup data={popupData} closePopup={() => setPopupOpen(false)} />
      )}
      <Intro />
      {!isNewsLoading && newsData && (
        <section>
          <CardsSlider
            title="Новости и события"
            textLink="Ко всем новостям"
            cards={newsData}
          />
        </section>
      )}
      {!isDiaryLoading && diaryData && <Materials data={diaryData} />}
      {!isBannerLoading && bannerData && (
        <section className={pageStyles.page__section}>
          <Banner data={bannerData} />
        </section>
      )}
      {!isJournalLoading && journalData && (
        <section>
          {/*<CardsSlider*/}
          {/*  title="Журнал «Прожито»"*/}
          {/*  textLink="Посмотреть всю подборку"*/}
          {/*  cards={journalData}*/}
          {/*/>*/}
        </section>
      )}
      <Project />
    </main>
  );
};

export default MainPage;
