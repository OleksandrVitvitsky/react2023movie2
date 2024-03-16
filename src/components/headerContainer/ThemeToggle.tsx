import {styled} from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


// import css from './themeToggle.module.css'
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {themeActions} from "../../store";

const MaterialUISwitch = styled(Switch)(({theme}) => ({
    width: 62,
    height: 34,
    padding: 7,
    marginLeft: 5,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
                // backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='15' viewBox='0 0 20 20'%3E%3Cstyle%3E.a%7Bfill:%23F0C419;%7D%3C/style%3E%3Cg fill='none'%3E%3Cg class='a'%3E%3Cpath d='M7.5 0C7.4 0 7.3 0.1 7.3 0.3L7.3 1.8C7.3 1.9 7.4 2 7.5 2 7.6 2 7.8 1.9 7.8 1.8L7.8 0.3C7.8 0.1 7.6 0 7.5 0Z'/%3E%3Cpath d='M7.5 13C7.4 13 7.3 13.1 7.3 13.3L7.3 14.8C7.3 14.9 7.4 15 7.5 15 7.6 15 7.8 14.9 7.8 14.8L7.8 13.3C7.8 13.1 7.6 13 7.5 13Z'/%3E%3Cpath d='M14.8 7.3L13.3 7.3C13.1 7.3 13 7.4 13 7.5 13 7.6 13.1 7.8 13.3 7.8L14.8 7.8C14.9 7.8 15 7.6 15 7.5 15 7.4 14.9 7.3 14.8 7.3Z'/%3E%3Cpath d='M2 7.5C2 7.4 1.9 7.3 1.8 7.3L0.3 7.3C0.1 7.3 0 7.4 0 7.5 0 7.6 0.1 7.8 0.3 7.8L1.8 7.8C1.9 7.8 2 7.6 2 7.5Z'/%3E%3Cpath d='M11.6 3.7C11.6 3.7 11.7 3.7 11.7 3.6L13.2 2.2C13.3 2.1 13.3 1.9 13.2 1.8 13.1 1.7 12.9 1.7 12.8 1.8L11.4 3.3C11.3 3.4 11.3 3.5 11.4 3.6 11.4 3.7 11.5 3.7 11.6 3.7Z'/%3E%3Cpath d='M3.3 11.4L1.8 12.8C1.7 12.9 1.7 13.1 1.8 13.2 1.9 13.2 1.9 13.3 2 13.3 2.1 13.3 2.1 13.2 2.2 13.2L3.6 11.7C3.7 11.6 3.7 11.5 3.6 11.4 3.5 11.3 3.4 11.3 3.3 11.4Z'/%3E%3Cpath d='M11.7 11.4C11.6 11.3 11.5 11.3 11.4 11.4 11.3 11.5 11.3 11.6 11.4 11.7L12.8 13.2C12.9 13.2 12.9 13.3 13 13.3 13.1 13.3 13.1 13.2 13.2 13.2 13.3 13.1 13.3 12.9 13.2 12.8L11.7 11.4Z'/%3E%3Cpath d='M2.2 1.8C2.1 1.7 1.9 1.7 1.8 1.8 1.7 1.9 1.7 2.1 1.8 2.2L3.3 3.6C3.3 3.7 3.4 3.7 3.4 3.7 3.5 3.7 3.6 3.7 3.6 3.6 3.7 3.5 3.7 3.4 3.6 3.3L2.2 1.8Z'/%3E%3Cpath d='M12.6 5.4C12.6 5.4 12.7 5.5 12.8 5.5 12.8 5.5 12.9 5.5 12.9 5.5L13.6 5.2C13.7 5.1 13.8 5 13.7 4.9 13.7 4.7 13.5 4.7 13.4 4.7L12.7 5C12.6 5.1 12.5 5.2 12.6 5.4Z'/%3E%3Cpath d='M2.4 9.6C2.4 9.5 2.2 9.5 2.1 9.5L1.4 9.8C1.3 9.9 1.2 10 1.3 10.1 1.3 10.2 1.4 10.3 1.5 10.3 1.5 10.3 1.6 10.3 1.6 10.3L2.3 10C2.4 9.9 2.5 9.8 2.4 9.6Z'/%3E%3Cpath d='M13.6 9.7L12.9 9.4C12.8 9.4 12.7 9.4 12.6 9.6 12.5 9.7 12.6 9.8 12.7 9.9L13.4 10.2C13.5 10.2 13.5 10.2 13.5 10.2 13.6 10.2 13.7 10.1 13.8 10 13.8 9.9 13.7 9.8 13.6 9.7Z'/%3E%3Cpath d='M1.4 5.3L2.1 5.6C2.1 5.6 2.1 5.6 2.2 5.6 2.3 5.6 2.4 5.5 2.4 5.4 2.5 5.3 2.4 5.2 2.3 5.1L1.6 4.8C1.4 4.8 1.3 4.8 1.2 5 1.2 5.1 1.3 5.2 1.4 5.3Z'/%3E%3Cpath d='M10 12.7C9.9 12.6 9.8 12.5 9.6 12.6 9.5 12.6 9.5 12.8 9.5 12.9L9.8 13.6C9.8 13.7 9.9 13.7 10 13.7 10.1 13.7 10.1 13.7 10.1 13.7 10.3 13.7 10.3 13.5 10.3 13.4L10 12.7Z'/%3E%3Cpath d='M5.3 2.5C5.3 2.5 5.3 2.5 5.4 2.4 5.5 2.4 5.5 2.2 5.5 2.1L5.2 1.4C5.1 1.3 5 1.2 4.9 1.3 4.7 1.3 4.7 1.5 4.7 1.6L5 2.3C5.1 2.4 5.2 2.5 5.3 2.5Z'/%3E%3Cpath d='M5.4 12.6C5.3 12.5 5.2 12.6 5.1 12.7L4.8 13.4C4.8 13.6 4.8 13.7 5 13.8 5 13.8 5 13.8 5.1 13.8 5.2 13.8 5.3 13.7 5.3 13.6L5.6 12.9C5.6 12.8 5.6 12.7 5.4 12.6Z'/%3E%3Cpath d='M9.7 2.4C9.8 2.4 9.8 2.4 9.9 2.3L10.2 1.6C10.2 1.4 10.2 1.3 10 1.2 9.9 1.2 9.8 1.3 9.7 1.4L9.4 2.1C9.4 2.2 9.4 2.3 9.6 2.4 9.6 2.4 9.6 2.4 9.7 2.4Z'/%3E%3C/g%3E%3Ccircle cx='7.5' cy='7.5' r='5' class='a'/%3E%3Ccircle cx='7.5' cy='7.5' r='3.8' fill='%23EDE21B'/%3E%3C/g%3E%3C/svg%3E%0A")`;
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

const ThemeToggle = () => {
    const dispatch = useAppDispatch();
    const {darkMode} = useAppSelector(state => state.themeChanger);
const handleChecked = () => {
    dispatch(themeActions.changeDarkMode(!darkMode));
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
}

    return (
        <div>
            <FormGroup style={{marginLeft: 10}}>
                <FormControlLabel
                    control={<MaterialUISwitch sx={{m: 1}} defaultChecked/>}
                    label=""/>
            </FormGroup>



            {/*<label>*/}
            {/*    <input type='checkbox' onClick={handleChecked}/>*/}
            {/*</label>*/}
            {/*     <span className={css.switch}>*/}
            {/*        <span className={css.handle}/>*/}


            {/*     </span>*/}
        </div>
    );
};

export {ThemeToggle};