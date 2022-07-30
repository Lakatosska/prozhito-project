import { FC } from "react";
import { dataAPI } from "../../services/api/data";
import { IDiaryItem } from "../../services/types/diary";
import materialsStyle from "./materials.module.css";

export const Materials: FC = () => {

  const {isLoading: isDiaryLoading, data: diaryData} = dataAPI.useGetDiariesQuery();

  return(
    <>
      <h2 className={materialsStyle.title}>
        Материалы
      </h2>

      <ul className="cards">
      </ul>

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
    </>
  )
}
