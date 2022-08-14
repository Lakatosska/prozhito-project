import {FC} from "react";
import {IJournalExperienceItem, IJournalItem} from "../../services/types/journal";
import journalItemStyles from "./journal-item.module.css";

interface IJournalItemProps{
  item: IJournalItem
}
export const JournalItem: FC<IJournalItemProps> = ({item}) => {
console.log(item.type)
  function isExperience(obj: IJournalItem): obj is IJournalExperienceItem {
    return "name" in obj;
  }
  return (
    isExperience(item)
    ?(<li className={journalItemStyles.item} key={item.id}>
        <article className={`${journalItemStyles.cardExp}`}>
          <p className={journalItemStyles.name}>{item.name}</p>
          <img src={require(`../../images/${item.image}`)} className={journalItemStyles.imgExp} alt={'Картинка журнала'}/>
          <p className={journalItemStyles.quote}>{item.text}</p>
          <p className={journalItemStyles.typeExp}>Опыт читателя</p>
        </article>
      </li>)
    :(<li className={journalItemStyles.item} key={item.id}>
      <article className={journalItemStyles.card}>
        <img src={require(`../../images/${item.image}`)} className={journalItemStyles.img} alt={'Картинка журнала'}/>
        <p className={journalItemStyles.type}>{item.type === 'project'? 'Спецпроект' : 'Тематическая подборка'}</p>
        <div className={journalItemStyles.text}>
          <p className={journalItemStyles.title}>{item.title}</p>
          <p className={journalItemStyles.subtitle}>{item.subtitle}</p>
          <p className={journalItemStyles.quote}>{item.text}</p>
        </div>

      </article>
    </li>)
  )
}
