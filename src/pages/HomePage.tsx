import css from "../layots/mainLayout.module.css";
import {Filter, Footer, Header} from "../components";
import {Outlet} from "react-router-dom";

const HomePage = () => {
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

export {HomePage};