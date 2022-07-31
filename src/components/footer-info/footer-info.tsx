import { FC } from 'react';
import footerInfoStyles from './footer-info.module.css';
import telegram from '../../images/telegram.svg';
import vk from '../../images/vk.svg';

export const FooterInfo: FC = () => {

  return(
    <section className={footerInfoStyles.info}>
      <div className={footerInfoStyles.logo}></div>
      <section className={footerInfoStyles.social}>
        <ul className={footerInfoStyles.links}>
          <li className={footerInfoStyles.item}>
            <a href="https://t.me/prozhito" className={footerInfoStyles.link}>
              <img
                src={telegram}
                className={footerInfoStyles.icon}
                alt="telegram"
              /><span className={footerInfoStyles.text}>Телеграм</span></a
            >
          </li>
          <li className={footerInfoStyles.item}>
            <a href="https://vk.com/prozhito" className={footerInfoStyles.link}>
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
            <a href="#" className={footerInfoStyles.link}>Юридическая информация</a>
          </li>
          <li className={footerInfoStyles.item}>
            <a href="#" className={footerInfoStyles.link}>Политика конфиденциальности</a>
          </li>
        </ul>
      </section>
    </section>

  )
}

export default FooterInfo;
