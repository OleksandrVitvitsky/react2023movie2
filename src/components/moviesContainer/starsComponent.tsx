
import StarRatings from 'react-star-ratings'
import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren {
    rating: number
    size: string
    numberOfStars: number
}
const StarsComponent : FC<IProps>  = ({rating, size,numberOfStars}) => {
    return (
        <div>
            <StarRatings
                rating={rating}
                starRatedColor="orange"
                // changeRating={(newRating) => console.log(newRating)}
                numberOfStars={numberOfStars}
                name='rating'
                starDimension={size+`px`}
                starSpacing='1px'
            />
        </div>
    );
};

export {
    StarsComponent
};