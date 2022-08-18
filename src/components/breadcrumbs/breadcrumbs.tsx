import {FC} from "react";
import { Link } from "react-router-dom";
import { useMatch } from 'react-router-dom';
import breadcrumbsStyle from './breadcrumbs.module.css';

const Breadcrumbs: FC = () => {
  const matchMainPage = useMatch({
    path: '/',
    end: true,
  });

  const matchNewsPage = useMatch({
    path: '/news',
    end: true,
  });

  const matchJournalPage = useMatch({
    path: '/journal',
    end: true,
  });

  const matchSampleMaterial = useMatch({
    path: '/sample/:page',
    end: true,
  });

  if (matchMainPage != null) {
    return null
  }

  let breadcrumbs = [<span><Link className={breadcrumbsStyle.text} to="/">Главная страница</Link> / </span>];

  if (matchNewsPage != null) {
    breadcrumbs.push(<span className={breadcrumbsStyle.textlast}>Новости и события</span>)
  };

  if (matchJournalPage != null) {
    breadcrumbs.push(<span className={breadcrumbsStyle.textlast}>Журнал «Прожито»</span>)
  };

  if (matchSampleMaterial != null) {
    breadcrumbs.push(<span><Link className={breadcrumbsStyle.text} to="/journal">Журнал «Прожито»</Link></span>)
    breadcrumbs.push(<span className={breadcrumbsStyle.textlast}> / Опыт прочтения одного дневника</span>)
  };

  return(
    <nav className={breadcrumbsStyle.nav}>
      <p className={breadcrumbsStyle.title}>
        {breadcrumbs}
      </p>
    </nav>
  )

}

export default Breadcrumbs;
