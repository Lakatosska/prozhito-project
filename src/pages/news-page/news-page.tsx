import {FC} from "react";
import {dataAPI} from "../../services/api/data";
import {useDispatch, useSelector} from "../../hooks";
import {pageNewsSelector} from "../../services/selectors/news";
import {setNewsPage} from "../../services/slices/news";
import {NEWS_PAGE_LIMIT_DESKTOP, NEWS_PAGE_LIMIT_TABLET, NEWS_PAGE_LIMIT_MOBILE} from "../../constants";
import useMediaQuery from "../../hooks/useMediaQuery";
import NewsCard from "../../components/news-card/news-card";
import newsPageStyle from './news-page.module.css';
import { LinkButton } from "../../components/link-button/link-button";

const NewsPage: FC = () => {
  const dispatch = useDispatch();
  const page = useSelector(pageNewsSelector)
  const {isLoading, data} = dataAPI.useGetNewsQuery({page, size: NEWS_PAGE_LIMIT_DESKTOP});
  const handleLoad = () => {
    dispatch(setNewsPage(page + 1))
  }
  const tablet = useMediaQuery("(max-width: 1023px)");
  const mobile = useMediaQuery("(max-width: 767px)");
  let pageLimit = NEWS_PAGE_LIMIT_DESKTOP;
  if(tablet) {
    pageLimit = NEWS_PAGE_LIMIT_TABLET
  };
  if(mobile) {
    pageLimit = NEWS_PAGE_LIMIT_MOBILE
  };

  return (
    <>
      <h1  className={newsPageStyle.title}>Новости и события</h1>
      {
        !isLoading && data &&
        <>
        <ul className={newsPageStyle.container}>
          {
            data.data
              .slice(0, pageLimit)
              .map(item => (
                <li key={item.id}>
                  <NewsCard  item={item} />
                </li>
              ))
          }

        </ul>
        {
          data.total > data.data.length &&
          <div className={newsPageStyle.button}>
            <LinkButton onClick={handleLoad}>Загрузить еще</LinkButton>
          </div>
          }
        </>
      }
    </>
  )
}

export default NewsPage

/*
<li key={item.id}>
  <div style={{padding: '10px'}}>
    <p>{item.id}</p>
    <p>{item.text}</p>
    <img width={253} height={306} src={require(`../../images/${item.image}`)} alt={'Картинка новости'}/>
    <p>{formatDate(item.date, "short")}</p>
  </div>
</li>
*/
