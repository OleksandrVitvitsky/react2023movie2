
import css from './themeToggle.module.css'
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {themeActions} from "../../store";

const ThemeToggle = () => {
    const dispatch = useAppDispatch();
    const {darkMode} = useAppSelector(state => state.themeChanger);
const handleChecked = () => {
    dispatch(themeActions.changeDarkMode(!darkMode));
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
}

    return (
        <div>
            <label>
                <input type='checkbox' onClick={handleChecked}/>
            </label>
                 <span className={css.switch}>
                    <span className={css.handle}>
                    </span>

                 </span>
        </div>
    );
};

export {ThemeToggle};