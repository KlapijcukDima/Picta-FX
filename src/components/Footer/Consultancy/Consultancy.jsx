import css from '../../Footer/Footer.module.css';

export const Consultancy = () => {
  return (
    <div>
      <h4 className={css.footer__title}>Консультування</h4>
      <ul className={css.footer__list}>
        <li className={css.footer__item}>
          <a
            className={css.footer__link}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Маркетинг
          </a>
        </li>
        <li className={css.footer__item}>
          <a
            className={css.footer__link}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Соціальні медіа
          </a>
        </li>
        <li className={css.footer__item}>
          <a
            className={css.footer__link}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Управління
          </a>
        </li>
        <li className={css.footer__item}>
          <a
            className={css.footer__link}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            SEO
          </a>
        </li>
        <li className={css.footer__item}>
          <a
            className={css.footer__link}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Індивідуальні плани
          </a>
        </li>
      </ul>
    </div>
  );
};
