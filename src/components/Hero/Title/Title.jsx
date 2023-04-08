import css from './Title.module.css';

export const Title = title => {
  return (
    <section>
    <div className={css.hero__block}>
      <h1 className={css.hero__title}>
        Приєднуйтесь до нашої Crypto мережі сьогодні та торгуйте своїм шляхом!
      </h1>
      <p className={css.hero__text}>
        Для сучасних трейдерів Forex це означає, що їм більше не потрібно
        відчувати себе позбавленими Forex через короткі залишки або відсутність
        доступу до світового валютного ринку.
      </p>
    </div>
    </section>
  );
};
