import css from './header.module.css'


const Header = () => {
    return (
        <div className={css.header}>
            <a href="/" className={css.logo}><span>UA</span>Movies</a>
        </div>


    );
};

export {Header};