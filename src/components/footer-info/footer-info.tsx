import { FC } from 'react';
import footerInfoStyles from './footer-info.module.css';
import prozhito from '../../images/logo_Prozhito.svg';
import logo_eu_ru from '../../images/logo_eu_ru.svg';
import telegram from '../../images/telegram.svg';
import vk from '../../images/vk.svg';

export const FooterInfo: FC = () => {

  return(
    <section className={footerInfoStyles.info}>
      <div className={footerInfoStyles.logo}>
        <a href="#" target="_blank" className={footerInfoStyles.link}>
        <img
          src={prozhito}
          alt="Прожито"
        />
        </a>
        <a href="https://eusp.org/" target="_blank" className={footerInfoStyles.link}>
        <img
          src={logo_eu_ru}
          alt="Европейский университет в Санкт-Петербурге"
        />
        </a>
      </div>
      <section className={footerInfoStyles.social}>
        <ul className={footerInfoStyles.links}>
          <li className={footerInfoStyles.item}>
            <a href="https://t.me/prozhito" target="_blank" className={footerInfoStyles.link}>
              <img
                src={telegram}
                className={footerInfoStyles.icon}
                alt="telegram"
              /><span className={footerInfoStyles.text}>Телеграм</span></a
            >
          </li>
          <li className={footerInfoStyles.item}>
            <a href="https://vk.com/prozhito" target="_blank" className={footerInfoStyles.link}>
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
        <ul className={footerInfoStyles.links}>
          <li className={footerInfoStyles.item}>
            <a href="#" target="_blank" className={footerInfoStyles.link}>Юридическая информация</a>
          </li>
          <li className={footerInfoStyles.item}>
            <a href="#" target="_blank" className={footerInfoStyles.link}>Политика конфиденциальности</a>
          </li>
        </ul>
      </section>
    </section>

  )
}

export default FooterInfo;
