import css from './Card-jobs.module.css';
import button from '../Button/Button.module.css';
import { ReactComponent as Location } from '../../../img/location.svg';
import { ReactComponent as Time } from '../../../img/FullTime.svg';
import { ReactComponent as Arrow } from '../../../img/arrow.svg';

export const Jobs = ({ jobs }) => {
  return (
    <section>
      <div className={css.jobs}>
        <h2 className={css.jobs__header}>Вакансії</h2>
        {jobs.map(({ position, location, workTime }) => (
          <div className={css.jobs__first__container}>
            <h4 className={css.jobs__title}>{position}</h4>
            <div className={css.jobs__second__container}>
              <div className={css.jobs__third__container}>
                <Location className={css.jobs__svg__location} />
                <p className={css.jobs__paragraph}>{location}</p>
                <Time className={css.jobs__svg__time} />
                <p className={css.jobs__paragraph}>{workTime}</p>
              </div>

              <div className={css.jobs__third__container}>
                <button className={css.jobs__button__arrow}>
                  <Arrow className={css.jobs__button__svg} />
                </button>
              </div>
            </div>
          </div>
        ))}
        <button className={[button.button, css['button__hidden']].join(' ')}>Переглянути все</button>
      </div>
    </section>
  );
};
