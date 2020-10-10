import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { Theatre } from '../models/theatre';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  addTheatre(theatre: Theatre): Observable<Theatre> {
    let url = "http://localhost:7070/movie_app/v1/theatres";
    return this.httpClient.post<Theatre>(url, theatre);
  }

  getAllTheatres(): Observable<Theatre[]> {
    let url = "http://localhost:7070/movie_app/v1/theatres";
    return this.httpClient.get<Theatre[]>(url);
  }

  addMovie(movie: Movie) {
    let url = "http://localhost:7070/movie_app/v1/movies";
    return this.httpClient.post(url, movie);
  }
}
