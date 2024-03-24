import {AxiosError} from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IProd_countriesInterface} from "../../interfaces";

import {countriesService} from "../../services/countriesService";
interface IState<T> {
    countries: T[]
}

const initialState: IState<IProd_countriesInterface> = {
    countries: null,

};


const getAll = createAsyncThunk<IProd_countriesInterface[]>(
    'countriesSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await countriesService.getAll();
             return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)



const countriesSlice = createSlice(
    {
        name: 'countriesSlice',
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addCase(getAll.fulfilled, (state, action) => {
                    state.countries = action.payload;

                })

    }
);


const {reducer: countriesReducer, actions} = countriesSlice;

const countriesActions = {
    ...actions,
    getAll

}
export {
    countriesReducer,
    countriesActions
}



