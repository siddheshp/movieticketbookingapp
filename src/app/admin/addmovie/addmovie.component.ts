import { Router } from '@angular/router';
import { AdminService } from './../../services/admin.service';
import { Theatre } from './../../models/theatre';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  movie = new Movie();
  theatreList: Theatre[];

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    //get theatre list, adminservice
    this.adminService.getAllTheatres().subscribe(theatres => {
      this.theatreList = theatres;
    }, err => alert(JSON.stringify(err)));
  }

  addMovie() {
    this.adminService.addMovie(this.movie).subscribe(result => {
      alert('Movie added');
      //navigate to admin
      this.router.navigate(['/admin']);
    }, err => alert(JSON.stringify(err)));
  }
}
