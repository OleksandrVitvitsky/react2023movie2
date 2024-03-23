import {createSlice} from "@reduxjs/toolkit";

interface IMoviePaginationState  {
      currentPage: number
}

const initialState: IMoviePaginationState = {
      currentPage: 1

};

const moviesPaginationSlice = createSlice( {
    name: 'moviesPaginationSlice',
    initialState,
    reducers:{
        setCurrentPage: (state,action) => {
            state.currentPage = action.payload;
        },
        goToNextPage: (state, action) => {
            state.currentPage++;
        },
        goToPrevPage: (state, action) => {
            state.currentPage--;
        }
    }
})

const {reducer: moviesPaginationReducer, actions} = moviesPaginationSlice;

const moviesPaginationActions = {
    ...actions

}
export {
    moviesPaginationReducer,
    moviesPaginationActions
}
