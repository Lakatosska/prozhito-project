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
import { JournalItemDefault, JournalItemExperience } from "../journal-item/journal-item";
import journalItemsStyles from "./journal-items.module.css";

const JournalItems: FC = () => {

  const dispatch = useDispatch();
  const filter = useSelector(filterJournalSelector);
  const page = useSelector(pageJournalSelector);
  const total = useSelector(totalJournalSelector);
  const journal = useSelector(dataJournalSelector);


  return (
    <>
      <ul className={journalItemsStyles.list}>
        <JournalItemDefault />
        <JournalItemExperience />
        <JournalItemExperience />
      </ul>

    {/*}
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
      </ul>
      */}
    </>
  )
}

export default JournalItems;
