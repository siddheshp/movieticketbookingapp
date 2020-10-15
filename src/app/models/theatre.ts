export class Theatre{
    theatreId: number;
    theatreName: string;
    ticketPrice: number;
    cityId: number;
    movieIds: number[];
    bookingIds: number[];

    constructor(theatre? : Theatre){
        Object.assign(this, theatre);
    }
}