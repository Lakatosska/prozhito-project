import { FC } from 'react';
import footerLinksStyles from './footer-links.module.css';

export const FooterLinks: FC = () => {

  return (
    <section className={footerLinksStyles.container}>
      <ul className={footerLinksStyles.links}>
        <li className={footerLinksStyles.item}>
          <a href="#" className={footerLinksStyles.link}>О команде</a>
        </li>
        <li className={footerLinksStyles.item}>
          <a href="#" className={footerLinksStyles.link}>Благодарности</a>
        </li>
        <li className={footerLinksStyles.item}>
          <a href="#" className={footerLinksStyles.link}>Партнёры</a>
        </li>
        <li className={footerLinksStyles.item}>
          <a href="#" className={footerLinksStyles.link}>Инструкции</a>
        </li>
      </ul>
    </section>
  )
}

export default FooterLinks;
