import css from './Card-service.module.css';
import { ReactComponent as Finances } from '../../../img/Finances.svg';
import { ReactComponent as Crypto } from '../../../img/Crypto.svg';
import { ReactComponent as Privacy } from '../../../img/Privacy.svg';
import { ReactComponent as Increaseed } from '../../../img/Increased.svg';
import { ReactComponent as Multiple } from '../../../img/Multiple.svg';
import { ReactComponent as Money } from '../../../img/Money.svg';

export const Card = ({ cards }) => {
  return (
    <section className={css.section__card_service}>
      <div className={css.service__title_block}>
        <h2 className={css.service__title}>
          Послуги які ми пропонуємо
        </h2>
      </div>

      <div className={css.service__card_block}>
        <ul className={css.service__card_list}>
          {cards.map(({ description, service }, index) => (
            <div className={css.service__card} key={index}>
              {index % 6 === 0 ? (
                <Finances />
              ) : index % 6 === 1 ? (
                <Crypto />
              ) : index % 6 === 2 ? (
                <Privacy />
              ) : index % 6 === 3 ? (
                <Increaseed />
              ) : index % 6 === 4 ? (
                <Multiple />
              ) : (
                <Money />
              )}
              <h3 className={css.service__card_title}>{service}</h3>
              <p className={css.service__card_text}>{description}</p>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};
