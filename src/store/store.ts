import {configureStore} from "@reduxjs/toolkit";
import {
    genreReducer,
    moviesReducer,
    themeReducer,
    moviesPaginationReducer,
    movieDetailsReducer,
    countriesReducer, castsReducer
} from "./slices";




const store = configureStore({
    reducer: {
        movies: moviesReducer,
        themeChanger: themeReducer,
        genres: genreReducer,
        moviesPagination: moviesPaginationReducer,
        movieDetails: movieDetailsReducer,
        countries: countriesReducer,
        casts: castsReducer
    }
})

export {
    store
}