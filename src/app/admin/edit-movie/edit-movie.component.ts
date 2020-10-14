import { AdminService } from './../../services/admin.service';
import { Movie } from './../../models/movie';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Theatre } from 'src/app/models/theatre';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movie: Movie;
  theatres: Theatre[];

  constructor(private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {
    //get theatre list
    this.adminService.getAllTheatres().subscribe(theatreList => {
      this.theatres = theatreList;
      console.log(this.theatres);
    }, err => alert(JSON.stringify(err)));

    //movie/edit/:id
    //fetch route param, get movie details using movie id, and populate form
    this.route.params.subscribe(params => {
      this.adminService.getMovie(params.id).subscribe(result => {
        this.movie = result;
      }, err => alert(JSON.stringify(err)));
    }, err => alert(JSON.stringify(err)));
  }

  updateMovie() {
    this.adminService.updateMovie(this.movie).subscribe(result => {
      alert('Movie updated successfully');
      //navigate to dashboard
      this.router.navigate(['/admin']);
    }, err => alert(JSON.stringify(err)));
  }
}
