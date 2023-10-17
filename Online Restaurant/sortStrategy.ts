import { Restaurant } from "./restaurant";

class SortStrategy {
    restaurants: Restaurant[];

    constructor(restaurants: Restaurant[]) {
        this.restaurants = [...restaurants];
    }

    sort() {};
}

class PriceBasedStrategy extends SortStrategy {
    constructor(restaurants: Restaurant[]) {
        super(restaurants);
    }

    sort() {
        return this.restaurants.sort((a: Restaurant, b: Restaurant) => {
            return a.getPrice() > b.getPrice() ? 1: -1
        })
    }
}

class RatingBasedStrategy extends SortStrategy {
    constructor(restaurants: Restaurant[]) {
        super(restaurants);
    }

    sort() {
        return this.restaurants.sort((a: Restaurant, b: Restaurant) => {
            return a.getRating() > b.getRating() ? 1: -1
        })
    }
}

class DefaultStrategy extends SortStrategy {
    constructor(restaurants: Restaurant[]) {
        super(restaurants);
    }

    sort() {
        return this.restaurants;
    }
}

export { PriceBasedStrategy, RatingBasedStrategy, DefaultStrategy, SortStrategy };