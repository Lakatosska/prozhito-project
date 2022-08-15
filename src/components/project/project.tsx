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
          <ul className={projectStyle.container}>
            {
              data.map(item => (
                <li key={item.id}>
                  <ProjectCard item={item} onClick={(projectId) => handleNavigate(`/sample/${projectId}`)}/>
                </li>
              ))
            }
          </ul>
        }
        <div className={projectStyle.button}>
          <LinkButton
            to={`/not/found`}>
              Все спецпроекты
          </LinkButton>
        </div>
    </section>
  )
}

export default Project;
/*
<section class="special-projects">
  <div class="special-projects__title-container">

  </div>
  <div class="special-projects__container">
    <div class="special-projects__card">

    <div class="special-projects__card">
      <img
        class="special-projects__image"
        alt="люди"
        src="./images/special-projects-card2.png"
      />
      <div class="special-projects__main-text">
        <div class="special-projects__field">
          <h3 class="special-projects__subtitle">Блокада</h3>
          <p class="special-projects__description">
            В условиях катастрофического голода, холода, вражеских
            бомбардировок и обстрелов сотни тысяч людей оказались
            заперты в городе. У многих из них был доступ к бумаге
            и чернилам, и некоторые начали вести дневники.
          </p>
        </div>
        <p class="special-projects__date">13 декабря 2021</p>
      </div>
    </div>
  </div>
</section>
*/
