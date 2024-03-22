import css from "./homePage.module.css";
import {Filter, Footer, Header,} from "../components";
import {Outlet} from "react-router-dom";
import {MoviesPage} from "./moviesPage";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {useEffect} from "react";
import {genreActions, movieActions} from "../store";
import {setAttrThemeMode} from "../hoc/globalFunc";
import {useAppSelector} from "../hooks/useAppSelector";

const HomePage = () => {
    setAttrThemeMode();
    const {darkMode} = useAppSelector(state => state.themeChanger)
    useEffect(() => {

    }, [darkMode]);
    return (
        <div className={css.wrap}>
            <div className={css.wrapMain}>
                <Header/>
                {/*<Outlet/>*/}
                <MoviesPage/>
                <Footer/>
            </div>
        </div>
    );
};

export {HomePage};