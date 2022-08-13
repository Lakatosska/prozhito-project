import {FC, useState} from "react";
import {dataAPI} from "../../services/api/data";
import {useDispatch, useSelector} from "../../hooks";
import {JOURNAL_ITEM_TYPE, JOURNAL_PAGE_LIMIT} from "../../constants";
import {dataJournalSelector, filterJournalSelector, pageJournalSelector, totalJournalSelector} from "../../services/selectors/journal";
import {setJournalFilter, setJournalPage} from "../../services/slices/journal";
import {IJournalExperienceItem, IJournalItem, IJournalMagazineItem, TJournalFilter} from "../../services/types/journal";
import Tabs from "../../components/tabs/tabs";
import TabItem from "../../components/tabs-item/tabs-item";
import journalPageStyles from "./journal-page.module.css";
import JournalItems from "../../components/journal-items/journal-items";


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
    <main className={journalPageStyles.main}>
      <h1 className={journalPageStyles.heading}>Журнал "Прожито"</h1>
      <Tabs>
        <TabItem value={"all"} selected={selectedTab === "all"} setSelected={handleFilter} />
        <TabItem value={"topic"} selected={selectedTab === "topic"} setSelected={handleFilter} />
        <TabItem value={"project"} selected={selectedTab === "project"} setSelected={handleFilter} />
        <TabItem value={"experience"} selected={selectedTab === "experience"} setSelected={handleFilter} />
      </Tabs>
      {
        !isJournalLoading && journal && (
        <div>
          <JournalItems />
          {
            total > journal.length &&
            <button onClick={handleLoad}>Загрузить еще</button>
          }
        </div>
        )
      }
    </main>
  )
}

export default JournalPage
