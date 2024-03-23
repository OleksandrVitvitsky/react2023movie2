import {configureStore} from "@reduxjs/toolkit";
import {genreReducer, moviesReducer, themeReducer, moviesPaginationReducer, movieDetailsReducer} from "./slices";



const store = configureStore({
    reducer: {
        movies: moviesReducer,
        themeChanger: themeReducer,
        genres: genreReducer,
        moviesPagination: moviesPaginationReducer,
        movieDetails: movieDetailsReducer
    }
})

export {
    store
}