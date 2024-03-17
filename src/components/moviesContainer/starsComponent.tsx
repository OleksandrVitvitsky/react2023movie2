
import StarRatings from 'react-star-ratings'
import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren {
    rating: number
}
const StarsComponent : FC<IProps>  = ({rating}) => {
    return (
        <div>
            <StarRatings
                rating={3.5}
                starRatedColor="orange"
                // changeRating={(newRating) => console.log(newRating)}
                numberOfStars={10}
                name='rating'
                starDimension='18px'
                starSpacing='1px'
            />
        </div>
    );
};

export {
    StarsComponent
};