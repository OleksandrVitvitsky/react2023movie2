import {createSlice} from "@reduxjs/toolkit";
import {IResMovieState} from "../../interfaces";


const initialState: IResMovieState = {
    page: null,
    results: [],
    total_pages: null,
    total_results: null

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