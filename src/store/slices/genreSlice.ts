import {AxiosError} from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IGenre, IGenres} from "../../interfaces";
import {genreService} from "../../services";


const initialState: IGenres<IGenre> = {
    genres: []
};


const getAll = createAsyncThunk<IGenres<IGenre>>(
    'movieSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)



const genreSlice = createSlice(
    {
        name: 'genreSlice',
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addCase(getAll.fulfilled, (state, action) => {
                    const {genres} = action.payload;
                    state.genres = genres;


                })

    }
);


const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    ...actions,
    getAll

}
export {
    genreReducer,
    genreActions
}



