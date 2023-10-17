import { Vehicle } from "./vehicle";

interface IObjectKeys {
    [key: string]: Vehicle;
}

export class VehicleInventory {
    vehicles: Vehicle[];
    vehicleByBarCode: IObjectKeys;

    constructor(vehicles: Vehicle[]) {
        this.vehicles = [...vehicles];
        this.vehicleByBarCode = Object.fromEntries(vehicles.map(vehicle => [vehicle.getBarCode(), vehicle]));
    }

    getAvailableVehicles() {
        return this.vehicles.filter(vehicle => vehicle.isAvailable()).map(vehicle => `${vehicle.barCode}: ${vehicle.name}`)
    }

    getVehicleByBarCode(barCode: string): Vehicle | undefined {
        const vehicle: Vehicle | undefined = this.vehicleByBarCode[barCode];
        if(!vehicle) {
            console.log(`Vehicle dont exists!`);
        }

        return vehicle;
    }
}