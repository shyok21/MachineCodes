export class Order {
    foodName: string;
    quantity: number;

    constructor(foodName: string, quantity: number) {
        this.foodName = foodName;
        this.quantity = quantity;
    }
}