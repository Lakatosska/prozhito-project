import {FC, useState} from "react";
import {dataAPI} from "../../services/api/data";
import {useDispatch, useSelector} from "../../hooks";
import {JOURNAL_ITEM_TYPE, JOURNAL_PAGE_LIMIT} from "../../constants";
import {dataJournalSelector, filterJournalSelector, pageJournalSelector, totalJournalSelector} from "../../services/selectors/journal";
import {setJournalFilter, setJournalPage} from "../../services/slices/journal";
import {IJournalExperienceItem, IJournalItem, IJournalMagazineItem, TJournalFilter} from "../../services/types/journal";
import Tabs from "../../components/tabs/tabs";
import TabItem from "../../components/tabs/tab-item";

const JournalPage: FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterJournalSelector)
  const page = useSelector(pageJournalSelector)
  const total = useSelector(totalJournalSelector)
  const journal = useSelector(dataJournalSelector)
  const [selectedTab, setSelectedTab] = useState<TJournalFilter>(filter)

  const {isLoading: isJournalLoading} = dataAPI.useGetJournalQuery({page, size: JOURNAL_PAGE_LIMIT, filter: filter}, {refetchOnMountOrArgChange: true});

  const handleLoad = () => {
    dispatch(setJournalPage(page + 1))
  }

  const handleFilter = (value: TJournalFilter) => {
    setSelectedTab(value)
    dispatch(setJournalFilter(value))
  }

  return (
    <>
      <h1>Страница журнала</h1>
      <Tabs>
        <TabItem value={"all"} selected={selectedTab === "all"} setSelected={handleFilter} />
        <TabItem value={"topic"} selected={selectedTab === "topic"} setSelected={handleFilter} />
        <TabItem value={"project"} selected={selectedTab === "project"} setSelected={handleFilter} />
        <TabItem value={"experience"} selected={selectedTab === "experience"} setSelected={handleFilter} />
      </Tabs>
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
    </>
  )
}

export default JournalPage
