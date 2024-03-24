import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";

import {IMovie, IPagination,} from "../../interfaces";
import {movieService} from "../../services";


const initialState: IPagination<IMovie> = {
    page: 1,
    results: [],
    total_pages: null,
    total_results: null

};


const getAll = createAsyncThunk<IPagination<IMovie>, { currentPage: number }>(
    'moviesSlice/getAll',
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
const getByYear = createAsyncThunk<IPagination<IMovie>, { year: number }>(
    'moviesSlice/getByYear',
    async ({year}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByYear(year.toString());
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const moviesSlice = createSlice(
    {
        name: 'moviesSlice',
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                // .addCase(getAll.fulfilled, (state, action) => {
                //     const {page, total_pages, total_results, results} = action.payload;
                //     state.page = page;
                //     state.results = results;
                //     state.total_pages = total_pages;
                //     state.total_results = total_results;
                // })
                .addMatcher(isFulfilled(getAll,getByYear), (state,action) => {
                        const {page, total_pages, total_results, results} = action.payload;
                        state.page = page;
                        state.results = results;
                        state.total_pages = total_pages;
                        state.total_results = total_results;
                })


    }
);


const {reducer: moviesReducer, actions} = moviesSlice;

const moviesActions = {
    ...actions,
    getAll,
    getByYear
}
export {
    moviesReducer,
    moviesActions
}



