import css from '../../Footer/Footer.module.css';

export const ContactUs = () => {
  return (
    <div className={css.footer}>
      <h4 className={css.footer__title}>Contact us</h4>
      <ul className={css.footer__list}>
        <li className={css.footer__item}>
          <a
            className={css.footer__link}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Contacts
          </a>
        </li>
        <li className={css.footer__item}>
          <a
            className={css.footer__link}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Team members
          </a>
        </li>
        <li className={css.footer__item}>
          <a
            className={css.footer__link}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            History
          </a>
        </li>
        <li className={css.footer__item}>
          <a
             className={[css.footer__link, css.footer__link__yellow].join(' ')}
            href="/"
            target="_blank"
            rel="noreferrer noopener"
          >
            info@pictaFX.com
          </a>
        </li>
      </ul>
    </div>
  );
};
