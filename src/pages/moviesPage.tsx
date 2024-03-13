import {Filter, MoviePagination, Movies} from "../components";

const MoviesPage = () => {
    return (
        <div>
            <Filter/>
            <Movies/>
            <MoviePagination/>
        </div>
    );
};

export {MoviesPage};