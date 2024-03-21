import css from "./homePage.module.css";
import {Filter, Footer, Header,} from "../components";
import {Outlet} from "react-router-dom";
import {MoviesPage} from "./moviesPage";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {useEffect} from "react";
import {genreActions, movieActions} from "../store";

const HomePage = () => {



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