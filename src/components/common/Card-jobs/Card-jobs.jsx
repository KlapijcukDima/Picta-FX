import css from './Card-jobs.module.css';
import button from '../Button/Button.module.css';
import { ReactComponent as Location } from '../../../img/location.svg'
import { ReactComponent as Time } from '../../../img/FullTime.svg';

export const Jobs = ({ jobs }) => {
  return (
    <section>
      <div className={css.jobs}>
        <h2 className={css.jobs__header}>Вакансії</h2>
        {jobs.map(({ position, location, workTime}) => (
          <div className={css.jobs__first__container}>
            <h4 className={css.jobs__title}>{position}</h4>
            <div className={css.jobs__second__container}>
              <Location /><p className={css.jobs__paragraph}>{location}</p>
              <Time /><p className={css.jobs__paragraph}>{workTime}</p>
            </div>
          </div>
        ))}
        <button className={button.button}>Переглянути все</button>
      </div>
    </section>
  );
};
