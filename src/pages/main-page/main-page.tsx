import {FC} from "react";
import {dataAPI} from "../../services/api/data";
import {JOURNAL_ITEM_TYPE, JOURNAL_MAIN_LIMIT, NEWS_MAIN_LIMIT} from "../../constants";
import {INewsItem} from "../../services/types/news";
import {IDiaryItem} from "../../services/types/diary";
import {IProjectItem} from "../../services/types/project";
import {formatDate} from "../../utils/dateHelper";
import {useNavigate} from "react-router-dom";

import {IJournalExperienceItem, IJournalItem, IJournalMagazineItem} from "../../services/types/journal";

const MainPage: FC = () => {
  const navigate = useNavigate();
  const {isLoading: isPopupLoading, data: popupData} = dataAPI.useGetPopupQuery();
  const {isLoading: isNewsLoading, data: newsData} = dataAPI.useGetNewsQuery({page: 1, size: NEWS_MAIN_LIMIT});
  const {isLoading: isDiaryLoading, data: diaryData} = dataAPI.useGetDiariesQuery();
  const {isLoading: isBannerLoading, data: bannerData} = dataAPI.useGetBannerQuery();
  const {isLoading: isProjectLoading, data: projectData} = dataAPI.useGetProjectsQuery();
  const {isLoading: isJournalLoading, data: journalData} = dataAPI.useGetJournalQuery({page: 1, size: JOURNAL_MAIN_LIMIT, filter: "all"});

  const handleNavigate = (to: string) => {
    navigate(to)
  }

  return (
    <>
      {
        !isPopupLoading && popupData &&
        <div style={{backgroundColor: "lightgreen", cursor: "pointer"}} onClick={() => handleNavigate(`/sample/blockade`)}>
          <p style={{textTransform: 'uppercase'}}>{popupData.title}</p>
          <p>{popupData.caption}</p>
        </div>
      }
      <h1>Новости и события</h1>
      {
        !isNewsLoading && newsData?.data &&
        <ul style={{display: 'flex', flexDirection: 'row', listStyleType: 'none'}}>
          {
            newsData.data.map((item: INewsItem) => (
              <li key={item.id}>
                <div style={{padding: '10px'}}>
                  <p>{item.id}</p>
                  <p>{item.text}</p>
                  <img width={253} height={306} src={require(`../../images/${item.image}`)} alt={'Картинка новости'}/>
                </div>
              </li>
            ))
          }
        </ul>
      }
      <button onClick={() => handleNavigate(`/news`)}>Ко всем новостям</button>
      <h1>Материалы</h1>
      {
        !isDiaryLoading && diaryData &&
        <ul style={{display: 'flex', flexDirection: 'row', listStyleType: 'none'}}>
          {
            diaryData.map((item: IDiaryItem) => (
              <li key={item.id}>
                <div style={{padding: '10px'}}>
                  <p>{item.name}</p>
                  <img width={200} height={224} src={require(`../../images/${item.image}`)} alt={'Картинка дневник'}/>
                  <p>{item.text}</p>
                </div>
              </li>
            ))
          }
        </ul>
      }
      <h1>Ищем редактора для дневника</h1>
      {
        !isBannerLoading && bannerData &&
        <>
          <div style={{backgroundColor: "lightgrey"}} onClick={() => handleNavigate(`/sample/${bannerData.sample}}`)}>
            <img width={329} height={440} src={require(`../../images/${bannerData.photo}`)} alt={'Картинка баннер'}/>
            <p style={{textTransform: 'uppercase'}}>{bannerData.title}</p>
            <p>{bannerData.text}</p>
          </div>
        </>
      }
      <button onClick={() => handleNavigate(`/sample/banner`)}>Перейти к материалу</button>
      <h1>Журнал “Прожито”</h1>
      {
        !isJournalLoading && journalData?.data &&
        <ul style={{display: 'flex', flexDirection: 'row', listStyleType: 'none'}}>
          {
            journalData.data.map((item: IJournalItem) => item.type === "experience" ? (
              <li key={item.id}>
                <div style={{padding: '10px'}}>
                  <p>{item.id}</p>
                  <p>{JOURNAL_ITEM_TYPE[item.type]}</p>
                  <img width={204} height={204} src={require(`../../images/${item.image}`)} alt={'Картинка журнала'}/>
                  <p>{(item as IJournalExperienceItem).name}</p>
                </div>
              </li>
            ) : (
              <li key={item.id}>
                <div style={{padding: '10px'}}>
                  <p>{item.id}</p>
                  <p>{JOURNAL_ITEM_TYPE[item.type]}</p>
                  <img width={328} height={526} src={require(`../../images/${item.image}`)} alt={'Картинка журнала'}/>
                  <p>{(item as IJournalMagazineItem).title}</p>
                  <p>{(item as IJournalMagazineItem).subtitle}</p>
                </div>
              </li>
            ))
          }
        </ul>
      }
      <button onClick={() => handleNavigate(`/journal`)}>Посмотреть всю подборку</button>
      <h1>Спецпроекты</h1>
      {
        !isProjectLoading && projectData &&
        <ul style={{display: 'flex', flexDirection: 'row', listStyleType: 'none'}}>
          {
            projectData.map((item: IProjectItem) => (
              <li key={item.id}>
                <div style={{padding: '10px', cursor: "pointer"}}  onClick={() => handleNavigate(`/sample/${item.sample}`)}>
                  <p>{item.title}</p>
                  <img width={491} height={352} src={require(`../../images/${item.image}`)} alt={'Картинка проекта'}/>
                  <p>{item.text}</p>
                  <p>{formatDate(item.date, "long")}</p>
                </div>
              </li>
            ))
          }
        </ul>
      }
    </>
  )
}

export default MainPage
