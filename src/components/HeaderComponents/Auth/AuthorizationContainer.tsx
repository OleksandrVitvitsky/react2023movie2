import css from './AuthorazationContainer.module.css'

const handleHeaderButtonClick = () => {

}
const AuthorizationContainer = () => {
    return (
         <div className={css.AuthorizationContainer} >

        <div className={css.headerButtonAuth} onClick={handleHeaderButtonClick}>Вхід</div>
                <div className={css.userImage}></div>
     </div>
);
};

export {AuthorizationContainer};