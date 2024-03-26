import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useEffect} from "react";
import {dataLoadingActions, moviesActions} from "../../store";
import {Movie} from "./movie";
import css from './movies.module.css'
import {useAppLocation} from "../../hooks";
import {IGenre} from "../../interfaces";
import {useParams} from "react-router-dom";

const Movies = () => {
    const dispatch = useAppDispatch();
    const {results: movies} = useAppSelector(state => state.movies)
    const {dataLoaded} = useAppSelector(state => state.dataLoadingReducer)

    const {currentPage} = useAppSelector(state => state.moviesPagination)
    const {state: searchByGenreState} = useAppLocation<{ genreSearch: IGenre }>();
    const {state: searchByNameState} = useAppLocation<{ searchText: string }>();

    const genre: IGenre = searchByGenreState?.genreSearch;
    const searchText: string = searchByNameState?.searchText;

    useEffect(() => {
        if (genre) {
            dispatch(moviesActions.getByGenre({currentPage, genre}))
                .then(() => dispatch(dataLoadingActions.setDataLoaded(true)))
        } else if (searchText) {
            dispatch(moviesActions.search({currentPage, searchText}))
               .then(() => dispatch(dataLoadingActions.setDataLoaded(true)))
        } else {
            dispatch(moviesActions.getAll({currentPage}))
                .then(() => dispatch(dataLoadingActions.setDataLoaded(true)))
        }
    }, [currentPage, genre, searchText])

    return (
        <>
            {dataLoaded && (
                <div className={css.mainMoviesContainer}>
                    {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
                </div>
            )}
        </>
    );
};

export {Movies};