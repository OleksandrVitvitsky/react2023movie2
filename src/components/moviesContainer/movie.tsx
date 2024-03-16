import {IMovie} from "../../interfaces";
import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import css  from "./movie.module.css"
import {urls} from "../../constants";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, genres, popularity, poster_path, title, release_date} = movie;
    console.log(movie);

    const navigate = useNavigate();

    return (
        <div className={css.movieContainer} onClick={() => navigate('/movies/'+id.toString(), { state: { movie } })}>
            <img src={urls.poster.base(poster_path)} alt={title}/>
            {/*<h2>{title}</h2>*/}
            {/*<div>*/}
            {/*    <p>{release_date}</p>*/}
            {/*    <p>{genreNamesString}</p>*/}
            {/*</div>*/}
        </div>
    );
};

export {Movie};