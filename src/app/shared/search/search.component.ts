import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movies: Movie[];

  constructor(private route: ActivatedRoute,
    private customerService: CustomerService,
    private location: Location,
    private router: Router) { }

  ngOnInit(): void {
    //fetch movieName from route param, get all movies
    this.route.params.subscribe(params => {
      this.customerService.getMovieList().subscribe(movieList => {
        this.movies = movieList.filter(m => {
          return m.name.toLowerCase().indexOf(params.movieName.toLowerCase()) > -1 ? true : false;
        }, err => alert(JSON.stringify(err)));
      }, err => alert(JSON.stringify(err)))
    }, err => alert(JSON.stringify(err)));
  }

  goBack() {
    this.location.back();
  }

  details(movieId: number) {
    //navigate to movie details
    this.router.navigate([`/movie/${movieId}`]);
  }
}
