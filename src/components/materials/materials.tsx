import { FC } from "react";
import { IDiaryItem } from "../../services/types/diary";
import materialsStyle from "./materials.module.css";
import { MaterialsItem } from "../materials-item/materials-item";

interface IMaterialsProps{
  data: IDiaryItem[]
}
export const Materials: FC<IMaterialsProps> = ({data}) => {

console.log(data)
  return(
    <section className={materialsStyle.materials}>
      <h2 className={materialsStyle.title}>
        Материалы
      </h2>
        <ul className={materialsStyle.cards}>
          {data.map((item) =>
            <MaterialsItem
              id={item.id}
              name={item.name}
              image={item.image}
              text={item.text}
              tag={item.tag}
              key={item.id}
              sample={item.sample}
            />
          )}
        </ul>
    </section>
  )
}
