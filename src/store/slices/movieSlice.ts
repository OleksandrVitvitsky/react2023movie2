import {createSlice} from "@reduxjs/toolkit";
import {IResMovieState} from "../../interfaces";


const initialState: IResMovieState = {
    movies: IMovie[],

};
const movieSlice = createSlice(
    {
        name: 'movieSlice',
        initialState,
        reducers: {}

    }
);


const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions
    // getAll,

}
export {
    movieReducer,
    movieActions
}