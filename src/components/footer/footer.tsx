import { FC } from 'react';
import { FooterLinks } from '../footer-links/footer-links';
import footerStyles from './footer.module.css';

export const Footer: FC = () => {

  return (
    <section className={footerStyles.footer}>
      <FooterLinks />

      {/*
      <footer class="footer">

        <div class="footer__logo-section">
          <div class="logo logo_place_footer"></div>
          <nav class="footer__social-networks">
            <ul class="footer__links-list">
              <li class="footer__list-item">
                <a href="https://t.me/prozhito" class="footer__link">
                  <img
                    src="images/telegram.svg"
                    class="footer__social-icon"
                    alt="telegram"
                  /><span class="footer__link-text">Телеграм</span></a
                >
              </li>
              <li class="footer__list-item">
                <a href="https://vk.com/prozhito" class="footer__link">
                  <img
                    src="images/vk.svg"
                    class="footer__social-icon"
                    alt="vk"
                  /><span class="footer__link-text">Вконтакте</span></a
                >
              </li>
            </ul>
          </nav>
          <nav class="footer__legal-info">
            <ul class="footer__links-list">
              <li class="footer__list-item">
                <a href="#" class="footer__link">Юридическая информация</a>
              </li>
              <li class="footer__list-item">
                <a href="#" class="footer__link">Политика конфиденциальности</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
      */}

    </section>
  )
}

export default Footer;
