import {configureStore} from "@reduxjs/toolkit";
import {genreReducer, movieReducer, themeReducer, moviePaginationReducer} from "./slices";



const store = configureStore({
    reducer: {
        movies: movieReducer,
        themeChanger: themeReducer,
        genres: genreReducer,
        moviePagination: moviePaginationReducer
    }
})

export {
    store
}