import {FC, useState} from "react";
import {dataAPI} from "../../services/api/data";
import {useDispatch, useSelector} from "../../hooks";
import {dataJournalSelector, filterJournalSelector, pageJournalSelector, totalJournalSelector} from "../../services/selectors/journal";
import {setJournalFilter, setJournalPage} from "../../services/slices/journal";
import {TJournalFilter} from "../../services/types/journal";
import Tabs from "../../components/tabs/tabs";
import TabItem from "../../components/tabs-item/tabs-item";
import journalPageStyles from "./journal-page.module.css";
import { JournalItem } from "../../components/journal-item/journal-item";
import {LinkButton} from "../../components/link-button/link-button";
import useMediaQuery from "../../hooks/useMediaQuery";
import {JOURNAL_PAGE_LIMIT} from "../../constants";
import {Link} from "react-router-dom";

const JournalPage: FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterJournalSelector)
  const page = useSelector(pageJournalSelector)
  const total = useSelector(totalJournalSelector)
  const journal = useSelector(dataJournalSelector);
  const [selectedTab, setSelectedTab] = useState<TJournalFilter>(filter)

  const {isLoading: isJournalLoading} = dataAPI.useGetJournalQuery({page, size: JOURNAL_PAGE_LIMIT, filter: filter}, {refetchOnMountOrArgChange: true});
  const handleLoad = () => {
    dispatch(setJournalPage(page + 1));
  }

  const handleFilter = (value: TJournalFilter) => {
    setSelectedTab(value)
    dispatch(setJournalFilter(value));
  }
  const tablet = useMediaQuery("(max-width: 1024px)");
  const mobile = useMediaQuery("(max-width: 425px)");
  let journalDataToShow = journal;
  if(tablet&&journal) journalDataToShow = journal.slice(0,6);
  if(mobile&&journal) journalDataToShow = journal.slice(0,3)



  return (
    <main className={journalPageStyles.main}>
      <p className={journalPageStyles.breadcrumbs}><Link to='/' className={journalPageStyles.breadcrumbsLink}>Главная страница</Link> / Журнал «Прожито»</p>
      <h1 className={journalPageStyles.heading}>Журнал &laquo;Прожито&raquo;</h1>
      <Tabs>
        <TabItem value={"all"} selected={selectedTab === "all"} setSelected={()=>handleFilter('all')} />
        <TabItem value={"topic"} selected={selectedTab === "topic"} setSelected={()=>handleFilter('topic')} />
        <TabItem value={"project"} selected={selectedTab === "project"} setSelected={()=>handleFilter('project')} />
        <TabItem value={"experience"} selected={selectedTab === "experience"} setSelected={()=>handleFilter('experience')} />
      </Tabs>
      {!isJournalLoading && journalDataToShow && (
        <ul className={journalPageStyles.list}>
          {journalDataToShow.map(item =>
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

export default JournalPage;
