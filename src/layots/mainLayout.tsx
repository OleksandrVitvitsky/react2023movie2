import {Outlet} from "react-router-dom";
import {Filter, Footer, Header} from "../components";
import css from './MainLayot.module.css'
import {setAttrThemeMode} from "../hoc/globalFunc";
import {useAppSelector} from "../hooks/useAppSelector";
import {useEffect} from "react";



const MainLayout = () => {
    setAttrThemeMode();
    const {darkMode} = useAppSelector(state => state.themeChanger)
    useEffect(() => {

    }, [darkMode]);
    return (
        <div className={css.wrap}>
            <div className={css.wrapMain}>
                <Header/>
                <Filter/>
                <Outlet/>
                <Footer/>
            </div>
        </div>
    );
};


export {
    MainLayout
};