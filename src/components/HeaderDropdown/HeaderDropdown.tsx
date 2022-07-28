import headerDropdownStyles from "./HeaderDropdown.module.css";
import headerNavStyles from "../HeaderNav/HeaderNav.module.css";
import { Link } from "react-router-dom";
import React, { FunctionComponent } from "react";

interface IHeaderDropdownProps {
  visible: boolean;
  desktop: boolean;
}
const HeaderDropdown: FunctionComponent<IHeaderDropdownProps> = ({
  visible,
  desktop,
}) => {
  const dropdownStylesMobile = visible
    ? `${headerDropdownStyles.menu__mobileLinksSection}`
    : `${headerDropdownStyles.menu__mobileLinksSection} ${headerDropdownStyles.menu__mobileLinksSection_closed}`;

  const dropdownStylesDesktop = visible
    ? `${headerDropdownStyles.menu__dropdown} ${headerDropdownStyles.menu__dropdown_visible} `
      : `${headerDropdownStyles.menu__dropdown} `;

  return desktop ? (
    <ul className={dropdownStylesDesktop}>
      <li className={headerDropdownStyles.menu__dropdownItem}>
        <Link
          to="/"
          className={`${headerNavStyles.menu__link} ${headerDropdownStyles.menu__link_dropdown}`}
        >
          О&nbsp;прожито
        </Link>
      </li>
      <li className={headerDropdownStyles.menu__dropdownItem}>
        <Link
          to="/"
          className={`${headerNavStyles.menu__link} ${headerDropdownStyles.menu__link_dropdown}`}
        >
          Как&nbsp;работать?
        </Link>
      </li>
      <li className={headerDropdownStyles.menu__dropdownItem}>
        <Link
          to="/"
          className={`${headerNavStyles.menu__link} ${headerDropdownStyles.menu__link_dropdown}`}
        >
          Медиа
        </Link>
      </li>
      <li className={headerDropdownStyles.menu__dropdownItem}>
        <Link
          to="/"
          className={`${headerNavStyles.menu__link} ${headerDropdownStyles.menu__link_dropdown}`}
        >
          Новости
        </Link>
      </li>
      <li className={headerDropdownStyles.menu__dropdownItem}>
        <Link
          to="/"
          className={`${headerNavStyles.menu__link} ${headerDropdownStyles.menu__link_dropdown}`}
        >
          Спецпроекты
        </Link>
      </li>
    </ul>
  ) : (
    <div className={dropdownStylesMobile}>
      <ul className={headerDropdownStyles.menu__mobileLinks}>
        <li className={headerNavStyles.menu__item}>
          <Link to="/" className={headerNavStyles.menu__link}>
            О&nbsp;прожито
          </Link>
        </li>
        <li className={headerNavStyles.menu__item}>
          <Link to="/" className={headerNavStyles.menu__link}>
            Как&nbsp;работать?
          </Link>
        </li>
        <li className={headerNavStyles.menu__item}>
          <Link to="/" className={headerNavStyles.menu__link}>
            Медиа
          </Link>
        </li>
      </ul>
      <ul className={headerDropdownStyles.menu__mobileLinks}>
        <li className={headerNavStyles.menu__item}>
          <Link to="/" className={headerNavStyles.menu__link}>
            Новости
          </Link>
        </li>
        <li className={headerNavStyles.menu__item}>
          <Link to="/" className={headerNavStyles.menu__link}>
            Спецпроекты
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default HeaderDropdown;
