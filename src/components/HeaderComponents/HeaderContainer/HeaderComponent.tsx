import css from './HeaderComponent.module.css'

import {SearchFormComponent} from "../SearchContainer";
import {ThemeToggle} from "../ThemeChangerContainer";
import {AuthorizationComponent} from "../AuthContainer";

const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.headerFlexLeftContainer}>
                <a href="/" className={css.logo}><span>UA</span>-Movies</a>
                <SearchFormComponent/>
            </div>
            <div className={css.headerFlexRightContainer}>
                <ThemeToggle/>
                <AuthorizationComponent/>
            </div>
        </div>
    );
};

export {Header};