import headerStyles from "../Header/Header.module.css";
import {Link} from "react-router-dom";
import React, {FunctionComponent} from "react";

const HeaderDropdown: FunctionComponent = () => {
    return (
        <ul className={headerStyles.menu__dropdown}>
            <li className={headerStyles.menu__dropdownItem}>
                <Link to="/" className={`${headerStyles.menu__link} ${headerStyles.menu__link_dropdown}`}
                >О&nbsp;прожито</Link>
            </li>
            <li className={headerStyles.menu__dropdownItem}>
                <Link to="/" className={`${headerStyles.menu__link} ${headerStyles.menu__link_dropdown}`}
                >Как&nbsp;работать?</Link>
            </li>
            <li className={headerStyles.menu__dropdownItem}>
                <Link to="/" className={`${headerStyles.menu__link} ${headerStyles.menu__link_dropdown}`}>Медиа</Link>
            </li>
            <li className={headerStyles.menu__dropdownItem}>
                <Link to="/" className={`${headerStyles.menu__link} ${headerStyles.menu__link_dropdown}`}
                >Новости</Link>
            </li>
            <li className={headerStyles.menu__dropdownItem}>
                <Link to="/" className={`${headerStyles.menu__link} ${headerStyles.menu__link_dropdown}`}
                >Спецпроекты</Link>
            </li>
        </ul>
    )
}
export default HeaderDropdown;