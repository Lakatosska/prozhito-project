import { FC } from "react";
import { dataAPI } from "../../services/api/data";
import { IDiaryItem } from "../../services/types/diary";
import materialsStyle from "./materials.module.css";
import { MaterialsItem } from "../materials-item/materials-item";

export const Materials: FC = () => {

  const {isLoading: isDiaryLoading, data: diaryData} = dataAPI.useGetDiariesQuery();

  return(
    <section className={materialsStyle.materials}>
      <h2 className={materialsStyle.title}>
        Материалы
      </h2>

      {
        !isDiaryLoading && diaryData &&
        <ul className={materialsStyle.cards}>
          {
            diaryData.map((item: IDiaryItem) =>
              <MaterialsItem
                id={item.id}
                name={item.name}
                image={item.image}
                text={item.text}
                tag={item.tag}
                key={item.id}
                sample={item.sample}
              />
            )
          }
        </ul>
      }
    </section>
  )
}
