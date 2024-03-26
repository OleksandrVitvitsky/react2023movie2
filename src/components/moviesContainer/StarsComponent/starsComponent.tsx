import {FC, PropsWithChildren} from "react";

import StarRatings from 'react-star-ratings'

interface IProps extends PropsWithChildren {
    rating: number
    size: string
    numberOfStars: number
}

const StarsComponent: FC<IProps> = ({rating, size, numberOfStars}) => {
    return (
        <div>
            <StarRatings
                rating={rating}
                starRatedColor="orange"
                numberOfStars={numberOfStars}
                name='rating'
                starDimension={size + `px`}
                starSpacing='1px'
            />
        </div>
    );
};

export {
    StarsComponent
};