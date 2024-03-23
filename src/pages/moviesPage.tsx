import {Filter, MoviePagination, Movies} from "../components";

const MoviesPage = () => {
    return (
        <div>
            <Movies/>
            <MoviePagination/>
        </div>
    );
};

export {MoviesPage};