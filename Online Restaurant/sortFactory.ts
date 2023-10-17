import { Restaurant } from "./restaurant";
import { DefaultStrategy, PriceBasedStrategy, RatingBasedStrategy } from "./sortStrategy"

export const sortFactory = (sortStrategy: string, restaurants: Restaurant[]) => {
    if(sortStrategy === 'price')
        return new PriceBasedStrategy(restaurants);
    else if(sortStrategy === 'rating')
        return new RatingBasedStrategy(restaurants);
    return new DefaultStrategy(restaurants);
}