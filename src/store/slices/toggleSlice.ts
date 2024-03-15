import {createSlice} from "@reduxjs/toolkit";


const currentMode = JSON.parse(localStorage.getItem('darkMode'));
interface IStateTheme {
   darkMode: boolean
}

const initialState: IStateTheme = {
     darkMode: currentMode !== null ? currentMode: false
};

const darkModeSlice = createSlice( {
  name: 'darkModeSlice',
    initialState,
    reducers:{
      changeDarkMode: (state, action) => {
          state.darkMode = !state.darkMode;
      }
    }
})

const {reducer: themeReducer, actions} = darkModeSlice;

const themeActions = {
    ...actions

}
export {
    themeReducer,
    themeActions
}


