import {AxiosError} from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IResMovieState} from "../../interfaces";
import {movieService} from "../../services";



const initialState: IResMovieState = {
    page: null,
    results: [],
    total_pages: null,
    total_results: null

};


const getAll = createAsyncThunk<IResMovieState, { page: number }>(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page.toString());
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)



const movieSlice = createSlice(
    {
        name: 'movieSlice',
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addCase(getAll.fulfilled, (state, action) => {
                    const {page, total_pages, total_results, results} = action.payload;
                    state.page = page;
                    state.results = results;
                    state.total_pages = total_pages;
                    state.total_results = total_results;
                })
    }
);


const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll

}
export {
    movieReducer,
    movieActions
}