import {Outlet} from "react-router-dom";
import {Filter, Footer, Header} from "../components";
import css from './mainLayout.module.css'



const MainLayout = () => {
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