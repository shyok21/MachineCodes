import { Constant } from "./Constant"
import { Bikes, Cars, Suv, Trucks, Vans, Vehicle } from "./vehicle"

export const vehicleFactory = (vehicleType: string, barCode: string, parkingNo: number, name: string): Vehicle => {
    const serviceByVehicleType = {
        [Constant.SUV]: new Suv(barCode, parkingNo, name),
        [Constant.TRUCKS]: new Trucks(barCode, parkingNo, name),
        [Constant.CARS]: new Cars(barCode, parkingNo, name),
        [Constant.BIKES]: new Bikes(barCode, parkingNo, name),
        [Constant.VANS]: new Vans(barCode, parkingNo, name)
    }

    return serviceByVehicleType[vehicleType];
}