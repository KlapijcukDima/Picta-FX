import css from './Footer.module.css';
import { About } from './About/About.jsx';
import { Portfolio } from './Portfolio/Portfolio.jsx';
import { Consultancy } from './Consultancy/Consultancy.jsx';
import { ContactUs } from './ContactUs/ContactUs.jsx';
import { SocialMedia } from './SocialMedia/SocialMedia.jsx';

export const Footer = footer => {
  return (
    <footer className={css.footer}>
      <section>
        <div className={css.footer__container}>
          <div className={css.footer__container__information}>
            <About />
            <Portfolio />
            <Consultancy />
            <ContactUs />
          </div>

          <div>
            <SocialMedia />
          </div>
        </div>
      </section>
    </footer>
  );
};
