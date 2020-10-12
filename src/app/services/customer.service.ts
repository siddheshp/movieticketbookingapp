import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getMovieList(): Observable<Movie[]> {
    let url = "http://localhost:7070/movie_app/v1/movies";
    return this.httpClient.get<Movie[]>(url);
  }

  getMovie(id: number): Observable<Movie> {
    let url = "http://localhost:7070/movie_app/v1/movies";
    return this.httpClient.get<Movie>(`${url}/${id}`);
  }
}
