import css from '../../Footer/Footer.module.css';
import { ReactComponent as Facebook } from '../../../img/facebook.svg';
import { ReactComponent as Twitter } from '../../../img/Twitter.svg';
import { ReactComponent as Linkedin } from '../../../img/linkedIn.svg';
import { ReactComponent as Pinterest } from '../../../img/pinterest.svg';

export const SocialMedia = () => {
  return (
    <div className={css.footer__list__container}>
      <ul className={css.footer__list__social}>
        <li className={css.footer__item}>
          <a
            className={css.footer__svg}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Facebook />
          </a>
        </li>
        <li className={css.footer__item}>
          <a
            className={css.footer__svg}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Twitter />
          </a>
        </li>
        <li className={css.footer__item}>
          <a
            className={css.footer__svg}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Linkedin />
          </a>
        </li>
        <li className={css.footer__item}>
          <a
            className={css.footer__svg}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Pinterest />
          </a>
        </li>
      </ul>

      <ul className={css.footer__list__social}>
        <li>
          <a className={css.footer__link__copyright} href="/">
            Авторське право FLP 2023
          </a>
        </li>
      </ul>
    </div>
  );
};
