import css from './movieDetails.module.css';
import {useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";
import {movieDetailsActions} from "../../../store";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {numberOfStars, urls} from "../../../constants";
import {IMovie} from "../../../interfaces";
import {useAppLocation} from "../../../hooks";
import {getGenresByIDs, getRuntime, globalFunc_getYear} from "../../../hoc/globalFunc";
import {GenreWrapperComponent} from "../../genreWrapperContainer";
import {StarsComponent} from "../starsComponent";

const MovieDetailsComponent = () => {
    const {state} = useAppLocation<{ movie: IMovie }>();
    // const {genres:genresList} = useAppSelector(state => state.genres)
    const dispatch = useAppDispatch();
    const {movieDescription} = useAppSelector(state => state.movieDetails)
    const {id} = useParams<string>();

    useEffect(() => {
            dispatch(movieDetailsActions.getById({id}));
    }, [id, state.movie])

    // console.log("aaaa" ,movieDescription);

    if (!movieDescription || movieDescription.id !== state.movie.id) {
        return <div></div>;
    }

    const {
        title,
        runtime,
        vote_average,
        original_title,
        poster_path,
        overview,
        adult,
        genres,
        release_date,
        imdb_id,
        homepage,
        tagline
    } = movieDescription;
    // console.log('------------')
    // console.log(movieDescription);
    // console.log('------------')
    // const movie_genres = getGenresByIDs (genresList, genre_ids);

    const movie_year_release = +globalFunc_getYear(release_date);
    return (
        <div className={css.mainMovieDetailsContainer}>
            <div className={css.movieDetailsContainer}>
                <div className={css.movieDetailsDepiction}>
                    <div className={css.poster}>
                        <img src={urls.poster.base(poster_path)} alt={title}/>
                    </div>
                    <div className={css.movieDescription}>

                        {/*HEADER*/}
                        <div className={css.movieHeader}>
                            <div className={css.movieTitles}>
                                <h1>
                                    {title}
                                </h1>
                                <h3>
                                    {original_title}
                                </h3>
                            </div>
                            <div className={css.movieImdb_Adult}>
                                <div className={css.movieImdb}>
                                    movieImdb
                                </div>
                                <div className={css.movieAdult}>
                                    Adult
                                </div>
                            </div>
                        </div>
                        {/*///////////////////////////////////////////////*/}
                        <div className={css.movieDescrDetail}>

                            <div className={css.tagline}>
                                <div>
                                    <p>
                                        Гасло:
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        "{tagline}"
                                    </p>
                                </div>
                            </div>

                            <div className={css.year}>
                                <div>
                                    <p>
                                        Рік:
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <NavLink to={'/movies'}
                                                 state={{movie_year_release}}> {globalFunc_getYear(release_date)}</NavLink>
                                    </p>
                                </div>
                            </div>
                            <div className={css.genre}>
                                <div>
                                    <p>
                                        Жанр:
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        {genres.map(genre =>
                                            <NavLink to={'/movies'} state={{genre}}> {<GenreWrapperComponent
                                                key={genre.id}
                                                name={genre.name}/>}</NavLink>
                                        )}
                                    </p>
                                </div>
                            </div>

                            <div className={css.genre}>
                                <div>
                                    <p>
                                        Країна:
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Будуть країни
                                    </p>
                                </div>
                            </div>
                            <div className={css.homepage}>
                                <div>
                                    <p>
                                        Сайт:
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        {homepage}
                                    </p>
                                </div>
                            </div>
                            <div className={css.runtime}>
                                <div>
                                    <p>
                                        Тривалість:
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        {getRuntime(runtime)}
                                    </p>
                                </div>
                            </div>

                            <div className={(css.casts)}>
                                <div>
                                    <p>
                                        Актори:
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Будуть актори
                                    </p>
                                </div>
                            </div>
                            <div className={(css.stars)}>
                                <div>
                                    <p>
                                        Рейтинг:
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <StarsComponent key={id} rating={vote_average} size={'25'}
                                                                      numberOfStars={numberOfStars}/>
                                    </p>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
                <div className={css.movieOverviewContainer}>
                    низ опис фільму
                </div>
            </div>
        </div>

    )
}

export {MovieDetailsComponent};