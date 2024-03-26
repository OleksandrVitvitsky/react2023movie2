import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";

import {IGenre, IMovie, IPagination,} from "../../interfaces";
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
const getByGenre = createAsyncThunk<IPagination<IMovie>, { currentPage: number, genre: IGenre }>(
    'moviesSlice/getByGenre',
    async ({currentPage, genre}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(currentPage.toString(), genre.id.toString());
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const search = createAsyncThunk<IPagination<IMovie>, { currentPage: number, searchText: string }>(
    'moviesSlice/search',
    async ({currentPage, searchText}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.search(currentPage.toString(), searchText);
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
        reducers: {
            setResponce: (state, action) => {
                const {page, total_pages, total_results, results} = action.payload;
                state.page = page;
                state.results = results;
                state.total_pages = total_pages;
                state.total_results = total_results;
            }
        },
        extraReducers: builder =>
            builder

                .addMatcher(isFulfilled(getAll, getByGenre, search), (state, action) => {
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
    getByGenre,
    search
}
export {
    moviesReducer,
    moviesActions
}



