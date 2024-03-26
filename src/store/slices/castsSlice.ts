import {AxiosError} from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {castsService, movieService} from "../../services";

import {ICastsInterface} from "../../interfaces/castsInterface";
import {ICast} from "../../interfaces/castInterface";

const initialState: ICastsInterface<ICast> = {
    id: null,
    cast: []

};

const getByMovieId = createAsyncThunk<ICastsInterface<ICast>, { id: string }>(
    'castsSlice/getByMovieId',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await castsService.getByMovieID(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const castsSlice = createSlice(
    {
        name: 'castsSlice',
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addCase(getByMovieId.fulfilled, (state, action) => {
                    const {cast} = action.payload;
                    state.cast = cast;
                })
    }
);


const {reducer: castsReducer, actions} = castsSlice;

const castsActions = {
    ...actions,
    getByMovieId

}
export {
    castsReducer,
    castsActions
}
