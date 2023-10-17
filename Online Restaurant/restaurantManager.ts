import { Restaurant } from "./restaurant";
import { sortFactory } from "./sortFactory";

export class RestaurantManager {
    restaurants: Restaurant[];

    constructor() {
        this.restaurants = [];
    }

    register(name: string, pinCodes: string[], foodName: string, price: number, quantity: number) {
        this.restaurants.push(new Restaurant(name, pinCodes, foodName, price, quantity));
    }

    rateRestaurant(restaurantName: string, rating: number, comment?: string) {
        const restaurant: Restaurant | null = this.restaurants.filter(restaurant => restaurant.getName() === restaurantName)[0];
        if(!restaurant)
            throw new Error(`${restaurantName} can't found!`);
        restaurant.addRating(rating, comment);
        console.log("Rating Added!");
    }

    showRestaurant(sortStrategy: string, userPinCode: string) {
        const r = sortFactory(
            sortStrategy, 
            this.restaurants
                .filter(restaurant => restaurant.getPinCodes().includes(userPinCode))
        )
        .sort()
        console.log(userPinCode);
        r.forEach(restaurant => 
            console.log(`Restaurant: ${restaurant.getName()}\tFood: ${restaurant.getFoodName()}\tPrice: ${restaurant.getPrice()}\tRating: ${restaurant.getRating()}`)
        );
    }

    placeOrder(restaurantName: string, quantity: number) {
        const restaurant: Restaurant | null = this.restaurants.filter(restaurant => restaurant.getName() === restaurantName)[0];
        if(!restaurant)
            throw new Error(`${restaurantName} can't found!`);
        if(quantity > restaurant.quantity) {
            console.log("Cannot Place Order");
            return;
        }
        restaurant.quantity -= quantity;
        console.log("Order Placed!");
    }    
}