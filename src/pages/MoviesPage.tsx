import {FilterComponent, MoviePagination, Movies} from "../components";

const MoviesPage = () => {
    return (
        <div>
            <FilterComponent/>
            <Movies/>
            <MoviePagination/>
        </div>
    );
};

export {MoviesPage};