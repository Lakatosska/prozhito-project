import {FC, useState} from "react";
import {dataAPI} from "../../services/api/data";
import {useDispatch, useSelector} from "../../hooks";
import {dataJournalSelector, filterJournalSelector, pageJournalSelector, totalJournalSelector} from "../../services/selectors/journal";
import {setJournalFilter, setJournalPage} from "../../services/slices/journal";
import {IJournalExperienceItem, IJournalItem, IJournalMagazineItem, TJournalFilter} from "../../services/types/journal";
import Tabs from "../../components/tabs/tabs";
import TabItem from "../../components/tabs-item/tabs-item";
import journalPageStyles from "./journal-page.module.css";
import { JournalItem } from "../../components/journal-item/journal-item";
import {LinkButton} from "../../components/link-button/link-button";


/*
      "id"       : 1,
      "type"     : "experience",
      "image"    : "lipkina.jpg",
      "text"     : "историк, доцент кафедры теологии иудаизма, библеистики и иудаики РГГУ и ст. н. с. ШАГИ РАНХиГС",
      "name"     : "Галина Зеленина о дневниках Леонида Липкина"
    },
    {
      "id"       : 2,
      "type"     : "topic",
      "image"    : "stalin.jpg",
      "text"     : "Все газеты впервые опубликовали портреты т.Сталина и многочисленные статьи. В них т.Сталин именуется вождём мирового пролетариата.",
      "title"    : "Сталин умер",
      "subtitle"
*/

const JournalPage: FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterJournalSelector)
  const page = useSelector(pageJournalSelector)
  const total = useSelector(totalJournalSelector)
  const journal = useSelector(dataJournalSelector);
  console.log(journal)
  const [selectedTab, setSelectedTab] = useState<TJournalFilter>(filter)

  const { isLoading: isJournalLoading, data: journalData } =
    dataAPI.useGetMainJournalQuery();
  console.log(journalData)
  const handleLoad = () => {
    dispatch(setJournalPage(page + 1))
  }

  const handleFilter = (value: TJournalFilter) => {
    setSelectedTab(value)
    dispatch(setJournalFilter(value))
  }

  return (
    <main className={journalPageStyles.main}>
      <p className={journalPageStyles.breadcrumps}>Главная страница / Журнал «Прожито»</p>
      <h1 className={journalPageStyles.heading}>Журнал "Прожито"</h1>
      <Tabs>
        <TabItem value={"all"} selected={selectedTab === "all"} setSelected={()=>handleFilter('all')} />
        <TabItem value={"topic"} selected={selectedTab === "topic"} setSelected={()=>handleFilter('topic')} />
        <TabItem value={"project"} selected={selectedTab === "project"} setSelected={handleFilter} />
        <TabItem value={"experience"} selected={selectedTab === "experience"} setSelected={handleFilter} />
      </Tabs>
      {!isJournalLoading && journalData && (
        <ul className={journalPageStyles.list}>
          {journalData.map(item =>
            <JournalItem key={item.id} item={item}/>)}
        </ul>
      )
      }
      <div className={journalPageStyles.buttonContainer}>
        <LinkButton onClick={handleLoad} disabled={total > journal.length}>Загрузить еще</LinkButton>
      </div>
    </main>
  )
}

export default JournalPage

/*
{
        !isJournalLoading && journal &&
        <ul style={{listStyleType: 'none'}}>
          {
            journal.map((item: IJournalItem) => item.type === "experience" ? (
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
          {
            total > journal.length &&
            <button onClick={handleLoad}>Загрузить еще</button>
          }
        </ul>
      }

*/
