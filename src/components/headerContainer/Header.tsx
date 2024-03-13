import css from './header.module.css'
import {SearchForm} from "./searchForm";


const Header = () => {
    return (
        <div className={css.header}>
            <a href="/" className={css.logo}><span>UA</span>Movies</a>
            <SearchForm/>
        </div>



    );
};

export {Header};