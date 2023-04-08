import css from './Button.module.css';

export const Button = () => {
  return (
    <div className={css.button__block}>
      <button className={css.button}>Переглянути демо</button>
    </div>
  );
};
