import {IMovie} from "../../interfaces";
import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";
import {StarsComponent} from "./starsComponent";

import css  from "./movie.module.css"
import {urls} from "../../constants";


interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, genres, popularity, poster_path, title, release_date,original_title,vote_average} = movie;
    console.log(movie);

    const navigate = useNavigate();

    const languageEnTitle = true;

    return (
        <div className={css.movieContainer} onClick={() => navigate('/movies/'+id.toString(), { state: { movie } })}>
            <img src={urls.poster.base(poster_path)} alt={title}/>



            <div className={css.movieTitleContainer}>
                {/*переробити потім вивід заголовку*/}
                <StarsComponent  key={id} rating={vote_average}/>
                {languageEnTitle && <div className={css.movieTitle}>{title}</div>}
                <div className={`${css.movieTitle} ${css.movieTitleOrig}`}>{original_title}</div>

            </div>
            {/*<div>*/}
            {/*    <p>{release_date}</p>*/}
            {/*    <p>{genreNamesString}</p>*/}
            {/*</div>*/}
        </div>
    );
};

export {Movie};