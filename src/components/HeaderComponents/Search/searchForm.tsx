import css from './searchForm.module.css'
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppSelector} from "../../../hooks/useAppSelector";
import { useState } from 'react';
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {moviesActions, moviesPaginationActions} from "../../../store";
import {useNavigate} from "react-router-dom";


interface ISearch {
    querySearch: string

}
const SearchForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {currentPage} = useAppSelector(state => state.moviesPagination)
    const {reset, register, handleSubmit} = useForm<ISearch>();
    const [, setError] = useState<boolean>();
    const response = useAppSelector(state => state.movies)

    const onSubmit: SubmitHandler<ISearch> =  (searchText) => {
        const {querySearch} = searchText;
        if (querySearch === "") {
            reset()
            return
        }
        //
        try {
            dispatch(moviesPaginationActions.setCurrentPage(1));
            // await dispatch(moviesActions.search({currentPage, searchText: querySearch}));
            // dispatch(moviesActions.setResponce(response));
            navigate('movies', {state: {searchText:querySearch}})
        } catch (e) {
            setError(true)
        }
        reset();

    }



    return (
        <form className={css.group} onSubmit={handleSubmit(onSubmit)}>
            <svg className={css.icon} aria-hidden="true" viewBox="0 0 24 24">
                <g>
                    <path
                        d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
            </svg>
            <input placeholder="Пошук..." type="search" className={css.input} {...register('querySearch')}
                   onSubmit={handleSubmit(onSubmit)}/>

        </form>


    )
};

export {SearchForm};