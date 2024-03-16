import css from './ButtonAuthorazation.module.css'
const handleHeaderButtonClick = () => {

}
const ButtonAuthorization = () => {
    return (
        <div>
            <div className={css.headerButtonAuth} onClick={handleHeaderButtonClick}>Вхід</div>
        </div>
    );
};

export {ButtonAuthorization};