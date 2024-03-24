import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useEffect} from "react";
import {moviesActions} from "../../store";
import {Movie} from "./movie";
import css from './movies.module.css'
import {useAppLocation} from "../../hooks";

const Movies = () => {
    const dispatch = useAppDispatch();
    const {results: movies} = useAppSelector(state => state.movies)
    const {currentPage} = useAppSelector(state => state.moviesPagination)
    const {state} = useAppLocation<{ movie_year_release: number }>();
    const year:number = state?.movie_year_release;
    // const [query, setQuery] = useSearchParams({page: '1'});
    //
    // const page: number = +query.get('page');

    useEffect(() => {
        if (year) {
            dispatch(moviesActions.getByYear({year}))
        }else{
            dispatch(moviesActions.getAll({currentPage}))
        }
    }, [currentPage, state])
    // console.log(movies);
    return (
        <div className={css.mainMoviesContainer}>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};