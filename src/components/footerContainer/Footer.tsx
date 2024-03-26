import css from "./footer.module.css";

const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={css.footerFlexLeftContainer}>
                <a href="/" className={css.logo}></a>
                <h3> © 2024, <span>UA</span>-Movies — твої улюблені фільми українською мовою</h3>
            </div>
            <div className={css.footerFlexRightContainer}>
                <h3><a href="https://t.me/oleksandr_vit" target={"_blank"}> Зворотній зв'язок</a></h3>
            </div>
        </div>
    );
};

export {Footer};