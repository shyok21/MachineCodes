import { Constant } from "./Constant";

export class Vehicle {
    barCode: string;
    parkingNo: number;
    name: string;
    bookingStatus: boolean;
    
    constructor(barCode: string, parkingNo: number, name: string) {
        this.barCode = barCode;
        this.parkingNo = parkingNo;
        this.bookingStatus = false;
        this.name = name;
    }

    getBarCode(): string {
        return this.barCode;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return Constant.DEFAULT_PRICE;
    };

    isAvailable(): boolean {
        return !this.bookingStatus;
    }

    bookVehicle() {
        this.bookingStatus = true;
    }

    freeVehicle() {
        this.bookingStatus = false;
    }
}

export class Cars extends Vehicle {
    constructor(barCodes: string, parkingNo: number, name: string) {
        super(barCodes, parkingNo, name);
    }

    getPrice(): number {
        return Constant.CARS_PRICE;
    };
}

export class Trucks extends Vehicle {
    constructor(barCodes: string, parkingNo: number, name: string) {
        super(barCodes, parkingNo, name);
    }

    getPrice(): number {
        return Constant.TRUCKS_PRICE;
    };
}

export class Suv extends Vehicle {
    constructor(barCodes: string, parkingNo: number, name: string) {
        super(barCodes, parkingNo, name);
    }

    getPrice(): number {
        return Constant.SUV_PRICE;
    };
}

export class Vans extends Vehicle {
    constructor(barCodes: string, parkingNo: number, name: string) {
        super(barCodes, parkingNo, name);
    }

    getPrice(): number {
        return Constant.VAN_RPICE;
    };
}

export class Bikes extends Vehicle {
    constructor(barCodes: string, parkingNo: number, name: string) {
        super(barCodes, parkingNo, name);
    }

    getPrice(): number {
        return Constant.BIKE_PRICE;
    };
}