import css from './searchForm.module.css'
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppSelector} from "../../../hooks/useAppSelector";


interface ISearch {
    querySearch: string

}
const SearchForm = () => {

    const {reset, register, handleSubmit} = useForm<ISearch>();
    const {darkMode} = useAppSelector(state => state.themeChanger);
    console.log(darkMode);
    const onSubmit: SubmitHandler<ISearch> = async (searchText) => {
        console.log(searchText)
        // if (objSearch.querySearch === "") {
        //     reset()
        //     return
        // }
        //
        // try {
        //     await movieService.search(objSearch.querySearch).then(({data}) => setMovies(data.results))
        // } catch (e) {
        //     setError(true)
        // }
        // reset();

        // }

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