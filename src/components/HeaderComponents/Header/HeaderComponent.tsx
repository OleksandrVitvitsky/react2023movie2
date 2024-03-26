import css from './HeaderComponent.module.css'


import {useEffect} from "react";

import {SearchForm} from "../Search";
import {genreActions} from "../../../store";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {ThemeToggle} from "../ThemeChanger";
import {AuthorizationContainer} from "../Auth";



const Header = () => {



    return (
        <div className={css.header}>
            <div className={css.headerFlexLeftContainer}>
            <a href="/" className={css.logo}><span>UA</span>-Movies</a>
                <SearchForm/>
            </div>
            <div className={css.headerFlexRightContainer}>
                <ThemeToggle/>
                <AuthorizationContainer/>
           </div>
        </div>
    );
};

export {Header};