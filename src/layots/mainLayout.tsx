import {Outlet} from "react-router-dom";
import {Filter, Header, MoviePagination} from "../components";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Filter/>
            <Outlet/>

        </div>
    );
};

export {
    MainLayout
};