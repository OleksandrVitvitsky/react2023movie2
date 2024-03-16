import css from './header.module.css'
import {SearchForm} from "./searchForm";
import {ThemeToggle} from "./ThemeToggle";


const Header = () => {
    return (
        <div className={css.header}>
            <a href="/" className={css.logo}><span>UA</span>Movies</a>
            <SearchForm/>
            <ThemeToggle/>
             <ButtonAutorization/>
        </div>



    );
};

export {Header};