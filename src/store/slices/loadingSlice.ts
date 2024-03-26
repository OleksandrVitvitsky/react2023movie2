import {createSlice} from "@reduxjs/toolkit";



interface IStateDataLoading {
    dataLoaded: boolean
}

const initialState: IStateDataLoading = {
    dataLoaded: false
};

const DataLoadingSlice = createSlice( {
    name: 'DataLoadingSlice',
    initialState,
    reducers:{
        setDataLoaded: (state, action) => {
            state.dataLoaded = action.payload;
        }
    }
})

const {reducer: dataLoadingReducer, actions} = DataLoadingSlice;

const  dataLoadingActions = {
    ...actions

}
export {
    dataLoadingReducer,
    dataLoadingActions
}

