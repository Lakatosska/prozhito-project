import {FC} from "react";
import {dataAPI} from "../../services/api/data";
import {useDispatch, useSelector} from "../../hooks";
import {dataNewsSelector, pageNewsSelector, totalNewsSelector} from "../../services/selectors/news";
import {setNewsPage} from "../../services/slices/news";
import {NEWS_PAGE_LIMIT} from "../../constants";
import {formatDate} from "../../utils/dateHelper";

const NewsPage: FC = () => {
  const dispatch = useDispatch();
  const page = useSelector(pageNewsSelector)
  const total = useSelector(totalNewsSelector)
  const news = useSelector(dataNewsSelector)
  const {isLoading: isNewsLoading} = dataAPI.useGetNewsQuery({page, size: NEWS_PAGE_LIMIT});
  const handleLoad = () => {
    dispatch(setNewsPage(page + 1))
  }
  return (
    <>
      <h1>Страница новостей</h1>
      {
        !isNewsLoading && news &&
        <ul style={{listStyleType: 'none'}}>
          {
            news.map(item => (
              <li key={item.id}>
                <div style={{padding: '10px'}}>
                  <p>{item.id}</p>
                  <p>{item.text}</p>
                  <img width={253} height={306} src={require(`../../images/${item.image}`)} alt={'Картинка новости'}/>
                  <p>{formatDate(item.date, "short")}</p>
                </div>
              </li>
            ))
          }
          {
            total > news.length &&
            <button onClick={handleLoad}>Загрузить еще</button>
          }
        </ul>
      }
    </>
  )
}

export default NewsPage
