
import StarRatings from 'react-star-ratings'
import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren {
    rating: number
}
const StarsComponent : FC<IProps>  = ({rating}) => {
    return (
        <div>
            <StarRatings
                rating={rating}
                starRatedColor="orange"
                // changeRating={(newRating) => console.log(newRating)}
                numberOfStars={10}
                name='rating'
                starDimension='17px'
                starSpacing='1px'
            />
        </div>
    );
};

export {
    StarsComponent
};