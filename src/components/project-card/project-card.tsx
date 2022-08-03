import { FC } from "react";
import { IProjectItem } from "../../services/types/project";
import { formatDate } from "../../utils/dateHelper";
import projectCardStyle from "./project-card.module.css";

interface IProjectCardProps {
  readonly item: IProjectItem;
  readonly onClick: (projectId: number) => void
}

export const ProjectCard: FC<IProjectCardProps> = ({item, onClick}) => {

  return (
    <div style={{padding: '10px', cursor: "pointer"}}  onClick={() => onClick(item.id)}>
      <p>{item.title}</p>
      <img width={491} height={352} src={require(`../../images/${item.image}`)} alt={'Картинка проекта'}/>
      <p>{item.text}</p>
      <p>{formatDate(item.date, "long")}</p>
    </div>

  )
}

export default ProjectCard;
