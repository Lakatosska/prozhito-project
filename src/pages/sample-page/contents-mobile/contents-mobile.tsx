import {FC, useState} from "react";
import contentsMobileStyles from "./contents-mobile.module.css";
import imageBurger from "../../../images/menu-mobil-open.svg";
import imgArrowLeft from "../../../images/Arrow_left.svg";
import ContentsSample from "../contents-sample/contents-sample";

/*
interface IPopupProps{
  closePopup: ()=> void
}
*/

export const ContentsMobile: FC<any> = () => {

  const [contentsOpen, setContentsOpen] = useState(true);

  const [contentsBurgerOpen, setContentsBurgerOpen] = useState(false);

  const hideContents = (): void => {
    setContentsOpen(false)
  };

  const openMobileContents = (): void => {
    setContentsBurgerOpen(true)
  };


  return (
    <div className={contentsMobileStyles.contents}>
      <div className={contentsMobileStyles.container}>

        <button type="button" className={contentsMobileStyles.arrow__button}
          onClick={()=> hideContents()}>
            <img src={imgArrowLeft} alt='стрелка назад' />
        </button>

        <h2 className={contentsMobileStyles.heading}>оглавление</h2>

        <button type="button" className={contentsMobileStyles.menu__button}
          onClick={()=> openMobileContents()}>
            <img src={imageBurger} alt='кнопка меню' />
        </button>

        {contentsBurgerOpen && (
        <ContentsSample
          openContents={() => setContentsBurgerOpen(true)}
          closeContents={() => setContentsBurgerOpen(false)}
        />
      )}

      </div>
    </div>
  );
};

export default ContentsMobile;

