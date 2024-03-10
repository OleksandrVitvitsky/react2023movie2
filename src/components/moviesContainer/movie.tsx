import {IMovie} from "../../interfaces";
import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {

    return (
        <div>
            Movie
        </div>
    );
};

export {Movie};