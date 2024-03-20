import css from './header.module.css'
import {SearchForm} from "./searchForm";
import {ThemeToggle} from "./ThemeToggle";
import {ButtonAuthorization} from "./ButtonAuthorization";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useEffect} from "react";
import {genreActions} from "../../store";



const Header = () => {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [])

    return (
        <div className={css.header}>
            <div className={css.headerFlexLeftContainer}>
            <a href="/" className={css.logo}><span>UA</span>Movies</a>
            <SearchForm/>
            </div>
            <div className={css.headerFlexRightContainer}>
            <ThemeToggle/>
            <ButtonAuthorization/>
           </div>
        </div>



    );
};

export {Header};