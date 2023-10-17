import { Order } from "./order";

export class User {
    name: string;
    gender: string;
    phoneNumber: string;
    pinCode: string;
    orders: Order[];

    constructor(name: string, gender: string, phoneNumber: string, pinCode: string) {
        this.name = name;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.pinCode = pinCode;
        this.orders = [];
        console.log(`User ${this.name} Registered!`);
    }

    getPhoneNumber(): string {
        return this.phoneNumber;
    }

    getPinCode() {
        return this.pinCode;
    }

    getName() {
        return this.name;
    }
}