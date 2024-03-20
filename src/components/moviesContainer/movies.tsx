import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useEffect} from "react";
import {movieActions} from "../../store";
import {useSearchParams} from "react-router-dom";
import {Movie} from "./movie";
import css from './movies.module.css'

const Movies = () => {

    const {results} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    const page: number = +query.get('page');

    useEffect(() => {
        dispatch(movieActions.getAll({page}))
    }, [ page])

    return (
        <div className={css.mainMoviesContainer}>
            {results.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};