import css from './Man.module.css';

export const Man = ({ name, quote, image, position }) => {
  return (
    <section className={css.block}>
      <div className={css.man__img_block}>
        <img className={css.man__img} src={image} alt={name} />
      </div>

      <div className={css.man__right_block}>
        <img
          src="https://uploads-ssl.webflow.com/5f58ebbcd796a811d1406856/5f63afe75619819157b544ca_Asset%206.png"
          alt=""
          width="140"
          height="144"
        />
        <p className={css.man__quote}>{quote}</p>
        <h2 className={css.man__name}>{name}</h2>
        <p className={css.man__position}>{position}</p>
      </div>
    </section>
  );
};
