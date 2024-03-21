import {configureStore} from "@reduxjs/toolkit";
import {paginationReducer,genreReducer, movieReducer, themeReducer} from "./slices";



const store = configureStore({
    reducer: {
        movies: movieReducer,
        themeChanger: themeReducer,
        genres: genreReducer,
        pagination: paginationReducer
    }
})

export {
    store
}