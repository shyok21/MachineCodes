import { Equipement, Service } from "./additionalSupport";
import { Vehicle } from "./vehicle";

export class Reservation {
    resarvationId: string;
    vehicleBarCode: string;
    vehicle: Vehicle;
    userId: string;
    isInsuranceApplied: boolean;

    equipements: Equipement[];
    services: Service[];

    startTime: number;
    endTime: number;

    constructor(vehicle: Vehicle, userId: string, returnDate: number) {
        this.vehicleBarCode = vehicle.getBarCode();
        this.vehicle = vehicle;
        this.userId = userId;
        this.resarvationId = Math.round(Math.floor(Math.random()*100000000)) + "";
        this.isInsuranceApplied = false;

        this.equipements = [];
        this.services = [];

        this.startTime = 0;
        this.endTime = returnDate;
    }

    getId() {
        return this.resarvationId;
    }

    applyInsurance() {
        this.isInsuranceApplied = true;
    }

    addEquipments(equipement: Equipement) {
        this.equipements.push(equipement);
    }

    addServices(service: Service) {
        this.services.push(service);
    }

    
}