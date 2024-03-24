import {Outlet} from "react-router-dom";
import {Filter, Footer, Header} from "../components";
import css from './MainLayot.module.css'
import {setAttrThemeMode} from "../hoc/globalFunc";
import {useAppSelector} from "../hooks/useAppSelector";
import {useEffect} from "react";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {countriesActions, genreActions} from "../store";



const MainLayout = () => {
    setAttrThemeMode();

    const dispatch = useAppDispatch();
    const {darkMode} = useAppSelector(state => state.themeChanger)

    useEffect(() => {
    }, [darkMode]);


    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [])



    return (
        <div className={css.wrap}>
            <div className={css.wrapMain}>
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </div>
    );
};


export {
    MainLayout
};