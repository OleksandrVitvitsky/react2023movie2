import {useAppSelector} from "../../hooks/useAppSelector";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


import {GenreWrapperComponent} from "../genreWrapperContainer";

import css from './filter.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import {moviesPaginationActions} from "../../store";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {IGenre} from "../../interfaces";
const Filter = () => {
    const dispatch = useAppDispatch();
    const {genres: genresList} = useAppSelector(state => state.genres)
    const {darkMode } = useAppSelector(state => state.themeChanger)
    const navigate = useNavigate();
    const handleNavLinkGenreClick = (genreSearch:IGenre):void => {
         
        dispatch(moviesPaginationActions.setCurrentPage(1))
        navigate('/movies', { state: { genreSearch } });
    }
    const [value, setValue] = React.useState<IGenre>();

    const handleChange = (event: React.SyntheticEvent, newValue: IGenre) => {
        setValue(newValue);
        handleNavLinkGenreClick(newValue)
        // console.log(newValue)
        // dispatch(moviesPaginationActions.setCurrentPage(1))
    };
    const bgcolorBox:string = !darkMode ? 'background.paper' : '#22272b';
    const textcolorBox:string = !darkMode ? 'primary.main':'common.white' ;
    return (
<div>
        <Box sx={{ maxWidth: { xs: 320, sm: 3500}, bgcolor: bgcolorBox, color : textcolorBox}}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                {genresList.map(genre =>
                    // <NavLink to={'/movies'} onClick={handleNavLinkGenreClick} state={{genreSearch: genre}}>
                        <Tab sx={{

                    bgcolor: bgcolorBox,
                    color : textcolorBox
                }}
                             label={genre.name} value={genre} />
                    // </NavLink>
                )}
                {/*<Tab label="Item Two" />*/}
                {/*<Tab label="Item Three" />*/}
                {/*<Tab label="Item Four" />*/}
                {/*<Tab label="Item Five" />*/}
                {/*<Tab label="Item Six" />*/}
                {/*<Tab label="Item Seven" />*/}
            </Tabs>
        </Box>
</div>
        // {genresList.map(genre =>
        // <NavLink to={'/movies'} className={css.item}
        //          onClick={handleNavLinkGenreClick} state={{genreSearch: genre}}> {
                //     <GenreWrapperComponent
                //         key={genre.id}
                //         name={genre.name}/>}
                //
                // </NavLink>
            // )}


    );
};

export {Filter};