import { CustomerService } from './../../services/customer.service';
import { Movie } from 'src/app/models/movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  ongoingMovies: Movie[];
  upcomingMovies: Movie[];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    //get list of movies
    this.customerService.getMovieList().subscribe(movies => {
      this.ongoingMovies = movies.filter(movie=> movie.statusId=== 2);
      this.upcomingMovies = movies.filter(movie=> movie.statusId=== 1);
    }, err => alert(JSON.stringify(err)));
  }

}
