import css from "./homePage.module.css";
import {Filter, Footer, Header} from "../components";
import {Outlet} from "react-router-dom";
import {MoviesPage} from "./moviesPage";

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