import {createSlice} from "@reduxjs/toolkit";

interface IMoviePaginationState  {
      currentPage: number
}

const initialState: IMoviePaginationState = {
      currentPage: 1

};

const moviePaginationSlice = createSlice( {
    name: 'moviePaginationSlice',
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

const {reducer: moviePaginationReducer, actions} = moviePaginationSlice;

const moviePaginationActions = {
    ...actions

}
export {
    moviePaginationReducer,
    moviePaginationActions
}
