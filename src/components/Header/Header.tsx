import React, { FunctionComponent, useState } from "react";
import headerStyles from "./Header.module.css";
import logo from "../../images/logo.svg";
import logo_mobile from "../../images/logo_mobile.svg";
import openImg from "../../images/menu-mobil-open.svg";
import closeImg from "../../images/menu-mobil-close.svg";
import HeaderNav from "../HeaderNav/HeaderNav";
import useMediaQuery from "../../hooks/useMediaQuery";

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
                <img src={desktop? logo : logo_mobile} alt='Логотип' />
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
