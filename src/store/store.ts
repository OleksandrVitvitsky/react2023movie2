import {configureStore} from "@reduxjs/toolkit";
import {movieReducer, themeReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        themeChanger: themeReducer
    }
})

export {
    store
}