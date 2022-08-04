import { FC } from 'react';
import FooterInfo from '../footer-info/footer-info';
import { FooterLinks } from '../footer-links/footer-links';
import footerStyles from './footer.module.css';

export const Footer: FC = () => {

  return (
    <>
      <div/>
      <section className={footerStyles.footer}>
        <FooterLinks />

        <FooterInfo />
      </section>
    </>
  )
}

export default Footer;
