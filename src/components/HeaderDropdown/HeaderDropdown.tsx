import headerStyles from "../Header/Header.module.css";
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
  const dropdownStyles = visible
    ? `${headerStyles.menu__mobileLinksSection}`
    : `${headerStyles.menu__mobileLinksSection} ${headerStyles.menu__mobileLinksSection_closed}`;
  return desktop ? (
    <ul className={headerStyles.menu__dropdown}>
      <li className={headerStyles.menu__dropdownItem}>
        <Link
          to="/"
          className={`${headerStyles.menu__link} ${headerStyles.menu__link_dropdown}`}
        >
          О&nbsp;прожито
        </Link>
      </li>
      <li className={headerStyles.menu__dropdownItem}>
        <Link
          to="/"
          className={`${headerStyles.menu__link} ${headerStyles.menu__link_dropdown}`}
        >
          Как&nbsp;работать?
        </Link>
      </li>
      <li className={headerStyles.menu__dropdownItem}>
        <Link
          to="/"
          className={`${headerStyles.menu__link} ${headerStyles.menu__link_dropdown}`}
        >
          Медиа
        </Link>
      </li>
      <li className={headerStyles.menu__dropdownItem}>
        <Link
          to="/"
          className={`${headerStyles.menu__link} ${headerStyles.menu__link_dropdown}`}
        >
          Новости
        </Link>
      </li>
      <li className={headerStyles.menu__dropdownItem}>
        <Link
          to="/"
          className={`${headerStyles.menu__link} ${headerStyles.menu__link_dropdown}`}
        >
          Спецпроекты
        </Link>
      </li>
    </ul>
  ) : (
    <div className={dropdownStyles}>
      <ul className={headerStyles.menu__mobileLinks}>
        <li className={headerStyles.menu__item}>
          <Link to="/" className={headerStyles.menu__link}>
            О&nbsp;прожито
          </Link>
        </li>
        <li className={headerStyles.menu__item}>
          <Link to="/" className={headerStyles.menu__link}>
            Как&nbsp;работать?
          </Link>
        </li>
        <li className={headerStyles.menu__item}>
          <Link to="/" className={headerStyles.menu__link}>
            Медиа
          </Link>
        </li>
      </ul>
      <ul className={headerStyles.menu__mobileLinks}>
        <li className={headerStyles.menu__item}>
          <Link to="/" className={headerStyles.menu__link}>
            Новости
          </Link>
        </li>
        <li className={headerStyles.menu__item}>
          <Link to="/" className={headerStyles.menu__link}>
            Спецпроекты
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default HeaderDropdown;
