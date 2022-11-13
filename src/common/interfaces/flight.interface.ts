import { ICapital } from "./capital.interface";
import { IPassenger } from "./passenger.interface";

export interface IFlight extends Document {

    pilot: string;
    airplane: string;
    destinationCity: string;
    flightDate: Date;
    passengers: IPassenger[];
    /*capital: ICapital[];*/
}