import { FC } from 'react';
import { dataAPI } from '../../services/api/data';
import projectStyle from './project.module.css';
import { LinkButton } from '../link-button/link-button';
import { useNavigate } from 'react-router';
import ProjectCard from '../project-card/project-card';

export const Project: FC = () => {
  const navigate = useNavigate();
  const {isLoading, data} = dataAPI.useGetProjectsQuery();
  const handleNavigate = (to: string) => {
    navigate(to)
  }

  return (
    <section className={projectStyle.project}>
      <h1 className={projectStyle.title}>Спецпроекты</h1>
        {
          !isLoading && data &&
          <ul style={{display: 'flex', flexDirection: 'row', listStyleType: 'none'}}>
            {
              data.map(item => (
                <li key={item.id}>
                  <ProjectCard item={item} onClick={(projectId) => handleNavigate(`/sample/${projectId}`)}/>
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
