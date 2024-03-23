import css from './movieDetails.module.css';
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {movieDetailsActions} from "../../../store";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {urls} from "../../../constants";
import {IMovie} from "../../../interfaces";
import {useAppLocation} from "../../../hooks";

const MovieDetailsComponent = () => {
    const {state} = useAppLocation<{ movie: IMovie }>();
    // console.log(state);
    // console.log('----------')
    const dispatch = useAppDispatch();
    const {movieDescription} = useAppSelector(state => state.movieDetails)
    const {id} = useParams<string>();
    // console.log('----------')
    //  console.log(movieDescription);
    // console.log('----------')

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
        genre_ids,
        release_date,
        imdb_id,
        homepage
    } = movieDescription;

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
                                    текстГасло
                                </p>
                                <p>
                                    текстрік
                                </p>
                                <p>
                                    текстжанр
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