import {configureStore} from "@reduxjs/toolkit";
import {
    genreReducer,
    moviesReducer,
    themeReducer,
    moviesPaginationReducer,
    movieDetailsReducer,
    countriesReducer, castsReducer, dataLoadingReducer, movieVideoReducer
} from "./slices";





const store = configureStore({
    reducer: {
        movies: moviesReducer,
        themeChanger: themeReducer,
        genres: genreReducer,
        moviesPagination: moviesPaginationReducer,
        movieDetails: movieDetailsReducer,
        countries: countriesReducer,
        casts: castsReducer,
        dataLoadingReducer,
        movieVideos: movieVideoReducer
    }
})

export {
    store
}