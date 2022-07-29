import {FC} from "react";
import {dataAPI} from "../../services/api/data";
import {JOURNAL_ITEM_TYPE, JOURNAL_MAIN_LIMIT, NEWS_MAIN_LIMIT} from "../../constants";
import {INewsItem} from "../../services/types/news";
import SamplePage from "../sample-page/sample-page";
import {IDiaryItem} from "../../services/types/diary";
import {IProjectItem} from "../../services/types/project";
import {formatDate} from "../../utils/dateHelper";
import {IJournalExperienceItem, IJournalItem, IJournalMagazineItem} from "../../services/types/journal";

const MainPage: FC = () => {
  const {isLoading: isPopupLoading, data: popupData} = dataAPI.useGetPopupQuery();
  const {isLoading: isNewsLoading, data: newsData} = dataAPI.useGetNewsQuery({page: 1, size: NEWS_MAIN_LIMIT});
  const {isLoading: isDiaryLoading, data: diaryData} = dataAPI.useGetDiariesQuery();
  const {isLoading: isBannerLoading, data: bannerData} = dataAPI.useGetBannerQuery();
  const {isLoading: isProjectLoading, data: projectData} = dataAPI.useGetProjectsQuery();
  const {isLoading: isJournalLoading, data: journalData} = dataAPI.useGetJournalQuery({page: 1, size: JOURNAL_MAIN_LIMIT, filter: "all"});

  return (
    <>
      {
        !isPopupLoading && popupData &&
        <>
          <div style={{backgroundColor: "lightgreen"}}>
            <p style={{textTransform: 'uppercase'}}>{popupData.title}</p>
            <p>{popupData.caption}</p>
          </div>
          <SamplePage name={popupData.sample} />
        </>
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
          <div style={{backgroundColor: "lightgrey"}}>
            <img width={329} height={440} src={require(`../../images/${bannerData.photo}`)} alt={'Картинка баннер'}/>
            <p style={{textTransform: 'uppercase'}}>{bannerData.title}</p>
            <p>{bannerData.text}</p>
          </div>
          <SamplePage name={bannerData.sample} />
        </>
      }
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
      <h1>Спецпроекты</h1>
      {
        !isProjectLoading && projectData &&
        <ul style={{display: 'flex', flexDirection: 'row', listStyleType: 'none'}}>
          {
            projectData.map((item: IProjectItem) => (
              <li key={item.id}>
                <div style={{padding: '10px'}}>
                  <p>{item.title}</p>
                  <img width={491} height={352} src={require(`../../images/${item.image}`)} alt={'Картинка проекта'}/>
                  <p>{item.text}</p>
                  <p>{formatDate(item.date, "long")}</p>
                </div>
                <SamplePage name={item.sample} />
              </li>
            ))
          }
        </ul>
      }
    </>
  )
}

export default MainPage
