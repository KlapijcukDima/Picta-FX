import css from '../../Footer/Footer.module.css';

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
            <svg className={css.footer__svg__color} width="28" height="28">
              <use
                href="./src/img/symbol-defs.svg#icon-Twitter"
                alt="facebook"
              ></use>
            </svg>
          </a>
        </li>
        <li className={css.footer__item}>
          <a
            className={css.footer__svg}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg width="28" height="28">
              <use href=""></use>
            </svg>
          </a>
        </li>
        <li className={css.footer__item}>
          <a
            className={css.footer__svg}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg width="28" height="28">
              <use href=""></use>
            </svg>
          </a>
        </li>
        <li className={css.footer__item}>
          <a
            className={css.footer__svg}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg width="28" height="28">
              <use href=""></use>
            </svg>
          </a>
        </li>
      </ul>

      <ul className={css.footer__list__social}>
        <li>
          <a className={css.footer__link__copyright} href="/">Авторське право FLP 2023</a>
        </li>
      </ul>
    </div>
  );
};
