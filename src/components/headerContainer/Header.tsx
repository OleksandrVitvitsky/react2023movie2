import css from './header.module.css'
import {SearchForm} from "./searchForm";
import {ThemeToggle} from "./ThemeToggle";
import {ButtonAuthorization} from "./ButtonAuthorization";



const Header = () => {
    return (
        <div className={css.header}>
            <a href="/" className={css.logo}><span>UA</span>Movies</a>
           <div className={css.headerFlexRightContainer}>
            <SearchForm/>
            <ThemeToggle/>
            <ButtonAuthorization/>
           </div>
        </div>



    );
};

export {Header};