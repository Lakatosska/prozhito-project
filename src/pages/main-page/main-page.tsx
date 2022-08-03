import { FC, useState } from "react";
import { dataAPI } from "../../services/api/data";
import { JOURNAL_ITEM_TYPE } from "../../constants";
import { INewsItem } from "../../services/types/news";
import { IProjectItem } from "../../services/types/project";
import { formatDate } from "../../utils/dateHelper";
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

const MainPage: FC = () => {
  const navigate = useNavigate();
  const {isLoading: isPopupLoading, data: popupData} = dataAPI.useGetPopupQuery();
  const {isLoading: isNewsLoading, data: newsData} = dataAPI.useGetMainNewsQuery();
  const {isLoading: isBannerLoading, data: bannerData} = dataAPI.useGetBannerQuery();
  const {isLoading: isJournalLoading, data: journalData} = dataAPI.useGetMainJournalQuery();

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
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            listStyleType: "none",
          }}
        >
          {newsData.map((item: INewsItem) => (
            <li key={item.id}>
              <div style={{ padding: "10px" }}>
                <p>{item.id}</p>
                <p>{item.text}</p>
                <img
                  width={253}
                  height={306}
                  src={require(`../../images/${item.image}`)}
                  alt={"Картинка новости"}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
      <LinkButton to={`/news`}>Ко всем новостям</LinkButton>
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
