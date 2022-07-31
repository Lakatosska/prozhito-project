import headerNavStyles from "./headerNav.module.css";
import { Link } from "react-router-dom";
import React, { FunctionComponent, useState } from "react";
import HeaderDropdown from "../headerDropdown/headerDropdown";

interface IHeaderNavProps {
  desktop: boolean;
  open: boolean;
}
const HeaderNav: FunctionComponent<IHeaderNavProps> = ({ desktop, open }) => {
  const [dropDownVisible, setDropDownVisible] = useState(false);

  const style = desktop
    ? headerNavStyles.menu__desktop
    : open
      ? headerNavStyles.menu__mobile
      : `${headerNavStyles.menu__mobile} ${headerNavStyles.menu__mobile_open}`;

  return (
    <nav
      className={
        desktop
          ? ""
          : open
            ? `${headerNavStyles.menu__mobileContainer} ${headerNavStyles.menu__mobileContainer_open}`
            : headerNavStyles.menu__mobileContainer
      }
    >
      <ul className={style}>
        <li className={headerNavStyles.menu__item}>
          <Link
            to="https://prozhito.org/page/archive"
            className={headerNavStyles.menu__link}
          >
            Архив
          </Link>
        </li>
        <li className={headerNavStyles.menu__item}>
          <Link
            to="https://prozhito.org/persons"
            className={headerNavStyles.menu__link}
          >
            Корпус
          </Link>
        </li>
        <li
          className={headerNavStyles.menu__item}
          onMouseEnter={() => setDropDownVisible(true)}
          onMouseLeave={() => setDropDownVisible(false)}
        >
          <Link to="/" className={headerNavStyles.menu__link}>
            О&nbsp;проекте
          </Link>
        </li>
        <HeaderDropdown visible={dropDownVisible} desktop={desktop} setDropDownVisible={setDropDownVisible } />
      </ul>
    </nav>
  );
};

export default HeaderNav;
