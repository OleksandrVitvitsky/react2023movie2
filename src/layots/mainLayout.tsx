import {Outlet} from "react-router-dom";
import {Filter, Footer, Header} from "../components";
import css from './mainLayout.module.css'



const MainLayout = () => {
    return (
        <div>
            <Outlet/>
        </div>

    );
};


export {
    MainLayout
};