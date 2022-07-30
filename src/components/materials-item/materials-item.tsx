import { FC } from "react";
import { IDiaryItem } from "../../services/types/diary";
import materialsItemStyle from "./materials-item.module.css";


export const MaterialsItem: FC<IDiaryItem> = (diaryData: IDiaryItem) => {

  const { name, image, text, tag } = diaryData;

   return(
    <li className={materialsItemStyle.card}>
      <a href="typical.html" className={materialsItemStyle.card__link}>
        <p className={materialsItemStyle.card__tag}>{tag}</p>
        <p className={`${materialsItemStyle.cardTitle} ${materialsItemStyle.cardTitleTop}`}>
          {name.field1}
        </p>
        <p className={`${materialsItemStyle.cardTitle}`}>
          {name.field2}
        </p>
        <img
          src={require(`../../images/${image}`)}
          alt={`фотография ${name.field1}+${name.field2}`}
          className={materialsItemStyle.card__image}
        />
        <p className={materialsItemStyle.card__text}>
          {text}
        </p>
      </a>
    </li>
   )
 }


 /*
export interface IDiaryItem extends IListItem{
  name  : string;
  image : string;
  text  : string;
  tag?  : string;
}

  "diaries" : [
    {
      "id"      : 1,
      "name"    : "Артамонов Виктор",
      "image"   : "artamonov.jpg",
      "text"    : "Петербургский краевед и педагог. Нам необходимо набрать 20 рукописных тетрадей",
      "tag"     : "Нужен наборщик"
    },
    {
      "id"      : 2,
      "name"    : "Анонимный блокадный дневник",
      "image"   : "anonym.jpg",
      "text"    : "Музей Ахматовой передал нам для работы рукопись анонимного преподавателя ФЗУ, ставшего свидетелем блокады Ленинграда",
      "tag"     : "Нужна сверка"
    },
    {
      "id"      : 3,
      "name"    : "Родоман Борис",
      "image"   : "rodoman.jpg",
      "text"    : "Документы из домашнего архива географа: переписка, дневники и материалы для его научных статей",
      "tag"     : "Новые материалы"
    }
  ],

  <li className="card item-slider">
      <a href="typical.html" className="card__link">
        <p className="card__tag">НУЖЕН НАБОРЩИК</p>
        <p className="card__title card__title_top">
          Артамонов
        </p>
        <p className="card__title">
          Виктор
        </p>
        <img
          src="./images/artamonov.jpg"
          alt="фотография Артамонова Виктора"
          className="card__image"
        />
        <p className="card__text">
          Петербургский краевед и педагог. Нам необходимо набрать 20
          рукописных тетрадей
        </p>
      </a>
    </li>
*/
