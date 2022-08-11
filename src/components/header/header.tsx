import React, { FunctionComponent, useState } from "react";
import headerStyles from "./header.module.css";
import logo from "../../images/logo_prozhito.svg";
import logo_mobile from "../../images/logo_prozhito_mobile.svg";
import logo_eu_ru from '../../images/logo_eu_ru.svg';
import openImg from "../../images/menu-mobil-open.svg";
import closeImg from "../../images/menu-mobil-close.svg";
import HeaderNav from "../headerNav/headerNav";
import useMediaQuery from "../../hooks/useMediaQuery";
import footerInfoStyles from "../footer-info/footer-info.module.css";

const Header: FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const desktop = useMediaQuery('(min-width: 768px)');

  const btnState = menuOpen
    ? {img:closeImg,
      alt: 'закрыть'}
    : {img:openImg,
      alt: 'открыть'}


  const toggleMobileMenu = (): void => {
    setMenuOpen((prevState)=> {
      return !prevState
    })
  };

  return (
    <header className={menuOpen?  `${headerStyles.header} ${headerStyles.header_theme_dark}` : headerStyles.header }>
      <div className={`${headerStyles.header__container} ${headerStyles.menu}`}>
        <div className={headerStyles.header__links}><a href="https://prozhito.org/" target="_blank" rel="noopener noreferrer" className={footerInfoStyles.link}>
          <img
            src={desktop? logo : logo_mobile}
            alt={desktop.toString()}
          />
        </a>
        <a href="https://eusp.org/" target="_blank" rel="noopener noreferrer" className={footerInfoStyles.link}>
          <img
            src={logo_eu_ru}
            alt="Европейский университет в Санкт-Петербурге"
          />
        </a>
        </div>
        <HeaderNav desktop={desktop} open={menuOpen}/>
        {!desktop&&<button type='button' className={headerStyles.menu__button} onClick={toggleMobileMenu}>
          <img
            alt={btnState.alt}
            src={btnState.img}
          />
        </button>}
      </div>
    </header>
  );
};

export default Header;
