import css from './Man.module.css';


export const Man = ( {name, quote, image, position} ) => {
    return(
        <section className={css.block}>
        <div className={css.man__img_block}>

            <img className={css.man__img} src={image} alt={name}/>

        </div>

        <div className={css.man__right_block}>
            <img src="https://prommoscow.info/local/templates/main/img/publication/quotes-big.svg" alt="" width='140' height='144'/>
            <p className={css.man__quote}>{quote}</p>
            <h2 className={css.man__name}>{name}</h2>
            <p className={css.man__position}>{position}</p>
        </div>
        </section>

    )
}