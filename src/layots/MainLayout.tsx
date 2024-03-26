import {useEffect} from "react";
import {Outlet} from "react-router-dom";

import {FooterComponent, Header} from "../components";
import {setAttrThemeMode} from "../hoc/globalFunc";
import {useAppSelector} from "../hooks/useAppSelector";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {genreActions} from "../store";

import css from './MainLayot.module.css'

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
                <FooterComponent/>
            </div>
        </div>
    );
};


export {
    MainLayout
};