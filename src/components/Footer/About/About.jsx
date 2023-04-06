import css from '../../Footer/Footer.module.css';

export const About = () => {
  return (
    <div className={css.footer}>
      <h4 className={css.footer__title}>About</h4>
      <ul className={css.footer__list}>
        <li className={css.footer__item}>
          <a
            className={css.footer__link}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            About
          </a>
        </li>
        <li className={css.footer__item}>
          <a
            className={css.footer__link}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Services
          </a>
        </li>
        <li className={css.footer__item}>
          <a
            className={css.footer__link}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Features
          </a>
        </li>
        <li className={css.footer__item}>
          <a
            className={css.footer__link}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Team
          </a>
        </li>
      </ul>
    </div>
  );
};
