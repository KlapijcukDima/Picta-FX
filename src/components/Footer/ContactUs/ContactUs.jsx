import css from '../../Footer/Footer.module.css';

export const ContactUs = () => {
  return (
    <div>
      <h4 className={css.footer__title}>Зв'яжіться з нами</h4>
      <ul className={css.footer__list}>
        <li className={css.footer__item}>
          <a
            className={css.footer__link}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Контакти
          </a>
        </li>
        <li className={css.footer__item}>
          <a
            className={css.footer__link}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Члени команди
          </a>
        </li>
        <li className={css.footer__item}>
          <a
            className={css.footer__link}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Історія
          </a>
        </li>
        <li className={css.footer__item}>
          <a
             className={[css.footer__link, css.footer__link__yellow].join(' ')}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            info.FLP@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};
