import { FC } from "react";
import { dataAPI } from "../../services/api/data";
import { JOURNAL_ITEM_TYPE } from "../../constants";
import { IProjectItem } from "../../services/types/project";
import { formatDate } from "../../utils/dateHelper";
import { useNavigate } from "react-router-dom";

import {
  IJournalExperienceItem,
  IJournalItem,
  IJournalMagazineItem,
} from "../../services/types/journal";
import { Intro } from "../../components/intro/intro";
import { LinkButton } from "../../components/link-button/link-button";
import { Materials } from "../../components/materials/materials";
import CardsSlider from "../../components/cards-slider/cards-slider";

const MainPage: FC = () => {
  const navigate = useNavigate();
  const { isLoading: isPopupLoading, data: popupData } =
    dataAPI.useGetPopupQuery();
  const { isLoading: isNewsLoading, data: newsData } =
    dataAPI.useGetMainNewsQuery();
  const { isLoading: isBannerLoading, data: bannerData } =
    dataAPI.useGetBannerQuery();
  const { isLoading: isProjectLoading, data: projectData } =
    dataAPI.useGetProjectsQuery();
  const { isLoading: isJournalLoading, data: journalData } =
    dataAPI.useGetMainJournalQuery();

  const handleNavigate = (to: string) => {
    navigate(to);
  };

  return (
    <>
      {!isPopupLoading && popupData && (
        <div
          style={{ backgroundColor: "lightgreen", cursor: "pointer" }}
          onClick={() => handleNavigate(`/sample/blockade`)}
        >
          <p style={{ textTransform: "uppercase" }}>{popupData.title}</p>
          <p>{popupData.caption}</p>
        </div>
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
      <h1>Спецпроекты</h1>
      {!isProjectLoading && projectData && (
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            listStyleType: "none",
          }}
        >
          {projectData.map((item: IProjectItem) => (
            <li key={item.id}>
              <div
                style={{ padding: "10px", cursor: "pointer" }}
                onClick={() => handleNavigate(`/sample/${item.sample}`)}
              >
                <p>{item.title}</p>
                <img
                  width={491}
                  height={352}
                  src={require(`../../images/${item.image}`)}
                  alt={"Картинка проекта"}
                />
                <p>{item.text}</p>
                <p>{formatDate(item.date, "long")}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <LinkButton to={`/not/found`}>Все спецпроекты</LinkButton>
    </>
  );
};

export default MainPage;
