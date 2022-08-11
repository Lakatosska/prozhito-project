import { FC } from 'react';
import footerInfoStyles from './footer-info.module.css';
import logo_eu_ru from '../../images/logo_eu_ru.svg';
import logo from "../../images/logo_prozhito.svg";
import logo_mobile from "../../images/logo_prozhito_mobile.svg"
import telegram from '../../images/telegram.svg';
import vk from '../../images/vk.svg';
import useMediaQuery from "../../hooks/useMediaQuery";


export const FooterInfo: FC = () => {
  const desktop = useMediaQuery('(min-width: 768px)');

  return(
    <section className={footerInfoStyles.info}>
      <div className={footerInfoStyles.logo}>
        <a href="https://prozhito.org/" target="_blank" rel="noopener noreferrer" className={footerInfoStyles.link}>
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
      <section className={footerInfoStyles.social}>
        <ul className={footerInfoStyles.links}>
          <li className={footerInfoStyles.item}>
            <a href="https://t.me/prozhito" target="_blank" rel="noopener noreferrer" className={footerInfoStyles.link}>
              <img
                src={telegram}
                className={footerInfoStyles.icon}
                alt="telegram"
              /><span className={footerInfoStyles.text}>Телеграм</span></a
            >
          </li>
          <li className={footerInfoStyles.item}>
            <a href="https://vk.com/prozhito" target="_blank" rel="noopener noreferrer" className={footerInfoStyles.link}>
              <img
                src={vk}
                className={footerInfoStyles.icon}
                alt="vk"
              /><span className={footerInfoStyles.text}>Вконтакте</span></a
            >
          </li>
        </ul>
      </section>

      <section className={footerInfoStyles.legal}>
        <ul className={footerInfoStyles.legals}>
          <li className={footerInfoStyles.item}>
            <button className={footerInfoStyles.link}>Юридическая информация</button>
          </li>
          <li className={footerInfoStyles.item}>
            <button className={footerInfoStyles.link}>Политика конфиденциальности</button>
          </li>
        </ul>
      </section>
    </section>

  )
}

export default FooterInfo;
