import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  moreDetails(){
    this.router.navigate([`movie/${this.movie.movieId}`]);
  }

  viewShows(){
    this.router.navigate([`movie/${this.movie.movieId}/shows`]);
  }
}
