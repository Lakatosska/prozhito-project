import {FC, useState, useEffect, useCallback} from "react";
import {dataAPI} from "../../services/api/data";
import {Link, useParams} from "react-router-dom";
import PopupSample from "./popup/popup";
import ContentsSample from "./contents-sample/contents-sample";
import useMediaQuery from "../../hooks/useMediaQuery";
import ContentsMobile from "./contents-mobile/contents-mobile";
import samplePageStyles from "./sample-page.module.css";
import Loader from "../../components/loader/loader";

const SamplePage: FC = () => {

  const [popupOpen, setPopupOpen] = useState(true)
  const [contentsOpen, setContentsOpen] = useState(false)
  const [scrollingUp, setScrollingUp] = useState(false)
  const [scrollValue, setScrollValue] = useState(0)
  const onScroll = useCallback((): void => {
    const currentScrollY = window.pageYOffset
    if (scrollValue < currentScrollY && scrollingUp) {
      setScrollingUp(false);
    }
    if (scrollValue > currentScrollY && !scrollingUp) {
      setScrollingUp(true);
    }
    setScrollValue(currentScrollY)
  }, [scrollValue, setScrollValue, scrollingUp])

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  const mobile = useMediaQuery('(max-width: 767px)')
  const {page} = useParams<{page?: string}>()
  const {isLoading, data} = dataAPI.useGetSampleContentQuery(page)
  if (isLoading || !data || data.length === 0) {
    return null
  }

  const openContents = (): void => {
    setContentsOpen(true)
  }

  if (isLoading) return <Loader />

  return (
    <main className={samplePageStyles.main}>
      <div className={samplePageStyles.tag}>
        <p className={samplePageStyles.tagPart}>детство</p>
        <p className={samplePageStyles.tagPart}>&#183;</p>
        <p className={samplePageStyles.tagPart}>опыт читателя</p>
      </div>
      <button
        type="button"
        className={samplePageStyles.buttonContent}
        onClick={openContents}
      >
        оглавление
      </button>
      {
        contentsOpen && (
          <ContentsSample
            openContents={() => setContentsOpen(true)}
            closeContents={() => setContentsOpen(false)}
          />
        )
      }
      {
        popupOpen && (
          <PopupSample closePopup={() => setPopupOpen(false)}/>
        )
      }
      {
        mobile && scrollingUp && (
          <ContentsMobile />
        )
      }
      <article className="article" dangerouslySetInnerHTML={{__html: data[0].content}}/>
    </main>
  )
}

export default SamplePage
