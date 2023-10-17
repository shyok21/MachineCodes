const prompt = require('prompt-sync')();

import { System } from "./system";
import User from "./user";
import { vehicleFactory } from "./vehicleFactory";
import { VehicleInventory } from "./vehicleInventory";
import { vehicleSuite, userSuite, equipementSuite, serviceSuite } from "./suite";
import { SingletonLog } from "./log";
import { Equipement, Service } from "./additionalSupport";

const logger = new SingletonLog().getInstance();

const users: User[] = userSuite.map(({id, name}) => new User(id, name));
const system: System = new System(
    new VehicleInventory(
        vehicleSuite.map(({barCode, parkingNo, name, type}) => 
            vehicleFactory(type, barCode, parkingNo, name))
    )
);

const equipements: Equipement[] = equipementSuite.map(({id, name, cost}) => new Equipement(id, name, cost));
const services: Service[] = serviceSuite.map(({id, name, cost}) => new Service(id, name, cost));

const showVehicles = () => {
    console.log(system.vehicleInventory.getAvailableVehicles());
}

const bookVehicle = () => {
    console.log(users.map(user => user.name));
    const userInput = +prompt('Select User index:');
    const vehicleInput = prompt('Select Vehicle index:');
    const returnDate = +prompt('Type Return Date:');
    system.vehicleReservation(users[userInput], vehicleInput, returnDate);
}

const getUserInformation = () => {
    console.log(users.map(user => user.name));
    const userInput = +prompt('Select User index:');
    console.log(system.getReservedVehicleByUser(users[userInput].id));
}

const cancelReservation = () => {
    console.log(users.map(user => user.name));
    const userInput = +prompt('Select User index:');
    const reservationInput = prompt('Select Reservation Id:');
    system.cancelReservation(users[userInput], reservationInput);
}

const showLogs = () => {
    console.log(logger?.fetch());
}

const addInsurance = () => {
    console.log(users.map(user => user.name));
    const userInput = +prompt('Select User index:');
    system.reservationByUser[userInput].forEach(reservation => reservation.applyInsurance());
}

const displayControls = () => {
    console.log('1. Show Available Vehicles');
    console.log('2. Book Vehicles');
    console.log('3. Retrieve User Information');
    console.log('4. Cancel Reservation');
    console.log('5. Show Logs');
    console.log('6. Add Insurance');
    console.log('7. Add Equipments');
    console.log('8. Add Services');
}

const main = () => {
    while(true) {
        displayControls();
        const input = +prompt('Enter Choice?');
        switch(input) {
            case 1:
                showVehicles();
                break;
            case 2:
                bookVehicle();
                break;
            case 3:
                getUserInformation();
                break;
            case 4:
                cancelReservation();
                break;
            case 5:
                showLogs();
                break;
            case 6:
                addInsurance();
                break;
            default:
                showVehicles();
        }
    }

}

main();