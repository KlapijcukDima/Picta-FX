import css from '../../Footer/Footer.module.css';

export const About = () => {
  return (
    <div >
      <h4 className={css.footer__title}>Про нас</h4>
      <ul className={css.footer__list}>
        <li className={css.footer__item}>
          <a
            className={css.footer__link}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Про нас
          </a>
        </li>
        <li className={css.footer__item}>
          <a
            className={css.footer__link}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Послуги
          </a>
        </li>
        <li className={css.footer__item}>
          <a
            className={css.footer__link}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Особливості
          </a>
        </li>
        <li className={css.footer__item}>
          <a
            className={css.footer__link}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Команда
          </a>
        </li>
      </ul>
    </div>
  );
};
