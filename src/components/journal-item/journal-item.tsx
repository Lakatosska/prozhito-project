import {FC} from "react";
import {IJournalExperienceItem, IJournalItem, IJournalMagazineItem} from "../../services/types/journal";
import journalItemStyles from "./journal-item.module.css";

interface IJournalItemProps{
  item: IJournalItem;
  isExp: boolean;
}
export const JournalItem: FC<IJournalItemProps> = ({item, isExp}) => {

  const itemTypeName = item.type === 'project' ? 'Спецпроект' : 'Тематическая подборка'

  return (
    isExp
    ?(<div className={journalItemStyles.item} key={item.id}>
        <article className={`${journalItemStyles.cardExp}`}>
          <p className={journalItemStyles.name}>{(item as IJournalExperienceItem).name}</p>
          <img src={require(`../../images/${item.image}`)} className={journalItemStyles.imgExp} alt={'Картинка журнала'}/>
          <p className={`${journalItemStyles.quote} ${journalItemStyles.quote_type_experience}`}>{item.text}</p>
          <p className={journalItemStyles.typeExp}>Опыт читателя</p>
        </article>
      </div>)
    :(<div className={journalItemStyles.item} key={item.id}>
      <article className={journalItemStyles.card}>
        <img src={require(`../../images/${item.image}`)} className={journalItemStyles.img} alt={'Картинка журнала'}/>
        <p className={journalItemStyles.type}>{itemTypeName}</p>
        <div className={journalItemStyles.text}>
          <p className={journalItemStyles.title}>{(item as IJournalMagazineItem).title}</p>
          <p className={journalItemStyles.subtitle}>{(item as IJournalMagazineItem).subtitle}</p>
          <p className={journalItemStyles.quote}>{item.text}</p>
        </div>

      </article>
    </div>)
  )
}
