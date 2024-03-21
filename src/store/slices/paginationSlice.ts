import {createSlice} from "@reduxjs/toolkit";

interface IStatePag {
    currentButton: number,
    arrayCurrentButtons: [],
    currentPage: number
}

const initialState: IStatePag = {
    currentButton: null,
    arrayCurrentButtons: null,
    currentPage: null

};

const paginationSlice = createSlice( {
    name: 'paginationSlice',
    initialState,
    reducers:{
        setCurrentPage: (state,action) => {
            state.currentPage = action.payload;
        },
        setCurrentBottom: (state, action) => {
            state.currentButton = action.payload;
        },
        setArrayOfCurrentBottoms: (state, action)=>{
            state.arrayCurrentButtons = action.payload;
        }
    }
})

const {reducer: paginationReducer, actions} = paginationSlice;

const paginationActions = {
    ...actions

}
export {
    paginationReducer,
    paginationActions
}
