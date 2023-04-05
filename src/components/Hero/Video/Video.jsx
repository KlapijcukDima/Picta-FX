import css from './Video.module.css';

export const Video = ( video ) => {
    return(
        <div className={css.video__block}>
        <iframe width="1000" height="610" src="https://www.youtube.com/embed/SSo_EIwHSd4" title="How does a blockchain work - Simply Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         </div>
    )
}