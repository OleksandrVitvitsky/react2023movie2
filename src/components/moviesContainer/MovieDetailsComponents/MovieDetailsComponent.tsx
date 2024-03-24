import css from './movieDetails.module.css';
import {useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";
import {movieDetailsActions} from "../../../store";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {urls} from "../../../constants";
import {IMovie} from "../../../interfaces";
import {useAppLocation} from "../../../hooks";
import {getGenresByIDs, globalFunc_getYear} from "../../../hoc/globalFunc";
import {GenreWrapperComponent} from "../../genreWrapperContainer";

const MovieDetailsComponent = () => {
    const {state} = useAppLocation<{ movie: IMovie }>();
    // const {genres:genresList} = useAppSelector(state => state.genres)
    const dispatch = useAppDispatch();
    const {movieDescription} = useAppSelector(state => state.movieDetails)
    const {id} = useParams<string>();

    useEffect(() => {
        if (!movieDescription) {
            dispatch(movieDetailsActions.getById({id}));
        }
    }, [id, movieDescription])

    if (!movieDescription) {
        return <div></div>;
    }

    const {
        title,
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
                            <div className={css.movieDescKeys}>

                                <p>
                                    Гасло
                                </p>
                                <p>
                                    рік
                                </p>
                                <p>
                                    жанр
                                </p>
                                <p>
                                    краъна
                                </p>
                                <p>
                                    дом сторынка
                                </p>
                                <p>
                                    режисер
                                </p>
                                <p>
                                    актори
                                </p>
                                <p>
                                    Рейтинг
                                </p>

                            </div>
                            <div className={css.movieDescValues}>
                                <p>
                                    {tagline}
                                </p>
                                <p>
                                    <NavLink to={'/movies'} state={{movie_year_release}}> {globalFunc_getYear(release_date)}</NavLink>
                                </p>
                                <p>
                                    {/*{genres.map(value =>*/}
                                    {/*    <NavLink to={'movies'}> {}</NavLink>*/}
                                    {/*)}*/}
                                </p>
                                <p>
                                    тексткраъна
                                </p>
                                <p>
                                    текстДомСторынка
                                </p>
                                <p>
                                    текстрежисер
                                </p>
                                <p>
                                    текстактори
                                </p>
                                <p>
                                    Зырочки
                                </p>
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