import { Constant } from "./Constant";
import { Log, SingletonLog } from "./log";
import { Reservation } from "./reservation";
import User from "./user";
import { Vehicle } from "./vehicle";
import { VehicleInventory } from "./vehicleInventory";

interface IObjectKeys {
    [key: string]: Reservation[];
}

export class System {
    vehicleInventory: VehicleInventory;
    reservationByUser: IObjectKeys;
    logger?: Log;

    constructor(vehicleInventory: VehicleInventory) {
        this.vehicleInventory = vehicleInventory;
        this.reservationByUser = {};
        this.logger = new SingletonLog().getInstance();
    }

    getReservedVehicleByUser(userId: string) {
        if(this.reservationByUser[userId]) {
            return this.reservationByUser[userId][0].vehicle;
        }
    }

    addReservationToUser(userId: string, vehicle: Vehicle, returnDate: number) {
        const reservation: Reservation = new Reservation(vehicle, userId, returnDate);
        if(this.reservationByUser[userId]) {
            this.reservationByUser[userId].push(reservation);
        } else {
            this.reservationByUser[userId] = [reservation];
        }
    }

    vehicleReservation(user: User, vehicleBarCode: string, returnDate: number) {
        const userId: string = user.id;
        const vehicle: Vehicle | undefined = this.vehicleInventory.getVehicleByBarCode(vehicleBarCode);
        if(!vehicle) {
            throw new Error("Can't find the Vehicle");
        }

        vehicle.bookVehicle()
        this.addReservationToUser(userId, vehicle, returnDate);
        user.getNotification(`Your booking for ${vehicle.getName()} for ${returnDate} is successful!`);
        this.logger?.log(`${userId} has booked ${vehicle.getBarCode()}: ${vehicle.getName()} for ${returnDate} days!`);

    }

    cancelReservation(user: User, reservationId: string) {
        const userId: string = user.id;
        const updatedReservations = this.reservationByUser[userId].filter((reservation: Reservation) => reservation.getId() !== reservationId);
        this.reservationByUser[userId] = [...updatedReservations];
        user.getNotification(`Your booking reference ${reservationId} is cancelled!`);
    }

    returnVehicle(user: User, returnDate: number) {
        const userId: string = user.id;
        const expectedReturnDate: number = this.reservationByUser[userId][0].endTime;
        const lateFees = expectedReturnDate <= returnDate ? 0 : (returnDate - expectedReturnDate) * Constant.LATE_PRICE;
        let totalCost = 0;
        this.reservationByUser[userId].forEach((reservation: Reservation) => {
            totalCost = totalCost + reservation.vehicle.getPrice() + lateFees;
            reservation.vehicle.freeVehicle();
        })

        if(this.reservationByUser[userId][0].isInsuranceApplied) {
            totalCost = totalCost + Math.round((totalCost * Constant.INSURANCE_FEE_RATE) / 100);
        }

        user.getNotification(`Your Total Cost: ${totalCost}`);
        this.logger?.log(`User ${userId} returned the Vehicles! Total Cost: ${totalCost}`);
        this.reservationByUser[userId] = [];
    }
}