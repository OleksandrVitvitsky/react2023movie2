import {AxiosError} from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovieVideos, IVideo} from "../../interfaces";
import {movieService} from "../../services";


const initialState: IMovieVideos<IVideo> = {
    id: null,
    results:[]
};


const getVideoByMovieId = createAsyncThunk<IMovieVideos<IVideo>, {id: string }> (
    'movieVideoSlice/getVideoByMovieId',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getVideoById(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)



const movieVideoSlice = createSlice(
    {
        name: 'movieVideoSlice',
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addCase(getVideoByMovieId.fulfilled, (state, action) => {
                    const {results} = action.payload;
                    state.results = results;
                })

    }
);


const {reducer: movieVideoReducer, actions} = movieVideoSlice;

const movieVideoActions = {
    ...actions,
    getVideoByMovieId

}
export {
    movieVideoReducer,
    movieVideoActions
}



