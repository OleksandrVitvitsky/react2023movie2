import {StarRatings} from 'react-star-ratings'

const StarsComponent = () => {
    return (
        <div>
            <StarRatings
                rating={3.5}
                starRatedColor="orange"
                // changeRating={(newRating) => console.log(newRating)}
                numberOfStars={10}
                name='rating'
                starDimension='30px'
                starSpacing='5px'
            />
        </div>
    );
};

export {
    StarsComponent
};