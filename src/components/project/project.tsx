import { FC } from 'react';
import { dataAPI } from '../../services/api/data';
import projectStyle from './project.module.css';
import { MaterialsItem } from "../materials-item/materials-item";
import { LinkButton } from '../link-button/link-button';
import { formatDate } from '../../utils/dateHelper';
import { useNavigate } from 'react-router';

export const Project: FC = () => {
  const navigate = useNavigate();
  const {isLoading: isProjectLoading, data: projectData} = dataAPI.useGetProjectsQuery();
  const handleNavigate = (to: string) => {
    navigate(to)
  }

  return (
    <section className={projectStyle.project}>
      <h1 className={projectStyle.title}>Спецпроекты</h1>
        {
          !isProjectLoading && projectData &&
          <ul style={{display: 'flex', flexDirection: 'row', listStyleType: 'none'}}>
            {
              projectData.map((item: IProjectItem) => (
                <li key={item.id}>
                  <div style={{padding: '10px', cursor: "pointer"}}  onClick={() => handleNavigate(`/sample/${item.sample}`)}>
                    <p>{item.title}</p>
                    <img width={491} height={352} src={require(`../../images/${item.image}`)} alt={'Картинка проекта'}/>
                    <p>{item.text}</p>
                    <p>{formatDate(item.date, "long")}</p>
                  </div>
                </li>
              ))
            }
          </ul>
        }
        <LinkButton to={`/not/found`}>Все спецпроекты</LinkButton>
    </section>
  )
}

export default Project;


/* getProjects: build.query<ReadonlyArray<IProjectItem>, void>({
      query: () => ({
        url: '/projects',
        params: {
          _limit: PROJECTS_LIMIT,
        },
      }),
    })

*/


