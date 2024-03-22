import {AxiosError} from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovie, IPagination,} from "../../interfaces";
import {movieService} from "../../services";


const initialState: IPagination<IMovie> = {
    page: 1,
    results: [],
    total_pages: null,
    total_results: null

};


const getAll = createAsyncThunk<IPagination<IMovie>, { currentPage: number }>(
    'movieSlice/getAll',
    async ({currentPage}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(currentPage.toString());
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



