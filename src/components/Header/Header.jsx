import css from './Header.module.css';
import button from '../common/Button/Button.module.css';
import { ReactComponent as Menu } from '../../img/menu.svg';

export const Header = header => {
  return (
    <section>
      <div className={css.header__container}>
        <div className={css.header__container__first}>
          <a className={css.header__logo} href="/">
            PictaFX
          </a>
        </div>

        <div className={css.header__container__second}>
          <ul className={css.header__list}>
            <li>
              <a className={css.header__link} href="/">
                Про нас
              </a>
            </li>
            <li>
              <a className={css.header__link} href="/">
                Особливості
              </a>
            </li>
            <li>
              <a className={css.header__link} href="/">
                Послуги
              </a>
            </li>
            <li>
              <a className={css.header__link} href="/">
                Ціноутворення
              </a>
            </li>
            <li>
              <a className={css.header__link} href="/">
                Зв'яжіться з нами
              </a>
            </li>
          </ul>
        </div>

        <div className={css.header__container__third}>
          <button className={css.button__login} type="button">
            Логін
          </button>
          <button className={button.button} type="button">
            Зареєструватися
          </button>
        </div>

        <div className={css.header__container__fourth}>
          <button className={css.button__menu} type="button">
            <Menu />
          </button>
        </div>
      </div>
    </section>
  );
};
