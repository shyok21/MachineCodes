import { Order } from "./order";
import { RestaurantManager } from "./restaurantManager";
import { User } from "./user";

export class UserManager {
    users: User[];
    loggedInUser?: User;
    restaurantManager: RestaurantManager;

    constructor(restaurantManager: RestaurantManager) {
        this.users = [];
        this.loggedInUser = undefined;
        this.restaurantManager = restaurantManager;
    }

    registerUser(name: string, gender: string, phoneNumber: string, pinCode: string) {
        this.users.push(new User(name, gender, phoneNumber, pinCode));
    }

    loginUser(phoneNumber: string) {
        const user: User | null = this.users.filter(user => user.getPhoneNumber() === phoneNumber)[0];
        if(!user)
            throw new Error(`${phoneNumber} is unregistered!`);
        this.loggedInUser = user;
        console.log(`User ${this.loggedInUser.getName()} Logged In Successfully!`);
    }

    rateRestaurant(restaurantName: string, rating: number, comment?: string) {
        this.restaurantManager.rateRestaurant(restaurantName, rating, comment);
    }

    placeOrder(restaurantName: string, quantity: number) {
        this.restaurantManager.placeOrder(restaurantName, quantity);
        this.loggedInUser?.orders.push(new Order(restaurantName, quantity));
    }

    getRestaurants(sortOption: string) {
        if(!this.loggedInUser)
            throw new Error("User is not Logged In");
        this.restaurantManager.showRestaurant(sortOption, this.loggedInUser.getPinCode());
    }
}