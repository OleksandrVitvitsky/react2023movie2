import {useEffect} from "react";

import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {dataLoadingActions, moviesActions} from "../../../store";
import {MovieComponent} from "../MovieComponent";
import {useAppLocation} from "../../../hooks";
import {IGenre} from "../../../interfaces";

import css from './movies.module.css'

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
                    {movies.map(movie => <MovieComponent key={movie.id} movie={movie}/>)}
                </div>
            )}
        </>
    );
};

export {Movies};