import { CustomerService } from './../../services/customer.service';
import { Movie } from 'src/app/models/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;

  constructor(private customerService: CustomerService,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    private router: Router) { }

  ngOnInit(): void {
    //get movie id from route param
    //get movie details from service
    this.route.params.subscribe(params => {
      this.customerService.getMovie(params.id).subscribe(result => {
        result.trailerURL = this.domSanitizer.bypassSecurityTrustResourceUrl(result.trailerURL);
        this.movie = result;
      }, err => alert(JSON.stringify(err)))
    }, err => alert(JSON.stringify(err)));
  }

  viewShows() {
    this.router.navigate([`movie/${this.movie.movieId}/shows`]);
  }
}
