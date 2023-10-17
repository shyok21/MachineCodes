import { RestaurantManager } from "./restaurantManager";
import { UserManager } from "./userManager";

export class FoodKart {
    userManager: UserManager;
    restaurantManager: RestaurantManager;

    constructor() {
        this.restaurantManager = new RestaurantManager();
        this.userManager = new UserManager(this.restaurantManager);
    }

    registerUser(name: string, gender: string, phoneNumber: string, pinCode: string) {
        this.userManager.registerUser(name, gender, phoneNumber, pinCode);
    }

    loginUser(phoneNumber: string) {
        this.userManager.loginUser(phoneNumber);
    }

    registerRestaurant(name: string, pinCodes: string, foodName: string, price: number, quantity: number) {
        this.restaurantManager.register(name, pinCodes.split("/"), foodName, price, quantity);
    }

    showRestaurant(sortOption: string) {
        this.userManager.getRestaurants(sortOption);
    }

    placeOrder(restaurantName: string, quantity: number) {
        this.userManager.placeOrder(restaurantName, quantity);
    }

    createReview(restaurantName: string, rating: number, comment?: string) {
        this.userManager.rateRestaurant(restaurantName, rating, comment);
    }
}