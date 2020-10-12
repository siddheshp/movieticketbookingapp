import { Theatre } from './../../models/theatre';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  movies: Movie[];
  theatres: Theatre[];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    //get theatre list
    this.adminService.getAllTheatres().subscribe(theatreList => {
      this.theatres = theatreList;
    }, err => alert(JSON.stringify(err)));

    //get list of movies from service
    this.adminService.getMovieList().subscribe(movieList => {
      console.log(movieList);
      this.movies = movieList;
      this.movies.forEach(m => {
        m.theatreIds = this.theatres.filter(t => m.theatreIds.includes(t.theatreId)).map(t => t.theatreName);
      })
    }, err => alert(JSON.stringify(err)));
  }

  edit(movie: Movie) {
    //navigate to edit movie, pass movieId
  }
}
