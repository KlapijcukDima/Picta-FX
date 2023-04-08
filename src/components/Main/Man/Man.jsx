import { ReactComponent as Logo } from '../../../img/quotes.svg';
import css from './Man.module.css';
import PropTypes from 'prop-types'

export const Man = ({ name, quote, image, position }) => {
  return (
    <section className={css.block}>
      <div className={css.man__img_block}>
        <img className={css.man__img} src={image} alt={name} />
      </div>

      <div className={css.man__right_block}>
        <Logo className={css.quote} />
        <p className={css.man__quote}>{quote}</p>
        <h2 className={css.man__name}>{name}</h2>
        <p className={css.man__position}>{position}</p>
      </div>
    </section>
  );
};

Man.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};