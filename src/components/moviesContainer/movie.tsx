import {IMovie} from "../../interfaces";
import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, genres, popularity, poster_path, title, release_date} = movie;
    console.log(movie);

    return (
        <div>
            Movie
        </div>
    );
};

export {Movie};