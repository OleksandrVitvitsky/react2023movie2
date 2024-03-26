import {AxiosError} from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovie} from "../../interfaces";
import {movieService} from "../../services";

interface IStateMovieDetails {
    movieDescription: IMovie
}

const initialState: IStateMovieDetails = {
    movieDescription: null,
};

const getById = createAsyncThunk<IMovie, { id: string }>(
    'movieDetailsSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const movieDetailsSlice = createSlice(
    {
        name: 'movieDetailsSlice',
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addCase(getById.fulfilled, (state, action) => {
                    state.movieDescription = action.payload;
                })
    }
);


const {reducer: movieDetailsReducer, actions} = movieDetailsSlice;

const movieDetailsActions = {
    ...actions,
    getById

}
export {
    movieDetailsReducer,
    movieDetailsActions
}
