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
import stalin from "../../images/stalin.jpg";
import zelenina from "../../images/lipkina.jpg";
import journalItemStyles from "./journal-item.module.css";


export const JournalItemDefault: FC = () => {

  const dispatch = useDispatch();
  const filter = useSelector(filterJournalSelector);
  const page = useSelector(pageJournalSelector);
  const total = useSelector(totalJournalSelector);
  const journal = useSelector(dataJournalSelector);

  return (
    <li className={journalItemStyles.item} key={1}>
      <article className={journalItemStyles.card}>
        <img src={stalin} className={journalItemStyles.img} alt={'Картинка журнала'}/>
        <p className={journalItemStyles.type}>Тематическая подборка</p>
        <div className={journalItemStyles.text}>
          <p className={journalItemStyles.title}>Сталин умер</p>
          <p className={journalItemStyles.subtitle}>Что теперь будет?! Как нам жить без него?</p>
          <p className={journalItemStyles.quote}>Все газеты впервые опубликовали портреты т.Сталина и многочисленные
              статьи. В них т.Сталин именуется вождём мирового пролетариата.</p>
        </div>

      </article>
    </li>
  )
}


export const JournalItemExperience: FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterJournalSelector);
  const page = useSelector(pageJournalSelector);
  const total = useSelector(totalJournalSelector);
  const journal = useSelector(dataJournalSelector);

  return (
    <li className={journalItemStyles.item} key={1}>
      <article className={journalItemStyles.cardExp}>
        <div className={journalItemStyles.content}>
          <p className={journalItemStyles.heading}>Галина Зеленина о дневниках Леонида Липкина</p>
          <img src={zelenina} className={journalItemStyles.imgExp} alt={'Картинка журнала'}/>
          <p className={journalItemStyles.description}>историк, доцент кафедры теологии иудаизма, библеистики и иудаики РГГУ и
                ст. н. с. ШАГИ РАНХиГС
          </p>
        </div>
        <p className={journalItemStyles.typeExp}>Опыт читателя</p>

      </article>
    </li>
  )
}

