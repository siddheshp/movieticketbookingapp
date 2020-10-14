import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';
import { BookingRequest } from '../models/booking-request';
import { Movie } from '../models/movie';
import { Theatre } from '../models/theatre';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getBookings(customerId: number) {
    let url = `http://localhost:7070/movie_app/v1/customers/${customerId}/bookings`;
    return this.httpClient.get<Booking[]>(url);
  }
  
  bookMovie(booking: BookingRequest) {
    let url = "http://localhost:7070/movie_app/v1/bookings";
    return this.httpClient.post(url, booking);
  }

  constructor(private httpClient: HttpClient) { }

  getMovieList(): Observable<Movie[]> {
    let url = "http://localhost:7070/movie_app/v1/movies";
    return this.httpClient.get<Movie[]>(url);
  }

  getMovie(id: number): Observable<Movie> {
    let url = "http://localhost:7070/movie_app/v1/movies";
    return this.httpClient.get<Movie>(`${url}/${id}`);
  }

  getAllTheatres(): Observable<Theatre[]> {
    let url = "http://localhost:7070/movie_app/v1/theatres";
    return this.httpClient.get<Theatre[]>(url);
  }
}
