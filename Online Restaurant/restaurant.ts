import { Rating } from "./rating";

export class Restaurant {
    name: string;
    pinCodes: string[];
    foodName: string;
    price: number;
    quantity: number;
    ratings: Rating[];

    constructor(name: string, pinCodes: string[], foodName: string, price: number, quantity: number) {
        this.name = name;
        this.pinCodes = [...pinCodes];
        this.foodName = foodName;
        this.price = price;
        this.quantity = quantity;
        this.ratings = [];
        console.log(`Restaurant ${this.name} Registered!`);
    }

    getName() {
        return this.name;
    }
    
    getPrice() {
        return this.price;
    }

    getRating() {
        const totalRate = this.ratings.reduce((a, b) => a + b.getRating(), 0);
        return totalRate / this.ratings.length;
    }

    getFoodName() {
        return this.foodName;
    }

    getPinCodes() {
        return this.pinCodes;
    }

    addRating(rate: number, comment?: string) {
        this.ratings.push(new Rating(rate, comment));
    }

    updateQuantity(quantity: number) {
        this.quantity += quantity;
    }
}