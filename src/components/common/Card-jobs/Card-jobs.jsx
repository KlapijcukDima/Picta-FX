import css from './Card-jobs.module.css';

export const Jobs = ({ jobs }) => {
  return (
    <section>
      <div className={css.jobs}>
        <h2 className={css.jobs__header}>Jobs</h2>
        {jobs.map(({ position, location, workTime }) => (
          <div className={css.jobs__first__container}>
            <h4 className={css.jobs__title}>{position}</h4>
            <div className={css.jobs__second__container}>
              <p className={css.jobs__paragraph}>{location}</p>
              <p className={css.jobs__paragraph}>{workTime}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
