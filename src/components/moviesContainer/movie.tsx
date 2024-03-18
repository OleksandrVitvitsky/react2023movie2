import {IMovie} from "../../interfaces";
import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";
import {StarsComponent} from "./starsComponent";

import css  from "./movie.module.css"
import {urls} from "../../constants";
import {globfunc_getYear} from "../../hoc/globalFunc";


interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id,adult, genres, popularity, poster_path, title, release_date,original_title,vote_average} = movie;
    console.log(movie);

    const navigate = useNavigate();

    const languageEnTitle = true;

    return (
        <div className={css.movieCard} onClick={() => navigate('/movies/' + id.toString(), {state: {movie}})}>
            {/*<img src={urls.poster.base(poster_path)} alt={title}/>*/}
            <div className={css.poster}><img src={urls.poster.base(poster_path)} alt={title}/>
            <div className={css.details}>
                <h1>{title}</h1>
                <h2>{globfunc_getYear(release_date)} • {adult?`NC-17`:`PG`} • </h2>
                <div className={css.rating}>
                    <StarsComponent key={id} rating={vote_average} size={'10'}/>
                    {/*<i className={fas fa-star}></i>*/}
                    {/*<i className="fas fa-star"></i>*/}
                    {/*<i className="fas fa-star"></i>*/}
                    {/*<i className="fas fa-star"></i>*/}
                    {/*<i className="far fa-star"></i>*/}
                    <span>{(+vote_average).toFixed(1).toString()} / 10</span>
                </div>
                <div className={css.tags}>
                    <span className={css.tag}>Italian</span>
                    <span className={css.tag}>Drama</span>
                    <span className={css.tag}>Indie</span>
                </div>
                <p className={css.desc}>
                    Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for
                    meaning.
                </p>
                {/*<div className={css.cast}>*/}
                {/*    <h3>Cast</h3>*/}
                {/*    <ul>*/}
                {/*        <li><img src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg" alt="Marco Andrews"*/}
                {/*                 title="Marco Andrews"/></li>*/}
                {/*        <li><img src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg" alt="Rebecca Floyd"*/}
                {/*                 title="Rebecca Floyd"/></li>*/}
                {/*        <li><img src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg*/}
                {/*                            " alt="Antonio Herrera" title="Antonio Herrera"/></li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </div>
            </div>
            <div className={css.movieTitleContainer}>
                {/*переробити потім вивід заголовку*/}
                <StarsComponent key={id} rating={vote_average} size={'17'}/>
                {languageEnTitle && <div className={css.movieTitle}>{title}</div>}
                <div className={`${css.movieTitle} ${css.movieTitleOrig}`}>{original_title}</div>

            </div>


            {/*<div>*/}
            {/*    <p>{release_date}</p>*/}
            {/*    <p>{genreNamesString}</p>*/}
            {/*</div>*/}
        </div>
    );
};

export {Movie};