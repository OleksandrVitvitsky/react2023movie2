import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IPagination} from "../../interfaces";
import {IRes} from "../../types";
import {movieService} from "../../services";
import {AxiosError} from "axios";
interface IStateMovieDetails {
    movieDescription: IMovie
}

const initialState: IStateMovieDetails = {
    movieDescription: null,


};

const getById = createAsyncThunk<IMovie, {id: string }> (
    'movieDetailsSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id);
            // console.log(data);
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
                    // console.log('****************************')
                    // console.log(action.payload)
                    // console.log('****************************')

                })

    }
);


const {reducer: movieDetailsReducer, actions} = movieDetailsSlice;

const  movieDetailsActions = {
    ...actions,
    getById

}
export {
    movieDetailsReducer,
    movieDetailsActions
}
