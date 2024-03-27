import {useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";
import Badge from '@mui/material/Badge';

import {
    castsActions,
    countriesActions,
    movieDetailsActions,
    moviesPaginationActions, movieVideoActions
} from "../../../store";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {imdbURL, numberOfStars, urls, youtubeURL} from "../../../constants";
import {IMovie} from "../../../interfaces";
import {useAppLocation} from "../../../hooks";
import {findCountryByICO, getRuntime, globalFunc_getYear} from "../../../hoc/globalFunc";
import {GenreComponent} from "../../GenreContainer";
import {StarsComponent} from "../StarsComponent";
import {CastComponent} from "./CastsComponent";

import css from './MovieDetailsComponent.module.css';

const MovieDetailsComponent = () => {
    const dispatch = useAppDispatch();
    const {state} = useAppLocation<{ movie: IMovie }>();
    const {movieDescription} = useAppSelector(state => state.movieDetails)
    const {countries: countriesState} = useAppSelector(state => state.countries)
    const {cast: casts} = useAppSelector(state => state.casts);
    const {results: videos} = useAppSelector(state => state.movieVideos);
    const trailers = videos.filter(item => item.type.toLowerCase() === 'trailer');
    const {id} = useParams<string>();

    useEffect(() => {
        dispatch(movieDetailsActions.getById({id}));
        dispatch(castsActions.getByMovieId({id}));
        dispatch(countriesActions.getAll());
        dispatch(movieVideoActions.getVideoByMovieId({id}));
    }, [id,dispatch])

    if (!movieDescription || !countriesState || (state?.movie && movieDescription.id !== state.movie.id)) {
        return <div></div>;
    }

    const {
        title,
        runtime,
        vote_average,
        original_title,
        poster_path,
        overview,
        genres,
        release_date,
        imdb_id,
        homepage,
        tagline,
        production_countries
    } = movieDescription;

    const handleNavLinkGenreClick = () => {
        dispatch(moviesPaginationActions.setCurrentPage(1))
    }


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
                                <div>
                                    <NavLink className={css.movieImdb} to={`${imdbURL}${imdb_id}`}
                                       target={'_blank'}>IMDB {(+vote_average).toFixed(1).toString()}</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className={css.movieDescrDetail}>
                            {tagline &&
                                (
                                    <div>
                                        <div>
                                            <p>
                                                Гасло:
                                            </p>
                                        </div>
                                        <div className={css.tagline}>
                                            <p>
                                                {tagline ? `"${tagline}"` : ``}
                                            </p>
                                        </div>
                                    </div>
                                )
                            }

                            <div>
                                <div>
                                    <p>
                                        Рік:
                                    </p>
                                </div>
                                <div className={css.year}>
                                    <p>
                                        {globalFunc_getYear(release_date)}

                                        {/*фільтр не працює належним чином. Api віддає якусь фігню*/}
                                        {/*<NavLink to={'/movies'}*/}
                                        {/*         state={{movie_year_release}}> {globalFunc_getYear(release_date)}</NavLink>*/}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>
                                        Жанр:
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        {genres.map(genre =>

                                            <Badge badgeContent={genre.id} color="warning" key={genre.id}
                                                   sx={{
                                                       fontSize: '1.2rem',
                                                       padding: '5px',
                                                       margin: '7px'
                                                   }}
                                            >
                                                <NavLink to={'/movies'} className={css.genre}
                                                         onClick={handleNavLinkGenreClick}
                                                         state={{genreSearch: genre}}> {
                                                    <GenreComponent
                                                        key={genre.id}
                                                        name={genre.name}/>}
                                                </NavLink>
                                            </Badge>
                                        )}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <p>
                                        Країна:
                                    </p>
                                </div>
                                <div className={css.country}>
                                    <p>
                                        {production_countries.map(country =>
                                            <span>
                                                    {findCountryByICO(countriesState, country.iso_3166_1).native_name}
                                                </span>
                                        )}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <p>
                                        Сайт:
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <NavLink to={homepage} target='_blank' className={css.homepage}>{homepage} </NavLink>
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
                                        <span>{getRuntime(runtime)}</span>
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className={css.castsTitle}>
                                    <p>
                                        Актори:
                                    </p>
                                </div>
                                <div className={css.castsEvents}>
                                    {casts.slice(0, 7).map(cast => <CastComponent key={id} cast={cast}/>)}
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
                    {overview}
                </div>
                {videos.length > 0 && (
                    <div className={css.videoContainer}>
                        {/*<iframe width="1280" height="720" src={youtubeURL + videos[0].key}*/}

                        <iframe width="1024" height="600" src={youtubeURL + trailers[0].key}
                                title={trailers[0].name}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                )}
            </div>
        </div>
    )
}

export {MovieDetailsComponent};