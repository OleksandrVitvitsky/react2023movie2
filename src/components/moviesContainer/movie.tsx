import {IGenre, IMovie} from "../../interfaces";
import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";
import {StarsComponent} from "./starsComponent";

import css  from "./movie.module.css"
import {numberOfStars, urls} from "../../constants";
import {getGenresByIDs, globalFunc_getYear} from "../../hoc/globalFunc";
import {useAppSelector} from "../../hooks/useAppSelector";
import {GenreWrapperComponent} from "../genreWrapperContainer";


interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {

    const languageEnTitle = true;
    const navigate = useNavigate();
    const {id,adult, genre_ids,  poster_path,overview, title, release_date,original_title,vote_average} = movie;
    const {genres:genresList} = useAppSelector(state => state.genres)
    const genresForWrapper = getGenresByIDs (genresList, genre_ids.slice(0, 3));
    return (
        <div className={css.movieCard} onClick={() => navigate('/movies/' + id.toString(), {state: {movie}})}>
            {/*<img src={urls.poster.base(poster_path)} alt={title}/>*/}
            <div className={css.poster}><img src={urls.poster.base(poster_path)} alt={title}/>
                <div className={css.details}>
                    <h1>{title}</h1>
                    <h2>{globalFunc_getYear(release_date)} • {adult ? `NC-17` : `PG`} • </h2>
                    <div className={css.rating}>
                        <StarsComponent key={id} rating={vote_average} size={'10'} numberOfStars={numberOfStars}/>
                        <span>{(+vote_average).toFixed(1).toString()} /
                            {numberOfStars}</span>
                    </div>
                    <div className={css.genres}>
                        {genresForWrapper.map(value => <GenreWrapperComponent key={value.id} name={value.name}/>)}
                    </div>
                    <p className={css.desc}>
                        {overview}
                    </p>

                </div>
            </div>
            <div className={css.movieTitleContainer}>
                {/*переробити потім вивід заголовку*/}
                <StarsComponent key={id} rating={vote_average} size={'17'} numberOfStars={numberOfStars}/>
                {languageEnTitle && <div className={css.movieTitle}>{title}</div>}
                <div className={`${css.movieTitle} ${css.movieTitleOrig}`}>{original_title}</div>

            </div>

        </div>
    );
};

export {Movie};