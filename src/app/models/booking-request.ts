export interface BookingRequest {
    bookingDate: Date;
    noOfSeats: number;
    customerId: number;
    theatreId: number;
    movieId: number;
    name?: string;
    ticketPrice?: number;
}
