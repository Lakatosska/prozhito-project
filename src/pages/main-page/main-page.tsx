import { FC, useState } from "react";
import { dataAPI } from "../../services/api/data";
import { JOURNAL_ITEM_TYPE } from "../../constants";
import { useNavigate } from "react-router-dom";

import pageStyles from "../css/page.module.css";

import {
  IJournalExperienceItem,
  IJournalItem,
  IJournalMagazineItem,
} from "../../services/types/journal";
import { Intro } from "../../components/intro/intro";
import { LinkButton } from "../../components/link-button/link-button";
import { Materials } from "../../components/materials/materials";
import Popup from "../../components/popup/popup";
import Project from "../../components/project/project";
import Banner from "../../components/banner/banner";
import CardsSlider from "../../components/cards-slider/cards-slider";

const MainPage: FC = () => {
  const navigate = useNavigate();
  const { isLoading: isPopupLoading, data: popupData } =
    dataAPI.useGetPopupQuery();
  const { isLoading: isNewsLoading, data: newsData } =
    dataAPI.useGetMainNewsQuery();
  const { isLoading: isBannerLoading, data: bannerData } =
    dataAPI.useGetBannerQuery();
  const { isLoading: isJournalLoading, data: journalData } =
    dataAPI.useGetMainJournalQuery();

  const handleNavigate = (to: string) => {
    navigate(to);
  };

  const [popupOpen, setPopupOpen] = useState(true);

  return (
    <main>
      {!isPopupLoading && popupData && popupOpen && (
        <Popup data={popupData} closePopup={() => setPopupOpen(false)} />
      )}
      <Intro />

      <h1>Новости и события</h1>
      {!isNewsLoading && newsData && (
        <CardsSlider title="Новости" textLink="Текст" cards={newsData} />
      )}
      <LinkButton to={`/news`}>Ко всем новостям</LinkButton>
      <Materials />
      <h1>Ищем редактора для дневника</h1>
      {!isBannerLoading && bannerData && (
        <>
          <div
            style={{ backgroundColor: "lightgrey" }}
            onClick={() => handleNavigate(`/sample/${bannerData.sample}}`)}
          >
            <img
              width={329}
              height={440}
              src={require(`../../images/${bannerData.photo}`)}
              alt={"Картинка баннер"}
            />
            <p style={{ textTransform: "uppercase" }}>{bannerData.title}</p>
            <p>{bannerData.text}</p>
          </div>
        </>
      )}
      <LinkButton to={`/sample/banner`}>Перейти к материалу</LinkButton>
      <Materials />
      {!isBannerLoading && bannerData && (
        <section className={pageStyles.page__section}>
          <Banner data={bannerData} />
        </section>
      )}
      <h1>Журнал “Прожито”</h1>
      {!isJournalLoading && journalData && (
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            listStyleType: "none",
          }}
        >
          {journalData.map((item: IJournalItem) =>
            item.type === "experience" ? (
              <li key={item.id}>
                <div style={{ padding: "10px" }}>
                  <p>{item.id}</p>
                  <p>{JOURNAL_ITEM_TYPE[item.type]}</p>
                  <img
                    width={204}
                    height={204}
                    src={require(`../../images/${item.image}`)}
                    alt={"Картинка журнала"}
                  />
                  <p>{(item as IJournalExperienceItem).name}</p>
                </div>
              </li>
            ) : (
              <li key={item.id}>
                <div style={{ padding: "10px" }}>
                  <p>{item.id}</p>
                  <p>{JOURNAL_ITEM_TYPE[item.type]}</p>
                  <img
                    width={328}
                    height={526}
                    src={require(`../../images/${item.image}`)}
                    alt={"Картинка журнала"}
                  />
                  <p>{(item as IJournalMagazineItem).title}</p>
                  <p>{(item as IJournalMagazineItem).subtitle}</p>
                </div>
              </li>
            )
          )}
        </ul>
      )}
      <LinkButton to={`/journal`}>Посмотреть всю подборку</LinkButton>

      <Project />
    </main>
  );
};

export default MainPage;
