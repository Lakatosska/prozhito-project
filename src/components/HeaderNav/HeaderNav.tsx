import headerStyles from "../Header/Header.module.css";
import {Link} from "react-router-dom";
import React, {FunctionComponent} from "react";
import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";

interface IHeaderNavProps {
    desktop: boolean,
    open: boolean
}
const HeaderNav: FunctionComponent<IHeaderNavProps> = ({desktop, open}) => {

    const style = desktop
    ? headerStyles.menu__desktop
        : open
            ? headerStyles.menu__mobile
            : `${headerStyles.menu__mobile} ${headerStyles.menu__mobile_open}`
    return (
<nav className={desktop? '' : open? `${headerStyles.menu__mobileContainer} ${headerStyles.menu__mobileContainer_open}` : headerStyles.menu__mobileContainer}>
    <ul className={style}>
        <li className={headerStyles.menu__item}>
            <Link to="https://prozhito.org/page/archive" className={headerStyles.menu__link}
            >Архив</Link>
        </li>
        <li className={headerStyles.menu__item}>
            <Link to="https://prozhito.org/persons" className={headerStyles.menu__link}
            >Корпус</Link>
        </li>
        <li className={headerStyles.menu__item}>
            <Link to="/" className={headerStyles.menu__link}>О проекте</Link>
            <HeaderDropdown />
        </li>
    </ul>
</nav>
)
}

export default HeaderNav;